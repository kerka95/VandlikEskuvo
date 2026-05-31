"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav className={`navbar ${isScrolled ? "scrolled" : "transparent"}`} id="navbar">
        <div className="container">
          <Link href="/" className="navbar-brand" onClick={closeMenu}>
            Vandlik <span>Testvérek</span>
          </Link>
          <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`} id="nav-links">
            <li><Link href="/" className={pathname === "/" ? "active" : ""} onClick={closeMenu}>Főoldal</Link></li>
            <li><Link href="/about" className={pathname === "/about" ? "active" : ""} onClick={closeMenu}>Rólunk</Link></li>
            <li><Link href="/services" className={pathname === "/services" ? "active" : ""} onClick={closeMenu}>Szolgáltatások</Link></li>
            <li><Link href="/gallery" className={pathname === "/gallery" ? "active" : ""} onClick={closeMenu}>Galéria</Link></li>
            <li><Link href="/contact" className={pathname === "/contact" ? "active" : ""} onClick={closeMenu}>Kapcsolat</Link></li>
          </ul>
          <div 
            className={`hamburger ${isMobileMenuOpen ? "active" : ""}`} 
            id="hamburger"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span><span></span><span></span>
          </div>
        </div>
      </nav>
      <div 
        className={`mobile-overlay ${isMobileMenuOpen ? "active" : ""}`} 
        id="mobile-overlay"
        onClick={closeMenu}
      ></div>
    </>
  );
}
