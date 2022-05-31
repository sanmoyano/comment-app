import { Stack } from "@chakra-ui/react";

import MakeComents from "../Components/MakeComents";
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
            spacing={12}
        >
            <Header />
            <MakeComents />
            <Footer />
        </Stack>
    );
};

export default Layout;
