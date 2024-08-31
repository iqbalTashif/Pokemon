import { useRef } from "react";
export default function SearchBox({setLoading, setCurrentPokemons, allpokemons}){
    const searchDebouncerTimeOut = useRef(null);
    const searchInputRef = useRef(null);
  
    const searchPokemons = () => {
      clearInterval(searchDebouncerTimeOut.current)
      searchDebouncerTimeOut.current = setTimeout(()=>{
                setLoading(true);
                setTimeout(() => {
                    let searchedPokemons = allpokemons.filter((pokemon) =>
                    pokemon.name.includes(searchInputRef.current.value)
                    );
                    setCurrentPokemons(searchedPokemons);
                    setLoading(false);
                }, 0);
    }, 1000);
};
    return (
        <div className="flex justify-center">
        <input
          ref={searchInputRef}
          onChange={searchPokemons}
          type="text"
          placeholder="Search for a pokemon..."
          className="px-4 py-2 md:w-96 border-2 border-gray-400"
        />
        <button
          onClick={searchPokemons}
          className="px-4 py-2 bg-green-500 text-white"
        >
          Search
        </button>
      </div>
    )
}