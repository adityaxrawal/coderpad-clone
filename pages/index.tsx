import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MainPage from './Component/MainPage'


export default function Home() {
  return (
    <>
      <Head>
        <title>Hello Move</title>
        <meta name="Code Editor: Clone of CoderPad" content="Generated by Aditya Rawal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <MainPage/>
      </main>
    </>
  )
}
