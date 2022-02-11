import { useState } from "react"
import { Container } from "./styles"

export function Card() {
  const [isTurned, setIsTurned] = useState(false)

  function handleClickCard() {
    setIsTurned(!isTurned)
  }

  return (
    <>
      {
        isTurned == false ?
        <Container onClick={handleClickCard}>
          <img src="http://hp-api.herokuapp.com/images/harry.jpg" alt="img" />
        </Container> 
        : 
        <Container onClick={handleClickCard}>
        </Container>
      }
    </>
  )
}