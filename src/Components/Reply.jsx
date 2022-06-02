import { Box, Skeleton, SkeletonCircle, Stack, Text, useColorModeValue } from "@chakra-ui/react";

const Reply = ({ reply }) => {
    const bgColor = useColorModeValue("gray.100", "gray.800");

    return (
        <Stack
            bgColor={bgColor}
            borderRadius={"lg"}
            borderWidth={"1px"}
            marginBottom={6}
            p={6}
            spacing={6}
        >
            <Stack alignContent={"center"} direction={"row"} justifyContent="space-between">
                <Box>
                    <SkeletonCircle size="10" />
                </Box>
                <Skeleton>
                    <div>usuario nombre</div>
                </Skeleton>
            </Stack>
            <Text>{reply}</Text>
        </Stack>
    );
};

export default Reply;
