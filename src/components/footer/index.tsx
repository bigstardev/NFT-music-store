import React, { CSSProperties } from "react";
import Image from "next/image";
import { Flex, Center } from "@chakra-ui/react"


export const Footer: React.FC = () => {
    const iconStyle: CSSProperties = {
        fontSize: 22,
        color: "#fff",
        marginRight: "0.25rem",
        marginLeft: "0.25rem"
    };
    return (
        <Center bg="main.100" py={10}>
            <Flex flexDirection="column">
                <Flex mt={5}  data-testid="icons-container"  >
                </Flex>
            </Flex>
        </Center>
    );
};
