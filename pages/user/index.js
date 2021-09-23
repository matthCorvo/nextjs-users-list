import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/users.module.css'


export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users/');
    const data = await res.json();
    return{
        props: {users: data}
    }
}

const List = ({users}) => {
    return ( 
        <>
        <Head>
        <title>Web List | Ninja</title>
            <meta name="keywords" content="liste"/>
        </Head>
        <div>
            <h1>Liste des Utilisateurs</h1>
            {users.map(user => (
                <Link href={'/user/' + user.id} key={user.id}>
                    
                    <a className={styles.single}>
                        <h3>{user.name}</h3>
                    </a>
                    </Link>
            ))}
        </div>
        </>

     );
}
 
export default List;