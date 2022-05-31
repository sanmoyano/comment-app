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

import ComentList from "./ComentList";

const Coment = () => {
    const bgColor = useColorModeValue("gray.100", "gray.800");

    const [arrayComents, setArrayComents] = useState(
        JSON.parse(localStorage.getItem("coments")) || [],
    );
    const [comentInput, setComentInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setArrayComents([...arrayComents, { input: comentInput, id: Date.now() }]);
        setComentInput("");
    };

    // useEffect(() => {
    //     const localStorageComents = JSON.parse(localStorage.getItem("coments"));

    //     if (localStorageComents) {
    //         setArrayComents(localStorageComents);
    //     }
    //     console.log("efecto number one");
    // }, []);

    useEffect(() => {
        localStorage.setItem("coments", JSON.stringify(arrayComents));
    }, [arrayComents]);

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
                <FormControl as="form" onSubmit={handleSubmit}>
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
                            value={comentInput}
                            onChange={(e) => setComentInput(e.target.value)}
                        />
                        <Button type="submit" onClick={handleSubmit}>
                            Send
                        </Button>
                    </Stack>
                </FormControl>
            </Stack>
            <ComentList coments={arrayComents} />
        </>
    );
};

export default Coment;
