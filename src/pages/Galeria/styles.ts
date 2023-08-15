import "styled-components"
import { styled } from "styled-components"

export const Fotos=styled.section`

display: grid;
grid-template-columns:  auto auto;
aside{

    #player {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  height: 500px;
  margin: 0 10px;
  box-shadow: 0 1px 10px gray;
  padding: 10px;
  border-radius: 5px;
}

#logo {
  background-color: #f7f7f7;
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
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
  padding: 5px;
  border-radius: 50%;
  background-color: #f7f7f7;
  transition: all .2s;
}

#controls i:hover {
  background-color: lightgray;
}

#time {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#time span {
  font-size: 22px;
  color: #333;
}

#footer {
  width: 100%;
}

#progress-bar {
  height: 8px;
  background-color: #ddd;
  cursor: pointer;
  margin-bottom: 5px;
  border-radius: 5px;
}

#progress {
  height: 8px;
  background-color: #333;
  border-radius: 5px;
}

}
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