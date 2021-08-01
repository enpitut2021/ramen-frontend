import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from "../comps/Header.js"

export default function Home() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1>Hello, World!</h1>
        <a href="" class="btn btn-border">マイナンバーカードに接続</a>
      </div>
    </div>
  )
}
