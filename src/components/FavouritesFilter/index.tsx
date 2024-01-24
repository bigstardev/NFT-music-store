import React, { useState, useRef, useEffect } from "react";
import { FlexProps, Button } from "@chakra-ui/react";

import * as Styled from "./styles";

export interface IFavouritesFilter extends FlexProps {}

export const FavouritesFilter: React.FC<IFavouritesFilter> = ({ ...rest }) => {
  return (
    <Styled.Container {...rest} align="center" gap="12px" mb="24px">
      <Styled.Title
        fontSize="12px"
        fontWeight="700"
        color="purple.900"
        textTransform="uppercase"
        m="0"
      >
        Filter:
      </Styled.Title>
      <Button
        bg="#131419"
        p="4px 12px"
        borderRadius="20px"
        h="unset"
        fontSize="12px"
        fontWeight="700"
        color="purple.900"
        _hover={{ backgroundColor: "#131419" }}
        _active={{ backgroundColor: "#131419" }}
        _focus={{ boxShadow: "none" }}
      >
        GENRE
      </Button>
      <Button
        bg="#131419"
        p="4px 12px"
        borderRadius="20px"
        h="unset"
        fontSize="12px"
        fontWeight="700"
        color="purple.900"
        _hover={{ backgroundColor: "#131419" }}
        _active={{ backgroundColor: "#131419" }}
        _focus={{ boxShadow: "none" }}
      >
        FRACTION TYPES
      </Button>
    </Styled.Container>
  );
};
