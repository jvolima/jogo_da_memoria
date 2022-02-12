import { useState } from "react";
import menuDropSvg from "../../assets/menuDrop.svg"
import { Container } from "./styles";

export function SelectLevel() {
  const [level, setLevel] = useState("fácil");

  return (
    <Container>
        <div>
          <span>Nível {level}</span>
          <img src={menuDropSvg} alt="Menu drop"/>
        </div>
    </Container>
  )
}