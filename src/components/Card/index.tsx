import { useState, useRef } from "react"
import { Container } from "./styles"

interface CardProps {
  linkImg: string;
}

export function Card({ linkImg }: CardProps) {
  const [isTurned, setIsTurned] = useState(false)

  function handleClickCard() {
    setIsTurned(!isTurned)
  }

  return (
    <>
      {
        isTurned == true ?
        <Container onClick={handleClickCard}>
          <img src={linkImg} alt="img" className="img" />
        </Container> 
        : 
        <Container onClick={handleClickCard}>
        </Container>
      }
    </>
  )
}