import "styled-components"
import { styled } from "styled-components"

export const Fotos = styled.section`


display: grid;
grid-template-columns:  auto auto auto;

section{
    
    display: grid;
    grid-template-columns:  auto auto auto;
    grid-template-rows: auto auto auto ;
    justify-content: center;
    gap: 0.4rem;
    width: 4rem;
    height: 4rem;
    overflow: hidden;

    width: 100%;
    height: 100%;
    
 img{
    width: 200px;
   }
 }


 @media(max-width: 1300px) {
    section{
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto auto ;
    justify-content: center;
    padding-top: 3rem;
    padding-bottom: 4rem;
    }
  }

  @media(max-width: 1120px) {
    section{
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto auto;
    justify-content: center;
    padding-top: 3rem;
    padding-bottom: 4rem;
  }
  }
  @media(max-width: 800px) {
    section{
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto auto auto;
    justify-content: center;
    padding-top: 3rem;
    padding-bottom: 4rem;
  }
  }
  @media(max-width: 425px) {
    section{
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
    justify-content: center;
    padding-top: 3rem;
    padding-bottom: 4rem;
  }
    
  }

`
