import { Stack, Text, Button, Icon, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const Header = () => {
    const { toggleColorMode } = useColorMode();
    const iconToggle = useColorModeValue(BsFillMoonFill, BsFillSunFill);

    return (
        <Stack direction={"row"} justifyContent="space-between" w="100%">
            <Text fontSize="2xl" fontWeight="bold">
                Chat UI
            </Text>
            <Button onClick={toggleColorMode}>
                <Icon as={iconToggle} />
            </Button>
        </Stack>
    );
};

export default Header;
