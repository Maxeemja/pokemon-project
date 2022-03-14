import Pokemon from "./Pokemon";

export default function PokeList({pokemon}) {
  return (
    <div className="grid grid-cols-4 justify-between gap-4">
      {pokemon.map(pok => (
        <Pokemon key={pok.name} pok={pok}/>
      ))}
    </div>
  )
}
