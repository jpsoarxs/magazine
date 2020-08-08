import React from 'react';
import { FaFacebook, FaWhatsapp, FaWindowClose } from 'react-icons/fa';
import { Modal, ModalBody, Close, ButtonFace, ButtonWhat } from './styles';
import { isMobile } from "react-device-detect";

interface ModalProps {
  handleRemoveModal(): void;
  isModalActive?: boolean;
}

const Share: React.FC<ModalProps> = ({ handleRemoveModal, isModalActive }) => {
  return (
    <Modal isModalActive={isModalActive} onClick={handleRemoveModal}>
      <ModalBody>
        <Close onClick={handleRemoveModal}>
          <FaWindowClose size={25} />
        </Close>
        <ButtonFace
          onClick={() => {
            window.open(
              'https://www.facebook.com/sharer.php?u=https%3A%2F%2Fstylebrandoficial.com.br%2F&v=680006287',
              'newwindow',
              'width=500, height=400',
            );
          }}
        >
          <FaFacebook size={80} />
        </ButtonFace>
        <ButtonWhat onClick={() => {
          if (!isMobile) {
            window.open(
              'https://web.whatsapp.com/send?text=https://stylebrandoficial.com.br&v=1605174138',
              'newwindow',
              'width=500, height=400',
            );
          } else {
            window.open(
              'whatsapp://send?text=https://stylebrandoficial.com.br',
              'newwindow',
              'width=500, height=400',
            );
          }
        }}>
          <FaWhatsapp size={80} />
        </ButtonWhat>
      </ModalBody>
    </Modal>
  );
};

export default Share;
