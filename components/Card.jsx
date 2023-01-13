import Image from 'next/image'
import styles from '../styles/Card.module.css'
import Link from 'next/link'

export default function ({ pokemons }) {
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemons.id}.png`
    return (
        <div className={styles.pokemonCard} >
            <Image className={styles.pokemonImage} src={url} width={130} height={130} alt='Pokemon Picture' />
            <span className={styles.span}></span>
            <div className={styles.cardInfo}>
                <p className={styles.pokemonId}>#{pokemons.id}</p>
                <p className={styles.pokemonName}>{(pokemons.name)[0].toUpperCase() + (pokemons.name).slice(1)}</p>
                <Link
                    href={'/' + pokemons.id}
                    className='pButton'
                >Detalhes</Link>
            </div>
        </div>
    )
}