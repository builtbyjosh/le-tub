import Link from "next/link";
import { useRouter } from "next/router";
import { Text, Stack, Flex } from "@chakra-ui/react";
import NavItem from "./NavItem";

const MENU_ITEMS = [
  {text: 'Home', href: '/'},
  {text: 'About Us', href: '/about'},
  {text: 'Menu', href: '/menu'},
  {text: 'News', href: '/news'},
  {text: 'Directions & Contact', href: '/contact'},
]

const NavBar = () => {

  return (
    <Flex w='full' justify='center' gap={2}>
      {MENU_ITEMS.map((item, index)=> (
        <NavItem key={index} href={item.href} text={item.text}/>
      ))}
    </Flex>
  )
}

export default NavBar