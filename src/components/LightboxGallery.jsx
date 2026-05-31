"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function LightboxGallery({ images }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  const navigateLightbox = (direction) => {
    setCurrentIndex((prev) => {
      let newIndex = prev + direction;
      if (newIndex >= images.length) newIndex = 0;
      if (newIndex < 0) newIndex = images.length - 1;
      return newIndex;
    });
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigateLightbox(-1);
      if (e.key === 'ArrowRight') navigateLightbox(1);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <>
      <div className="gallery-grid">
        {images.map((src, idx) => (
          <div 
            key={idx} 
            className="gallery-item animate-on-scroll" 
            onClick={() => openLightbox(idx)}
          >
            <Image src={src} alt="Esküvői dekoráció" fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 33vw" />
            <div className="gallery-item-overlay"><span>Nagyítás</span></div>
          </div>
        ))}
      </div>

      {/* LIGHTBOX OVERLAY */}
      <div 
        className={`lightbox ${isOpen ? 'active' : ''}`} 
        id="lightbox"
        onClick={(e) => { if (e.target.id === 'lightbox') closeLightbox(); }}
      >
        <span className="lightbox-close" id="lightbox-close" onClick={closeLightbox}>&times;</span>
        <div className="lightbox-content" style={{ position: "relative", width: "90vw", height: "90vh" }}>
          {isOpen && <Image src={images[currentIndex]} alt="Kép nagyítva" fill style={{ objectFit: "contain" }} sizes="100vw" id="lightbox-img" />}
        </div>
        <button className="lightbox-nav prev" id="lightbox-prev" onClick={() => navigateLightbox(-1)}>&#10094;</button>
        <button className="lightbox-nav next" id="lightbox-next" onClick={() => navigateLightbox(1)}>&#10095;</button>
      </div>
    </>
  );
}
