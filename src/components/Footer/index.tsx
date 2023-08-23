import * as S from "./styles"
import Insta from "../../assets/logo insta.png"
import Spotify from "../../assets/logo spotify.png"

export function Footer() {
  return (
    <S.Footer>
      <a href="https://www.instagram.com/billieeilish/" target="_blank">
        <img src={Insta} alt="Instagram" />
      </a>
      <a href="https://open.spotify.com/intl-pt/artist/6qqNVTkY8uBg9cP3Jd7DAH?si=x9Ygea-tTEi3Hrd8Dt6ZOw">
      <img src={Spotify} alt="Spotify" />
      </a>
    </S.Footer>
  )
}