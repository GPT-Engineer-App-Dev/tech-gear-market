import { Box, Flex, HStack, Link, useDisclosure, Stack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Links = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const NavLink = ({ name, path }) => (
  <Link
    as={RouterLink}
    to={path}
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: "gray.200",
    }}
  >
    {name}
  </Link>
);

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg="gray.100" px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <button onClick={isOpen ? onClose : onOpen}>
            {isOpen ? "Close" : "Open"}
          </button>
          <HStack spacing={8} alignItems={"center"}>
            <Box fontWeight="bold">ElectroShop</Box>
            <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
              {Links.map((link) => (
                <NavLink key={link.name} {...link} />
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}></Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.name} {...link} />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default Navbar;