'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import styles from './PageHeader.module.css';

interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumbPage: string;
}

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
    <path d="M5,42 C2,38 2,32 6,30 C8,34 8,38 5,42 Z" stroke="none" />
    <path d="M20,40 C17,35 12,33 10,37 C12,41 16,42 20,40 Z" stroke="none" />
    <path d="M32,46 C30,41 24,39 22,43 C24,47 28,48 32,46 Z" stroke="none" />
    <path d="M30,60 C27,64 22,65 19,61 C21,57 26,57 30,60 Z" stroke="none" />
    <path d="M45,36 C43,31 38,29 36,33 C38,37 42,38 45,36 Z" stroke="none" />
  </svg>
);

export default function PageHeader({ title, description, breadcrumbPage }: PageHeaderProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className={styles.section}>
      {/* Integrated Parallax Leaves inside PageHeader */}
      <BranchSVG 
        className={styles.parallaxTree} 
        style={{ 
          top: '-10%', 
          right: '-4%', 
          width: '280px', 
          height: '280px', 
          color: 'rgba(70, 172, 125, 0.08)', 
          transform: `translate(${mousePos.x * -10}px, ${mousePos.y * -10}px)` 
        }} 
      />
      <LeafSVG 
        className={styles.parallaxLeaf} 
        size={32} 
        style={{ 
          top: '20%', 
          left: '6%', 
          color: 'rgba(164, 197, 67, 0.1)', 
          transform: `translate(${mousePos.x * 18}px, ${mousePos.y * 18}px) rotate(45deg)` 
        }} 
      />
      <LeafSVG 
        className={styles.parallaxLeaf} 
        size={36} 
        style={{ 
          bottom: '25%', 
          right: '8%', 
          color: 'rgba(70, 172, 125, 0.08)', 
          transform: `translate(${mousePos.x * -12}px, ${mousePos.y * -12}px) rotate(-35deg)` 
        }} 
      />

      <div className={`${styles.container} container`}>
        <div className={styles.content}>
          <nav className={styles.breadcrumbs} aria-label="Breadcrumbs">
            <Link href="/" className={styles.crumbLink}>Home</Link>
            <ChevronRight size={14} className={styles.arrow} />
            <span className={styles.crumbActive}>{breadcrumbPage}</span>
          </nav>
          <h1 className={styles.title}>{title}</h1>
          {description && <p className={styles.desc}>{description}</p>}
        </div>
      </div>
    </section>
  );
}
