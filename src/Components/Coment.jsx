import {
    Box,
    Button,
    Skeleton,
    SkeletonCircle,
    Stack,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";

import MakeReply from "./MakeReply";

const Coment = ({ coment }) => {
    const bgColor = useColorModeValue("gray.100", "gray.800");

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Stack bgColor={bgColor} borderRadius={"lg"} borderWidth={"1px"} p={6} spacing={6}>
                <Stack direction={"row"} justifyContent="space-between">
                    <Stack direction={"row"}>
                        <Box>
                            <SkeletonCircle size="10" />
                        </Box>
                        <Skeleton>
                            <div>usuario nombre</div>
                        </Skeleton>
                    </Stack>
                    <Button onClick={handleClick}>{isOpen ? "Hide" : "Reply"}</Button>
                </Stack>
                <Text>{coment}</Text>
            </Stack>
            <Stack>
                <MakeReply open={isOpen} />
            </Stack>
        </>
    );
};

export default Coment;
