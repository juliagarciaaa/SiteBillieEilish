import * as S from "./styles"
import Logo from "../../assets/logo.png"

export function Header() {
  return (
    <S.Header>
      <picture>
        <img src={Logo} alt="Logo" />
      </picture>
      <S.NavBar>
        <ul>
          <li>
            <a href="/">Início</a>
          </li>
          <li>
            <a href="/Galeria">Galeria</a>
          </li>
          <li>
            <a href="/Login">Login</a>
          </li>
          <li>
            <a href="/Cadastrar">Cadastro</a>
          </li>
        </ul>
      </S.NavBar>
    </S.Header>
  )
}