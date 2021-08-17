import React, { useContext, createContext, useState, useEffect } from "react";
import { useCallback } from "react";
import { ProductModel } from "../models/products";
import { useCastApi } from "../services/api";

interface ContextModel {
  loadProucts(): Promise<void>;
  data: ProductModel[];
}

const ProductsContext = createContext<ContextModel>({} as ContextModel);

const ProductsProvider: React.FC = ({ children }) => {
  const castApi = useCastApi();
  const [data, setData] = useState(new Array<ProductModel>());

  const loadProucts = useCallback(async (): Promise<void> => {
    const response = await castApi.get(`products/`);
    await setData(response.data);
  }, [castApi]);

  useEffect(() => {
    loadProucts();
  }, []);

  return (
    <ProductsContext.Provider value={{ data, loadProucts }}>
      {children}
    </ProductsContext.Provider>
  );
};

function useProducts(): ContextModel {
  const context = useContext(ProductsContext);
  const { data, loadProucts } = context;
  return { data, loadProucts };
}

export { ProductsProvider, useProducts };
