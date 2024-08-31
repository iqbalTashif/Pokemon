export default function PokemonCard({pokemon}) {
  return (
    <div
      key={pokemon.url}
      className="xl:w-1/5 md:w-1/3 w-full bg-indigo-500 p-4 pb-2  text-white"
    >
      <div className="flex flex-col gap-4 ">
        <img
          src={pokemon.image}
          alt="A pokemon image"
          className="w-full h-96"
        />
        <h1 className="bg-white text-black capitalize font-bold text-xl text-center p-2 rounded-full">
          {pokemon.name}
        </h1>
      </div>
    </div>
  );
}
