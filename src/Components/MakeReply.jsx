import {
    Box,
    Button,
    FormControl,
    SkeletonCircle,
    Stack,
    Textarea,
    useColorModeValue,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

import ReplyList from "./ReplyList";

const MakeReply = ({ open }) => {
    const bgColor = useColorModeValue("gray.100", "gray.800");

    const [arrayReplies, setArrayReplies] = useState(
        JSON.parse(localStorage.getItem("replies")) || [],
    );

    const [replyInput, setReplyInput] = useState("");

    const handleReplySubmit = (e) => {
        e.preventDefault();
        setArrayReplies([...arrayReplies, { input: replyInput, id: Date.now() }]);
        setReplyInput("");
    };

    useEffect(() => {
        localStorage.setItem("replies", JSON.stringify(arrayReplies));
    }, [arrayReplies]);

    return (
        <Stack
            direction="row"
            display={open ? "block" : "none"}
            marginBottom={8}
            marginInlineStart={0}
            marginStart={0}
            marginTop={2}
            paddingLeft={12}
        >
            <ReplyList replyes={arrayReplies} />
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
                <FormControl as="form" onSubmit={handleReplySubmit}>
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
                            value={replyInput}
                            onChange={(e) => setReplyInput(e.target.value)}
                        />
                        <Button type="submit" onClick={handleReplySubmit}>
                            Reply
                        </Button>
                    </Stack>
                </FormControl>
            </Stack>
        </Stack>
    );
};

export default MakeReply;
