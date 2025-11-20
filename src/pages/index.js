import Head from "next/head";
import Banner from "@/components/Banner";
import Servicos from "@/components/Servicos";
import Agendar from "@/components/Agendar";
import Local from "@/components/Local";
import Galeria from "@/components/Galeria";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lucena Barbearia</title>
        <meta property="og:title" content="Lucena Barbearia" />
        <meta property="og:description" content="Agendamento online, rápido e facilitado." />
        <meta property="og:image" content="/images/OG.png" />
        <meta property="og:url" content="https://lucenabarbearia.vercel.app" />
        <meta property="og:type" content="website" />
        <meta name="description" content="Barbearia Familiar, com Ambiente Climatizado" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Banner />
        <Servicos />
        <Agendar />
        <Local />
        <Galeria />
      </main>
    </>
  );
}
