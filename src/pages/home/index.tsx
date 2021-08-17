import React from "react";
import { SimpleGrid } from "@chakra-ui/react";

import Card from "../../components/card";
import { useProducts } from "../../providers/products";

const ListProducts: React.FC = () => {
  const { data } = useProducts();

  return (
    <main>
      <SimpleGrid columns={4} spacing={10}>
        {data.map((item) => (
          <Card key={item.id} product={item} />
        ))}
      </SimpleGrid>
    </main>
  );
};

export default ListProducts;
