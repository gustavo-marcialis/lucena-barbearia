import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

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

    </>
  );
}
