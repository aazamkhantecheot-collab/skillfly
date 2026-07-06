'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
  const [isStuck, setIsStuck] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsStuck(true);
      } else {
        setIsStuck(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  }, [pathname]);

  const isServicesActive = pathname === '/recruitment-talent-solutions' || pathname === '/hr-operations-compliance' || pathname === '/re-employment-ex-service';

  return (
    <header className={`${styles.header} ${isStuck ? styles.stuck : ''}`}>
      <div className={`${styles.container} container`}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <img src="/logo.png" alt="Skill Fly Logo" className={styles.logoImg} />
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <ul className={styles.navList}>
            <li>
              <Link href="/" className={`${styles.navLink} ${pathname === '/' ? styles.activeLink : ''}`}>
                Home
              </Link>
            </li>
            
            {/* Services Dropdown */}
            <li className={styles.dropdown}>
              <span className={`${styles.navLink} ${isServicesActive ? styles.activeLink : ''}`}>
                Services
                <ChevronDown size={14} className={styles.dropdownIcon} />
              </span>
              <ul className={styles.dropdownMenu}>
                <li>
                  <Link 
                    href="/recruitment-talent-solutions" 
                    className={`${styles.dropdownLink} ${pathname === '/recruitment-talent-solutions' ? styles.dropdownLinkActive : ''}`}
                  >
                    Recruitment & Talent Solutions
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/hr-operations-compliance" 
                    className={`${styles.dropdownLink} ${pathname === '/hr-operations-compliance' ? styles.dropdownLinkActive : ''}`}
                  >
                    HR Operations & Compliance
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/re-employment-ex-service" 
                    className={`${styles.dropdownLink} ${pathname === '/re-employment-ex-service' ? styles.dropdownLinkActive : ''}`}
                  >
                    Re-employment for Ex-Services
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link href="/about-us" className={`${styles.navLink} ${pathname === '/about-us' ? styles.activeLink : ''}`}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className={`${styles.navLink} ${pathname === '/contact-us' ? styles.activeLink : ''}`}>
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        {/* CTA Button */}
        <div className={styles.ctaWrapper}>
          <Link href="/contact-us" className="btn btn-primary btn-sm">
            Connect Now
            <ArrowUpRight size={16} style={{ marginLeft: '4px' }} />
          </Link>
        </div>

        {/* Mobile Toggle Menu */}
        <button
          className={styles.mobileMenuToggle}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`${styles.mobileDrawer} ${isMobileMenuOpen ? styles.mobileDrawerOpen : ''}`}>
        <ul className={styles.mobileNavList}>
          <li>
            <Link href="/" className={`${styles.mobileNavLink} ${pathname === '/' ? styles.mobileActiveLink : ''}`}>
              Home
            </Link>
          </li>
          
          {/* Mobile Services Accordion */}
          <li className={styles.mobileDropdown}>
            <button 
              className={styles.mobileDropdownToggle} 
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
            >
              Services
              <ChevronDown 
                size={18} 
                className={`${styles.mobileDropdownIcon} ${isMobileServicesOpen ? styles.mobileDropdownIconOpen : ''}`} 
              />
            </button>
            <ul className={`${styles.mobileSubMenu} ${isMobileServicesOpen ? styles.mobileSubMenuOpen : ''}`}>
              <li>
                <Link 
                  href="/recruitment-talent-solutions" 
                  className={`${styles.mobileSubNavLink} ${pathname === '/recruitment-talent-solutions' ? styles.mobileSubActiveLink : ''}`}
                >
                  Recruitment & Talent Solutions
                </Link>
              </li>
              <li>
                <Link 
                  href="/hr-operations-compliance" 
                  className={`${styles.mobileSubNavLink} ${pathname === '/hr-operations-compliance' ? styles.mobileSubActiveLink : ''}`}
                >
                  HR Operations & Compliance
                </Link>
              </li>
              <li>
                <Link 
                  href="/re-employment-ex-service" 
                  className={`${styles.mobileSubNavLink} ${pathname === '/re-employment-ex-service' ? styles.mobileSubActiveLink : ''}`}
                >
                  Re-employment for Ex-Services
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link href="/about-us" className={`${styles.mobileNavLink} ${pathname === '/about-us' ? styles.mobileActiveLink : ''}`}>
              About Us
            </Link>
          </li>
          <li>
            <Link href="/contact-us" className={`${styles.mobileNavLink} ${pathname === '/contact-us' ? styles.mobileActiveLink : ''}`}>
              Contact Us
            </Link>
          </li>
          
          <li className={styles.mobileCtaLi}>
            <Link href="/contact-us" className="btn btn-primary" style={{ width: '100%' }}>
              Connect Now
              <ArrowUpRight size={16} style={{ marginLeft: '4px' }} />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
