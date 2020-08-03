import styled from 'styled-components';

interface ContainerProps {
  isModalActive?: boolean;
}

export const Modal = styled.div<ContainerProps>`
  display: ${props => (props.isModalActive ? 'block' : 'none')};
  z-index: 3;
  padding-top: 100px;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalBody = styled.div<ContainerProps>`
  margin: auto;
  background-color: rgb(233, 233, 233);
  position: relative;
  padding: 35px;
  outline: 0;
  width: 30%;
  border-radius: 10px;
  text-align: center;

  @media screen and (max-width: 767px) {
    width: 70%;
  }

  a + a {
    margin-left: 25px;
  }

  a:hover {
    color: rgb(246, 98, 48);
  }
`;

export const Close = styled.span`
  position: absolute;
  right: 0;
  top: 10px;
  margin-right: 10px;
  cursor: pointer;
`;

export const ButtonFace = styled.a`
  border: none;
  color: #3b5998;
  background-color: rgb(233, 233, 233);
  cursor: pointer;
`;

export const ButtonWhat = styled.a`
  border: none;
  color: #25d366;
  background-color: rgb(233, 233, 233);
  cursor: pointer;
`;
