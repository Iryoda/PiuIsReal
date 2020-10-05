import styled from 'styled-components';

export const Father = styled.section` 
  box-sizing: border-box;
  display: grid;
  flex-direction: column;
  grid-gap: 1rem;

  @media(min-width: 700px){
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 1fr 3fr;
    box-sizing: border-box;
    padding: 1rem 1rem;

}

  @media(min-width: 900px){
    grid-template-columns: 1.25fr 3fr 1.25fr;

  }

`;

export const Coluna = styled.div`
  font-size: 1.6rem;
  display: grid;
  grid-gap: 1rem;

  :nth-child(1){
  display: flex;
  flex-flow: column;
  }
  :nth-child(2){
    padding: 0.5rem;
  }
  :nth-child(3){
    display: none;
  }

  @media (min-width: 900px){
  :nth-child(3){
      display: flex;
      flex-flow: column;
    }
  }
`;
