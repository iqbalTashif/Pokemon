import PokemonCard from "./PokemonCard";
export default function PokemonSection({loading, currentPokemons}){
    return (
        <section className=" flex items-center justify-center gap-4 p-4 flex-wrap">
        {loading ? (
          <h1 className="font-bold text-4xl text-center p-12"> Loading ... </h1>
        ) : currentPokemons.length === 0 ? (
          <h1 className="font-bold p-4 text-4xl">No Pokemons!</h1>
        ) : (
          currentPokemons.map((pokemon) => {
            return <PokemonCard pokemon={pokemon} key={pokemon.url} />;
          })
        )}
      </section>
    )
}