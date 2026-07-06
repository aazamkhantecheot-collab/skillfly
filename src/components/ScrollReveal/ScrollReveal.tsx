'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './ScrollReveal.module.css';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'fade-in' | 'slide-up' | 'slide-in-left' | 'slide-in-right' | 'scale-up';
  delay?: number;
  duration?: number;
}

export default function ScrollReveal({
  children,
  animation = 'slide-up',
  delay = 0,
  duration = 0.8
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px'
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const style = {
    transitionDelay: `${delay}ms`,
    transitionDuration: `${duration}s`
  };

  return (
    <div
      ref={ref}
      className={`${styles.reveal} ${styles[animation]} ${isVisible ? styles.visible : ''}`}
      style={style}
    >
      {children}
    </div>
  );
}
