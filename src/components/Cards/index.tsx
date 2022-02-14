import { ReactElement, useEffect, useState } from "react";
import { Card } from "../Card";
import { Container } from "./styles";
import { pokeImages } from "../../services/images"

interface CardInfos {
  linkImg: string;
  id: string;
}

export function Cards() {
  const [cards, setCards] = useState<CardInfos[]>([])
  const [chosenCards, setChosenCards] = useState<CardInfos[]>([])
  const [matchedCards, setMatchedCards] = useState<CardInfos[]>([])

  useEffect(() => {
    pokeImages.sort(() => Math.random() - 0.5).map((img) => {
      const newCards = [
        {
          id: Math.random().toString(),
          linkImg: img,
        }
      ] 

      const repeatedCards = cards.filter(card => card.linkImg === newCards[0].linkImg)

      repeatedCards.length > 0 ? "" : setCards(oldState => [...oldState, ... newCards]);
    })
  }, [])

  function handleClickCard(id: string, linkImg: string) {
    const card = cards.find((card) => card.id === id) as CardInfos
    if(chosenCards.length < 1) {
      setChosenCards(oldProps => [...oldProps, card]);
      return;

    } else if(chosenCards.length < 2) {
      setChosenCards(oldProps => [...oldProps, card]);
      const newCards = [...chosenCards, card];
      const openCards = newCards.filter((card) => card.linkImg === linkImg)

      if(openCards.length == 2) {
        const cardsMatched = [...matchedCards, ...openCards]
        setMatchedCards(oldProps => [...oldProps, ...openCards])
        setChosenCards([])
        if(cardsMatched.length === pokeImages.length) {
          setTimeout(() => {
            alert("VITORIA")
            setMatchedCards([])
            setChosenCards([])
          }, 300)          
        }
      } else {
        setTimeout(() => {
          setChosenCards([])
        }, 600)  
      }
    } 
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