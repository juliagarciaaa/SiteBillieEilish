import * as S from './styles'
import BillieBarbie1 from "../../assets/BillieBarbie1.png"
import BillieBarbie2 from "../../assets/BillieBarbie2 1.png"
import TituloPrincipal from "../../assets/Billie Eilish.png"

export function Home() {
  return (
    <>
    <S.Titulo>
    <aside>
    <img src={TituloPrincipal} alt="titulo billie eilish" />
    </aside>
    </S.Titulo>
      <S.Section>
        <img src={BillieBarbie1} alt="foto billie eilish" />
        <img src={BillieBarbie2} alt="foto billie eilish" />
      </S.Section>
      </>
  )
}


