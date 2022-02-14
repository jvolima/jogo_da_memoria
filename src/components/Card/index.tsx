import { useState, useRef } from "react"
import { Container } from "./styles"

interface CardProps {
  linkImg: string;
  id: string;
  isChosen: (id: string) => boolean;
  handleClickCard: (id: string, linkImg: string) => void;
  isMatched: (id: string) => boolean;
}

export function Card({ id, linkImg, isChosen, handleClickCard, isMatched }: CardProps) {
  return (
    <>
      {
        isChosen(id) || isMatched(id) == true ?
        <Container onClick={() => handleClickCard(id, linkImg)}>
          <img src={linkImg} alt="img" className="img" />
        </Container> 
        : 
        <Container onClick={() => handleClickCard(id, linkImg)}>
        </Container>
      }
    </>
  )
}