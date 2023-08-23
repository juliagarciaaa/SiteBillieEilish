import * as S from './styles'
import BillieBarbie1 from "../../assets/billie eilish face card 1.png"
import TituloPrincipal from "../../assets/Billie Eilish.png"
import Modal from 'react-modal';
import React from 'react';

export function Home() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div className='Modal'>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >
          <button onClick={closeModal}>Fechar</button>
          <div> <br>
          </br>"What Was I Made For? " é uma música da cantora americana Billie Eilish de Barbie: The Album , trilha sonora do filme Barbie . A música foi lançada pela Atlantic Records , Darkroom e Interscope Records em 13 de julho de 2023, como o quarto single da trilha sonora. "What Was I Made For?" liderou as paradas na Austrália, Irlanda, Suíça e Reino Unido.
            <br />
            <br />
            Billie Eilish Pirate Baird O'Connell é uma cantora e compositora estadunidense. Ganhou popularidade em 2016, quando lançou o single de estreia "Ocean Eyes" no SoundCloud, posteriormente lançado pelas gravadoras Darkroom e Interscope Records
          </div>
        </Modal>
      </div>

      <S.Titulo>
        <picture>
          <img src={TituloPrincipal} alt="titulo billie eilish" />
        </picture>
      </S.Titulo>
      <S.Section>
        <img src={BillieBarbie1} onClick={openModal} alt="foto billie eilish" />
      </S.Section>

    </>
  )
}


