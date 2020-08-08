import React, { useState, useRef, useEffect, useCallback } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import ReactTooltip from 'react-tooltip';
import Header from '../../components/Header';
import Cart from '../../components/Cart';
import Share from '../../components/Share';
import { useCart } from '../../hooks/CartContext';

import { magazineJSON, formatValue } from '../../helpers';

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
  const [page, setPage] = useState({ page: 1, totalPages: 3 });
  const { addToCart } = useCart();
  const magazineRef = useRef<any>(null);
  const [responsiveMagazine, setResponsiveMagazine] = useState<ResponsiveProps>(
    {
      width: null,
      height: null,
    },
  );

  const handleGoToNextPage = useCallback(() => {
    const magazineRefPageFlip = magazineRef?.current?.getPageFlip();
    const currentPage = magazineRefPageFlip.getCurrentPageIndex();
    const totalPages = magazineRefPageFlip.getPageCount() - 1;
    const windowWidth = window.innerWidth;
    const onePerPage = windowWidth <= 960;
    const toPage = onePerPage ? currentPage + 1 : currentPage + 3;

    magazineRefPageFlip.turnToPage(toPage);

    if (currentPage < totalPages) {
      setPage({
        page: toPage,
        totalPages,
      });
    }

    if (isCartActive) {
      setIsCartActive(false);
    }
  }, [isCartActive]);

  const handleGoToPreviousPage = useCallback(() => {
    const magazineRefPageFlip = magazineRef?.current?.getPageFlip();
    const currentPage = magazineRefPageFlip.getCurrentPageIndex() + 1;
    const totalPages = magazineRefPageFlip.getPageCount() - 1;

    if (currentPage > 0) {
      setPage({
        page: currentPage === 1 ? currentPage : currentPage - 1,
        totalPages,
      });

      magazineRefPageFlip.turnToPrevPage();
    }

    if (isCartActive) {
      setIsCartActive(false);
    }
  }, [isCartActive]);

  const handlePageFlipped = useCallback(pageNumber => {
    setPage(({ page: actualPage, totalPages }) => ({
      page: pageNumber > totalPages ? actualPage : pageNumber,
      totalPages,
    }));
  }, []);

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

  const handleAddToCart = useCallback(
    item => {
      addToCart(item);

      if (!isCartActive) {
        setIsCartActive(true);
      }
    },
    [addToCart, isCartActive],
  );

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
          <MainContainer
            mainWidth={responsiveMagazine.width}
            mainHeight={responsiveMagazine.height}
          >
            {page.page > 1 && (
              <ArrowContainer>
                <ArrowLeft
                  arrowHeight={responsiveMagazine.height}
                  onClick={handleGoToPreviousPage}
                >
                  <FaArrowLeft size="15" />
                </ArrowLeft>
              </ArrowContainer>
            )}

            {window.innerWidth <= 960 ? (
              <>
                {magazineJSON.map(magazine => {
                  if (magazine.onePageNumber === page.page) {
                    return (
                      <ImageContainer
                        key={magazine.id}
                        imageHeight={responsiveMagazine.height}
                      >
                        <div>
                          {magazine.buttons.map(button => (
                            <button
                              key={button.name}
                              type="button"
                              style={{
                                bottom: button.onePagePositions.bottom,
                                right: button.onePagePositions.right,
                                left: button.onePagePositions.left,
                                top: button.onePagePositions.top,
                                border: 0
                              }}
                              onClick={() => handleAddToCart(button.item)}
                            >
                              {button.name}
                            </button>
                          ))}
                        </div>
                      </ImageContainer>
                    );
                  }
                })}
              </>
            ) : (
              <>
                {magazineJSON.map(magazine => {
                  if (magazine.twoPagesNumber.includes(page.page)) {
                    return (
                      <ImageContainer
                        key={magazine.id}
                        imageHeight={responsiveMagazine.height}
                      >
                        <div>
                          {magazine.buttons.map(button => (
                            <button
                              key={button.name}
                              type="button"
                              style={{
                                bottom: button.twoPagesPositions.bottom,
                                right: button.twoPagesPositions.right,
                                left: button.twoPagesPositions.left,
                                top: button.twoPagesPositions.top,
                                border: 0
                              }}
                              data-tip={`${button.item.name} | ${formatValue(button.item.price)}`}
                              onClick={() => handleAddToCart(button.item)}
                            >
                              {button.name}
                            </button>
                          ))}
                        </div>
                        <ReactTooltip place="bottom" />
                      </ImageContainer>
                    );
                  }
                })}
              </>
            )}

            <MagazineContainer
              onFlip={e => handlePageFlipped(e.data)}
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
                    para nosso whatsapp e aguarde o retorno para
                    combinar direitinho a forma de pagamento e entrega segura.
                  </ListDescriptionItem>
                </ListDescriptions>

                <BottomText>Boa leitura e boas compras!</BottomText>
              </DescriptionContainer>

              {magazineJSON.map(magazine => (
                <ImageContainer
                  key={magazine.id}
                  imageHeight={responsiveMagazine.height}
                >
                  <img src={magazine.image} alt="Revista - Imagem" />
                </ImageContainer>
              ))}
            </MagazineContainer>

            {page.page < page.totalPages && (
              <ArrowContainer>
                <ArrowRight
                  arrowHeight={responsiveMagazine.height}
                  onClick={handleGoToNextPage}
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
