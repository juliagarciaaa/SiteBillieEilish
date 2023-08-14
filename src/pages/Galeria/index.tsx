import Billieee1 from "../../assets/billieee 1.png"
import Sorrindo2 from "../../assets/sorrindo 2.jpg"
import ComCachorro from "../../assets/com o cachorrinho.jpg"
import CabeloPreto2 from "../../assets/cabelo preto 2.png"
import Sorrindo from "../../assets/sorrindo.jpg"
import NoShow from "../../assets/no show.jpg"
import BillieMeuAmor from "../../assets/billiemeuamor 1.png"
import NaNeve from "../../assets/billieneve.png"
import * as S from "./styles"

export function Galeria() {
    return (
        <>
            <S.Fotos>
                <div>
                    <img src={Sorrindo} alt="Billie Eilish sorrindo" />
                </div>

                <div>
                    <img src={ComCachorro} alt="Billie Eilish com um cachorrinho" />
                </div>

                <div>
                    <img src={Sorrindo2} alt="Billie Eilish sorrindo" />
                </div>

                <div>
                    <img src={CabeloPreto2} alt="Billie Eilish de cabelo preto médio" />
                </div>

                <div>
                    <img src={NoShow} alt="Billie Eilish no show" />
                </div>

                <div>
                    <img src={Billieee1} alt="Billie Eilish sorrindo" />

                </div>
                <div>
                    <img src={BillieMeuAmor} alt="Billie Eilish loira sorrindo" />
                </div>

                <div>
                    <img src={NaNeve} alt="Billie Eilish na neve" />
                </div>

            </S.Fotos>
        </>
    )
}