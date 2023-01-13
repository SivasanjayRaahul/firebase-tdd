/** @format */

import Head from "next/head";

import styles from "@/pages/index.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next App with Firebase</title>
      </Head>

      <main>
        <h1 className={styles.title}>
          next.js with firebase
        </h1>
      </main>
    </div>
  );
}
