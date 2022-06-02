import { Stack } from "@chakra-ui/react";
import React from "react";

import Coment from "./Coment";

const ComentList = ({ coments }) => {
    return (
        <Stack width={"100%"}>
            {coments.map((coment) => (
                <Coment key={coment.id} coment={coment.input} />
            ))}
        </Stack>
    );
};

export default ComentList;
