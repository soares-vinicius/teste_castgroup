import React, { useContext, createContext, useState } from "react";
import {
  useDisclosure,
  UseDisclosureProps,
  useToast,
  UseToastOptions,
} from "@chakra-ui/react";
import { ProductModel } from "../models/products";
import { useProducts } from "./products";

interface ContextModel {
  cart: ProductModel[];
  handleAddCart: Function;
  handleRemoveCart: Function;
  disclosure: UseDisclosureProps;
}

const CartContext = createContext<ContextModel>({} as ContextModel);

const CartProvider: React.FC = ({ children }) => {
  const { products, setProducts } = useProducts();
  const toast = useToast();
  const [cart, setCart] = useState<ProductModel[]>([]);
  const disclosure = useDisclosure();

  const addCartToast: UseToastOptions = {
    title: "Produto adicionado ao carrinho",
    status: "success",
    position: "top",
    duration: 5000,
    isClosable: true,
  };

  const removeCartToast: UseToastOptions = {
    title: "Produto removido do carrinho",
    status: "error",
    position: "top",
    duration: 5000,
    isClosable: true,
  };

  const handleAddCart = (id: number) => {
    const productIndex = products.findIndex((item) => item.id === id);
    const oldProduct = products[productIndex];
    const updatedProduct = { ...oldProduct, quantity: oldProduct.quantity - 1 };
    const cloneProduct = [...products];
    cloneProduct[productIndex] = updatedProduct;
    setProducts(cloneProduct);

    const cartIndex = cart.findIndex((item) => item.id === id);

    if (cartIndex === -1) {
      const getProduct = products[productIndex];
      const product = { ...getProduct, quantity: 1 };
      toast(addCartToast);
      return setCart([...cart, product]);
    }

    const oldCart = cart[cartIndex];
    const updatedCart = { ...oldCart, quantity: oldCart.quantity + 1 };
    const cloneCart = [...cart];
    cloneCart[cartIndex] = updatedCart;
    toast(addCartToast);
    setCart(cloneCart);
  };

  const handleRemoveCart = (id: number) => {
    const productIndex = products.findIndex((item) => item.id === id);
    const oldProduct = products[productIndex];
    const updatedProduct = { ...oldProduct, quantity: oldProduct.quantity + 1 };
    const cloneProduct = [...products];
    cloneProduct[productIndex] = updatedProduct;
    setProducts(cloneProduct);

    const cartIndex = cart.findIndex((item) => item.id === id);
    const oldCart = cart[cartIndex];
    const cloneCart = [...cart];

    if (oldCart.quantity === 1) {
      cloneCart.splice(cartIndex, 1);
      toast(removeCartToast);
      return setCart(cloneCart);
    }

    const updatedCart = { ...oldCart, quantity: oldCart.quantity - 1 };
    cloneCart[cartIndex] = updatedCart;
    toast(removeCartToast);
    setCart(cloneCart);
  };

  return (
    <CartContext.Provider
      value={{ cart, disclosure, handleAddCart, handleRemoveCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

function useCart(): ContextModel {
  const context = useContext(CartContext);
  const { cart, disclosure, handleAddCart, handleRemoveCart } = context;
  return { cart, disclosure, handleAddCart, handleRemoveCart };
}

export { CartProvider, useCart };
