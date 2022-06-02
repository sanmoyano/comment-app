import { Stack } from "@chakra-ui/react";

import Reply from "./Reply";

const ReplyList = ({ replyes }) => {
    return (
        <Stack>
            {replyes.map((reply) => (
                <Reply key={reply.id} reply={reply.input} />
            ))}
        </Stack>
    );
};

export default ReplyList;
