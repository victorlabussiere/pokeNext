import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link className={styles.navbar_header} href='/'>
                <Image width="40" height={40} src='/images/masterBall.png' className={styles.logoPng}></Image>
                <h2 className={styles.logoH2}>PokeNext!</h2>
            </Link>
            <span className={styles.navbar_linkList}>
                <Link className={styles.navbar_link} href='/'>Home</Link>
                <Link className={styles.navbar_link} href='/sobre'>Sobre o Projeto</Link>
            </span>
        </nav>
    )
}