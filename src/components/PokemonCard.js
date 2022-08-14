import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {

  const { id, name, hp, sprites } = pokemon

  const [cardState, setCardState] = useState(true)

  function handleClick() {
    setCardState(!cardState)
  }

  return (
    <Card onClick={handleClick}>
      <div>
        <div className="image">
          <img alt={name} src={cardState ? sprites.front : sprites.back}/>
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
