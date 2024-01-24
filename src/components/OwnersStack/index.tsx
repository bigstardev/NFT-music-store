import React from "react";
import { FlexProps } from "@chakra-ui/react";

import { colorType } from "src/utils/colorType";

import * as Styled from "./styles";

interface OwnersProps {
  id: number;
  name: string;
  type: string;
}

export interface IOwnersStack extends FlexProps {
  owners: OwnersProps[];
}

export const OwnersStack: React.FC<IOwnersStack> = ({ owners, ...rest }) => {
  const returnInitial = (name: string) => {
    if (!name.length) {
      return '';
    }
    return name.charAt(0);
  };

  return (
    <Styled.Container mb="4px" {...rest}>
      {owners.map((owner) => (
        <Styled.UserBubble
          key={owner.id}
          minW="20px"
          minH="20px"
          maxW="20px"
          maxH="20px"
          borderRadius="20px"
          bg={colorType(owner.type)}
          border="2px solid #131419"
          color="white"
          fontSize="10px"
          fontWeight="500"
          align="center"
          justify="center"
        >
          {returnInitial(owner.name)}
        </Styled.UserBubble>
      ))}
    </Styled.Container>
  );
};
