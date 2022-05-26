import { Stack } from "@chakra-ui/react";

import Coment from "../Components/Coment";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Layout = () => {
    return (
        <Stack alignItems={"center"} p={6} spacing={6}>
            <Header />
            <Coment />
            <Footer />
        </Stack>
    );
};

export default Layout;
