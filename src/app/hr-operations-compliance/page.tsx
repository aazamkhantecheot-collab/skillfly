'use client';

import React, { useState, useEffect } from 'react';
import PageHeader from '@/components/PageHeader/PageHeader';
import { 
  CreditCard, 
  ShieldCheck, 
  Laptop, 
  Check, 
  MapPin,
  Quote,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import styles from './HrOperations.module.css';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';

export default function HrOperations() {
  const [activeIndex, setActiveIndex] = useState(1); // Middle comment active by default

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % 3);
    }, 5500); // Auto-rotate every 5.5 seconds
    return () => clearInterval(interval);
  }, [activeIndex]);

  const sections = [
    {
      title: 'Payroll & Benefits Administration',
      icon: <CreditCard size={28} />,
      items: [
        { name: 'Payroll Management', desc: 'End-to-end payroll processing to ensure timely and accurate disbursements.' },
        { name: 'Benefits & Compensation Planning', desc: 'Assistance in designing competitive salary, bonus, and perks packages.' },
        { name: 'Retirement & Pension Planning', desc: 'Guidance on retirement setups and pension schemes for long-term retention.' },
        { name: 'Expense & Reimbursements', desc: 'Automating and auditing employee expenses and reimbursement pipelines.' }
      ]
    },
    {
      title: 'Compliance & Risk Management',
      icon: <ShieldCheck size={28} />,
      items: [
        { name: 'Labor Law Compliance', desc: 'Aligning HR practices with regional statutory and labor codes.' },
        { name: 'Background Verification', desc: 'Comprehensive candidate checks to maintain workplace security.' },
        { name: 'HR Operations Auditing', desc: 'Assessing HR workflows for processing efficiency and audit readiness.' },
        { name: 'Safety & Dispute Mediation', desc: 'Mediation strategies and setups for workplace conflict resolution.' }
      ]
    },
    {
      title: 'HR Technology Implementation',
      icon: <Laptop size={28} />,
      items: [
        { name: 'HRIS Setup & Management', desc: 'Implementing unified human resource information systems.' },
        { name: 'Applicant Tracking Systems (ATS)', desc: 'Optimizing high-volume hiring and screening funnels.' },
        { name: 'Self-Service Employee Portals', desc: 'Enabling staff to view benefits, apply for leaves, and submit requests.' }
      ]
    }
  ];

  const testimonials = [
    {
      quote: "Skillfly transformed our HR operations with structured workflows and precise compliance tracking. Their support helped us avoid legal pitfalls and streamline internal processes effortlessly.",
      author: "Kavita Rao",
      role: "Head of HR"
    },
    {
      quote: "Their team has a sharp understanding of labor laws and HR regulations. We now feel confident that our organization is audit-ready and fully compliant year-round.",
      author: "Siddharth Menon",
      role: "Compliance Officer"
    },
    {
      quote: "Managing HR policies and compliance was a constant headache — until we partnered with Skillfly. Their systems, documentation, and guidance were spot on.",
      author: "Neha Verma",
      role: "Admin & HR Manager"
    }
  ];

  const locations = [
    "Singapore", "Toronto, Canada", "Sudan", "Bangalore, India", 
    "China", "New York, USA", "Frankfurt, Germany", "Sydney, Australia"
  ];

  return (
    <div className={styles.opsPage}>
      <PageHeader 
        title="HR Operations & Compliance" 
        description="Empowering organizations through insight. Build resilient, compliant, and future-ready teams." 
        breadcrumbPage="Operations & Compliance" 
      />

      {/* Operations Verticals Grid */}
      <section className={`${styles.verticals} section-padding`}>
        <div className="container">
          <div className={styles.verticalsStack}>
            {sections.map((sec, idx) => (
              <div key={idx} className={styles.secRow}>
                <div className={styles.secLeft}>
                  <ScrollReveal animation="slide-in-left">
                    <div className={styles.secIcon}>{sec.icon}</div>
                    <h2>{sec.title}</h2>
                    <p>Strengthen your business foundation with optimized, high-fidelity administrative setups.</p>
                  </ScrollReveal>
                </div>
                <div className={styles.secRight}>
                  <div className={styles.itemsGrid}>
                    {sec.items.map((item, itemIdx) => (
                      <ScrollReveal key={itemIdx} animation="slide-up" delay={itemIdx * 80}>
                        <div className={styles.itemCard}>
                          <div className={styles.itemHeader}>
                            <Check size={16} className={styles.checkIcon} />
                            <h3>{item.name}</h3>
                          </div>
                          <p>{item.desc}</p>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Connection Section */}
      <section className={`${styles.globalReach} section-padding`}>
        <div className="container">
          <div className={styles.globalGrid}>
            <div className={styles.globalLeft}>
              <ScrollReveal animation="slide-in-left">
                <span className={styles.badge}>Global Presence</span>
                <h2>Delivering Solutions With a Worldwide Reach</h2>
                <p>
                  We are globally connected, supporting multinational corporations and distributed remote teams across major business hubs. Wherever you operate, we align your HR workflows with local regulations.
                </p>
              </ScrollReveal>
            </div>
            <div className={styles.globalRight}>
              <div className={styles.locationsGrid}>
                {locations.map((loc, idx) => (
                  <ScrollReveal key={idx} animation="scale-up" delay={(idx % 4) * 80}>
                    <div className={styles.locCard}>
                      <MapPin size={18} className={styles.mapIcon} />
                      <span>{loc}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`${styles.testimonials} section-padding`}>
        <div className="container">
          <ScrollReveal animation="fade-in">
            <div className={styles.sectionHeader}>
              <span className={styles.badge}>Operational Feedback</span>
              <h2>Love From Our Clients</h2>
              <p>Our payroll automation, compliance consulting, and HRIS integrations have gained stellar feedback.</p>
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
