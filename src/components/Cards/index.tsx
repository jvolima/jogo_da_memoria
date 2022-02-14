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
  const [chosenCards, setChosenCards] = useState<CardInfos[]>([])
  const [matchedCards, setMatchedCards] = useState<CardInfos[]>([])

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

  function handleClickCard(id: string, linkImg: string) {
    const card = cards.find((card) => card.id === id) as CardInfos
    console.log(card)
    setChosenCards([card])
  }

  function isChosen(id: string) {
    const card = chosenCards.find((card) => card.id === id);
    if(!card) {
      return false;
    }
    return true;
  }

  function isMatched(id: string) {
    const card = matchedCards.find((card) => card.id === id);
    if(!card) {
      return false;
    }
    return true;
  }

  return (
    <Container> 
      {
        cards.map((card) => (
          <Card
            linkImg={card.linkImg} 
            id={card.id} key={card.id} 
            isChosen={() => isChosen(card.id)} 
            handleClickCard={() => handleClickCard(card.id, card.linkImg)}
            isMatched={() => isMatched(card.id)}
          />
        ))
      }
    </Container>
  )
}