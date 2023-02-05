import Head from "next/head";
import styles from "../styles/Home.module.css";
// import { Footer } from "../components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="hero-section">
        <h1 className="">Jade Media Pr</h1>
      </section>

      {/* <Footer /> */}
    </div>
  );
}