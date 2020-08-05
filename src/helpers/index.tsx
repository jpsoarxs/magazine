import Pagina1 from '../assets/Pagina_01.jpg';
import Pagina2 from '../assets/Pagina_02.jpg';
import Capa from '../assets/CAPA_REVISTA.jpg';

export const magazineJSON = [
  {
    image: Capa,
    pageNumber: 1,
    buttons: [],
  },
  {
    image: Pagina1,
    pageNumber: 2,
    buttons: [
      {
        name: 'botão teste',
        bottom: '10%',
        right: '0%',
        left: '42.8%',
        top: '72%',
        item: { id: 'item1', name: 'abobora', price: 122.5 },
      },
    ],
  },
  {
    image: Pagina2,
    pageNumber: 3,
    buttons: [
      {
        name: 'botão teste 2',
        bottom: '0%',
        right: '4.7%',
        left: '87.9%',
        top: '30.5%',
        item: { id: 'item2', name: 'alface', price: 52.12 },
      },
      {
        name: 'botão teste 3',
        bottom: '0%',
        right: '17%',
        left: '75.5%',
        top: '50%',
        item: { id: 'item3', name: 'vagem', price: 325.75 },
      },
      {
        name: 'botão teste 4',
        bottom: '0%',
        right: '32.5%',
        left: '60%',
        top: '69.5%',
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
