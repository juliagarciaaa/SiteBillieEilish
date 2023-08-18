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
     <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>close</button>
        <div>Texto que eu ainda vou fazer</div>
      </Modal>
    </div>
      <S.Titulo>
        <aside>
          <img src={TituloPrincipal} alt="titulo billie eilish" />
        </aside>
      </S.Titulo>
      <S.Section>
        <img src={BillieBarbie1} onClick={openModal} alt="foto billie eilish" />
      </S.Section>
    </>
  )
}


