import { Box, Grid } from '@chakra-ui/layout';
import React from 'react';
import AppBar from '../Components/AppBar';
import { DefaultState } from '../context/DefaultContext';
import Product from '../Components/Product';
import NavBar from '../Components/NavBar';

const Products = () => {
  const { products } = DefaultState();

  return (
    <Box bg="gray.50">
      <Box
        h={'calc(100vh - 60px)'}
        width={'95%'}
        marginX="auto"
        paddingY="5"
        overflow={'auto'}
      > 
        <NavBar />
        <Grid
          gap={{ base: 3, md: 5 }}
          templateColumns={{
            base: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(4, 1fr)',
          }}
          marginTop={5}
          style={{display:"flex",flexDirection:"column"}}
        >
          {products.map((product, index) => (
            <Product data={product} key={index} />
          ))}
        </Grid>
      </Box>
      <AppBar />
    </Box>
  );
};

export default Products;
