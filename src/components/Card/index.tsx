import { useState, useRef } from "react"
import { Container } from "./styles"

interface CardProps {
  linkImg: string;
}

export function Card({ linkImg }: CardProps) {
  const [isTurned, setIsTurned] = useState(true)

  const card = useRef<HTMLDivElement>(null)

  function handleClickCard() {
    setIsTurned(!isTurned)
  }

  return (
    <>
      {
        isTurned == false ?
        <Container onClick={handleClickCard} ref={card}>
          <img src={linkImg} alt="img" className="img" />
        </Container> 
        : 
        <Container onClick={handleClickCard}>
        </Container>
      }
    </>
  )
}