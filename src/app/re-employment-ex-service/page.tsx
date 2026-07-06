'use client';

import React, { useState, useEffect } from 'react';
import PageHeader from '@/components/PageHeader/PageHeader';
import { 
  ShieldCheck, 
  Award, 
  TrendingUp, 
  Target, 
  Briefcase, 
  GraduationCap, 
  Users, 
  CheckCircle2,
  Quote,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import styles from './ExService.module.css';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';

export default function ExServicemenReemployment() {
  const [activeIndex, setActiveIndex] = useState(1); // Middle comment active by default

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % 3);
    }, 5500); // Auto-rotate every 5.5 seconds
    return () => clearInterval(interval);
  }, [activeIndex]);

  const valuePropositions = [
    {
      icon: <Briefcase size={28} />,
      title: 'Corporate Placement',
      desc: 'Connecting disciplined, highly trained veterans and Agniveers with corporate partners who value leadership, structure, and execution.'
    },
    {
      icon: <Target size={28} />,
      title: 'Skill Mapping',
      desc: 'Translating military specialties, operations, logistics, and technical experience directly into matching corporate job descriptions.'
    },
    {
      icon: <GraduationCap size={28} />,
      title: 'Transition Training',
      desc: 'Structured bridge courses, resume writing workshops, and interview coaching to help veterans navigate corporate work cultures.'
    },
    {
      icon: <ShieldCheck size={28} />,
      title: 'Agniveer Pipelines',
      desc: 'Dedicated placement cells focusing on Agniveers completing their term, helping corporate India absorb high-caliber youthful leadership.'
    }
  ];

  const coreStrengths = [
    {
      icon: <Users size={24} />,
      title: 'Discipline & Leadership',
      desc: 'Ex-servicemen bring unmatched work ethics, punctuality, and crisis management skills directly into corporate team operations.'
    },
    {
      icon: <Award size={24} />,
      title: 'Proven Execution',
      desc: 'Trained to operate under high pressure. They understand standard operating procedures (SOPs) and respect project deadlines.'
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Rapid Scaling Capacity',
      desc: 'Leverage veterans to handle volume operations, security, supply chain management, and remote site management efficiently.'
    }
  ];

  const testimonials = [
    {
      quote: "Transitioning to corporate life after 15 years in defense was challenging, but Skillfly mapped my operations background to a senior Logistics Manager role at an MNC. Highly grateful.",
      author: "Col. Sandeep Dev (Retd.)",
      role: "Operations Director, LogiCorp"
    },
    {
      quote: "As an Agniveer, I wanted a clear corporate trajectory. Skillfly provided transition workshops and placed me in a Security Operations Command Center role in under a month.",
      author: "Manpreet Singh",
      role: "Security Executive, TechLabs"
    },
    {
      quote: "We partnered with Skillfly to hire veterans for our operations team. The dedication and leadership they bring to our warehouse logistics is absolutely exceptional.",
      author: "Vikram Malhotra",
      role: "VP of Operations, RetailGiant"
    }
  ];

  return (
    <div className={styles.exPage}>
      <PageHeader 
        title="Re-employment for Ex-Servicemen" 
        description="Bridging military excellence and corporate operations. Dedicated transition pipelines and placements for veterans and Agniveers." 
        breadcrumbPage="Ex-Servicemen Re-employment" 
      />

      {/* Core Solutions */}
      <section className={`${styles.models} section-padding`}>
        <div className="container">
          <ScrollReveal animation="fade-in">
            <div className={styles.sectionHeader}>
              <span className={styles.badge}>Our Programs</span>
              <h2>Veteran & Agniveer Placements</h2>
              <p>We build tailored recruitment and transition pathways to help ex-servicemen integrate seamlessly into corporate roles.</p>
            </div>
          </ScrollReveal>
          <div className={styles.modelsGrid}>
            {valuePropositions.map((prop, idx) => (
              <ScrollReveal key={idx} animation="slide-up" delay={idx * 100}>
                <div className={styles.modelCard}>
                  <div className={styles.modelIcon}>{prop.icon}</div>
                  <h3>{prop.title}</h3>
                  <p>{prop.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Split CTA banner */}
      <section className={styles.banner}>
        <div className="container">
          <ScrollReveal animation="scale-up">
            <div className={styles.bannerContent}>
              <h2>Empowering Corporate India with Disciplined Leadership</h2>
              <p>Hire candidates with proven integrity, operational mastery, and a lifelong commitment to mission completion.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Additional Strengths / Details */}
      <section className={`${styles.extra} section-padding`}>
        <div className="container">
          <div className={styles.extraGrid}>
            <div className={styles.extraLeft}>
              <ScrollReveal animation="slide-in-left">
                <span className={styles.badge}>Why Hire Veterans</span>
                <h2>Why Corporate Teams Value Defense Talent</h2>
                <p>
                  Veterans and Agniveers are pre-trained in core competencies that are difficult to teach: accountability, emotional resilience, strategic planning, and collaborative teamwork.
                </p>
                <ul className={styles.extraList}>
                  <li>
                    <CheckCircle2 size={18} className={styles.checkIcon} />
                    <span>Strong understanding of structure and execution chain</span>
                  </li>
                  <li>
                    <CheckCircle2 size={18} className={styles.checkIcon} />
                    <span>Adaptive and trained to handle security & risk mitigations</span>
                  </li>
                  <li>
                    <CheckCircle2 size={18} className={styles.checkIcon} />
                    <span>Unmatched soft-skills and group communication dynamics</span>
                  </li>
                </ul>
              </ScrollReveal>
            </div>
            <div className={styles.extraRight}>
              {coreStrengths.map((strength, index) => (
                <div key={index} style={{ width: '100%', marginBottom: index < coreStrengths.length - 1 ? '16px' : '0' }}>
                  <ScrollReveal animation="slide-in-right" delay={index * 100}>
                    <div className={styles.extraCard}>
                      <div className={styles.extraIcon}>{strength.icon}</div>
                      <div>
                        <h3>{strength.title}</h3>
                        <p>{strength.desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`${styles.testimonials} section-padding`}>
        <div className="container">
          <ScrollReveal animation="fade-in">
            <div className={styles.sectionHeader}>
              <span className={styles.badge}>Success Stories</span>
              <h2>Voices of Transition</h2>
              <p>Discover how veterans and Agniveers found their corporate home through Skillfly HR Solutions.</p>
            </div>
          </ScrollReveal>

          <div className={styles.carouselContainer}>
            <button 
              className={styles.navButton} 
              onClick={() => setActiveIndex(prev => (prev + 2) % 3)}
              aria-label="Previous Testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            <div className={styles.testimonialsGrid}>
              {testimonials.map((t, idx) => {
                let positionClass = '';
                if (idx === activeIndex) {
                  positionClass = styles.activeCard;
                } else if (idx === (activeIndex + 2) % 3) {
                  positionClass = styles.leftCard;
                } else {
                  positionClass = styles.rightCard;
                }

                return (
                  <div 
                    key={idx} 
                    className={`${styles.testimonialCard} ${positionClass}`}
                    onClick={() => setActiveIndex(idx)}
                  >
                    <Quote className={styles.quoteIcon} size={36} />
                    <p className={styles.quoteText}>&ldquo;{t.quote}&rdquo;</p>
                    <div className={styles.quoteAuthor}>
                      <h4>{t.author}</h4>
                      <span>{t.role}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <button 
              className={styles.navButton} 
              onClick={() => setActiveIndex(prev => (prev + 1) % 3)}
              aria-label="Next Testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
