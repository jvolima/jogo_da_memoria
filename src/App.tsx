import React from "react"
import { Card } from "./components/Card"
import { SelectLevel } from "./components/SelectLevel"
import { Title } from "./components/Title"
import { GlobalStyle } from "./styles/global"

function App() {
  return (
    <>
      <Title />
      <SelectLevel />
      <Card />
      <GlobalStyle />
    </>
  )
}

export default App
