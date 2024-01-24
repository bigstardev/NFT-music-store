import React from "react";
import { ButtonProps, FlexProps, Button, Flex } from "@chakra-ui/react";

import * as Styled from "./styles";
import ChevronRight from "@components/icons/ChevronRight";

export interface ITableOptions extends FlexProps {
  visible: boolean;
}

export const CardOptions: React.FC<ITableOptions> = ({ visible, ...rest }) => {
  return visible ? (
    <Styled.Container
      position="absolute"
      top="0px"
      right="10px"
      borderRadius="12px"
      w="fit-content"
      h="fit-content"
      zIndex="2"
      overflow="hidden"
      box-shadow="0px 0px 15px rgba(0, 0, 0, 0.8)"
      {...rest}
    >
      <Styled.InnerContainer
        w="149px"
        background="#171717"
        borderRadius="12px"
        direction="column"
      >
        <OptionButton title="Pay video" />
        <OptionButton title="Download" />
      </Styled.InnerContainer>
    </Styled.Container>
  ) : null;
};

interface IOptionButton extends ButtonProps {
  title: string;
}

const OptionButton: React.FC<IOptionButton> = ({ title, ...rest }) => (
  <Button
    {...rest}
    h="auto"
    justifyContent="flex-start"
    p="12px 16px"
    borderRadius="0"
    bg="transparent"
    _hover={{ bg: "transparent" }}
    _active={{ bg: "transparent" }}
    _focus={{ boxShadow: "none" }}
    onClick={(e) => {
      e.stopPropagation();
      rest.onClick && rest.onClick(e);
    }}
  >
    <Flex direction="row" align="center" justify="space-between" w="100%">
      <Flex direction="column" align="flex-start">
        <Styled.ButtonTitle
          color="white"
          fontSize="12px"
          fontWeight="500"
          m="0"
        >
          {title}
        </Styled.ButtonTitle>
      </Flex>
    </Flex>
  </Button>
);
