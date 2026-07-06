'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, MapPin, ArrowRight } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing to our newsletter!');
  };

  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>
        <div className={styles.topSection}>
          {/* Brand Info */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              <img src="/logo.png" alt="Skill Fly Logo" className={styles.logoImg} />
            </Link>
            <p className={styles.brandDesc}>
              Maximizing human potential for organizational growth. We connect great talent with great companies.
            </p>
            <div className={styles.socials}>
              <a href="#" className={styles.socialBtn} aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className={styles.socialBtn} aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className={styles.socialBtn} aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className={styles.socialBtn} aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Company</h4>
            <ul className={styles.linksList}>
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="/recruitment-talent-solutions">Recruitment Solutions</Link></li>
              <li><Link href="/hr-operations-compliance">HR Operations & Compliance</Link></li>
              <li><Link href="/contact-us">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className={styles.contactCol}>
            <h4 className={styles.colTitle}>Contact Us</h4>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <MapPin size={22} className={styles.contactIcon} />
                <span>255 Atalpuri Colony, Opposite to Lulu Mall, Lucknow, UP, India, 226002</span>
              </li>
              <li className={styles.contactItem}>
                <Mail size={18} className={styles.contactIcon} />
                <div className={styles.emails}>
                  <a href="mailto:connect@skillfly.in">connect@skillfly.in</a>
                  <a href="mailto:info@skillfly.in">info@skillfly.in</a>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className={styles.newsCol}>
            <h4 className={styles.colTitle}>Newsletter</h4>
            <p className={styles.newsDesc}>Subscribe to get the latest insights and industry updates.</p>
            <form className={styles.newsForm} onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                placeholder="Your email address"
                required
                className={styles.newsInput}
              />
              <button type="submit" className={styles.newsSubmit} aria-label="Subscribe">
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <p className={styles.copyright}>
            Copyright © {new Date().getFullYear()} All Rights Reserved to SkillFly.
          </p>
          <div className={styles.legalLinks}>
            <a href="#">Privacy Policy</a>
            <span className={styles.separator}>|</span>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
