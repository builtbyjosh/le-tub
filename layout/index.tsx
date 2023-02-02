import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";
import NavBar from "./NavBar";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box margin="0 auto" maxWidth={800} transition="0.5s ease-out">
      <Box margin="8">
        <Header />
        <NavBar />
        <Box as="main" marginY={1}>
          {children}
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;