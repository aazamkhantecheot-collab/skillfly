'use client';

import React, { useState } from 'react';
import PageHeader from '@/components/PageHeader/PageHeader';
import { MapPin, Mail, Phone, Send, CheckCircle2 } from 'lucide-react';
import styles from './Contact.module.css';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

    // Reset success banner after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  return (
    <div className={styles.contactPage}>
      <PageHeader 
        title="Contact Us" 
        description="We look forward to hearing from you! Reach out to us for consultation services, partner options, or queries." 
        breadcrumbPage="Contact Us" 
      />

      <section className={`${styles.content} section-padding`}>
        <div className="container">
          <div className={styles.grid}>
            {/* Contact Details Column */}
            <div className={styles.detailsCol}>
              <ScrollReveal animation="slide-in-left">
                <span className={styles.badge}>Get In Touch</span>
                <h2>Contact Details</h2>
                <p className={styles.colDesc}>
                  Have a question or looking to optimize your business's HR process? Contact us using the details below or drop a line in the form.
                </p>

                <div className={styles.cardsStack}>
                  <div className={styles.infoCard}>
                    <div className={styles.iconWrapper}>
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3>Office Address</h3>
                      <p>255 Atalpuri Colony, Opposite to Lulu Mall, Lucknow, Uttar Pradesh, India, 226002</p>
                    </div>
                  </div>

                  <div className={styles.infoCard}>
                    <div className={styles.iconWrapper}>
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3>Direct Emails</h3>
                      <p>General Connect: <a href="mailto:connect@skillfly.in">connect@skillfly.in</a></p>
                      <p>Information: <a href="mailto:info@skillfly.in">info@skillfly.in</a></p>
                      <p>Support: <a href="mailto:support@skillfly.in">support@skillfly.in</a></p>
                    </div>
                  </div>
                </div>

                {/* Embedded Google Maps location */}
                <div className={styles.mapContainer}>
                  <iframe
                    title="Skill Fly Office Location Map"
                    src="https://maps.google.com/maps?q=26.782770256905742,80.98571080230376&t=&z=16&ie=UTF8&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className={styles.mapIframe}
                  ></iframe>
                </div>
              </ScrollReveal>
            </div>

            {/* Form Column */}
            <div className={styles.formCol}>
              <ScrollReveal animation="slide-in-right">
                <div className={styles.formCard}>
                  <h3>Send Message</h3>
                  <p>Fill out the form below and our team will get back to you within 24 hours.</p>

                  {submitSuccess && (
                    <div className={styles.successBanner}>
                      <CheckCircle2 size={20} className={styles.successIcon} />
                      <span>Your message has been sent successfully! We will contact you soon.</span>
                    </div>
                  )}

                  <form onSubmit={handleFormSubmit} className={styles.form}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g. John Doe"
                        className={styles.input}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g. john@company.com"
                        className={styles.input}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="subject">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        placeholder="How can we help you?"
                        className={styles.input}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        placeholder="Detail your hiring or HR requirements..."
                        className={styles.textarea}
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary"
                      style={{ width: '100%', gap: '10px' }}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <Send size={16} />
                    </button>
                  </form>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
