import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./routes";
import GlobalStyle from "./styles/global";
import { theme } from "./styles/theme";
import Menu from "./components/menu";
import { ProductsProvider } from "./providers/products";

function App(): React.ReactElement {
  return (
    <ChakraProvider theme={theme}>
      <ProductsProvider>
        <BrowserRouter>
          <GlobalStyle />
          <Menu />
          <Routes />
        </BrowserRouter>
      </ProductsProvider>
    </ChakraProvider>
  );
}

export default App;
