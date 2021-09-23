import Head from 'next/head'
import Footer from '../comps/Footer'
import  {Navbar} from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
    <title>Web List | Accueil</title>
        <meta name="keywords" content="liste"/>
    </Head>
   <div>
    <h1 className={styles.title}> Accueil test </h1>
    <p className={styles.texte}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae quod deleniti alias eos corporis veniam quidem numquam fugit vero consectetur, ratione ex amet asperiores ipsa repudiandae architecto adipisci quasi omnis.</p>
    <p className={styles.texte}>  Officiis, fugiat architecto nobis consequatur excepturi nesciunt nihil vel iste nulla, totam dolorum. Facilis commodi harum, natus amet in, libero consequatur aspernatur quia rem quae aliquam ex provident, quasi illo.</p>
  
  <Link href="/user">
  <a className={styles.btn}>Voir la liste</a>
  </Link>
    </div>
    </>
  )
}
