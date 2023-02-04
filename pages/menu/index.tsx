import { Box, Heading } from '@chakra-ui/react';
import { menuItems } from './menuItems';
import MenuSection from './MenuSection';
import MenuItem from './MenuItem';

export default function menu() {
  console.log(menuItems);
  return (
    <Box my={2}>
      <MenuSection title="Le Meats">
        {menuItems.le_meats.map((item: any, index: any) => {
          return <MenuItem key={index} itemData={item} />;
        })}
      </MenuSection>
      <MenuSection title="Le Salad">
        {menuItems.le_salad.map((item: any, index: any) => {
          return <MenuItem key={index} itemData={item} />;
        })}
      </MenuSection>
      <MenuSection title="Le Miscellaneous">
        {menuItems.le_misc.map((item: any, index: any) => {
          return <MenuItem key={index} itemData={item} />;
        })}
      </MenuSection>
      <MenuSection title="Le Seafood">
        {menuItems.le_seafood.map((item: any, index: any) => {
          return <MenuItem key={index} itemData={item} />;
        })}
      </MenuSection>
      <MenuSection title="Le Dessert">
        {menuItems.le_dessert.map((item: any, index: any) => {
          return <MenuItem key={index} itemData={item} />;
        })}
      </MenuSection>
    </Box>
  );
}
