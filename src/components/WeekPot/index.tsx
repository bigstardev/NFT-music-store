import React from "react";
import * as Styled from "./styles";

import WeekPotImg from "../icons/weekPot.png";

interface IWeekPot {}

export const WeekPot: React.FC<IWeekPot> = () => {
  return (
    <Styled.Container
      direction="row"
      align="center"
      justify="space-between"
      borderRadius="12px"
      boxSizing="border-box"
      overflow="hidden"
      flex={1}
      p="34px 32px"
      backgroundImage={`url(${WeekPotImg.src})`}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Styled.ColumnWrapper direction="column">
        <Styled.Title fontSize="32px" fontWeight="700" color="white" mb="4px">
          This Weeks Pot
        </Styled.Title>
        <Styled.Subtitle fontSize="14px" fontWeight="500" color="white" m="0">
          Amount of circulating money for this week
        </Styled.Subtitle>
      </Styled.ColumnWrapper>

      <Styled.NumberWrapper align="center" gap="4px">
        <Styled.Number
          w="49px"
          h="63px"
          align="center"
          justify="center"
          bg="rgba(19, 20, 25, 0.8)"
          borderRadius="8px"
          fontSize="32px"
          fontWeight="500"
          color="white"
        >
          $
        </Styled.Number>
        <Styled.Number
          w="49px"
          h="63px"
          align="center"
          justify="center"
          bg="rgba(19, 20, 25, 0.8)"
          borderRadius="8px"
          fontSize="32px"
          fontWeight="500"
          color="white"
        >
          4
        </Styled.Number>
        <Styled.Number
          w="49px"
          h="63px"
          align="center"
          justify="center"
          bg="rgba(19, 20, 25, 0.8)"
          borderRadius="8px"
          fontSize="32px"
          fontWeight="500"
          color="white"
        >
          0
        </Styled.Number>
        <Styled.Number
          w="49px"
          h="63px"
          align="center"
          justify="center"
          bg="rgba(19, 20, 25, 0.8)"
          borderRadius="8px"
          fontSize="32px"
          fontWeight="500"
          color="white"
        >
          2
        </Styled.Number>
        <Styled.Number
          w="49px"
          h="63px"
          align="center"
          justify="center"
          bg="rgba(19, 20, 25, 0.8)"
          borderRadius="8px"
          fontSize="32px"
          fontWeight="500"
          color="white"
        >
          ,
        </Styled.Number>
        <Styled.Number
          w="49px"
          h="63px"
          align="center"
          justify="center"
          bg="rgba(19, 20, 25, 0.8)"
          borderRadius="8px"
          fontSize="32px"
          fontWeight="500"
          color="white"
        >
          2
        </Styled.Number>
        <Styled.Number
          w="49px"
          h="63px"
          align="center"
          justify="center"
          bg="rgba(19, 20, 25, 0.8)"
          borderRadius="8px"
          fontSize="32px"
          fontWeight="500"
          color="white"
        >
          2
        </Styled.Number>
        <Styled.Number
          w="49px"
          h="63px"
          align="center"
          justify="center"
          bg="rgba(19, 20, 25, 0.8)"
          borderRadius="8px"
          fontSize="32px"
          fontWeight="500"
          color="white"
        >
          1
        </Styled.Number>
      </Styled.NumberWrapper>
    </Styled.Container>
  );
};
