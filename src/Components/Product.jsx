import { Button, ButtonGroup, IconButton } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { Box, GridItem, Text } from '@chakra-ui/layout';
import React from 'react';
import { DefaultState } from '../context/DefaultContext';
import { IoMdAdd } from 'react-icons/io';
import { RiSubtractLine } from 'react-icons/ri';

const Product = ({ data }) => {
  const { cart, setCart } = DefaultState();

  const addToCart = () => {
    console.log(data);
    if (cart.find(item => item.id === data.id)) {
      return;
    } else {
      const toBeAdded = { ...data, quantity: 1 };
      setCart([...cart, toBeAdded]);
    }
  };

  const incrementCount = () => {
    const product = cart.find(item => item.id === data.id);
    // const newCart = cart.filter(e => e.id !== data.id);
    const newCart = cart;
    newCart[newCart.indexOf(product)].quantity++;
    setCart([...newCart]);
  };

  const decrementCount = () => {
    const product = cart.find(item => item.id === data.id);
    if (product.quantity > 1) {
      const newCart = cart;
      newCart[newCart.indexOf(product)].quantity--;
      setCart([...newCart]);
    } else {
      const newCart = cart.filter(e => e.id !== data.id);
      setCart(newCart);
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <GridItem
        bg={'white'}
        boxShadow="md"
        borderRadius={'lg'}
        minHeight={'150px'}
        border="1px"
        borderColor={'gray.200'}
        _hover={{ boxShadow: 'lg' }}
        overflow="hidden"
        style={{ display: 'flex', width: '100%', alignItems: 'center' }}
      >
        <Image
          src={data.image}
          alt={data.name}
          objectFit={'cover'}
          objectPosition={'center'}
          height={'130px'}
          style={{ padding: '10px' }}
          width={{ base: '40%', md: '15%' }}
        />
        <div style={{ padding: '10px', width: '100%' }}>
          <Text fontSize={'16px'} fontWeight="bold">
            {data.name}
          </Text>
          <Text color={'gray.600'} fontSize={'12px'} marginBottom={1}>
            {data.description}
          </Text>
          <Box
            display={'flex'}
            flexWrap={'wrap'}
            gap={'2'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Box
              display={'flex'}
              justifyContent={'space-between'}
              width={{ md: '120px', base: '93px' }}
            >
              <Text fontSize={{ base: '17px', md: '20px' }}>
                {data.price} ₹
              </Text>
              <Text fontSize={{ base: '17px', md: '20px' }} color={'#aeb0b2'}>
                <strike style={{ color: '#aeb0b2' }}>
                  {data.originalPrice} ₹
                </strike>
              </Text>
            </Box>
            {cart.find(item => item.id === data.id) ? (
              <ButtonGroup
                size="sm"
                isAttached
                variant="outline"
                width={{ base: '46%', md: 'auto' }}
              >
                <IconButton
                  icon={<IoMdAdd />}
                  onClick={incrementCount}
                  flex={{ base: 'auto' }}
                />
                <Button flex={{ base: 'auto' }}>
                  {cart.find(item => item.id === data.id).quantity}
                </Button>
                <IconButton
                  icon={<RiSubtractLine />}
                  onClick={decrementCount}
                  flex={{ base: 'auto' }}
                />
              </ButtonGroup>
            ) : (
              <Button colorScheme={'green'} onClick={() => addToCart()}>
                Add
              </Button>
            )}
          </Box>
        </div>
      </GridItem>
    </div>
  );
};

export default Product;
