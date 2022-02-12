import React, { useState } from "react"
import { DefaultTheme, ThemeProvider } from "styled-components"
import { Cards } from "./components/Cards"
import { Options } from "./components/Options"
import { Title } from "./components/Title"
import dark from "./styles/themes/dark"
import { GlobalStyle } from "./styles/global"
import light from "./styles/themes/light"
import { usePersistedState } from "./utils/usePersistedState"

function App() {
  const [chosedTheme, setChosedTheme] = usePersistedState<DefaultTheme>("theme", dark)

  function handleSwitchChange() {
    setChosedTheme(chosedTheme.title === "dark" ? light : dark)
  }

  return (
    <ThemeProvider theme={chosedTheme}>
      <Title />
      <Options toggleTheme={handleSwitchChange} />
      <Cards />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
