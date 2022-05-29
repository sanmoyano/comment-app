import { Stack } from "@chakra-ui/react";

import Coment from "../Components/Coment";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Layout = () => {
    return (
        <Stack
            alignItems="center"
            justifyContent="center"
            left="0"
            margin="auto"
            maxW={"600px"}
            p={6}
            position="absolute"
            right="0"
        >
            <Header />
            <Coment />
            <Footer />
        </Stack>
    );
};

export default Layout;
