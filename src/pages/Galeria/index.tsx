import Billieee1 from "../../assets/billieee 1.png"
import Sorrindo2 from "../../assets/sorrindo 2.jpg"
import ComCachorro from "../../assets/com o cachorrinho.jpg"
import CabeloPreto2 from "../../assets/cabelo preto 2.png"
import Sorrindo from "../../assets/sorrindo.jpg"
import NoShow from "../../assets/no show.jpg"
import BillieMeuAmor from "../../assets/billiemeuamor 1.png"
import NaNeve from "../../assets/billieneve.png"
import B12023 from "../../assets/B 1.png"


import * as S from "./styles"

export function Galeria() {
    return (
        <>
            <S.Fotos>
                <aside>
                    <div id="player">

                        <div id="logo">
                            <i id='bx bx-music'></i>
                        </div>

                        <span id="musicName"></span>

                        <audio id="player" src=""></audio>
                        <div id="controls">
                            <button id="prevButton"><i id='bx bx-skip-previous'></i></button>
                            <button id="playPauseButton"><i id='bx bx-caret-right'></i></button>
                            <button id="nextButton"><i id='bx bx-skip-next'></i></button>
                        </div>
                    
                        <div id="footer">
                            <div id="progress-bar">
                                <div id="progress"></div>
                            </div>
                            <div id="time">
                                <span id="currentTime">0:00</span>
                                <span id="duration">0:00</span>
                            </div>
                        </div>
                    </div>
                </aside>
                <section>
                    <img src={Sorrindo} alt="Billie Eilish sorrindo" />

                    <img src={ComCachorro} alt="Billie Eilish com um cachorrinho" />

                    <img src={Sorrindo2} alt="Billie Eilish sorrindo" />

                    <img src={CabeloPreto2} alt="Billie Eilish de cabelo preto médio" />

                    <img src={NoShow} alt="Billie Eilish no show" />

                    <img src={Billieee1} alt="Billie Eilish sorrindo" />

                    <img src={BillieMeuAmor} alt="Billie Eilish loira sorrindo" />

                    <img src={NaNeve} alt="Billie Eilish na neve" />

                    <img src={B12023} alt="Billie Eilish" />

                </section>


            </S.Fotos>
        </>
    )
}