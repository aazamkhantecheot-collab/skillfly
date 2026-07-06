'use client';

import React from 'react';
import PageHeader from '@/components/PageHeader/PageHeader';
import { ShieldCheck, Cpu, RefreshCw, Quote } from 'lucide-react';
import styles from './About.module.css';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';

export default function AboutUs() {
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
                
                <h2 style={{ marginBottom: '24px' }}>Message From Our Founder</h2>

                <div className={styles.quoteWrapper}>
                  <Quote size={32} className={styles.founderQuoteIcon} />
                  {paragraphs.map((pText, pIdx) => (
                    <p key={pIdx} className={styles.founderText}>
                      {pText}
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
