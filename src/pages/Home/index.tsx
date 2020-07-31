import React, { useState, useRef } from 'react';

import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import Header from '../../components/Header';
import Cart from '../../components/Cart';
import Share from '../../components/Share';

import capa from '../../assets/CAPA_REVISTA.jpg';
import page1 from '../../assets/Pagina_01.jpg';
import page2 from '../../assets/Pagina_02.jpg';

import {
  Container,
  MainContainer,
  DescriptionContainer,
  DescriptionSubTitle,
  QuestionText,
  ListDescriptions,
  ListDescriptionItem,
  BottomText,
  ArrowRight,
  ArrowLeft,
  ArrowContainer,
  MagazineContainer,
} from './styles';

const Home: React.FC = () => {
  const [isCartActive, setIsCartActive] = useState(false);
  const [isShareActive, setIsShareActive] = useState(false);
  const magazineRef = useRef(null);

  const [page, setPage] = useState({ page: 1, totalPages: 3 });

  const nextPage = page => {
    if (page.current.getPageFlip().getCurrentPageIndex() / 2 == 0) {
      page.current.getPageFlip().turnToNextPage();
      setPage({
        page: page.current.getPageFlip().getCurrentPageIndex() + 1,
        totalPages: page.current.getPageFlip().getPageCount() - 1,
      });
    } else {
      page.current.getPageFlip().turnToNextPage();
      setPage({
        page: page.current.getPageFlip().getCurrentPageIndex() + 1,
        totalPages: page.current.getPageFlip().getPageCount() - 1,
      });
    }
  };

  const backPage = page => {
    page.current.getPageFlip().turnToPrevPage();
    setPage({
      page: page.current.getPageFlip().getCurrentPageIndex() + 1,
      totalPages: page.current.getPageFlip().getPageCount() - 1,
    });
  };

  const pageClick = data => {
    if (page.totalPages / 2 == 0) {
      if (data >= page.page) {
        setPage({ page: page.page + 1, totalPages: page.totalPages });
      } else {
        setPage({ page: page.page - 1, totalPages: page.totalPages });
      }
    } else if (data >= page.page) {
      setPage({ page: page.page + 2, totalPages: page.totalPages });
    } else {
      setPage({ page: page.page - 2, totalPages: page.totalPages });
    }
  };

  return (
    <>
      <Container isCartActive={isCartActive}>
        <Header
          page={page}
          handleToggleCart={() => setIsCartActive(!isCartActive)}
          handleToggleShare={() => setIsShareActive(!isShareActive)}
        />
        <Share
          isModalActive={isShareActive}
          handleRemoveModal={() => setIsShareActive(false)}
        />

        <MainContainer>
          {page.page > 1 && (
            <ArrowContainer>
              <ArrowLeft onClick={() => backPage(magazineRef)}>
                <FaArrowLeft size="15" />
              </ArrowLeft>
            </ArrowContainer>
          )}

          <MagazineContainer
            onFlip={e => pageClick(e.data)}
            ref={magazineRef}
            width={450}
            height={650}
            responsive
          >
            <DescriptionContainer>
              <DescriptionSubTitle>
                Ficou ainda mais fácil
                <strong>comprar on-line pelo Whatsapp.</strong>
              </DescriptionSubTitle>

              <QuestionText>Como funciona?</QuestionText>

              <ListDescriptions>
                <ListDescriptionItem>
                  Navegue pelas páginas do catálogo digital e selecione os
                  produtos que deseja comprar clicando no ícone do carrinho de
                  compras.
                </ListDescriptionItem>
                <ListDescriptionItem>
                  Assim que terminar de escolher seus produtos envie a lista
                  para um(a) Consultor(a) Style Brand e aguarde o retorno para
                  combinar direitinho a forma de pagamento e entrega segura.
                </ListDescriptionItem>
              </ListDescriptions>

              <BottomText>Boa leitura e boas compras!</BottomText>
            </DescriptionContainer>

            <img src={capa} />
            <img src={page1} />
            <img src={page2} />
          </MagazineContainer>

          {page.page < page.totalPages && (
            <ArrowContainer>
              <ArrowRight onClick={() => nextPage(magazineRef)}>
                <FaArrowRight size="15" />
              </ArrowRight>
            </ArrowContainer>
          )}
        </MainContainer>
      </Container>
      <Cart
        isCartActive={isCartActive}
        handleRemoveCart={() => setIsCartActive(false)}
      />
    </>
  );
};

export default Home;
