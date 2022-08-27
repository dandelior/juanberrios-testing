import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.sass";

export default function Home() {
  return (
    <>
      <Head>
        <title>Juan Berrios - Diseñador, frontend dev, creador</title>
      </Head>
      <section className={styles.portraitGrid}>
        <div className={styles.portraitImage}>
          <div className={styles.portraitImageInner}></div>
        </div>
        <div className={styles.portraitData}>
          <div className={styles.portraitDataInner}>
            <div className={styles.heading}>
              <p>
                <span>Juan Berrios</span>
              </p>
              <h1>
                Diseñador.
                <br />
                Frontend Dev.
                <br />
                Creador.
              </h1>
              <p>
                Split is the first template made in collaboration with Super &
                One Page Love. It runs completely on Notion.
              </p>
            </div>
            <div className={styles.connectWrapper}>
              <div className={styles.connect}>
                <p className={styles.title}>Conecta</p>
                <a href="https://juanberrios.com/blog">Blog</a>
                <a href="mailto:hola@juanberrios.com">Email</a>
                <a href="?">Newsletter</a>
              </div>
              <div className={styles.social}>
                <p className={styles.title}>Social</p>
                <a href="https://juanberrios.com/blog">Twitter</a>
                <a href="mailto:hola@juanberrios.com">Instagram</a>
                <a href="?">VSCO</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
