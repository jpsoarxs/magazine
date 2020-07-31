import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  background-color: rgb(233,233,233);
  border-bottom: 7px solid rgb(76,76,76);
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 115px;
    height: 45px;
    margin-left: 10px;
  }
`;

export const IconButton = styled.button`
  border: 0;
  background: transparent;
  transition: all 0.3s ease;
  padding: 12px;

  svg {
    color: rgb(246,98,48);
  }

  &:hover {
    background: rgb(246,98,48);

    svg {
      color: #FFF;
    }
  }
`;

export const CenterHeaderWrapper = styled.div`
  display: flex;
`;

export const PageSelectionInput = styled.div`
  flex: 1;
  width: 100%;
  max-width: 150px;
  margin: 0 2px;

  p {
    border: 0;
    width: 100%;
    padding: 17px;
    text-align: center;
    transition: all 0.3s ease;
    font-size: 15px;
    color: rgb(246,98,48);
    @media screen and (min-width: 767px) {
      margin-right: 50px;
    }
  }
`;
