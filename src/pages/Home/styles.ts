import styled from "styled-components"


export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: flex-end;
  gap: 5rem;
 


  img {
    display: flex;
    width: 35rem;
    cursor: pointer;
    box-shadow: 2px 3px 20px -5px rgba(97,94,97,1);
    border-radius: 50px;
  }

  @media(max-width: 1300px) {
    img {
      width: 90%;
    }
  }
  @media(max-width: 1120px) {
    justify-content: center;
  }
  @media(max-width: 800px) {
    img{
      width: 70%;
    }
  }
  @media(max-width: 425px) {
      width: 60%;
      display: flex;
    
  }

`
export const Titulo = styled.aside`
  justify-content: center;
  flex-direction: column;
 img{
  padding: 0.5rem;
 }
 picture{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
 }

 @media(max-width: 1300px) {
  img {
    width: 90%;
  }
 }
 @media(max-width: 1120px) {
  margin-right: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  }

  @media(max-width: 800px) {
      width: 60%;
      display: flex;
    
  }
  @media(max-width: 425px) {

      width: 40%;
      display: flex;
      justify-content: center;
      align-items: center;
  }

`