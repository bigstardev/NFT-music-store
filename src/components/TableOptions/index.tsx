import React from "react";
import { ButtonProps, FlexProps, Button, Flex, Box } from "@chakra-ui/react";

import * as Styled from "./styles";
import ChevronRight from "@components/icons/ChevronRight";

export interface ITableOptions extends FlexProps {
  visible: boolean;
}

export const TableOptions: React.FC<ITableOptions> = ({ visible, ...rest }) => {
  return visible ? (
    <Styled.Container
      position="absolute"
      top="-30px"
      right="10px"
      background="linear-gradient(180deg, rgba(255, 255, 255, 0.33) 0%, rgba(28, 28, 29, 0.29) 100%)"
      p="1px"
      borderRadius="12px"
      w="fit-content"
      h="fit-content"
      zIndex="2"
      overflow="hidden"
      box-shadow="0px 0px 15px rgba(0, 0, 0, 0.8)"
      {...rest}
    >
      <Styled.InnerContainer
        w="225px"
        background="#171717"
        borderRadius="12px"
        direction="column"
      >
        <OptionButton
          title="Buy Fractions"
          subtitle="Purchase this NFT"
          hasChevron
        />
        <OptionButton title="Track Info" />
        <OptionButton title="Favourite" />
        <Box h="1px" w="100%" bg="rgba(255, 255, 255, 0.2)" />
        <OptionButton title="Share" hasChevron />
      </Styled.InnerContainer>
    </Styled.Container>
  ) : null;
};

interface IOptionButton extends ButtonProps {
  title: string;
  subtitle?: string;
  hasChevron?: boolean;
}

const OptionButton: React.FC<IOptionButton> = ({
  title,
  subtitle,
  hasChevron,
  ...rest
}) => (
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
          m={subtitle ? "2px" : "0"}
        >
          {title}
        </Styled.ButtonTitle>
        {subtitle && (
          <Styled.ButtonSubtitle
            color="black.500"
            fontSize="12px"
            fontWeight="500"
            m="0"
          >
            {subtitle}
          </Styled.ButtonSubtitle>
        )}
      </Flex>
      {hasChevron && <ChevronRight bgColor="white" />}
    </Flex>
  </Button>
);
