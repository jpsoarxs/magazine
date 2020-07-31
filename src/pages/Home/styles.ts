import styled, { css } from 'styled-components';

interface ContainerProps {
  isCartActive?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: ${props => (props.isCartActive ? 'calc(100% - 360px)' : '100%')};

  height: 100vh;

  position: relative;
  transition: width 0.2s ease-in-out;
  overflow: hidden;

  img {
    width: 100px;
  }
`;

export const MainContainer = styled.div`
  width: 100%;
  max-width: 1250px;
  margin: 0 auto;
  height: calc(100% - 50px);
  display: flex;
  justify-content: center;
  padding: 22px;
`;

export const DescriptionContainer = styled.div`
  width: 100%;
  background-color: #FFF;
  max-width: 50%;
  height: 100%;
  max-height: 650px;
  padding: 20px;
  @media screen and (max-width: 767px) {
    max-width: 75%;
    width: 96% !important;
    margin-left: 56px;
    border-radius: 10px;
  }
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
`;

export const ImageContainer = styled.div`
  text-align: center;
  img {
    height: 100%;
    max-height: 650px;
    transition: 0.6s ease;
  }
`;

export const DescriptionTitle = styled.h1`
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  color: rgb(246,98,48);
  padding: 22px 0;
`;

export const DescriptionSubTitle = styled.p`
  line-height: 1.5;
  font-family: Arial, Helvetica, sans-serif;
`;

export const QuestionText = styled.p`
  padding: 22px 0;
  font-weight: 500;
`;

export const ListDescriptions = styled.ul`
  margin-bottom: 32px;
  padding-left: 32px;
`;

export const ListDescriptionItem = styled.li`
  font-size: 15px;
  padding: 22px 0;
  font-weight: 400;
  font-family: 'Roboto';
`;

export const BottomText = styled.p`
  margin: 12px 0;
`;

export const ActionText = styled.p`
  margin: 12px 0;

  button {
    color: #16a085;
    border: 0;
    background: 0;
    margin-left: 4px;
    text-decoration: underline;
  }
`;

export const ArrowRight = styled.div`
  background-color: #000;
  height: calc(100% - 10px);
  width: 20px;
  opacity: 0.6;
  color: #FFF;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-top: 5px;

  &:hover {
    opacity: 0.8;
  }
`;

export const ArrowLeft = styled.div`
  background-color: #000;
  height: calc(100% - 10px);
  width: 20px;
  opacity: 0.6;
  color: #FFF;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-top: 5px;

  &:hover {
    opacity: 0.8;
  }
`;
