import Link from 'next/link';
import { useRouter } from 'next/router';
import { Text, Stack, Flex } from '@chakra-ui/react';

type NavItemProps = {
  text: string;
  href: string;
};

const NavItem = ({ text, href }: NavItemProps) => {
  const router = useRouter();
  const style = { color: router.pathname === href ? 'red' : 'black' };
  return (
    <Link href={href} style={style}>
      <Text>{text}</Text>
    </Link>
  );
};
export default NavItem;
