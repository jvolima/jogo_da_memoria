import { useContext, useState } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { Container } from "./styles";

interface SelectThemeProps {
  toggleTheme: () => void
}

export function SelectTheme({ toggleTheme }: SelectThemeProps) {
  const { title } = useContext(ThemeContext)

  return (
    <Container>
      <Switch
        className="switch"
        checked={title === "dark"}
        onChange={toggleTheme}
        checkedIcon={false}
        uncheckedIcon={false}
        onColor="#1F0C40"
        offColor="#7C30FF"
      />
    </Container>
  )
}