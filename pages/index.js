import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Button } from "antd";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Button>
          <Link href="/about">
            <a>About</a>
          </Link>
        </Button>
        <Button>
          <Link href="/list">
            <a>List</a>
          </Link>
        </Button>
        <Button>
          <Link href="/detail">
            <a>Detail</a>
          </Link>
        </Button>
      </main>
    </div>
  );
}
