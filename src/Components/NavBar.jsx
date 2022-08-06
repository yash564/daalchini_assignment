import React from 'react';
import { Link } from 'react-router-dom';
import { Text } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Link to="/">
      <Text
        fontFamily={'heading'}
        fontWeight={'bold'}
        fontSize={26}
        bg={'gray.100'}
        padding="10px"
      >
        Our Products
      </Text>
    </Link>
  );
};

export default NavBar;
