import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [cards, setCards] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then((r) => r.json())
    .then((data) => setCards(data))
  }, [])

  function addPokemon(newPokemon) {
    setCards([...cards, newPokemon])
  }

  function handleSearch(e) {
    setSearch(e.target.value)
  }

  const filteredCards = cards.filter((card) => {
    return card.name.toLowerCase().includes(search.toLowerCase())
  })


  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleAdd={addPokemon} />
      <br />
      <Search handleSearch={handleSearch} />
      <br />
      <PokemonCollection collection={filteredCards}/>
    </Container>
  );
}

export default PokemonPage;
