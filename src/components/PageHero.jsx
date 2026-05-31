import Image from "next/image";

export default function PageHero({ title, subtitle, bgImage }) {
  return (
    <header className="page-hero">
      <div className="hero-bg">
        <Image 
          src={bgImage} 
          alt={title} 
          fill 
          priority 
          style={{ objectFit: "cover", objectPosition: "center" }} 
        />
      </div>
      <div className="hero-overlay"></div>
      <div style={{ position: "relative", zIndex: 1 }}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </header>
  );
}
