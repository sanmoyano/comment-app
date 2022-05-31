import {
    Box,
    Button,
    FormControl,
    SkeletonCircle,
    Stack,
    Textarea,
    useColorModeValue,
} from "@chakra-ui/react";

const MakeReply = ({ open }) => {
    const bgColor = useColorModeValue("gray.100", "gray.800");

    return (
        <Stack direction="row" display={open ? "block" : "none"} marginTop={6} paddingLeft={12}>
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
                        <Textarea
                            // as={"input"}
                            name="coment"
                            placeholder="Add a comment..."
                            type="text"
                        />
                        <Button type="submit">Reply</Button>
                    </Stack>
                </FormControl>
            </Stack>
        </Stack>
    );
};

export default MakeReply;
