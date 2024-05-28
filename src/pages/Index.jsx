import { Box, Container, VStack, Heading, Text, SimpleGrid, Image, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const sampleProducts = [
  {
    id: 1,
    name: "Smartphone",
    price: "$699",
    image: "/images/smartphone.jpg",
  },
  {
    id: 2,
    name: "Laptop",
    price: "$999",
    image: "/images/laptop.jpg",
  },
  {
    id: 3,
    name: "Smartwatch",
    price: "$199",
    image: "/images/smartwatch.jpg",
  },
  {
    id: 4,
    name: "Headphones",
    price: "$149",
    image: "/images/headphones.jpg",
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center" mt={8}>
          Welcome to ElectroShop
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Your one-stop shop for the latest electronics
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10} mt={8}>
          {sampleProducts.map((product) => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
              <Image src={product.image} alt={product.name} boxSize="200px" objectFit="cover" mx="auto" />
              <Box p={4}>
                <Heading as="h3" size="md" textAlign="center">
                  {product.name}
                </Heading>
                <Text fontSize="lg" textAlign="center" mt={2}>
                  {product.price}
                </Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;