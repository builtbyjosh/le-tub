import Link from "next/link";
import { Text, Stack, Flex } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Flex w='full' justify='center' gap={2}>
      <Link href={'/'}>
        <Text>Home</Text>
      </Link>
      <Link href={'/about'}>
        <Text>About Us</Text>
      </Link>
      <Link href={'/menu'}>
        <Text>Menu</Text>
      </Link>
      <Link href={'/news'}>
        <Text>News</Text>
      </Link>
      <Link href={'/contact'}>
        <Text>Directions & Contact</Text>
      </Link>
    </Flex>
  )
}

export default NavBar