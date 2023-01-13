import styles from '../styles/About.module.css'
import Link from 'next/link'

export default function Sobre() {
    return (
        <section className={styles.containerAbout}>
            <h1>Sobre este projeto</h1>
            <div className={styles.textArea}>
                <p>Olá! Apresento aqui um pouco sobre minha experiência desenvolvendo este projeto</p>
                <p>Trata-se de uma aplicação SPA desenvolvida com Next e React, sobre Pokemons</p>
                <p>A referencia utilizada foi o material gratuito, disponibilizado no canal do <a href="https://www.youtube.com/@MatheusBattisti">Matheus Battisti</a>, no youtube.</p>
                <p>O objetivo deste projeto foi conhecer mais o framework Next e seus recursos. E todos muito bem explorados no consumo de uma API pública sobre Pokemons.</p>
            </div>
            <Link href='/' className='pButton'>Voltar</Link>
        </section>
    )
}