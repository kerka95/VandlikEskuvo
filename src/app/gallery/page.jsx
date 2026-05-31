import fs from 'fs';
import path from 'path';
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import LightboxGallery from "@/components/LightboxGallery";

export const metadata = {
  title: 'Galéria – Vandlik Testvérek',
  description: 'Nézzétek meg korábbi munkáinkat: esküvői dekorációk, asztaldíszek és boldog pillanatok.',
};

export default function Gallery() {
  // Képek beolvasása a public/images/gallery mappából
  const galleryDir = path.join(process.cwd(), 'public/images/gallery');
  let images = [];
  try {
    const files = fs.readdirSync(galleryDir);
    images = files
      .filter(file => /\.(jpg|jpeg|png|webp|gif)$/i.test(file))
      .map(file => `/VandlikEskuvo/images/gallery/${file}`);
  } catch (error) {
    console.error('Hiba a galéria képek beolvasásakor:', error);
  }

  return (
    <>
      <PageHero 
        title="Galéria"
        subtitle="Munkáinkból"
        bgImage="/VandlikEskuvo/images/hero/hero-gallery.png"
      />

      <section className="section">
        <div className="container">
          <LightboxGallery images={images} />
        </div>
      </section>

      <CtaBanner 
        title="Megtetszett valamelyik munkánk?"
        text="Írjatok nekünk, és valósítsuk meg a ti álmotokat is!"
      />
    </>
  );
}
