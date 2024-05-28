import { Box, Container, VStack, Heading, Text, SimpleGrid, Image, Flex, Link, Input, Select, Slider, SliderTrack, SliderFilledTrack, SliderThumb } from "@chakra-ui/react";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const sampleProducts = [
  {
    id: 1,
    name: "Smartphone",
    price: 699,
    category: "Electronics",
    image: "/images/smartphone.jpg",
  },
  {
    id: 2,
    name: "Laptop",
    price: 999,
    category: "Electronics",
    image: "/images/laptop.jpg",
  },
  {
    id: 3,
    name: "Smartwatch",
    price: 199,
    category: "Wearables",
    image: "/images/smartwatch.jpg",
  },
  {
    id: 4,
    name: "Headphones",
    price: 149,
    category: "Accessories",
    image: "/images/headphones.jpg",
  },
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handlePriceChange = (value) => {
    setPriceRange(value);
  };

  const filteredProducts = sampleProducts.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "" || product.category === selectedCategory) &&
      product.price >= priceRange[0] &&
      product.price <= priceRange[1]
    );
  });

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center" mt={8}>
          Welcome to ElectroShop
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Your one-stop shop for the latest electronics
        </Text>
        <Box mt={4}>
          <Input
            placeholder="Search for products..."
            value={searchTerm}
            onChange={handleSearchChange}
            size="lg"
          />
        </Box>
        <Box mt={4} width="100%">
          <Select placeholder="Select category" onChange={handleCategoryChange}>
            <option value="Electronics">Electronics</option>
            <option value="Wearables">Wearables</option>
            <option value="Accessories">Accessories</option>
          </Select>
        </Box>
        <Box mt={4} width="100%">
          <Text>Price Range: ${priceRange[0]} - ${priceRange[1]}</Text>
          <Slider
            min={0}
            max={1000}
            step={50}
            defaultValue={[0, 1000]}
            onChangeEnd={handlePriceChange}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb boxSize={6} index={0} />
            <SliderThumb boxSize={6} index={1} />
          </Slider>
        </Box>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10} mt={8}>
          {filteredProducts.map((product) => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
              <Image src={product.image} alt={product.name} boxSize="200px" objectFit="cover" mx="auto" />
              <Box p={4}>
                <Heading as="h3" size="md" textAlign="center">
                  {product.name}
                </Heading>
                <Text fontSize="lg" textAlign="center" mt={2}>
                  ${product.price}
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