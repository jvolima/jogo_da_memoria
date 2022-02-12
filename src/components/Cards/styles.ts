import styled from "styled-components";

export const Container = styled.section`
  max-width: 1120px;
  margin: 0 auto;
  margin-top: 7rem;
  padding: 0 0.4rem;
  
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  gap: 2rem;
`