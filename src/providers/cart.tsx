import React, { useContext, createContext } from "react";

interface ContextModel {
  data: number[];
}

const CartContext = createContext<ContextModel>({} as ContextModel);

const cartProvider: React.FC = ({ children }) => {
  const data = [0, 1, 2];
  return (
    <CartContext.Provider value={{ data }}>{children}</CartContext.Provider>
  );
};

function useProducts(): ContextModel {
  const context = useContext(CartContext);
  const { data } = context;
  return { data };
}

export { cartProvider, useProducts };
