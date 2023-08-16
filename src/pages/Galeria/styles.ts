import "styled-components"
import { styled } from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Fotos=styled.section`

aside{

  #player {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  max-width: 600px;
  width: 50%;
  height: 600px;
  margin: 0 150px;
  box-shadow: 0 2px 9px black;
  padding: 40px;
  border-radius: 8px;
  margin-top: 5rem;
  background-color: ${colors.secundary};
}

#logo {
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
}

img{
  width: 25rem;
}

#logo i {
  font-size: 200px;
}

#musicName {
  white-space: nowrap; 
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 30px;
}

#controls button {
  border: none;
  background-color: white;
  cursor: pointer;
}

#controls i {
  font-size: 60px;
  padding: 15px;
  border-radius: 100%;
  background-color: ${colors.third};
  transition: all .2s;
}

#controls i:hover {
  background-color: #000;
}

#time {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#time span {
  font-size: 22px;
  color: #000;
}

#footer {
  width: 100%;
}

#progress-bar {
  height: 8px;
  background-color: #ddd;
  cursor: pointer;
  margin-bottom: 6px;
  border-radius: 5px;
}

#progress {
  height: 8px;
  background-color: #333;
  border-radius: 5px;
}

}

display: grid;
grid-template-columns:  auto auto;

section{
    
    display: grid;
    grid-template-columns:  auto auto auto;
    grid-template-rows: auto auto auto ;
    justify-content: center;
    gap: 0.4rem;
    padding-top: 7rem;
   
    
    width: 2rem;
    height: 2rem;
    overflow: hidden;

    width: 100%;
    height: 100%;
    
 img{
    width: 200px;
    
}


}

`