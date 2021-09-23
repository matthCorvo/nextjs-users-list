import Link from 'next/link'
import {useEffect} from 'react'
import {useRouter} from 'next/router'


const Error = () => {
    const router = useRouter()

useEffect(() => {
    setTimeout(() => {
        // router.go(-1)
        // router.go(1)
        router.push('/')
      }, 3000)
    }, [])

    return (
        <div className="not-found">
            <h1>Ooooops...!</h1>
            <h2>cette page est introuvable.</h2>
            <h2>retour à <Link href="/"><a>l&#039;accueil</a></Link> dans 3 secondes...</h2>
        </div>
    )
}

export default Error
