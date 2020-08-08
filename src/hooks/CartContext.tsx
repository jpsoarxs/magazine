import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  useEffect,
  useMemo,
} from 'react';

import { formatValue } from '../helpers';

interface CartItem {
  id: string;
  name: string;
  price: number;
  qtd: number;
}

interface CartContextData {
  addToCart(item: Omit<CartItem, 'qtd'>): void;
  decrementFromCart(cartItemId: string): void;
  incrementFromCart(cartItemId: string): void;
  cartList: CartItem[];
  totalCartValue: string;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

const CartProvider: React.FC = ({ children }) => {
  const [cartList, setCartList] = useState<CartItem[]>([]);
  const [totalCartValue, setTotalCartValue] = useState('R$ 0,00');

  const addToCart = useCallback(
    item => {
      const findCartItem = cartList.find(i => i.id === item.id);
      if (findCartItem) {
        setCartList(
          cartList.map(cartItem => {
            if (cartItem.id === item.id) {
              return {
                ...cartItem,
                qtd: cartItem.qtd + 1,
              };
            }

            return cartItem;
          }),
        );
      } else {
        setCartList(state => [...state, { ...item, qtd: 1 }]);
      }
    },
    [cartList],
  );

  useEffect(() => {
    const { totalValue } = cartList.reduce(
      (acc, cartItem) => {
        acc.totalValue += cartItem.price * cartItem.qtd;

        return acc;
      },
      { totalValue: 0 },
    );

    setTotalCartValue(formatValue(totalValue));
  }, [cartList]);

  const decrementFromCart = useCallback(
    async cartItemId => {
      const findCartItem = cartList.find(item => item.id === cartItemId);

      if (findCartItem?.qtd === 1) {
        return setCartList(cartList.filter(item => item.id !== cartItemId));
      }

      setCartList(
        cartList.map(cartItem => {
          if (cartItem.id === cartItemId) {
            return {
              ...cartItem,
              qtd: cartItem.qtd - 1,
            };
          }

          return cartItem;
        }),
      );
    },
    [cartList],
  );

  const incrementFromCart = useCallback(
    async cartItemId => {
      setCartList(
        cartList.map(cartItem => {
          if (cartItem.id === cartItemId) {
            return {
              ...cartItem,
              qtd: cartItem.qtd + 1,
            };
          }

          return cartItem;
        }),
      );
    },
    [cartList],
  );

  const value = useMemo(
    () => ({ addToCart, cartList, decrementFromCart, incrementFromCart, totalCartValue }),
    [addToCart, cartList, decrementFromCart, incrementFromCart, totalCartValue],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

function useCart(): CartContextData {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('Erro');
  }

  return context;
}

export { useCart, CartProvider };
