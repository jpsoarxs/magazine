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

import { formatValue } from '../../helpers';

import { useCart } from '../../hooks/CartContext';

interface CartProps {
  handleRemoveCart(): void;
  isCartActive?: boolean;
}

const Cart: React.FC<CartProps> = ({ handleRemoveCart, isCartActive }) => {
  const { cartList, decrementFromCart, totalCartValue } = useCart();

  return (
    <Container isCartActive={isCartActive}>
      <header>
        <p>Minha seleção de produtos</p>
        <button type="button" onClick={handleRemoveCart}>
          <MdClose color="#606060" size={24} />
        </button>
      </header>

      <MainContainer>
        {cartList.map(item => (
          <CartItem key={item.id}>
            <IconButton
              type="button"
              onClick={() => decrementFromCart(item.id)}
            >
              <MdClose size={15} />
            </IconButton>
            <ItemTitle>{item.name}</ItemTitle>
            <ItemGroup>
              <ItemPrice>{formatValue(item.price)}</ItemPrice>
              {item.qtd}
            </ItemGroup>
          </CartItem>
        ))}
      </MainContainer>

      <FooterContainer>
        <p>
          Preço total:
          {totalCartValue}
        </p>

        <button type="button">Enviar pedido pelo Whatsapp</button>
        <button type="button">Pagar com Mercado Pago</button>
      </FooterContainer>
    </Container>
  );
};

export default Cart;
