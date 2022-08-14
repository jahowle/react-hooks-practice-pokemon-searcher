import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({handleAdd}) {

  const [name, setName] = useState("")
  const [hp, setHp] = useState("")
  const [front, setFront] = useState("")
  const [back, setBack] = useState("")

  function handleSetHp(e) {
    setHp(e.target.value)
  }

  function handleSetName(e) {
    setName(e.target.value)
  }

  function handleSetFront(e) {
    setFront(e.target.value)
  }

  function handleSetBack(e) {
    setBack(e.target.value)
  }

  function handleSubmit() {

    const newPokemon = {
      name: name,
      hp: hp,
      sprites: {
        front: front,
        back: back
      }
    }

    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPokemon)
    })

    handleAdd(newPokemon)
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input onChange={handleSetName} fluid label="Name" placeholder="Name" name="name" />
          <Form.Input onChange={handleSetHp} fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input
            onChange={handleSetFront}
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input
            onChange={handleSetBack}
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
