import { Box, Flex, Stack, Text, Heading } from '@chakra-ui/react';



const Header = () => {
  return (
    <Flex as="header" width="full" align="center">
      <Box marginRight={'auto'}>
        <Heading fontSize={{base: '2xl', sm: '4xl', md: '6xl', lg:'8xl'}}>The Le Tub Saloon</Heading>
      </Box>
      <Box marginLeft="auto">
        <Heading fontSize={{base: 'xs', sm:'sm', md: 'md', lg:'xl'}} lineHeight={0.5}>
          <Stack>
            <Text>1100 N Ocean Drive</Text>
            <Text>Hollywood, Fl 33019</Text>
            <Text>954-921-9424</Text>
          </Stack>
        </Heading>
      </Box>
      

    </Flex>
  );
};

export default Header;
