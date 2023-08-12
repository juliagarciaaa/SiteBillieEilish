import * as S from "./styles"
import Insta from "../../assets/logo insta.png"
import Spotify from "../../assets/logo spotify.png"

export function Footer() {
  return (
    <S.Footer>
      <a href="" target="_blank">
        <img src={Insta} alt="Instagram" />
      </a>
      <img src={Spotify} alt="Spotify" />
    </S.Footer>
  )
}