import Head from 'next/head'
import Button from '../src/components/common/Button'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog Post</title>
        <meta name="description" content="blog post" />
        <link rel="icon" href="/blogger.png" />
      </Head>
    </div>
  )
}
