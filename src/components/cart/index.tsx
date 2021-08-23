import React from "react";
import {
  Box,
  Image,
  Stack,
  Heading,
  Text,
  Icon,
  Flex,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Button,
} from "@chakra-ui/react";
import { RiShoppingCartLine } from "react-icons/ri";
import { IoIosRemove, IoIosAdd } from "react-icons/io";

import { useCart } from "../../providers/cart";
import { useProducts } from "../../providers/products";

export default function Cart(): React.ReactElement {
  const {
    disclosure: { isOpen, onClose },
    cart,
    handleRemoveCart,
    handleAddCart,
  } = useCart();
  const { products } = useProducts();

  const handleClose = () => {
    if (onClose) {
      return onClose();
    }
    return null;
  };

  const handleDisabled = (id: number) => {
    const productIndex = products.findIndex((item) => item.id === id);
    if (products[productIndex].quantity === 0) {
      return true;
    }

    return false;
  };

  return (
    <>
      <Drawer
        placement="right"
        onClose={handleClose}
        isOpen={!!isOpen}
        size="md"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader
            borderBottomWidth="1px"
            textAlign="center"
            fontWeight="semibold"
            fontSize="lg"
          >
            CARRINHO ({cart.length})
          </DrawerHeader>

          <DrawerBody p={8}>
            {cart.length === 0 ? (
              <Flex h="100%" justify="center" alignItems="center">
                <Stack spacing="md" alignItems="center">
                  <Icon as={RiShoppingCartLine} boxSize="96px" />
                  <Heading as="h3" fontWeight="semibold" fontSize="lg">
                    Seu carrinho está vazio
                  </Heading>
                  <Text>
                    Navegue pelos nossos produtos e adicione no carrinho.
                  </Text>
                  <Button
                    type="button"
                    onClick={handleClose}
                    colorScheme="red"
                    variant="outline"
                  >
                    Comprar mais
                  </Button>
                </Stack>
              </Flex>
            ) : (
              <Stack spacing="md">
                {cart.map((item) => (
                  <Box key={`cart-${item.id}`} p={4} boxShadow="md">
                    <Stack direction="row" spacing="md">
                      <Box w="60px">
                        <Image src={item.picture} />
                      </Box>
                      <Box flex="1">
                        <Heading as="h4" noOfLines={1} fontSize="sm">
                          {item.title}
                        </Heading>
                        <Box>
                          <Stack spacing="sm" direction="row" mt="md">
                            <Button
                              type="button"
                              p="0"
                              minW="0"
                              h="22px"
                              w="22px"
                              colorScheme="red"
                              variant="outline"
                              onClick={(): void => handleRemoveCart(item.id)}
                            >
                              <Icon as={IoIosRemove} />
                            </Button>
                            <Text as="span">{item.quantity}</Text>
                            <Button
                              type="button"
                              p="0"
                              minW="0"
                              h="22px"
                              w="22px"
                              colorScheme="red"
                              variant="outline"
                              isDisabled={handleDisabled(item.id)}
                              onClick={(): void => handleAddCart(item.id)}
                            >
                              <Icon as={IoIosAdd} />
                            </Button>
                          </Stack>
                        </Box>
                      </Box>
                    </Stack>
                  </Box>
                ))}
              </Stack>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
