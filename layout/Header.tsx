import { Box, Flex, Stack, Text, Heading } from '@chakra-ui/react';
import NavDrawer from './NavDrawer';

const Header = () => {
  return (
    <Flex as="header" h={'full'} width="full" align="center">
      <Box marginRight={'auto'}>
        <Heading fontSize={{ base: '2xl', sm: '4xl', md: '6xl', lg: '8xl' }}>
          The Le Tub Saloon
        </Heading>
      </Box>
      <Box marginLeft="auto">
        <NavDrawer />
      </Box>
    </Flex>
  );
};

export default Header;
