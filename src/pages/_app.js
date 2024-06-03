import Agendar from "@/components/Agendar";
import Banner from "@/components/Banner";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import Galeria from "@/components/Galeria";
import Local from "@/components/Local";
import Servicos from "@/components/Servicos";
import "@/styles/globals.css";
import MyNavbar from "@/components/MyNavbar";
import Rodape from "@/components/Rodape";



export default function App({ Component, pageProps }) {
  return (
    <>
    <MyNavbar />
    <br />
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
