import React, { useState } from "react";
import {  CircularProgress, CircularProgressLabel, Flex } from "@chakra-ui/react";

import * as Styled from "./styles";
import FameIcon from "@components/icons/FameIcon";
import Complete from "../icons/complete.svg";

interface IProgressItem {
  title: string;
  subtitle: string;
  porcentage: number;
}

export const ProgressItem: React.FC<IProgressItem> = ({ title, subtitle, porcentage }) => {
  const [focus, setFocus] = useState(false);

  return (
    <Styled.Container
      w="100%"
      align="center"
      justify="space-between"
      p="8px"
      _hover={{ bg: "rgba(255, 255, 255, 0.04)", borderRadius: 8 }}
      onMouseEnter={() => setFocus(true)}
      onMouseLeave={() => setFocus(false)}
    >
      <Flex align="center">
        {porcentage < 100 ? (
          <CircularProgress value={porcentage > 0 ? porcentage : 5} size="50px" color="purple.900" trackColor="black.900">
            {porcentage > 0 && <CircularProgressLabel color="purple.900" fontWeight="700">{porcentage}%</CircularProgressLabel>}
          </CircularProgress>
        ) : (
          <Styled.Img src={Complete.src} />
        )}

        <Styled.ColumnWrapper direction="column" ml="16px">
          <Styled.Title color="white" fontSize="14px" fontWeight="600" mb="2px">
            {title}
          </Styled.Title>
          <Styled.Subtitle
            color="black.500"
            fontSize="12px"
            fontWeight="500"
            m="0"
            maxW="90%"
          >
            {subtitle}
          </Styled.Subtitle>
        </Styled.ColumnWrapper>
      </Flex>
      {focus && (
        <Styled.PointsContainer
          bg="black.700"
          p="7px 8px"
          borderRadius="8px"
          color="purple.900"
          fontSize="12px"
          fontWeight="700"
          gap="4px"
          align="center"
        >
          <FameIcon />
          234
        </Styled.PointsContainer>
      )}
    </Styled.Container>
  );
};
