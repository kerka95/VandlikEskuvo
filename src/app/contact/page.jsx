import PageHero from "@/components/PageHero";

export const metadata = {
  title: 'Kapcsolat – Vandlik Testvérek',
  description: 'Lépj kapcsolatba a Vandlik Testvérekkel – esküvőszervezés és dekoráció. Kérj személyre szabott ajánlatot!',
};

export default function Contact() {
  return (
    <>
      <PageHero 
        title="Kapcsolat"
        subtitle="Beszéljünk!"
        bgImage="/VandlikEskuvo/images/hero/hero-contact.png"
      />

      <section className="section">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <p className="text-gold" style={{ fontFamily: "var(--font-heading)", fontStyle: "italic" }}>Várjuk üzenetetek</p>
            <h2>Vegyétek fel velünk a kapcsolatot</h2>
            <span className="divider"></span>
            <p>Töltsétek ki az alábbi űrlapot, és mi hamarosan válaszolunk. Személyes konzultációra is szívesen várunk!</p>
          </div>

          <div className="contact-grid">
            <div className="contact-form">
              <div className="contact-info animate-on-scroll">
                <div className="contact-info-item">
                  <div className="icon">📍</div>
                  <div>
                    <h4>Cím</h4>
                    <p>5600 Békéscsaba, Madách utca 13.</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="icon">📞</div>
                  <div>
                    <h4>Telefon</h4>
                    <p><a href="tel:+36301234567">+36 30 123 4567</a></p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="icon">✉️</div>
                  <div>
                    <h4>E-mail</h4>
                    <p><a href="mailto:info@vandlik.hu">info@vandlik.hu</a></p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="icon">🕐</div>
                  <div>
                    <h4>Nyitvatartás</h4>
                    <p>Előzetes egyeztetéssel</p>
                  </div>
                </div>

                <div style={{ marginTop: "1rem" }}>
                  <h4 style={{ fontFamily: "var(--font-body)", fontWeight: 700, marginBottom: "0.75rem" }}>
                    Kövessetek minket
                  </h4>
                  <div className="social-links">
                    <a href="https://www.facebook.com/marti.vandlik" target="_blank" aria-label="Facebook" rel="noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-info animate-on-scroll">
              <div style={{ marginTop: "1.5rem", borderRadius: "12px", overflow: "hidden", boxShadow: "var(--shadow-sm)" }}>
                <iframe
                  src="https://maps.google.com/maps?q=5600+B%C3%A9k%C3%A9scsaba,+Mad%C3%A1ch+utca+13&hl=hu&z=14&output=embed"
                  width="100%" 
                  height="500" 
                  style={{ border: 0 }}
                  allowFullScreen="" 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade" 
                  title="Vandlik Testvérek elhelyezkedés">
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
