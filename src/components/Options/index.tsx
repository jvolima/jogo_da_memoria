import { SelectLevel } from "../SelectLevel";
import { SelectTheme } from "../SelectTheme";
import { Container } from "./styles";

interface OptionsProps {
  toggleTheme: () => void
}

export function Options({ toggleTheme }: OptionsProps) {
  return (
    <Container>
      <SelectLevel />
      <SelectTheme toggleTheme={toggleTheme} />
    </Container>
  )
}