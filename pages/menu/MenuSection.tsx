import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
type MenuSectionProps = {
  title: string;
  children: any;
};
const MenuSection = ({ title, children }: MenuSectionProps) => {
  return (
    <Box my={8} border={'2px'} borderRadius={'xl'}>
      <Heading pl={2} fontWeight={'bold'} color="red.500" fontSize={'5xl'}>
        {title}
      </Heading>
      <Box pl={5}>{children}</Box>
    </Box>
  );
};

export default MenuSection;
