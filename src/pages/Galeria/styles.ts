import "styled-components"
import { colors } from "../../styles/GlobalStyle"
import { styled } from "styled-components"

export const Fotos=styled.section`

div{
    
    display: grid;
    grid-template-columns:  auto auto auto;
    grid-template-rows: auto auto auto ;
    justify-content: center;
    gap: 0.5rem;
    padding: 1rem;
    
main section.img img{
    width: 100%;
    
}

    width: 20rem;
    height: 20rem;
    overflow: hidden;

    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 400ms;


    transform: scale(1.2);

}

`