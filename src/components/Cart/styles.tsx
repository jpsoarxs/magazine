import styled from 'styled-components';

interface ContainerProps {
  isCartActive?: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: absolute;
  z-index: 9999;
  top: 0;
  display: ${props => (props.isCartActive ? 'block' : 'none')};
  right: ${props => (props.isCartActive ? '0px' : '-360px')};
  width: 100%;
  height: 100vh;
  max-width: 360px;
  @media screen and (max-width: 767px) {
    max-width: 100% !important;
  }

  transition: right 0.3s ease-in-out;

  header {
    display: flex;
    background: #f2f2f2;
    justify-content: center;
    align-items: center;
    position: relative;

    padding: 14.5px 12px;

    button {
      border: 0;
      text-align: right;
      position: absolute;
      right: 10px;
      padding: 6px;
    }

    p {
      font-size: 16px;
    }
  }
`;

export const MainContainer = styled.ul`
  background: #f2f2f2;
  display: flex;
  flex-direction: column;
  height: 100%;
  height: calc(100vh - 260px);
  padding: 6px;
  overflow: auto;
  cursor: context-menu;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 22px;
  border-left: 1px solid #f2f2f2;
  background-color: #fff;
  width: 100%;
  p {
    margin-bottom: 12px;
  }

  button {
    width: 100%;
    border: 0;
    margin-bottom: 12px;
    color: #fff;
    background-color: rgb(246, 98, 48);

    &:first-of-type {
      padding: 22px;
    }

    &:last-of-type {
      padding: 12px 22px;
    }
  }
`;

export const CartItem = styled.li`
  display: flex;
  padding: 12px 20px;
  padding-left: 0;
  width: 100%;
  height: 100px;
  -webkit-transition: all 0.1s ease-in-out;
  -o-transition: all 0.1s ease-in-out;
  transition: all 0.1s ease-in-out;
`;

export const IconButton = styled.button`
  border: 0;
  background: transparent;
  transition: all 0.3s ease;
  padding: 12px;

  svg {
    color: rgb(246, 98, 48);
  }

  &:hover {
    background: rgb(246, 98, 48);

    svg {
      color: #fff;
    }
  }
`;

export const ItemTitle = styled.p`
  margin-left: 5px;
  max-width: 65%;
  width: 65%;
  font-weight: bold;
`;

export const ItemPrice = styled.p`
  margin-top: 10px;
  font-weight: bold;
  color: #76c462;
`;

export const ItemGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  text-align: center;
`;
