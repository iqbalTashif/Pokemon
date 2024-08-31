import { useEffect, useState } from "react";
import SearchBox from "./components/SearchBox";
import PokemonSection from "./components/PokemonSection";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [allpokemons, setAllPokemons] = useState([]);
  const [currentPokemons, setCurrentPokemons] = useState([]);
  
  const fetchAllPokemons = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Something went wrong");
      let fetchedPokemons = await response.json();
      fetchedPokemons = fetchedPokemons.results;
      //add image property to each pokemon object:
      fetchedPokemons = fetchedPokemons.map((pokemon) => {
        const pokemonNumber = pokemon.url.split("/")[6]; //cause the url is of this format: https://pokeapi.co/api/v2/pokemon/31/
        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonNumber}.png`;
        return { ...pokemon, image: imageUrl };
      });
      setAllPokemons(fetchedPokemons);
      setCurrentPokemons(fetchedPokemons);
      
    } catch (err) {
      console.error(err);
      alert(err);
    }finally{
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchAllPokemons("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1302");
  }, []);

  return (
    <>
      <ul className="text-xl text-center p-4"> Hire me: 
        <li><a href="mailto:officialtashif@gmail.com">Email: officialtashif@gmail.com</a> </li>
        <li><a href="tel:+918210853664">Phone: +91 8210853664</a> </li>
      </ul>

      <SearchBox setLoading={setLoading} setCurrentPokemons ={setCurrentPokemons} allpokemons ={allpokemons} />
      <PokemonSection loading={loading} currentPokemons={currentPokemons} />
    </>
  );
}
