'use client';

import React, { useState, useEffect } from 'react';
import PageHeader from '@/components/PageHeader/PageHeader';
import { 
  Users, 
  Clock, 
  Award, 
  TrendingUp, 
  Globe2, 
  GraduationCap, 
  UserCheck, 
  CheckCircle2,
  Quote,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import styles from './Recruitment.module.css';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';

export default function RecruitmentSolutions() {
  const [activeIndex, setActiveIndex] = useState(1); // Middle comment active by default

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % 3);
    }, 5500); // Auto-rotate every 5.5 seconds
    return () => clearInterval(interval);
  }, [activeIndex]);

  const hiringModels = [
    {
      icon: <Users size={28} />,
      title: 'Permanent Staffing',
      desc: 'End-to-end recruitment services to source, screen, and place dedicated full-time professionals aligned with your corporate values and objectives.'
    },
    {
      icon: <Clock size={28} />,
      title: 'Contract Staffing',
      desc: 'Flexible workforce hiring to meet short-term coverages, seasonal workflow demands, or project-based scaling requirements without long-term liabilities.'
    },
    {
      icon: <Award size={28} />,
      title: 'Executive Search',
      desc: 'Dedicated headhunting solutions focused on identifying and hiring senior leadership talents, C-suite executives, and highly specialized key technical heads.'
    },
    {
      icon: <TrendingUp size={28} />,
      title: 'Volume Hiring',
      desc: 'Specialized mass recruitment processes that scale quickly to source and onboard multiple candidates efficiently while keeping quality thresholds high.'
    }
  ];

  const extraServices = [
    {
      icon: <Globe2 size={24} />,
      title: 'Remote Hiring Solutions',
      desc: 'Designed for modern distributed work environments. Recruit, evaluate, and onboard high-skilled talent from anywhere across the globe.'
    },
    {
      icon: <GraduationCap size={24} />,
      title: 'Campus Recruitment Programs',
      desc: 'Connecting you with emerging potential from premium universities through structured campus hiring drives, internship programs, and graduate trainings.'
    },
    {
      icon: <UserCheck size={24} />,
      title: 'Talent Assessments',
      desc: 'Scientific technical and functional skill checks. Evaluate cognitive capacity, role-specific competencies, personality traits, and culture fit.'
    }
  ];

  const testimonials = [
    {
      quote: "Skillfly helped us close critical positions in record time. The candidates were not only qualified but also aligned with our company culture. A game-changer for our HR strategy.",
      author: "Ritika Sharma",
      role: "HR Manager"
    },
    {
      quote: "Their recruitment process is streamlined and data-driven. We received curated profiles that made hiring efficient and stress-free. Highly recommended!",
      author: "Anil Verma",
      role: "Talent Acquisition Lead"
    },
    {
      quote: "We partnered with Skillfly for niche tech hiring, and the results were outstanding. They truly understand specialized talent requirements.",
      author: "Priya Khanna",
      role: "COO"
    }
  ];

  return (
    <div className={styles.recPage}>
      <PageHeader 
        title="Recruitment & Talent Solutions" 
        description="Finding the right fit for your future. Tailored recruitment models to build capable, high-performing teams." 
        breadcrumbPage="Recruitment Solutions" 
      />

      {/* Core Hiring Models */}
      <section className={`${styles.models} section-padding`}>
        <div className="container">
          <ScrollReveal animation="fade-in">
            <div className={styles.sectionHeader}>
              <span className={styles.badge}>Hiring Models</span>
              <h2>Core Staffing Solutions</h2>
              <p>We source top-tier talent matching your organizational workflow needs, from project contracts to senior executives.</p>
            </div>
          </ScrollReveal>
          <div className={styles.modelsGrid}>
            {hiringModels.map((model, idx) => (
              <ScrollReveal key={idx} animation="slide-up" delay={idx * 100}>
                <div className={styles.modelCard}>
                  <div className={styles.modelIcon}>{model.icon}</div>
                  <h3>{model.title}</h3>
                  <p>{model.desc}</p>
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
              <h2>Building High-Performance Teams With The Right People</h2>
              <p>Get access to a qualified pool of candidates. Save hours of sourcing and focus on scaling your business operations.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Additional Services */}
      <section className={`${styles.extra} section-padding`}>
        <div className="container">
          <div className={styles.extraGrid}>
            <div className={styles.extraLeft}>
              <ScrollReveal animation="slide-in-left">
                <span className={styles.badge}>Value Additions</span>
                <h2>Next-Gen Hiring Services for Modern Workplaces</h2>
                <p>
                  Our specialized services go beyond matching resumes. We utilize automated processes, remote-work integration, and comprehensive psychometric/cognitive tests to guarantee high quality.
                </p>
                <ul className={styles.extraList}>
                  <li>
                    <CheckCircle2 size={18} className={styles.checkIcon} />
                    <span>Robust screening mechanisms reducing turnover rates</span>
                  </li>
                  <li>
                    <CheckCircle2 size={18} className={styles.checkIcon} />
                    <span>Tailored university alignment pipelines</span>
                  </li>
                  <li>
                    <CheckCircle2 size={18} className={styles.checkIcon} />
                    <span>Interactive and validated technical assessments</span>
                  </li>
                </ul>
              </ScrollReveal>
            </div>
            <div className={styles.extraRight}>
              {extraServices.map((service, index) => (
                <div key={index} style={{ width: '100%', marginBottom: index < extraServices.length - 1 ? '16px' : '0' }}>
                  <ScrollReveal animation="slide-in-right" delay={index * 100}>
                    <div className={styles.extraCard}>
                      <div className={styles.extraIcon}>{service.icon}</div>
                      <div>
                        <h3>{service.title}</h3>
                        <p>{service.desc}</p>
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
              <h2>Check What Our Satisfied Clients Said</h2>
              <p>Our recruitment solutions have helped startups and large-scale enterprises find game-changing talent.</p>
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
