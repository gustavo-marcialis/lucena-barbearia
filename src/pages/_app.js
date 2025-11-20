import Agendar from "@/components/Agendar";
import Banner from "@/components/Banner";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import Galeria from "@/components/Galeria";
import Local from "@/components/Local";
import Servicos from "@/components/Servicos";
import "@/styles/globals.css";
import "@/styles/animations.css";
import MyNavbar from "@/components/MyNavbar";
import Rodape from "@/components/Rodape";
import { Playfair_Display, Lato } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });
const lato = Lato({ weight: ['400', '700'], subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-playfair: ${playfair.style.fontFamily};
          --font-lato: ${lato.style.fontFamily};
        }
      `}</style>
    <MyNavbar />
     <Banner />
     <Servicos />
     <Agendar />
     <Local />
     <Galeria />
     <Rodape />
     <FloatingWhatsAppButton />
      <Component {...pageProps} />
    </>
  );
}
