import { ReactElement, useEffect, useState } from "react";
import { Card } from "../Card";
import { Container } from "./styles";

interface CardInfos {
  linkImg: string;
  id: string;
}

export function Cards() {

  const pokeImages = [
    "https://gamepress.gg/pokemonmasters/sites/pokemonmasters/files/styles/300h/public/2020-01/pm0376_00_metagross_256.ktx_.png?itok=sapL6eIc",
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/448.png"
  ]

  const [cards, setCards] = useState<CardInfos[]>([])

  useEffect(() => {
    pokeImages.map((img) => {
      const newCards = [
        {
          id: Math.random().toString(),
          linkImg: img,
        },
        {
          id: Math.random().toString(),
          linkImg: img
        }
      ] 

      const repeatedCards = cards.filter(card => card.linkImg === newCards[0].linkImg)

      repeatedCards.length > 0 ? "" : setCards(oldState => [...oldState, ... newCards]);
    })
  }, [])

  return (
    <Container> 
      {
        cards.sort(() => Math.random() - 0.5).map((card) => (
          <Card linkImg={card.linkImg} key={card.id} />
        ))
      }
    </Container>
  )
}