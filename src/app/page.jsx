import Link from "next/link";
import Image from "next/image";
import MainHero from "@/components/MainHero";

export default function Home() {
  return (
    <>
      <MainHero />

      {/* ABOUT PREVIEW */}
      <section className="section" id="about-preview">
        <div className="container">
          <div className="about-preview animate-on-scroll">
            <div className="about-preview-image" style={{ position: "relative", minHeight: "300px" }}>
              <Image src="/VandlikEskuvo/images/team/team.jpg" alt="Vandlik Testvérek" fill style={{ objectFit: "cover", borderRadius: "8px" }} sizes="(max-width: 768px) 100vw, 400px" />
            </div>
            <div className="about-preview-text">
              <p className="text-gold" style={{ fontFamily: "var(--font-heading)", fontStyle: "italic", marginBottom: "0.5rem" }}>Ismerjetek meg minket</p>
              <h2>A Vandlik Testvérek</h2>
              <span className="divider"></span>
              <p>Szenvedélyünk, hogy minden esküvőt egyedivé tegyünk. Évek óta segítünk pároknak megálmodni és megvalósítani a tökéletes esküvőjüket – a tervezéstől a legapróbb díszítési részletekig.</p>
              <p>Hisszük, hogy minden pár története különleges, és az esküvőjüknek ezt kell tükröznie. Részletekre figyelő megközelítésünk és kreatív szemléletünk garantálja az emlékezetes ünnepet.</p>
              <Link href="/about" className="btn btn-outline-dark">Tudj meg többet</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section" style={{ background: "var(--color-white)" }} id="services-section">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <p className="text-gold" style={{ fontFamily: "var(--font-heading)", fontStyle: "italic" }}>Amit kínálunk</p>
            <h2>Szolgáltatásaink</h2>
            <span className="divider"></span>
            <p>Teljes körű esküvőszervezés és dekoráció, személyre szabva az elképzeléseitek szerint.</p>
          </div>
          <div className="cards-grid">
            <div className="card animate-on-scroll" style={{ textAlign: "center" }}>
              <div className="card-icon" style={{ marginLeft: "auto", marginRight: "auto" }}>🎀</div>
              <h3>Esküvői Dekoráció</h3>
              <p>Virágkompozíciók, asztaldíszek, ceremónia-dekor és teljes helyszíndíszítés a ti stílusotokban.</p>
              <Link href="/services" className="btn btn-outline-dark" style={{ marginTop: "1rem", fontSize: "0.7rem", padding: "10px 24px" }}>Részletek</Link>
            </div>
            <div className="card animate-on-scroll" style={{ textAlign: "center" }}>
              <div className="card-icon" style={{ marginLeft: "auto", marginRight: "auto" }}>📋</div>
              <h3>Esküvőszervezés</h3>
              <p>Teljes koordináció: időterv, beszállítók, helyszínválasztás és forgatókönyv – mi mindent intézünk.</p>
              <Link href="/services" className="btn btn-outline-dark" style={{ marginTop: "1rem", fontSize: "0.7rem", padding: "10px 24px" }}>Részletek</Link>
            </div>
            <div className="card animate-on-scroll" style={{ textAlign: "center" }}>
              <div className="card-icon" style={{ marginLeft: "auto", marginRight: "auto" }}>💎</div>
              <h3>Prémium Csomag</h3>
              <p>Mindent magában foglaló szolgáltatás: a tervezéstől a lebontásig rátok figyelünk.</p>
              <Link href="/services" className="btn btn-outline-dark" style={{ marginTop: "1rem", fontSize: "0.7rem", padding: "10px 24px" }}>Részletek</Link>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="section" id="gallery-preview">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <p className="text-gold" style={{ fontFamily: "var(--font-heading)", fontStyle: "italic" }}>Munkáinkból</p>
            <h2>Galéria</h2>
            <span className="divider"></span>
            <p>Néhány pillanat az általunk megálmodott és megvalósított esküvőkről.</p>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item animate-on-scroll">
              <Image src="/VandlikEskuvo/images/gallery/decor_3.jpeg" alt="Esküvői dekoráció" fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 25vw" />
              <div className="gallery-item-overlay"><span>Esküvői dekoráció</span></div>
            </div>
            <div className="gallery-item animate-on-scroll">
              <Image src="/VandlikEskuvo/images/gallery/decor_glass_2.jpeg" alt="Pohár dekoráció" fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 25vw" />
              <div className="gallery-item-overlay"><span>Pohár dekoráció</span></div>
            </div>
            <div className="gallery-item animate-on-scroll">
              <Image src="/VandlikEskuvo/images/gallery/decor_5.jpeg" alt="Esküvői dekoráció" fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 25vw" />
              <div className="gallery-item-overlay"><span>Esküvői dekoráció</span></div>
            </div>
            <div className="gallery-item animate-on-scroll">
              <Image src="/VandlikEskuvo/images/gallery/decor_table_4.jpeg" alt="Asztaldekoráció" fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 25vw" />
              <div className="gallery-item-overlay"><span>Asztaldekoráció</span></div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: "var(--space-md)" }}>
            <Link href="/gallery" className="btn btn-outline-dark">Teljes galéria</Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section" style={{ background: "var(--color-white)" }} id="testimonials">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <p className="text-gold" style={{ fontFamily: "var(--font-heading)", fontStyle: "italic" }}>Rólunk mondták</p>
            <h2>Vélemények</h2>
            <span className="divider"></span>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card animate-on-scroll">
              <blockquote>Már az első találkozón éreztük, hogy a Vandlik testvérek értik, mit szeretnénk. Az esküvőnk meseszép lett, minden részlet tökéletes volt!</blockquote>
              <p className="author">Andrea & Ferenc</p>
              <p className="date">2022. június</p>
            </div>
            <div className="testimonial-card animate-on-scroll">
              <blockquote>A dekoráció lenyűgöző volt, a vendégeink alig hittek a szemüknek. Köszönjük a csodálatos munkát és a végtelen türelmet!</blockquote>
              <p className="author">Edina & Gábor</p>
              <p className="date">2021. július</p>
            </div>
            <div className="testimonial-card animate-on-scroll">
              <blockquote>Profi, kreatív és szívvel-lélekkel csinálják. A Vandlik testvéreknek köszönhetjük, hogy az esküvőnk a legszebb napunk volt!</blockquote>
              <p className="author">Annamária & Viktor</p>
              <p className="date">2020. június</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="cta-banner">
        <div className="container animate-on-scroll">
          <h2>Beszéljük meg az álomesküvőtöket!</h2>
          <p>Vegyétek fel velünk a kapcsolatot, és kezdjük el együtt megtervezni a nagy napot.</p>
          <Link href="/contact" className="btn btn-gold">Kapcsolatfelvétel</Link>
        </div>
      </section>
    </>
  );
}
