import React, { useState } from 'react';
import HTMLFlipBook from "react-pageflip";


import Header from '../../components/Header';
import Cart from '../../components/Cart';
import Share from '../../components/Share';

import capa from '../../assets/CAPA_REVISTA.jpg';
import page1 from '../../assets/Pagina_01.jpg';
import page2 from '../../assets/Pagina_02.jpg';

import {
  FaArrowRight,
  FaArrowLeft
} from 'react-icons/fa';

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
} from './styles';

const Home: React.FC = () => {
  const [isCartActive, setIsCartActive] = useState(false);
  const [isShareActive, setIsShareActive] = useState(false);

  const [page, setPage] = useState({ page: 1, totalPages: 3 });

  const nextPage = (page) => {
    if (page.getPageFlip().getCurrentPageIndex()/2 == 0) {
      page.getPageFlip().turnToNextPage()
      setPage({page: page.getPageFlip().getCurrentPageIndex() + 1, totalPages: page.getPageFlip().getPageCount() - 1})
    } else {
      page.getPageFlip().turnToNextPage()
      setPage({page: page.getPageFlip().getCurrentPageIndex() + 1, totalPages: page.getPageFlip().getPageCount() - 1})
    }
  }

  const backPage = (page) => {
    page.getPageFlip().turnToPrevPage()
    setPage({page: page.getPageFlip().getCurrentPageIndex()+1, totalPages: page.getPageFlip().getPageCount() - 1})
  }

  const pageClick = (data) => {
    if (page.totalPages/2 == 0) {
      if (data >= page.page) {
        setPage({page: page.page + 1, totalPages: page.totalPages})
      } else {
        setPage({page: page.page - 1, totalPages: page.totalPages})
      }
    } else {
      if (data >= page.page) {
        setPage({page: page.page + 2, totalPages: page.totalPages})
      } else {
        setPage({page: page.page - 2, totalPages: page.totalPages})
      }
    }
  }

  let pageFlip

  return (
    <>
      <Container isCartActive={isCartActive}>
        <Header page={page} handleToggleCart={() => setIsCartActive(!isCartActive)} handleToggleShare={() => setIsShareActive(!isShareActive)} />
        <MainContainer>
          <Share isModalActive={isShareActive} handleRemoveModal={() => setIsShareActive(false)} />
          {page.page > 1 && <ArrowLeft onClick={() => {backPage(pageFlip)}}><FaArrowLeft size="15" /></ArrowLeft>}

          <HTMLFlipBook
            onFlip={(e) => {pageClick(e.data)}}
            ref={(component) => (pageFlip = component)}
            width={450}
            height={650}
          >
            <DescriptionContainer>

            <DescriptionSubTitle>
              Ficou ainda mais fácil
              <strong>
                comprar on-line pelo Whatsapp.
              </strong>
            </DescriptionSubTitle>

            <QuestionText>Como funciona?</QuestionText>

            <ListDescriptions>
              <ListDescriptionItem>
                Navegue pelas páginas do catálogo digital e selecione os
                produtos que deseja comprar clicando no ícone do carrinho de
                compras.
              </ListDescriptionItem>
              <ListDescriptionItem>
                Assim que terminar de escolher seus produtos envie a lista para
                um(a) Consultor(a) Style Brand e aguarde o retorno para combinar
                direitinho a forma de pagamento e entrega segura.
              </ListDescriptionItem>
            </ListDescriptions>

            <BottomText>Boa leitura e boas compras!</BottomText>
            </DescriptionContainer>
            <img src={capa} />
            <img src={page1} />
            <img src={page2} />
          </HTMLFlipBook>

          {/* <ImageContainer>
            <img src={capa} />
          </ImageContainer> */}

          {page.page < page.totalPages && <ArrowRight onClick={() => {nextPage(pageFlip)}}><FaArrowRight size="15" /></ArrowRight>}
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
