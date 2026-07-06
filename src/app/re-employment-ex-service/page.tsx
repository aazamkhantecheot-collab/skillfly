'use client';

import React, { useState, useEffect } from 'react';
import PageHeader from '@/components/PageHeader/PageHeader';
import { 
  Shield, 
  Award, 
  TrendingUp, 
  Users, 
  Briefcase, 
  CheckCircle2, 
  FileText,
  Quote, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';
import styles from './ExService.module.css';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';

export default function ExServicesPlacements() {
  const [activeIndex, setActiveIndex] = useState(1); // Middle testimonial active by default

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % 3);
    }, 5500); // Auto-rotate every 5.5s
    return () => clearInterval(interval);
  }, [activeIndex]);

  const servicePrograms = [
    {
      icon: <Shield size={28} />,
      title: 'Agniveer Transition Support',
      desc: 'Enabling retiring Agniveers to transition smoothly into the private sector. We align their rigorous 4-year physical, technical, and leadership experience to match competitive startup and enterprise profiles.'
    },
    {
      icon: <Award size={28} />,
      title: 'Ex-Servicemen Placements',
      desc: 'Matching senior non-commissioned (NCOs) and commissioned officers with suitable management, operation, and executive lead positions in industries like logistics, aviation, security, and supply chain.'
    },
    {
      icon: <TrendingUp size={28} />,
      title: 'Corporate Skill Translation',
      desc: 'Converting military tasks and responsibilities (such as signals, command operations, field communication, and tactical operations) into corporate skill equivalents like Project Management, IT Ops, and HR Operations.'
    }
  ];

  const transitionOfferings = [
    {
      icon: <FileText size={24} />,
      title: 'Military Resume Re-design',
      desc: 'Translating rank structures, deployments, and technical military acronyms into a corporate-friendly, result-oriented professional resume that speaks the recruiters language.'
    },
    {
      icon: <Users size={24} />,
      title: 'Veteran Diversity Hiring',
      desc: 'Connecting corporate organizations with qualified ex-military talents to support diversity, corporate discipline, resilience, and ethical compliance within organizational ranks.'
    },
    {
      icon: <Briefcase size={24} />,
      title: 'Corporate Onboarding & Grooming',
      desc: 'Conducting customized corporate bridge programs, executive communication workshops, and role-specific technical courses to prepare veterans for office environments.'
    }
  ];

  const testimonials = [
    {
      quote: "After serving in the Indian Army, transitioning to the corporate sector felt daunting. Skillfly translated my field-logistics background into corporate Supply Chain management. I got placed in a top logistics firm in Bangalore.",
      author: "Subedar Rakesh Kumar (Retd.)",
      role: "Operations Head, LogiCorp"
    },
    {
      quote: "As an Agniveer, the transition program from Skillfly was crucial. They helped me build my resume from scratch, guided me through mock interviews, and secured my placement in a tech company as a Security Analyst.",
      author: "Amit Patel (Ex-Agniveer)",
      role: "Security Operations Analyst"
    },
    {
      quote: "Partnering with Skillfly for veteran diversity hiring has brought exceptional discipline, dedication, and execution speed to our project management teams. Their matching accuracy is top tier.",
      author: "Meera Nair",
      role: "VP of HR, Vista Global Solutions"
    }
  ];

  return (
    <div className={styles.exPage}>
      <PageHeader 
        title="Re-employment for Ex-Services" 
        description="Bridging the gap between military excellence and corporate roles. We help Veterans and Ex-Agniveers transition into high-performance careers." 
        breadcrumbPage="Ex-Services Re-employment" 
      />

      {/* Core Programs */}
      <section className={`${styles.programs} section-padding`}>
        <div className="container">
          <ScrollReveal animation="fade-in">
            <div className={styles.sectionHeader}>
              <span className={styles.badge}>Our Mission</span>
              <h2>Transition Solutions for Armed Forces</h2>
              <p>
                Veterans and Ex-Agniveers bring unmatched discipline, leadership, and crisis-management to the table. 
                Skillfly specializes in tailoring their transition to corporate roles.
              </p>
            </div>
          </ScrollReveal>
          <div className={styles.programsGrid}>
            {servicePrograms.map((prog, idx) => (
              <ScrollReveal key={idx} animation="slide-up" delay={idx * 100}>
                <div className={styles.programCard}>
                  <div className={styles.programIcon}>{prog.icon}</div>
                  <h3>{prog.title}</h3>
                  <p>{prog.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className={styles.banner}>
        <div className="container">
          <ScrollReveal animation="scale-up">
            <div className={styles.bannerContent}>
              <h2>Bring Military Discipline and Leadership into Your Teams</h2>
              <p>Hire skilled, disciplined Ex-Servicemen and Ex-Agniveers. Fill critical operation, project management, and cyber security roles today.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Transition Framework */}
      <section className={`${styles.transition} section-padding`}>
        <div className="container">
          <div className={styles.transitionGrid}>
            <div className={styles.transitionLeft}>
              <ScrollReveal animation="slide-in-left">
                <span className={styles.badge}>Transition Framework</span>
                <h2>Dedicated Corporate Readiness Services</h2>
                <p>
                  Transitioning from defense services to corporate offices requires a tailored approach. Skillfly supports candidates with active resume modifications, profile building, and corporate culture alignment.
                </p>
                <ul className={styles.transitionList}>
                  <li>
                    <CheckCircle2 size={18} className={styles.checkIcon} />
                    <span>Agniveer placement tie-ups with leading startup platforms</span>
                  </li>
                  <li>
                    <CheckCircle2 size={18} className={styles.checkIcon} />
                    <span>Mapping defense-technical capabilities to corporate roles</span>
                  </li>
                  <li>
                    <CheckCircle2 size={18} className={styles.checkIcon} />
                    <span>Post-placement mentoring and cultural adjustment workshops</span>
                  </li>
                </ul>
              </ScrollReveal>
            </div>
            <div className={styles.transitionRight}>
              {transitionOfferings.map((offering, idx) => (
                <ScrollReveal key={idx} animation="slide-in-right" delay={idx * 100}>
                  <div className={styles.transitionCard}>
                    <div className={styles.transitionIcon}>{offering.icon}</div>
                    <div>
                      <h3>{offering.title}</h3>
                      <p>{offering.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
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
              <h2>Transitions That Inspire</h2>
              <p>Hear from former armed forces members who successfully integrated into corporate departments with Skillfly.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="scale-up" delay={150}>
            <div className={styles.carouselContainer}>
              <button 
                className={styles.navButton} 
                onClick={() => setActiveIndex(prev => (prev - 1 + 3) % 3)}
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>

              <div className={styles.testimonialsGrid}>
                {testimonials.map((t, idx) => {
                  let cardClass = styles.testimonialCard;
                  if (idx === activeIndex) {
                    cardClass += ` ${styles.activeCard} ${styles.centerCard}`;
                  } else if (idx === (activeIndex - 1 + 3) % 3) {
                    cardClass += ` ${styles.leftCard}`;
                  } else {
                    cardClass += ` ${styles.rightCard}`;
                  }

                  return (
                    <div key={idx} className={cardClass}>
                      <Quote size={40} className={styles.quoteIcon} />
                      <p className={styles.quoteText}>"{t.quote}"</p>
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
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
