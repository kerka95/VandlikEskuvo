import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <p className="footer-brand">Vandlik <span>Testvérek</span></p>
            <p style={{ marginTop: "0.5rem", fontSize: "0.85rem" }}>
              Esküvőszervezés és dekoráció szívvel és szenvedéllyel. Hagyjátok, hogy a ti álomotokat is megvalósítsuk.
            </p>
          </div>
          <div>
            <h4>Oldalak</h4>
            <ul>
              <li><Link href="/">Főoldal</Link></li>
              <li><Link href="/about">Rólunk</Link></li>
              <li><Link href="/services">Szolgáltatások</Link></li>
              <li><Link href="/gallery">Galéria</Link></li>
            </ul>
          </div>
          <div>
            <h4>Szolgáltatások</h4>
            <ul>
              <li><Link href="/services">Esküvői dekoráció</Link></li>
              <li><Link href="/services">Esküvőszervezés</Link></li>
              <li><Link href="/services">Prémium csomag</Link></li>
            </ul>
          </div>
          <div>
            <h4>Elérhetőség</h4>
            <ul>
              <li><a href="tel:+36301234567">+36 30 123 4567</a></li>
              <li><a href="mailto:info@vandlik.hu">info@vandlik.hu</a></li>
              <li><Link href="/contact">Kapcsolatok</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Vandlik Testvérek. Minden jog fenntartva.</p>
          <div className="social-links">
            <a href="https://www.facebook.com/marti.vandlik" target="_blank" aria-label="Facebook" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
