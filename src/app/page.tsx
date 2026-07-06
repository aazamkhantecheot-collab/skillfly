'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Search, 
  UserPlus, 
  CreditCard, 
  GraduationCap, 
  Briefcase, 
  ShieldCheck, 
  CheckCircle2, 
  Quote,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import styles from './Home.module.css';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import AnimatedCounter from '@/components/AnimatedCounter/AnimatedCounter';
import Typewriter from '@/components/Typewriter/Typewriter';

const LeafSVG = ({ className, style, size = 48 }: { className?: string, style?: React.CSSProperties, size?: number }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className} 
    style={{ width: size, height: size, ...style }}
  >
    <path d="M2,21C2,21 3,11 12,11C12,11 12,2 22,1C22,1 21,11 12,11C12,11 12,20 2,21Z" />
  </svg>
);

const BranchSVG = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
  <svg 
    viewBox="0 0 100 100" 
    fill="currentColor" 
    stroke="currentColor" 
    className={className} 
    style={{ ...style }}
  >
    {/* Main organic twig curves */}
    <path 
      d="M100,20 C80,25 65,40 50,45 C40,48 30,42 20,40 C15,39 10,43 5,42" 
      fill="none" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
    />
    <path 
      d="M65,30 C58,36 52,32 45,36 C40,40 38,45 32,46" 
      fill="none" 
      strokeWidth="1" 
      strokeLinecap="round" 
    />
    <path 
      d="M50,45 C45,52 38,58 30,60" 
      fill="none" 
      strokeWidth="1" 
      strokeLinecap="round" 
    />
    {/* Twig Leaf Nodes */}
    <path d="M5,42 C2,38 2,32 6,30 C8,34 8,38 5,42 Z" stroke="none" />
    <path d="M20,40 C17,35 12,33 10,37 C12,41 16,42 20,40 Z" stroke="none" />
    <path d="M32,46 C30,41 24,39 22,43 C24,47 28,48 32,46 Z" stroke="none" />
    <path d="M30,60 C27,64 22,65 19,61 C21,57 26,57 30,60 Z" stroke="none" />
    <path d="M45,36 C43,31 38,29 36,33 C38,37 42,38 45,36 Z" stroke="none" />
  </svg>
);

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeIndex, setActiveIndex] = useState(1); // Middle comment active by default

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Automated Testimonials Rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % 3);
    }, 5500); // Auto-rotate every 5.5 seconds
    return () => clearInterval(interval);
  }, [activeIndex]);

  const services = [
    {
      icon: <Search size={28} color="var(--primary)" />,
      title: "Executive & Lateral Hiring",
      desc: "Connect with high-caliber talent and specialized leaders optimized for strategic roles and cultural fit.",
      link: "/recruitment-talent-solutions"
    },
    {
      icon: <UserPlus size={28} color="var(--primary)" />,
      title: "Contract & Flexi Staffing",
      desc: "Adapt to project demands with agile, temporary workforce solutions that minimize overhead and long-term risk.",
      link: "/recruitment-talent-solutions"
    },
    {
      icon: <GraduationCap size={28} color="var(--primary)" />,
      title: "Campus Recruitment Drives",
      desc: "Bring fresh energy and cutting-edge skills into your workspace with our nationwide campus recruitment services.",
      link: "/recruitment-talent-solutions"
    },
    {
      icon: <CreditCard size={28} color="var(--primary)" />,
      title: "Payroll & HRIS Integration",
      desc: "Automate time tracking, compliance reporting, and global payroll processing with zero margin of error.",
      link: "/hr-operations-compliance"
    },
    {
      icon: <Briefcase size={28} color="var(--primary)" />,
      title: "FTE & Mass Recruitment",
      desc: "Scale entire engineering, product, operations, or support divisions efficiently with high-velocity hiring systems.",
      link: "/recruitment-talent-solutions"
    },
    {
      icon: <ShieldCheck size={28} color="var(--primary)" />,
      title: "HR Audit & Compliance Management",
      desc: "Mitigate operational risks and ensure compliance with provincial and federal labor regulations.",
      link: "/hr-operations-compliance"
    }
  ];

  const testimonials = [
    {
      quote: "Skillfly revolutionized our recruitment process. Their team sourced three critical engineering roles in under 20 days. High-quality talent with zero hassle.",
      name: "Rohan Varma",
      role: "Founder, FintechLab"
    },
    {
      quote: "Managing payroll compliance was a nightmare across four different states. Skillfly audits helped us optimize our compliance checks and save over 18% in legal costs.",
      name: "Sanya Roy",
      role: "HR Director, Zenith Retail"
    },
    {
      quote: "What sets Skillfly apart is their personalized approach. The platform is intuitive, and their consultants provided deep insights into improving our employee retention. It's modern HR for the modern workplace.",
      name: "Aditi Mehra",
      role: "Talent Acquisition Manager"
    }
  ];

  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        {/* Parallax Moving Branches (Shaded twig outlines + leaf nodes - adjusted opacities for visibility) */}
        <BranchSVG 
          className={styles.parallaxTree} 
          style={{ 
            top: '-5%', 
            right: '-6%', 
            width: '450px', 
            height: '450px', 
            color: 'rgba(70, 172, 125, 0.15)', 
            transform: `translate(${mousePos.x * -12}px, ${mousePos.y * -12}px)` 
          }} 
        />
        <BranchSVG 
          className={styles.parallaxTree} 
          style={{ 
            bottom: '-12%', 
            left: '-10%', 
            width: '380px', 
            height: '380px', 
            color: 'rgba(164, 197, 67, 0.12)', 
            transform: `translate(${mousePos.x * 15}px, ${mousePos.y * 15}px) rotate(165deg)` 
          }} 
        />

        {/* Parallax Moving Leaves */}
        <LeafSVG 
          className={styles.parallaxLeaf} 
          size={56} 
          style={{ 
            top: '20%', 
            left: '8%', 
            color: 'rgba(70, 172, 125, 0.14)', 
            transform: `translate(${mousePos.x * -25}px, ${mousePos.y * -25}px) rotate(-15deg)` 
          }} 
        />
        <LeafSVG 
          className={styles.parallaxLeaf} 
          size={42} 
          style={{ 
            top: '28%', 
            right: '12%', 
            color: 'rgba(164, 197, 67, 0.15)', 
            transform: `translate(${mousePos.x * 35}px, ${mousePos.y * 35}px) rotate(45deg)` 
          }} 
        />
        <LeafSVG 
          className={styles.parallaxLeaf} 
          size={38} 
          style={{ 
            top: '12%', 
            right: '25%', 
            color: 'rgba(70, 172, 125, 0.09)', 
            transform: `translate(${mousePos.x * -15}px, ${mousePos.y * -15}px) rotate(80deg)` 
          }} 
        />
        <LeafSVG 
          className={styles.parallaxLeaf} 
          size={36} 
          style={{ 
            top: '42%', 
            right: '30%', 
            color: 'rgba(164, 197, 67, 0.08)', 
            transform: `translate(${mousePos.x * 10}px, ${mousePos.y * 10}px) rotate(-35deg)` 
          }} 
        />
        <LeafSVG 
          className={styles.parallaxLeaf} 
          size={44} 
          style={{ 
            top: '55%', 
            left: '4%', 
            color: 'rgba(164, 197, 67, 0.11)', 
            transform: `translate(${mousePos.x * -18}px, ${mousePos.y * -18}px) rotate(30deg)` 
          }} 
        />
        <LeafSVG 
          className={styles.parallaxLeaf} 
          size={40} 
          style={{ 
            top: '60%', 
            right: '5%', 
            color: 'rgba(70, 172, 125, 0.13)', 
            transform: `translate(${mousePos.x * 22}px, ${mousePos.y * 22}px) rotate(-75deg)` 
          }} 
        />
        <LeafSVG 
          className={styles.parallaxLeaf} 
          size={38} 
          style={{ 
            top: '72%', 
            left: '20%', 
            color: 'rgba(70, 172, 125, 0.09)', 
            transform: `translate(${mousePos.x * -10}px, ${mousePos.y * -10}px) rotate(45deg)` 
          }} 
        />
        <LeafSVG 
          className={styles.parallaxLeaf} 
          size={48} 
          style={{ 
            bottom: '22%', 
            left: '12%', 
            color: 'rgba(164, 197, 67, 0.13)', 
            transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px) rotate(120deg)` 
          }} 
        />
        <LeafSVG 
          className={styles.parallaxLeaf} 
          size={52} 
          style={{ 
            bottom: '30%', 
            right: '8%', 
            color: 'rgba(70, 172, 125, 0.16)', 
            transform: `translate(${mousePos.x * -40}px, ${mousePos.y * -40}px) rotate(-65deg)` 
          }} 
        />

        <div className={`${styles.heroContainer} container`}>
          <div className={styles.heroContent}>
            <span className={styles.badge}>Next-Gen HR Consulting</span>
            <h1 className={styles.heroTitle}>
              Maximizing Human Potential for <br />
              <span className={styles.highlight}>
                <Typewriter words={["Organisation Growth", "Corporate Scaling", "Team Excellence", "Business Success"]} />
              </span>
            </h1>
            <p className={styles.heroSubtitle}>
              Connecting Great Talent with Great Companies. Skillfly HR Solutions offers expert HR consulting, talent acquisition, and workforce planning to boost operational efficiency.
            </p>
            <div className={styles.heroActions}>
              <Link href="/contact-us" className="btn btn-primary">
                Get Started
                <ArrowRight size={18} style={{ marginLeft: '8px' }} />
              </Link>
              <Link href="/recruitment-talent-solutions" className="btn btn-outline">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.stats}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <ScrollReveal animation="slide-up" delay={0}>
                <h3 className={styles.statVal}>
                  <AnimatedCounter target={30} suffix="+" />
                </h3>
                <p className={styles.statLabel}>Trusted Companies</p>
              </ScrollReveal>
            </div>
            <div className={styles.statItem}>
              <ScrollReveal animation="slide-up" delay={100}>
                <h3 className={styles.statVal}>
                  <AnimatedCounter target={98} suffix="%" />
                </h3>
                <p className={styles.statLabel}>Hiring Accuracy</p>
              </ScrollReveal>
            </div>
            <div className={styles.statItem}>
              <ScrollReveal animation="slide-up" delay={200}>
                <h3 className={styles.statVal}>
                  <AnimatedCounter target={10} suffix="x" />
                </h3>
                <p className={styles.statLabel}>Faster Onboarding</p>
              </ScrollReveal>
            </div>
            <div className={styles.statItem}>
              <ScrollReveal animation="slide-up" delay={300}>
                <h3 className={styles.statVal}>
                  <AnimatedCounter target={24} suffix="/7" />
                </h3>
                <p className={styles.statLabel}>Compliance Auditing</p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Brief Section */}
      <section className={`${styles.aboutBrief} section-padding`}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutLeft}>
              <ScrollReveal animation="slide-in-left">
                <span className={styles.sectionBadge}>About Us</span>
                <h2>Who We Are</h2>
                <p>
                  Skillfly HR Solutions offers expert HR consulting, talent acquisition, and workforce planning to boost operational efficiency and meet evolving business needs. We are dedicated to providing businesses with innovative HR solutions that promote growth, drive efficiency, and create positive employee experiences.
                </p>
                <Link href="/about-us" className="btn btn-outline" style={{ marginTop: '16px' }}>
                  Read Message From Founder
                </Link>
              </ScrollReveal>
            </div>
            <div className={styles.aboutRight}>
              <div className={styles.visionCardWrapper}>
                <ScrollReveal animation="slide-in-right" delay={100}>
                  <div className={styles.visionCard}>
                    <div className={styles.visionIcon}>
                      <CheckCircle2 size={24} color="var(--primary)" />
                    </div>
                    <div>
                      <h3>Our Mission</h3>
                      <p>To provide businesses with innovative HR solutions that promote growth, drive efficiency, and create positive employee experiences.</p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
              <div className={styles.visionCardWrapper}>
                <ScrollReveal animation="slide-in-right" delay={200}>
                  <div className={styles.visionCard}>
                    <div className={styles.visionIcon}>
                      <CheckCircle2 size={24} color="var(--primary)" />
                    </div>
                    <div>
                      <h3>Our Vision</h3>
                      <p>To be the leading HR solutions provider, known for our commitment to excellence, customer-centric approach, and innovative strategies that help businesses thrive.</p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={`${styles.services} section-padding`}>
        <div className="container">
          <ScrollReveal animation="fade-in">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionBadge}>Our Services</span>
              <h2>Tailored Solutions for Your Business</h2>
              <p>From talent acquisition to payroll automation, we build workflows that handle your HR load efficiently.</p>
            </div>
          </ScrollReveal>
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <ScrollReveal key={index} animation="slide-up" delay={(index % 3) * 100}>
                <div className={styles.serviceCard}>
                  <div className={styles.serviceIcon}>{service.icon}</div>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDesc}>{service.desc}</p>
                  <Link href={service.link} className={styles.serviceLink}>
                    Read More <ArrowRight size={16} />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={`${styles.whyUs} section-padding`}>
        <div className="container">
          <div className={styles.whyGrid}>
            <div className={styles.whyLeft}>
              <ScrollReveal animation="slide-in-left">
                <span className={styles.sectionBadge}>Why Choose Skill Fly</span>
                <h2>Precisely Tailored End-To-End HR Services</h2>
                <p>
                  At SkillFly, we stand out by providing precisely tailored solutions that cater to your unique business needs. Our approach encompasses a comprehensive journey from conception to completion, ensuring that every aspect of your service is meticulously crafted to perfection.
                </p>
                <ul className={styles.whyList}>
                  <li>
                    <CheckCircle2 size={20} className={styles.listIcon} />
                    <span>Custom workflows matching startup and enterprise scales</span>
                  </li>
                  <li>
                    <CheckCircle2 size={20} className={styles.listIcon} />
                    <span>Complete labor law audit and legal risk mitigation</span>
                  </li>
                  <li>
                    <CheckCircle2 size={20} className={styles.listIcon} />
                    <span>High-performance AI candidate matchmaking technologies</span>
                  </li>
                </ul>
              </ScrollReveal>
            </div>
            <div className={styles.whyRight}>
              <ScrollReveal animation="slide-in-right">
                <div className={styles.gradientBox}>
                  <h3>Ready to scale your team?</h3>
                  <p>Reach out to our talent consultants today and get a free trial evaluation.</p>
                  <Link href="/contact-us" className="btn btn-primary" style={{ backgroundColor: 'var(--bg-white)', color: 'var(--primary)' }}>
                    Contact Our Consultants
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`${styles.testimonials} section-padding`}>
        <div className="container">
          <ScrollReveal animation="fade-in">
            <div className={styles.sectionHeader}>
              <span className={styles.badge}>Client Stories</span>
              <h2>Love from our Clients</h2>
              <p>Here is what startup founders and HR directors say about working with Skillfly.</p>
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

            <div className={styles.testimonialGrid}>
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
                    <Quote className={styles.quoteIcon} size={40} />
                    <p className={styles.quoteText}>&ldquo;{t.quote}&rdquo;</p>
                    <div className={styles.quoteAuthor}>
                      <h4 className={styles.authorName}>{t.name}</h4>
                      <span className={styles.authorRole}>{t.role}</span>
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
