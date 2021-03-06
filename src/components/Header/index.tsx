import React from 'react';
import ReactTooltip from 'react-tooltip';
import {
  MdFileDownload,
  MdMenu,
  MdShare,
  MdShoppingCart,
} from 'react-icons/md';

import {
  Container,
  IconButton,
  CenterHeaderWrapper,
  PageSelectionInput,
} from './styles';

import Logo from '../../assets/logo.png';

interface HeaderProps {
  handleToggleCart(): void;
  handleToggleShare(): void;
  page: {
    page: number;
    totalPages: number;
  };
}

const Header: React.FC<HeaderProps> = ({
  page,
  handleToggleCart,
  handleToggleShare,
}) => {
  return (
    <Container>
      <img src={Logo} alt="Catalogo Digital - Logo" width={90} height={36} />

      <CenterHeaderWrapper>
        <div>
          <IconButton data-tip="Baixar catálogo em PDF" type="button">
            <MdFileDownload size={22} />
          </IconButton>

          <IconButton
            data-tip="Compartilhar catálogo"
            type="button"
            onClick={handleToggleShare}
          >
            <MdShare size={22} />
          </IconButton>
        </div>

        <PageSelectionInput>
          <p>
            <span>{page.page === 0 ? 1 : page.page}</span>
            <span> / </span>
            <span>{page.totalPages}</span>
          </p>
        </PageSelectionInput>

        <div>
          <IconButton
            data-tip="Seu carrinho de compras"
            type="button"
            onClick={handleToggleCart}
          >
            <MdShoppingCart size={22} />
          </IconButton>

          <IconButton data-tip="Criar revista individual" type="button">
            <MdMenu size={22} />
          </IconButton>
        </div>
        <ReactTooltip place="bottom" />
      </CenterHeaderWrapper>

      <div />
    </Container>
  );
};

export default Header;
