import styled from "styled-components";
import { Flex, Text } from "@chakra-ui/react";

export const Container = styled(Flex)``;

export const UserBubble = styled(Flex)`
    &:not(:last-child) {
        margin-right: -5px;
    }
`;

