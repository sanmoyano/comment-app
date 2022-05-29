import {
    Stack,
    SkeletonCircle,
    Box,
    Button,
    Textarea,
    useColorModeValue,
    FormControl,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

const Coment = () => {
    const bgColor = useColorModeValue("gray.100", "gray.800");

    return (
        <>
            <Stack
                alignItems={"flex-start"}
                bgColor={bgColor}
                borderRadius={"lg"}
                borderWidth={"1px"}
                direction={"row"}
                justifyContent={"space-between"}
                p={6}
                spacing={6}
                w={"100%"}
            >
                <Box>
                    <SkeletonCircle size="10" />
                </Box>
                <FormControl as="form">
                    <Stack
                        alignItems={"flex-start"}
                        direction={{ base: "column", md: "row" }}
                        spacing={6}
                        w={"100%"}
                    >
                        <Textarea name="coment" placeholder="Add a comment..." type="text" />
                        <Button type="submit">Send</Button>
                    </Stack>
                </FormControl>
            </Stack>
        </>
    );
};

export default Coment;
