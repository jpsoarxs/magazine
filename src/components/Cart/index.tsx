import React, { useState, useEffect } from 'react';
import { MdClose } from 'react-icons/md';
import {
  Container,
  MainContainer,
  FooterContainer,
  CartItem,
  IconButton,
  ItemTitle,
  ItemPrice,
  ItemGroup,
} from './styles';

interface CartProps {
  handleRemoveCart(): void;
  isCartActive?: boolean;
}

const Cart: React.FC<CartProps> = ({ handleRemoveCart, isCartActive }) => {
  interface cartItemIter {
    id: number;
    name: string;
    price: number;
    qtd: number;
  }

  const [cartItem, setCartItem] = useState<cartItemIter[]>([]);
  const [cartQtd, setCartQtd] = useState<number>(0);
  const [cartValue, setCartValue] = useState<number>(0);

  const addItemCart = (id: number, name: string, price: number) => {
    const index = cartItem.findIndex(val => val.id == id);
    if (index < 0) {
      setCartItem([...cartItem, { id, name, price, qtd: 1 }]);
      setCartQtd(cartQtd + 1);
      setCartValue(cartValue + price);
    } else {
      const qtd = (cartItem[index].qtd += 1);
      cartItem.splice(index);
      setCartItem([...cartItem, { id, name, price, qtd }]);
      setCartValue(cartValue + price);
    }
  };

  const removeItemCart = (id: number) => {
    const index = cartItem.findIndex(val => val.id == id);
    setCartQtd(cartQtd - 1);
    setCartValue(cartValue - cartItem[index].price * cartItem[index].qtd);
    cartItem.splice(index);
    setCartItem([...cartItem]);
  };

  const currency = (value: number) => {
    return new Intl.NumberFormat('br-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  return (
    <Container isCartActive={isCartActive}>
      <header>
        <p>Minha seleção de produtos</p>
        <button type="button" onClick={handleRemoveCart}>
          <MdClose color="#606060" size={24} />
        </button>
      </header>

      <MainContainer>
        {cartItem.map(item => (
          <CartItem>
            <IconButton
              type="button"
              onClick={() => {
                removeItemCart(item.id);
              }}
            >
              <MdClose size={15} />
            </IconButton>
            <ItemTitle>{item.name}</ItemTitle>
            <ItemGroup>
              <ItemPrice>{currency(item.price)}</ItemPrice>
              {item.qtd}
            </ItemGroup>
          </CartItem>
        ))}
      </MainContainer>

      <FooterContainer>
        <p>
          {cartQtd} item. Preço total:
          {currency(cartValue)}
        </p>

        <button
          type="button"
          onClick={() => {
            addItemCart(1, 'teste', 45.5);
          }}
        >
          Enviar pedido pelo Whatsapp
        </button>
        <button type="button">Pagar com Mercado Pago</button>
      </FooterContainer>
    </Container>
  );
};

export default Cart;
