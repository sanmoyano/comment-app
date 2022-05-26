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

    const [coments, setComents] = useState(JSON.parse(localStorage.getItem("coments")) || []);
    const [newComent, setNewComent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setComents([...coments, { name: newComent, id: Math.random() }]);
        setNewComent("");
    };

    useEffect(() => {
        const coments = JSON.parse(localStorage.getItem("coments"));

        if (coments) {
            setComents([...coments]);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("coments", JSON.stringify(coments));
    }, [coments]);

    return (
        <Stack
            alignItems={"flex-start"}
            bgColor={bgColor}
            borderRadius={"lg"}
            borderWidth={"1px"}
            direction={"row"}
            justifyContent={"space-between"}
            p={6}
            spacing={6}
        >
            <Box>
                <SkeletonCircle size="10" />
            </Box>
            <FormControl as="form" onSubmit={handleSubmit}>
                <Stack alignItems={"flex-start"} direction={"row"} spacing={6} w={"100%"}>
                    <Textarea
                        name="coment"
                        placeholder="Add a comment..."
                        type="text"
                        value={newComent}
                        onChange={(e) => setNewComent(e.target.value)}
                    />
                    <Button type="submit" onClick={handleSubmit}>
                        Send
                    </Button>
                </Stack>
            </FormControl>
        </Stack>
    );
};

export default Coment;
