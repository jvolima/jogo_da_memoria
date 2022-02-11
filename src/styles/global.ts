import { createGlobalStyle } from "styled-components"
import backgroundPng from "../assets/background.png"

export const GlobalStyle = createGlobalStyle`
  @media (max-width: 1080px) {
    html {
      font-size: 93.75%
    }
  }

  @media (max-width: 720px) {
    html { 
      font-size: 87.5%
    }
  }

  body, input, textarea, select, button {
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    font-size: 1rem
  }

  body {
    background: url(${backgroundPng}) no-repeat;
    color: #F2F2F2
  }
`