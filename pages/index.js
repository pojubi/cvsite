import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <nav>
          <ul className='flex justify-between space-x-8'>
            <li><a href="#" className='text-3xl text-sky-700'>Contact</a></li>
            <li><a href="#" className='text-3xl text-sky-700'>Projects</a></li>
          </ul>
        </nav>

        <h1 className={styles.title}>
          Welcome to My CV website!
        </h1>

        <p className={styles.description}>
          Je m'appele Abiodun Adepoju, je suis un developpeur web et web mobile et j'ai 28ans .
        </p>
        <p className={styles.description}>
          Project : Trouver un emploi en cdi ou cdd aﬁn d'acquerir une experience professionel <br/>
          <i>La polyvalence, la rigor, l'eﬃcacité et la persévérance</i>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Diplomes et formations &rarr;</h2>
            <p>Titre professionnel (RNCP niveau 5) - Developpeur web et web mobile / Via Formation Le Mans, France</p>
            <p>Bac S / Sacred Heart College Nigeria</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Atouts &rarr;</h2>
            <ul>
              <li>Bon sens relationnel</li>
              <li>Travailleur d'equipe</li>
              <li>Respecteux</li>
              <li>Discret</li>
              <li>Méthodique</li>
              <li>Rigoreux</li>
              <li>Adaptable</li>
              <li>Ponctuel</li>
              <li>Polyvalent</li>
              <li>Autonome</li>
              <li>Solide culture web</li>
              <li>A l’écoute</li>
              <li>Persevearance</li>
              <li>Curieux d'apprendre</li>
            </ul>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Compétences &rarr;</h2>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>Python</li>
              <li>PHP</li>
              <li>jQuery</li>
              <li>React</li>
              <li>React native</li>
              <li>Next.js</li>
              <li>Node.js</li>
              <li>Django</li>
              <li>Django-REST-Framework</li>
              <li>Material UI</li>
              <li>Tailwind CSS</li>
              <li>SQL et MySQL</li>
              <li>Wordpress</li>
              <li>Ajax</li>
            </ul>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
