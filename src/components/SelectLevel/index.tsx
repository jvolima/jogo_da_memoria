import { useState } from "react";
import menuDropSvg from "../../assets/menuDrop.svg"
import { Container } from "./styles";

export function SelectLevel() {
  const [level, setLevel] = useState("Nível fácil");

  return (
    <Container>
        <span>{level}</span>
        <img src={menuDropSvg} alt="Menu drop"/>
    </Container>
  )
}