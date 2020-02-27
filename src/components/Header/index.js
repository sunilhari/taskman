import React from "react";
import { Heading, Text, Box } from "@chakra-ui/core";

function Header({ title, subtitle }) {
  return (
    <Box p={4} color="brand.700" w="full" as="header">
      <Heading as="h1">{title}</Heading>
      <Text ml={[2, 3, 5, 10]}>{subtitle}</Text>
    </Box>
  );
}

export default Header;
