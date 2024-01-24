import React from "react";
import { FlexProps } from "@chakra-ui/react";

import * as Styled from "./styles";
import ClockIcon from "../icons/clockIcon.svg";

export interface IFameMeter extends FlexProps {
  min: number;
  max: number;
  fame: number;
}

export const FameMeter: React.FC<IFameMeter> = ({
  fame,
  min,
  max,
  ...rest
}) => {
  const getFameWidth = () => {
    return Math.round(((fame - min) * 100) / (max - min));
  };

  return (
    <Styled.Container w="100%" {...rest}>
      <Styled.BarContainer
        w="100%"
        h="24px"
        bg="black.900"
        borderRadius="100px"
        position="relative"
        overflow="hidden"
      >
        <Styled.BarFiller
          h="100%"
          w={`${getFameWidth() || 0}%`}
          bg="purple.900"
          borderRadius="100px"
          boxSizing="border-box"
          justify="flex-end"
          p="4px"
        >
          <Styled.FameContainer
            h="100%"
            w="fit-content"
            p="0 8px"
            align="center"
            bg="#4530C2"
            borderRadius="100px"
            fontSize="12px"
            fontWeight="700"
            color="white"
          >
            {fame} FAME
          </Styled.FameContainer>
        </Styled.BarFiller>
      </Styled.BarContainer>

      <Styled.TextWrapper align="center" justify="space-between" mt="16px">
        <Styled.MeterText
          fontSize="12px"
          fontWeight="500"
          color="black.500"
          mb="0"
        >
          Groupie ({min})
        </Styled.MeterText>
        <Styled.DecayWrapper align="center">
          <Styled.DecayImg src={ClockIcon.src} />
          <Styled.DecayText
            fontSize="12px"
            fontWeight="500"
            color="purple.900"
            mb="0"
            ml="8px"
          >
            Decay: 1 hour 5 mins remaining
          </Styled.DecayText>
        </Styled.DecayWrapper>
        <Styled.MeterText
          fontSize="12px"
          fontWeight="500"
          color="black.500"
          mb="0"
        >
          All-star ({max})
        </Styled.MeterText>
      </Styled.TextWrapper>
    </Styled.Container>
  );
};
