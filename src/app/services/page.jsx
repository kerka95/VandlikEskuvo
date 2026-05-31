import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";

export const metadata = {
  title: 'Szolgáltatások – Vandlik Testvérek',
  description: 'Esküvői dekoráció, szervezés és prémium csomag – fedezd fel a Vandlik Testvérek szolgáltatásait.',
};

export default function Services() {
  return (
    <>
      <PageHero 
        title="Szolgáltatásaink"
        subtitle="Amit kínálunk"
        bgImage="/VandlikEskuvo/images/hero/hero-services.png"
      />

      {/* SERVICE 1 - DECORATION */}
      <section className="section">
        <div className="container">
          <div className="service-detail animate-on-scroll">
            <div className="service-detail-image">
              <Image src="/VandlikEskuvo/images/gallery_demo/decor.png" alt="Esküvői dekoráció" fill style={{ objectFit: "cover", borderRadius: "8px" }} sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div className="service-detail-text">
              <p className="text-gold" style={{ fontFamily: "var(--font-heading)", fontStyle: "italic" }}>01</p>
              <h3>Esküvői Dekoráció</h3>
              <span className="divider"></span>
              <p>Megálmodjuk és megvalósítjuk esküvőtök teljes vizuális világát. Legyen szó intimebb szertartásról vagy nagyszabású fogadásról, a dekoráció mindig az elképzeléseiteket tükrözi.</p>
              <ul>
                <li>Virágkompozíciók és menyasszonyi csokrok</li>
                <li>Asztaldíszek és terítékek</li>
                <li>Ceremónia-dekoráció (boltív, szőnyeg, székdíszek)</li>
                <li>Teljes helyszíndíszítés</li>
                <li>Színvilág-tanácsadás és hangulattervezés</li>
                <li>Világítás-design (fairy light, gyertyák, LED)</li>
              </ul>
              <Link href="/contact" className="btn btn-outline-dark" style={{ marginTop: "0.5rem" }}>Ajánlatkérés</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 2 - PLANNING */}
      <section className="section" style={{ background: "var(--color-white)" }}>
        <div className="container">
          <div className="service-detail reverse animate-on-scroll">
            <div className="service-detail-image">
              <Image src="/VandlikEskuvo/images/gallery_demo/planning.png" alt="Esküvőszervezés" fill style={{ objectFit: "cover", borderRadius: "8px" }} sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div className="service-detail-text">
              <p className="text-gold" style={{ fontFamily: "var(--font-heading)", fontStyle: "italic" }}>02</p>
              <h3>Esküvőszervezés</h3>
              <span className="divider"></span>
              <p>A teljes szervezési folyamatot levesszük a vállatokról. Az első konzultációtól az utolsó tánc utáni pillanatig mellettetek vagyunk, hogy nektek csak az ünneplésre kelljen koncentrálnotok.</p>
              <ul>
                <li>Személyes konzultáció és koncepció-tervezés</li>
                <li>Helyszínválasztás és bejárás</li>
                <li>Beszállító-menedzsment (catering, zene, fotós, videós)</li>
                <li>Részletes időterv és forgatókönyv</li>
                <li>Költségvetés-tervezés és -követés</li>
                <li>Esküvő napi koordináció</li>
              </ul>
              <Link href="/contact" className="btn btn-outline-dark" style={{ marginTop: "0.5rem" }}>Ajánlatkérés</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 3 - PREMIUM */}
      <section className="section">
        <div className="container">
          <div className="service-detail animate-on-scroll">
            <div className="service-detail-image">
              <Image src="/VandlikEskuvo/images/gallery_demo/venue.png" alt="Prémium csomag" fill style={{ objectFit: "cover", borderRadius: "8px" }} sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div className="service-detail-text">
              <p className="text-gold" style={{ fontFamily: "var(--font-heading)", fontStyle: "italic" }}>03</p>
              <h3>Prémium Csomag</h3>
              <span className="divider"></span>
              <p>A legteljesebb szolgáltatásunk azoknak a pároknak, akik mindent ránk szeretnének bízni. A tervezéstől a megvalósításig, a felépítéstől a lebontásig – mi mindenre gondolunk.</p>
              <ul>
                <li>Teljes körű szervezés és dekoráció egyben</li>
                <li>Exkluzív beszállítói kapcsolatok</li>
                <li>Személyre szabott menüsor-tervezés</li>
                <li>Vendégélmény-design (welcome drink, köszönetajándékok)</li>
                <li>Helyszín felépítése és lebontása</li>
                <li>Esküvő utáni összefoglalás</li>
              </ul>
              <Link href="/contact" className="btn btn-outline-dark" style={{ marginTop: "0.5rem" }}>Ajánlatkérés</Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section" style={{ background: "var(--color-white)" }}>
        <div className="container">
          <div className="section-header animate-on-scroll">
            <p className="text-gold" style={{ fontFamily: "var(--font-heading)", fontStyle: "italic" }}>Hogyan dolgozunk?</p>
            <h2>A folyamat</h2>
            <span className="divider"></span>
            <p>Egyszerű és átlátható - 4 lépésben az álomesküvőig.</p>
          </div>
          <div className="cards-grid process-grid">
            <div className="card animate-on-scroll" style={{ textAlign: "center", borderTop: "3px solid var(--color-gold)" }}>
              <div className="card-icon" style={{ marginLeft: "auto", marginRight: "auto", background: "var(--color-gold)", color: "white", fontWeight: "700", fontFamily: "var(--font-heading)", fontSize: "1.2rem" }}>1</div>
              <h3>Konzultáció</h3>
              <p>Megismerjük az elképzeléseiteket, stílusotokat és az álomesküvőtöket.</p>
            </div>
            <div className="card animate-on-scroll" style={{ textAlign: "center", borderTop: "3px solid var(--color-gold)" }}>
              <div className="card-icon" style={{ marginLeft: "auto", marginRight: "auto", background: "var(--color-gold)", color: "white", fontWeight: "700", fontFamily: "var(--font-heading)", fontSize: "1.2rem" }}>2</div>
              <h3>Tervezés</h3>
              <p>Összeállítjuk a koncepciót, moodboardot és a részletes tervet.</p>
            </div>
            <div className="card animate-on-scroll" style={{ textAlign: "center", borderTop: "3px solid var(--color-gold)" }}>
              <div className="card-icon" style={{ marginLeft: "auto", marginRight: "auto", background: "var(--color-gold)", color: "white", fontWeight: "700", fontFamily: "var(--font-heading)", fontSize: "1.2rem" }}>3</div>
              <h3>Megvalósítás</h3>
              <p>Gondoskodunk minden részletről – a virágrendezéstől az utolsó gyertyáig.</p>
            </div>
            <div className="card animate-on-scroll" style={{ textAlign: "center", borderTop: "3px solid var(--color-gold)" }}>
              <div className="card-icon" style={{ marginLeft: "auto", marginRight: "auto", background: "var(--color-gold)", color: "white", fontWeight: "700", fontFamily: "var(--font-heading)", fontSize: "1.2rem" }}>4</div>
              <h3>Az ünnep</h3>
              <p>Ti ünnepeltek, mi a háttérben gondoskodunk a tökéletes lebonyolításról.</p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner 
        title="Kérjetek személyre szabott ajánlatot!" 
        text="Írjatok nekünk, és összeállítunk egy ajánlatot a ti igényeitekre szabva."
      />
    </>
  );
}
