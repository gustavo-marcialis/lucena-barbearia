import "@/styles/globals.css";
import MyNavbar from "@/components/MyNavbar";
import Rodape from "@/components/Rodape";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";

export default function App({ Component, pageProps }) {
  return (
    <>
      <MyNavbar />
      <Component {...pageProps} />
      <FloatingWhatsAppButton />
      <Rodape />
    </>
  );
}
