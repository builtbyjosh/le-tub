import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { useRef } from 'react';
import NavItem from './NavItem';

const MENU_ITEMS = [
  { text: 'Home', href: '/' },
  { text: 'About Us', href: '/about' },
  { text: 'Menu', href: '/menu' },
  { text: 'News', href: '/news' },
  { text: 'Directions & Contact', href: '/contact' },
];

const NavDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button colorScheme="teal" onClick={onOpen}>
        Open
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            {MENU_ITEMS.map((item, index) => (
              <NavItem key={index} href={item.href} text={item.text} onClose={onClose} />
            ))}
          </DrawerBody>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavDrawer;
