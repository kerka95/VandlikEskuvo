import Image from "next/image";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import CounterAnimation from "@/components/CounterAnimation";

export const metadata = {
  title: 'Rólunk – Vandlik Testvérek',
  description: 'Ismerjétek meg a Vandlik testvéreket – esküvőszervezők és dekoratőrök, akik szenvedéllyel alkotnak.',
};

export default function About() {
  return (
    <>
      <PageHero 
        title="A Vandlik Testvérek"
        subtitle="Ismerjetek meg minket"
        bgImage="/images/hero/hero-about.png"
      />

      {/* STORY SECTION */}
      <section className="section">
        <div className="container">
          <div className="about-preview animate-on-scroll">
            <div className="about-preview-image" style={{ position: "relative", minHeight: "300px" }}>
              <Image src="/images/team/team.jpg" alt="Vandlik Testvérek" fill style={{ objectFit: "cover", borderRadius: "8px" }} sizes="(max-width: 768px) 100vw, 400px" />
            </div>
            <div className="about-preview-text">
              <p className="text-gold" style={{ fontFamily: "var(--font-heading)", fontStyle: "italic" }}>A mi történetünk</p>
              <h2>Hogyan kezdődött?</h2>
              <span className="divider"></span>
              <p>A Vandlik testvérek mindig is rajongtak a szépért és az ünnepi pillanatokért. Gyerekkorunk óta együtt álmodunk, tervezünk és alkotunk – ez a szenvedély vezetett minket az esküvőszervezés világába.</p>
              <p>Évek tapasztalatával a hátunk mögött, ma már tudjuk: minden esküvő egy egyedi történet. A mi feladatunk, hogy ezt a történetet a legszebb formájában meséljük el – virágokkal, fényekkel, részletekkel és végtelen szeretettel.</p>
              <p>A Vandlik testvérek csapataként egymást kiegészítve dolgozunk: míg egyikünk a nagyvonalú látványért felel, addig a másik a precíz szervezésért és a zökkenőmentes lebonyolításért.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="section" style={{ background: "var(--color-white)" }}>
        <div className="container">
          <div className="section-header animate-on-scroll">
            <p className="text-gold" style={{ fontFamily: "var(--font-heading)", fontStyle: "italic" }}>A csapatunk</p>
            <h2>Akik mögötte állnak</h2>
            <span className="divider"></span>
          </div>
          <div className="team-grid">
            <div className="team-card animate-on-scroll">
              <div className="team-card-image">
                <Image src="/images/team/edina.jpg" alt="Vandlik Edina" fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 350px" />
              </div>
              <h3>Vandlik Edina</h3>
              <p className="role">Kreatív igazgató & Dekoratőr</p>
              <p>A vizuális világ mestere. Edina felelős a dekorációk tervezéséért, a színvilágok összeállításáért és azért, hogy minden helyszín lenyűgöző legyen.</p>
            </div>
            <div className="team-card animate-on-scroll">
              <div className="team-card-image">
                <Image src="/images/team/marti.jpg" alt="Vandlik Márta" fill style={{ objectFit: "cover", objectPosition: "center 15%" }} sizes="(max-width: 768px) 100vw, 350px" />
              </div>
              <h3>Vandlik Márta</h3>
              <p className="role">Főszervező & Koordinátor</p>
              <p>A szervezés motorja. Márti a háttérből irányít: egyezteti a beszállítókat, készíti a forgatókönyvet és gondoskodik arról, hogy minden percre. menjen.</p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section">
        <div className="container">
          <div className="stats-row animate-on-scroll">
            <CounterAnimation targetCount={7} label="Megvalósított esküvő" />
            <CounterAnimation targetCount={5} label="Év tapasztalat" />
            <CounterAnimation targetCount={7} label="Elégedett pár" />
            <CounterAnimation targetCount={0} label="Díj & elismerés" />
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section" style={{ background: "var(--color-white)" }}>
        <div className="container">
          <div className="section-header animate-on-scroll">
            <p className="text-gold" style={{ fontFamily: "var(--font-heading)", fontStyle: "italic" }}>Amiben hiszünk</p>
            <h2>Filozófiánk</h2>
            <span className="divider"></span>
          </div>
          <div className="cards-grid">
            <div className="card animate-on-scroll" style={{ textAlign: "center" }}>
              <div className="card-icon" style={{ marginLeft: "auto", marginRight: "auto" }}>✨</div>
              <h3>Egyediség</h3>
              <p>Minden esküvőt a pár személyiségéhez és álmaihoz igazítunk – nálunk nincs két egyforma ünnep.</p>
            </div>
            <div className="card animate-on-scroll" style={{ textAlign: "center" }}>
              <div className="card-icon" style={{ marginLeft: "auto", marginRight: "auto" }}>❤️</div>
              <h3>Szenvedély</h3>
              <p>Szívvel-lélekkel dolgozunk minden projekten, mert hisszük, hogy a részletekbe rejtett szeretet teszi igazán különlegessé az ünnepet.</p>
            </div>
            <div className="card animate-on-scroll" style={{ textAlign: "center" }}>
              <div className="card-icon" style={{ marginLeft: "auto", marginRight: "auto" }}>🤝</div>
              <h3>Megbízhatóság</h3>
              <p>Precíz szervezéssel és átlátható kommunikációval gondoskodunk arról, hogy semmi miatt ne kelljen aggódnotok.</p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner 
        title="Dolgozzunk együtt!" 
        text="Várjuk megkereséseteket, hogy együtt kezdhessük el a tervezést."
      />
    </>
  );
}
