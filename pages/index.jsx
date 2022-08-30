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
          <div
            className={styles.portraitImageInner}
            style={{
              backgroundImage: "url(/img/me.webp)",
            }}
          ></div>
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
            <div className={styles.connect}>
              <p className={styles.title}>Conecta</p>
              <div className={styles.connectWrapper}>
                <div className={styles.links}>
                  <div className={styles.link}>
                    <a href="mailto:hola@juanberrios.com">Email</a>
                  </div>
                  <div className={styles.link}>
                    <a
                      href="https://twitter.com/dandelior"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Twitter
                    </a>
                  </div>
                  <div className={styles.link}>
                    <a
                      href="https://github.com/dandelior"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
                <div className={styles.links}>
                  <div className={`${styles.link} ${styles.soon}`}>
                    <a href="#">Blog</a>
                  </div>
                  <div className={styles.link}>
                    <a
                      href="https://instagram.com/bydandelior"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instagram
                    </a>
                  </div>
                  <div className={styles.link}>
                    <a
                      href="https://vsco.co/dandelior"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      VSCO
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
