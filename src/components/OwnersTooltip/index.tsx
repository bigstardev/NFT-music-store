import React from "react";
import { FlexProps } from "@chakra-ui/react";

import { colorType } from "src/utils/colorType";

import * as Styled from "./styles";

const OwnerTypes = [
  { id: "common", label: "Common" },
  { id: "rare", label: "Rare" },
  { id: "epic", label: "Epic" },
  { id: "legendary", label: "Legendary" },
];

const Amount: any = {
  common: { available: true, owned: 10, amount: 1000 },
  rare: { available: true, owned: 0, amount: 1000 },
  epic: { available: false, owned: 0, amount: 0 },
  legendary: { available: false, owned: 0, amount: 0 },
};

interface TooltipPositionProps {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}

export interface IOwnersTooltip extends FlexProps {
  visible: boolean;
  firstItem: boolean;
}

export const OwnersTooltip: React.FC<IOwnersTooltip> = ({
  visible,
  firstItem,
  ...rest
}) => {
  const tooltipPosition: TooltipPositionProps = !firstItem
    ? { bottom: "55px", right: "35%" }
    : { top: "55px", right: "35%" };

  return visible ? (
    <Styled.BorderWrapper
      w="fit-content"
      h="fit-content"
      p="1px"
      position="absolute"
      {...tooltipPosition}
      borderRadius="12px"
      boxShadow="0px 0px 15px rgba(0, 0, 0, 0.8)"
      bg="linear-gradient(180deg, rgba(255, 255, 255, 0.33) 0%, rgba(28, 28, 29, 0.29) 100%)"
      zIndex="2"
    >
      <Styled.Container
        w="180px"
        bg="#171717"
        borderRadius="12px"
        p="8px 12px"
        direction="column"
        gap="16px"
        {...rest}
      >
        {OwnerTypes.map((type, idx) => {
          const opacity = (Amount?.[type.id]?.owned > 0 && Amount?.[type.id]?.available) ? 1 : 0.4;

          return (
            <Styled.RowWrapper direction="row" align="center" key={idx}>
              <Styled.Dot w="12px" h="12px" borderRadius="12px" bg={colorType(type.id)} opacity={opacity} />
              <Styled.ColumnWrapper direction="column" ml="12px">
                <Styled.TypeText
                  color="white"
                  fontSize="12px"
                  fontWeight="600"
                  mb="2px"
                  opacity={opacity}
                >
                  {type.label}
                </Styled.TypeText>
                <Styled.AmountText
                  color="black.500"
                  fontSize="12px"
                  fontWeight="500"
                  m="0"
                  opacity={opacity}
                >
                  {Amount?.[type.id]?.available ? `${Amount?.[type.id]?.owned}/${Amount?.[type.id]?.amount}` : `Unavailable`}
                </Styled.AmountText>
              </Styled.ColumnWrapper>
            </Styled.RowWrapper>
          );
        })}
      </Styled.Container>
    </Styled.BorderWrapper>
  ) : null;
};
