import Pagina1 from '../assets/Pagina_01.jpg';
import Pagina2 from '../assets/Pagina_02.jpg';
import Capa from '../assets/CAPA_REVISTA.jpg';

export const magazineJSON = [
  {
    id: 1,
    image: Capa,
    onePageNumber: 1,
    twoPagesNumber: [1],
    buttons: [],
  },
  {
    id: 2,
    image: Pagina1,
    onePageNumber: 2,
    twoPagesNumber: [2, 3],
    buttons: [
      {
        name: 'botão teste',
        onePagePositions: {
          bottom: '10%',
          right: '0%',
          left: '84.8%',
          top: '80.2%',
        },
        twoPagesPositions: {
          bottom: '10%',
          right: '0%',
          left: '44%',
          top: '80%',
        },
        item: { id: 'item1', name: 'abobora', price: 122.5 },
      },
    ],
  },
  {
    id: 3,
    image: Pagina2,
    onePageNumber: 3,
    twoPagesNumber: [2, 3],
    buttons: [
      {
        name: 'botão teste 2',
        onePagePositions: {
          bottom: '0%',
          right: '4.7%',
          left: '81.5%',
          top: '23%',
        },
        twoPagesPositions: {
          bottom: '0%',
          right: '4.7%',
          left: '88.1%',
          top: '23.2%',
        },
        item: { id: 'item2', name: 'alface', price: 52.12 },
      },
      {
        name: 'botão teste 3',
        onePagePositions: {
          bottom: '0%',
          right: '17%',
          left: '55.5%',
          top: '50%',
        },
        twoPagesPositions: {
          bottom: '0%',
          right: '17%',
          left: '76.1%',
          top: '50%',
        },
        item: { id: 'item3', name: 'vagem', price: 325.75 },
      },
      {
        name: 'botão teste 4',
        onePagePositions: {
          bottom: '0%',
          right: '32.5%',
          left: '23%',
          top: '76.6%',
        },
        twoPagesPositions: {
          bottom: '0%',
          right: '32.5%',
          left: '60.9%',
          top: '76.6%',
        },
        item: { id: 'item4', name: 'melancia', price: 212.5 },
      },
    ],
  },
];

export const formatValue = (value: number): string => {
  return new Intl.NumberFormat('br-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};
