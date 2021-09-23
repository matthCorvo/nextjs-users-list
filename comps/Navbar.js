import Link from 'next/link'
import Image from 'next/image'

 const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src="/logo.png" alt="site logo" width={148} height={97} />
            </div>
           <Link href="/"><a>Accueil</a></Link>
              <Link href="/map"><a>Map</a></Link>
              <Link href="/user"><a>Liste</a></Link>
        </nav>
    )
}

export default Navbar;