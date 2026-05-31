import { Playfair_Display, Montserrat } from 'next/font/google';
import '../styles/main.scss';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimationObserver from '@/components/AnimationObserver';

const playfair = Playfair_Display({
  subsets: ['latin', 'latin-ext'],
  style: ['normal', 'italic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata = {
  title: 'Vandlik Testvérek – Esküvőszervezés & Dekoráció',
  description: 'Személyre szabott esküvőszervezés és lenyűgöző dekoráció a Vandlik testvérektől.',
  icons: {
    icon: '/VandlikEskuvo/vfavicon.svg',
  },
  openGraph: {
    title: 'Vandlik Testvérek – Esküvőszervezés & Dekoráció',
    description: 'Személyre szabott esküvőszervezés és lenyűgöző dekoráció a Vandlik testvérektől.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="hu" className={`${playfair.variable} ${montserrat.variable}`}>
      <body>
        <AnimationObserver />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
