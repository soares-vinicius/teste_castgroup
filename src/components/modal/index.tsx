import {
  Button,
  Image,
  Icon,
  Divider,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  Box,
  UseDisclosureProps,
  ModalCloseButton,
  ModalBody,
  Text,
  Stack,
} from "@chakra-ui/react";
import { RiShoppingCartLine } from "react-icons/ri";

import { ProductModel } from "../../models/products";
import { useCart } from "../../providers/cart";
import { currencyFormatter } from "../../utils/formatter";

interface ProductModalProps {
  product: ProductModel;
  modalProps: UseDisclosureProps;
}

export default function ProductModal({
  product,
  modalProps,
}: ProductModalProps) {
  const { handleAddCart } = useCart();
  const { isOpen, onClose } = modalProps;

  const {
    brand,
    description,
    title,
    chipType,
    memory,
    price,
    picture,
    quantity,
    id,
  } = product;
  return (
    <>
      <Modal
        isOpen={!!isOpen}
        onClose={() => onClose}
        scrollBehavior="inside"
        size="6xl"
        closeOnEsc
        closeOnOverlayClick
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton onClick={onClose} mr="10px" />
          <ModalBody p={8} mt="10px">
            <SimpleGrid columns={2} spacing={10}>
              <Box>
                <Image src={picture} w="320px" margin="0 auto" />

                <Divider mt="md" />

                <Stack direction="row" justify="space-around" mt="md">
                  <Box>
                    <Text as="h4" fontWeight="semibold">
                      Marca:
                    </Text>
                    <Text fontSize="sm">{brand}</Text>
                  </Box>

                  <Box>
                    <Text as="h4" fontWeight="semibold">
                      Memória:
                    </Text>
                    <Text fontSize="sm">{memory}</Text>
                  </Box>

                  <Box>
                    <Text as="h4" fontWeight="semibold">
                      Tipo do Chip:
                    </Text>
                    <Text fontSize="sm">{chipType}</Text>
                  </Box>
                </Stack>
              </Box>
              <Stack textAlign="center">
                <Text
                  as="h2"
                  fontWeight="bold"
                  fontSize="lg"
                  lineHeight="tight"
                >
                  {title}
                </Text>
                <Text as="h3" fontWeight="semibold" color="gray.400">
                  {currencyFormatter(price)}
                  <Text as="span" ml="md">
                    10 x {currencyFormatter((price / 10).toFixed(2))}
                  </Text>
                </Text>

                <Button
                  m="25px 0 10px !important"
                  color="white"
                  colorScheme="red"
                  disabled={quantity === 0}
                  onClick={() => handleAddCart(id)}
                >
                  <Icon as={RiShoppingCartLine} mr="10px" /> Comprar
                </Button>

                <Divider />

                <Stack textAlign="left">
                  <Text as="h4" fontWeight="semibold">
                    Descrição:
                  </Text>
                  <Text fontSize="sm">{description}</Text>
                </Stack>
              </Stack>
            </SimpleGrid>

            <Divider mt="md" />

            <Stack
              textAlign="center"
              direction="row"
              justify="space-around"
              mt="md"
            >
              <Box maxW="290px">
                <Text as="h4" fontWeight="bold">
                  ENTREGA
                </Text>
                <Text fontSize="sm">
                  Entrega rápida para todo o Brasil. Simule o prazo com o seu
                  CEP.
                </Text>
              </Box>

              <Box maxW="290px">
                <Text as="h4" fontWeight="bold">
                  DEVOLUÇÕES
                </Text>
                <Text fontSize="sm">
                  10 dias para devolver seu pedido, sem perrengue.
                </Text>
              </Box>

              <Box maxW="290px">
                <Text as="h4" fontWeight="semibold">
                  DÚVIDAS?
                </Text>
                <Text fontSize="sm">
                  Estamos prontos para te atender no (XX) XXXX-XXXX de seg. a
                  sex. 8h as 22h, sáb 12h as 20h.
                </Text>
              </Box>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
