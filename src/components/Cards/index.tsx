import { useState } from "react";
import { Card } from "../Card";
import { Container } from "./styles";

interface CardInfos {
  linkImg: string;
  id: string;
}

export function Cards() {

  const pokeImages = [
    "https://gamepress.gg/pokemonmasters/sites/pokemonmasters/files/styles/300h/public/2020-01/pm0376_00_metagross_256.ktx_.png?itok=sapL6eIc",
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
  ]

  const [cards, setCards] = useState<CardInfos[]>([])
 
  return (
    <Container> 
      <Card linkImg={pokeImages[1]}/>
      <Card linkImg={pokeImages[0]}/>
      <Card linkImg={pokeImages[1]}/>
      <Card linkImg={pokeImages[0]}/>
    </Container>
  )
}