import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./routes";
import GlobalStyle from "./styles/global";
import { theme } from "./styles/theme";

import { ProductsProvider } from "./providers/products";
import { CartProvider } from "./providers/cart";

import Menu from "./components/menu";
import Cart from "./components/cart";

function App(): React.ReactElement {
  return (
    <ChakraProvider theme={theme}>
      <ProductsProvider>
        <CartProvider>
          <BrowserRouter>
            <GlobalStyle />
            <Menu />
            <Cart />
            <Routes />
          </BrowserRouter>
        </CartProvider>
      </ProductsProvider>
    </ChakraProvider>
  );
}

export default App;
