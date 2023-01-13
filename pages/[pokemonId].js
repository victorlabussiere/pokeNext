import styles from '../styles/openPoke.module.css'
import Image from "next/image"
import Link from "next/link"

export async function getStaticPaths() {
    const url = 'https://pokeapi.co/api/v2/pokemon/?limit=151'
    const data = await fetch(url)
        .then(res => res.json())
        .then(data => data.results)
        .catch(err => console.error('Erro na API', err.message))


    const paths = await data.map((pokemon, index) => {
        return {
            params: {
                pokemonId: ((index + 1).toString())
            }
        }
    })
    return {
        paths,
        fallback: false
    }

}

export async function getStaticProps(context) {
    const id = context.params.pokemonId

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await res.json()

    return {
        props: { pokemon: data }
    }
}

function setLetter(w) {
    return w[0].toUpperCase() + w.slice(1)
}

export default function pokemon({ pokemon }) {
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`

    function nextPag(id) {
        return `${id + 1}`
    }
    function prevPag(id) {
        if (id === 1) return '1';

        return `${id - 1}`
    }

    return (
        <>
            <div className={styles.card}>
                <h1>{setLetter(pokemon.name)}
                    <p># <span>{pokemon.id}</span></p>
                </h1>
                <Image
                    src={url + `${pokemon.id}.png`}
                    className={styles.pokeImage}
                    width={400}
                    height={400}
                    alt={pokemon.name}
                />
                <div className={styles.typeArea}>
                    {pokemon.types.map(t => {
                        return (<p className={styles.type}>{t.type.name}</p>)
                    })}
                </div>
                <div className={styles.pokemonInfos}>
                    <h3>Peso: {pokemon.weight / 10} kg</h3>
                    <h3>Altura: {pokemon.height * 10} cm</h3>
                </div>


                <div className={styles.actionArea}>
                    {pokemon.id == 1 ? '' : (<Link className="pButton" href={`/${prevPag(pokemon.id)}`}>Anterior</Link>)}
                    {pokemon.id == 151 ? '' : (<Link className="pButton" href={`/${nextPag(pokemon.id)}`}>Próximo</Link>)}
                </div>
            </div>
            <Link
                className="wButton"
                href='/'>Voltar</Link>
        </>
    )
}