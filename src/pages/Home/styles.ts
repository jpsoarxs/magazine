import styled from 'styled-components';
import HTMLFlipBook from 'react-pageflip';

interface ContainerProps {
  isCartActive?: boolean;
}

interface ImageContainerProps {
  imageHeight: number | null;
}

interface ArrowProps {
  arrowHeight: number;
}

interface MainContainerProps {
  mainWidth: number;
}

export const Container = styled.div<ContainerProps>`
  width: ${props => (props.isCartActive ? 'calc(100% - 360px)' : '100%')};

  height: 100vh;

  transition: width 0.2s ease-in-out;
  overflow: hidden;

  img {
    width: 100px;
  }
`;

export const MainContainer = styled.div<MainContainerProps>`
  width: 100%;
  margin: 0 auto;

  @media screen and (min-width: 1000px) {
    max-width: 940px;
  }

  @media screen and (max-width: 960px) {
    max-width: ${props => `${props.mainWidth}px`};
  }
  height: calc(100% - 50px);
  display: flex;
  justify-content: center;
  padding: 22px 0;

  position: relative;
`;

export const DescriptionContainer = styled.div`
  background-color: #fff;
  max-height: 650px;
  padding: 20px;
`;

export const MagazineContainer = styled(HTMLFlipBook)`
  p {
    background-color: #fff;
  }
`;

export const DescriptionTitle = styled.h1`
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  color: rgb(246, 98, 48);
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

export const ArrowContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const ArrowRight = styled.div<ArrowProps>`
  background-color: #000;
  width: 20px;
  opacity: 0.6;
  color: #fff;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  height: 100%;
  max-height: ${props => `${props.arrowHeight}px`};

  z-index: 999;
`;

export const ArrowLeft = styled.div<ArrowProps>`
  background-color: #000;
  width: 20px;
  opacity: 0.6;
  color: #fff;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  height: 100%;
  max-height: ${props => `${props.arrowHeight}px`};

  z-index: 999;
`;

export const ImageContainer = styled.div<ImageContainerProps>`
  img {
    width: 100%;
    max-height: ${props => `${props.imageHeight}px`};
    height: 100%;
    position: relative;
    z-index: 999999;
  }

  button {
    width: 60px;
    height: 60px;
    position: absolute;
    z-index: 999999;
    background: transparent;
    color: transparent;
    border: 0;
  }
`;
