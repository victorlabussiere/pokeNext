import styles from '../styles/Home.module.css'
import Card from '../components/Card'
import Image from 'next/image'
import { useState } from 'react'


export async function getStaticProps() {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=151'
  const data = await fetch(url)
  const res = await data.json()
  let pokemons = []
  res.results.forEach(({ name, url }, index) => {
    pokemons.push({ id: index + 1, name, url })
  });

  return {
    props: { pokemons }
  }
}

export default function Home({ pokemons }) {

  let [query, setQuery] = useState('')
  const search = function () {
    let poke = pokemons.filter(p => {
      return p.name.toLowerCase().includes(query.toLocaleLowerCase())
    })
    pokemons = poke
    return pokemons
  }

  search();
  return (
    <>
      <header className={styles.homeHeader}>
        <h1>Poke<span>Next</span></h1>
        <Image src='/images/pokeball.png' width={40} height={40} alt='Pokeball Logo' />
      </header>

      <input
        type="text"
        placeholder='Pesquise pelo nome do Pokemon'
        id='queryInput'
        className={styles.inputQuery}
        onChange={() => {
          let input = document.getElementById('queryInput')
          return setQuery(input.value)
        }}
      />
      <div className={styles.pokemonList}>
        {pokemons.map(p => <Card key={p.id} pokemons={p} />)}
      </div>
    </>
  )
}
