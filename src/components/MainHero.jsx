import Link from "next/link";
import Image from "next/image";

export default function MainHero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <Image 
          src="/VandlikEskuvo/images/hero/hero-main.png" 
          alt="Álmaitok esküvője" 
          fill 
          priority 
          style={{ objectFit: "cover", objectPosition: "center" }} 
        />
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <p className="subtitle">Vandlik Testvérek</p>
        <h1>Álmaitok esküvője, a mi kezünkben</h1>
        <p>Személyre szabott esküvőszervezés és lenyűgöző dekoráció, hogy az a nap tökéletes legyen.</p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/contact" className="btn btn-gold">Kérjen ajánlatot</Link>
          <Link href="/services" className="btn btn-outline">Szolgáltatásaink</Link>
        </div>
      </div>
    </section>
  );
}
