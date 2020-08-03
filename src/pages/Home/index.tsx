import React, { useState, useRef, useEffect } from 'react';

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
  ImageContainer,
} from './styles';

interface ResponsiveProps {
  width: number | null;
  height: number | null;
}

const Home: React.FC = () => {
  const [isCartActive, setIsCartActive] = useState(false);
  const [isShareActive, setIsShareActive] = useState(false);
  const [responsiveMagazine, setResponsiveMagazine] = useState<ResponsiveProps>(
    {
      width: null,
      height: null,
    },
  );
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

  useEffect(() => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    let magazineWidth = 0;
    let magazineHeight = 0;

    if (windowWidth <= 520) {
      magazineWidth = 300;
    } else if (windowWidth <= 720 && windowWidth >= 521) {
      magazineWidth = 350;
    } else if (windowWidth >= 920) {
      magazineWidth = 450;
    } else {
      magazineWidth = 450;
    }

    if (windowHeight <= 620) {
      magazineHeight = 450;
    } else if (windowHeight <= 820 && windowHeight >= 621) {
      magazineHeight = 500;
    } else if (windowHeight >= 900) {
      magazineHeight = 650;
    } else {
      magazineWidth = 650;
    }

    setResponsiveMagazine({
      width: magazineWidth,
      height: magazineHeight,
    });
  }, []);

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

        {responsiveMagazine.width && responsiveMagazine.height ? (
          <MainContainer mainWidth={responsiveMagazine.width}>
            {page.page > 1 && (
              <ArrowContainer>
                <ArrowLeft
                  arrowHeight={responsiveMagazine.height}
                  onClick={() => backPage(magazineRef)}
                >
                  <FaArrowLeft size="15" />
                </ArrowLeft>
              </ArrowContainer>
            )}

            <MagazineContainer
              onFlip={e => pageClick(e.data)}
              ref={magazineRef}
              width={responsiveMagazine.width}
              height={responsiveMagazine.height}
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

              <ImageContainer imageHeight={responsiveMagazine.height}>
                <img src={page1} />
                <button>BLa</button>
              </ImageContainer>

              <img src={page2} />
            </MagazineContainer>

            {page.page < page.totalPages && (
              <ArrowContainer>
                <ArrowRight
                  arrowHeight={responsiveMagazine.height}
                  onClick={() => nextPage(magazineRef)}
                >
                  <FaArrowRight size="15" />
                </ArrowRight>
              </ArrowContainer>
            )}
          </MainContainer>
        ) : (
          <div>carregando...</div>
        )}
      </Container>
      <Cart
        isCartActive={isCartActive}
        handleRemoveCart={() => setIsCartActive(false)}
      />
    </>
  );
};

export default Home;
