'use client';

import React, { useState, useEffect } from 'react';
import PageHeader from '@/components/PageHeader/PageHeader';
import { ShieldCheck, Cpu, RefreshCw, Quote, Volume2, VolumeX } from 'lucide-react';
import styles from './About.module.css';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';

export default function AboutUs() {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [tokens, setTokens] = useState<{ start: number; end: number; globalIdx: number; sentenceIdx: number }[]>([]);
  
  interface WordNode {
    word: string;
    globalIdx: number;
    sentenceIdx: number;
  }
  interface SentenceNode {
    words: WordNode[];
    sentenceIdx: number;
  }
  interface ParagraphNode {
    sentences: SentenceNode[];
    paragraphIdx: number;
  }

  const [docStructure, setDocStructure] = useState<ParagraphNode[]>([]);
  const [activeWordIdx, setActiveWordIdx] = useState<number | null>(null);
  const [activeSentenceIdx, setActiveSentenceIdx] = useState<number | null>(null);

  const values = [
    {
      icon: <RefreshCw size={28} />,
      title: 'Optimization & Adjustment',
      desc: 'We believe in continuous improvement, refining our approach based on performance metrics and feedback to consistently exceed expectations.'
    },
    {
      icon: <Cpu size={28} />,
      title: 'Ethical Compliance',
      desc: 'Integrity and compliance are at the heart of our operations. We maintain absolute transparency and adhere to all labor regulations.'
    },
    {
      icon: <ShieldCheck size={28} />,
      title: 'Customer-Centric Execution',
      desc: 'Our processes are built around the unique requirements of our clients, ensuring a highly tailored journey from start to completion.'
    }
  ];

  const paragraphs = [
    `I am Amar Singh Rathore, and it is with great pride that I introduce you to our journey and vision at Skillfly HR Solutions. With a background as the former Director of MSME (IEDUP) and a lifelong commitment to entrepreneurship, I have consistently strived to create opportunities that fuel growth, innovation, and sustainable development.`,
    `Skillfly HR Solutions was founded on the belief that talent is our nation’s greatest resource. My vision is to harness this potential and create meaningful employment opportunities that empower individuals while driving organizational success. By channeling and maximizing human potential, we aim to provide our clients with talent solutions that not only fit their immediate needs but also contribute to their long-term growth and resilience.`,
    `Throughout my journey, I have witnessed the profound impact of matching the right people with the right opportunities. At Skillfly, we are committed to ensuring that each placement is not only a job but a path to personal and professional growth. Our goal is to enable people to thrive, support organizations in their mission, and contribute to the broader vision of a more prosperous, resourceful, and resilient economy.`
  ];

  const fullText = paragraphs.join(' ');

  // Compute character ranges for sentence & word tokens
  useEffect(() => {
    const pNodes: ParagraphNode[] = [];
    const wordTokens: { word: string; start: number; end: number; globalIdx: number; sentenceIdx: number }[] = [];
    
    let absoluteCharCount = 0;
    let globalWordCounter = 0;
    let globalSentenceCounter = 0;

    paragraphs.forEach((pText, pIdx) => {
      // Split paragraph into sentences, keeping punctuation
      const sentences = pText.match(/[^.!?]+[.!?]+(?:\s+|$)/g) || [pText];
      const sNodes: SentenceNode[] = [];

      sentences.forEach((sText) => {
        // Split sentence into words & whitespace
        const words = sText.split(/(\s+)/);
        const wNodes: WordNode[] = [];

        words.forEach((w) => {
          const start = absoluteCharCount;
          const end = start + w.length;
          absoluteCharCount = end;

          if (w.trim().length > 0) {
            const tokenIdx = globalWordCounter++;
            wordTokens.push({
              word: w,
              start,
              end,
              globalIdx: tokenIdx,
              sentenceIdx: globalSentenceCounter
            });

            wNodes.push({
              word: w,
              globalIdx: tokenIdx,
              sentenceIdx: globalSentenceCounter
            });
          } else {
            // Whitespace nodes are preserved in layout but not tokenized
            wNodes.push({
              word: w,
              globalIdx: -1,
              sentenceIdx: globalSentenceCounter
            });
          }
        });

        sNodes.push({
          words: wNodes,
          sentenceIdx: globalSentenceCounter
        });

        globalSentenceCounter++;
      });

      pNodes.push({
        sentences: sNodes,
        paragraphIdx: pIdx
      });

      // Account for paragraph space character if joined by space
      absoluteCharCount += 1;
    });

    setTokens(wordTokens);
    setDocStructure(pNodes);
  }, []);

  // Handle Text-to-Speech
  const toggleSpeech = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      if (isSpeaking) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
        setActiveWordIdx(null);
        setActiveSentenceIdx(null);
      } else {
        // ALWAYS cancel any existing speech to prevent conflicting voices overlapping
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(fullText);
        
        // Find a male voice
        const voices = window.speechSynthesis.getVoices();
        
        // Prioritize David/Microsoft local voices as they reliably support onboundary events (highlighting)
        // Cloud voices (like Google UK/US) sometimes do not fire onboundary, causing the "no highlight" issue.
        const maleVoice = voices.find(v => {
          const nameLower = v.name.toLowerCase();
          return nameLower.includes('david') || nameLower.includes('mark') || (nameLower.includes('microsoft') && nameLower.includes('male'));
        }) || voices.find(v => {
          const nameLower = v.name.toLowerCase();
          return v.localService && (nameLower.includes('male') || nameLower.includes('english m'));
        }) || voices[0];

        if (maleVoice) {
          utterance.voice = maleVoice;
        }

        utterance.pitch = 0.82; // Deeper manly pitch
        utterance.rate = 0.90;  // Professional speed

        utterance.onboundary = (event) => {
          if (event.name === 'word') {
            const charIndex = event.charIndex;
            const match = tokens.find(t => charIndex >= t.start && charIndex < t.end);
            if (match) {
              setActiveWordIdx(match.globalIdx);
              setActiveSentenceIdx(match.sentenceIdx);
            }
          }
        };

        utterance.onend = () => {
          setIsSpeaking(false);
          setActiveWordIdx(null);
          setActiveSentenceIdx(null);
        };
        utterance.onerror = () => {
          setIsSpeaking(false);
          setActiveWordIdx(null);
          setActiveSentenceIdx(null);
        };

        setIsSpeaking(true);
        window.speechSynthesis.speak(utterance);
      }
    }
  };

  // Initialize voices and cancel speech on unmount
  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.getVoices(); // Force load voices early
    }
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  return (
    <div className={styles.aboutPage}>
      <PageHeader 
        title="About Us" 
        description="Learn about our mission, vision, core values, and the vision of our founder in transforming organizational operations." 
        breadcrumbPage="About Us" 
      />

      {/* Intro Section */}
      <section className={`${styles.intro} section-padding`}>
        <div className="container">
          <div className={styles.introGrid}>
            <div className={styles.introLeft}>
              <ScrollReveal animation="slide-in-left">
                <span className={styles.badge}>Who We Are</span>
                <h2>Empowering Businesses with Strategic Talent Solutions</h2>
                <p>
                  Skillfly HR Solutions offers expert HR consulting, talent acquisition, and workforce planning to boost operational efficiency and meet evolving business needs. 
                </p>
                <p>
                  We believe that human talent is an organization's most valuable asset. By combining deep industry expertise with modern technology and customized processes, we enable companies of all sizes—from high-growth startups to established enterprises—to streamline their HR workloads and focus on what they do best.
                </p>
              </ScrollReveal>
            </div>
            <div className={styles.introRight}>
              <div style={{ width: '100%', marginBottom: '20px' }}>
                <ScrollReveal animation="slide-in-right" delay={100}>
                  <div className={styles.visionCard}>
                    <h3>Our Mission</h3>
                    <p>To provide businesses with innovative HR solutions that promote growth, drive efficiency, and create positive employee experiences.</p>
                  </div>
                </ScrollReveal>
              </div>
              <div style={{ width: '100%' }}>
                <ScrollReveal animation="slide-in-right" delay={200}>
                  <div className={styles.visionCard}>
                    <h3>Our Vision</h3>
                    <p>To be the leading HR solutions provider, known for our commitment to excellence, customer-centric approach, and innovative strategies that help businesses thrive.</p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className={`${styles.values} section-padding`}>
        <div className="container">
          <ScrollReveal animation="fade-in">
            <div className={styles.sectionHeader}>
              <span className={styles.badge}>Our Principles</span>
              <h2>The Core Values That Drive Us</h2>
              <p>We work under strict standards to deliver optimal results for our partners and candidates.</p>
            </div>
          </ScrollReveal>
          <div className={styles.valuesGrid}>
            {values.map((val, idx) => (
              <ScrollReveal key={idx} animation="slide-up" delay={idx * 100}>
                <div className={styles.valueCard}>
                  <div className={styles.valueIcon}>{val.icon}</div>
                  <h3>{val.title}</h3>
                  <p>{val.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Message Section */}
      <section className={`${styles.founder} section-padding`}>
        <div className="container">
          <div className={styles.founderGrid}>
            <div className={styles.founderImageContainer}>
              <ScrollReveal animation="slide-in-left">
                <div className={styles.founderCard}>
                  <div className={styles.avatarWrapper}>
                    <img src="/founder.jpg" alt="Amar Singh Rathore - Founder" className={styles.founderImg} />
                  </div>
                  <h3>Amar Singh Rathore</h3>
                  <p className={styles.founderTitle}>Founder, Skillfly HR Solutions</p>
                  <span className={styles.founderTag}>Former Director, MSME (IEDUP)</span>
                </div>
              </ScrollReveal>
            </div>
            <div className={styles.founderContent}>
              <ScrollReveal animation="slide-in-right">
                <span className={styles.badge}>Our Leader</span>
                
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap', marginBottom: '24px' }}>
                  <h2 style={{ margin: 0 }}>Message From Our Founder</h2>
                  <button 
                    className={styles.speechBtn} 
                    onClick={toggleSpeech}
                    aria-label={isSpeaking ? "Stop voice synthesis reader" : "Start voice synthesis reader"}
                  >
                    {isSpeaking ? <VolumeX size={18} /> : <Volume2 size={18} />}
                    <span>{isSpeaking ? 'Stop Audio' : 'Listen Message'}</span>
                  </button>
                </div>

                <div className={styles.quoteWrapper}>
                  <Quote size={32} className={styles.founderQuoteIcon} />
                  {docStructure.map((pNode) => (
                    <p key={pNode.paragraphIdx} className={styles.founderText}>
                      {pNode.sentences.map((sNode) => {
                        const isSentenceActive = sNode.sentenceIdx === activeSentenceIdx;
                        
                        return (
                          <span 
                            key={sNode.sentenceIdx} 
                            className={isSentenceActive ? styles.activeSentence : ''}
                          >
                            {sNode.words.map((wNode, wIdx) => {
                              if (wNode.globalIdx === -1) {
                                return wNode.word; // whitespace
                              }
                              const isWordActive = wNode.globalIdx === activeWordIdx;
                              return (
                                <span 
                                  key={wIdx} 
                                  className={isWordActive ? styles.activeWord : ''}
                                >
                                  {wNode.word}
                                </span>
                              );
                            })}
                          </span>
                        );
                      })}
                    </p>
                  ))}
                  <div className={styles.signatureBlock}>
                    <p className={styles.signatureName}>Amar Singh Rathore</p>
                    <p className={styles.signatureTitle}>Founder, Skillfly HR Solutions</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
