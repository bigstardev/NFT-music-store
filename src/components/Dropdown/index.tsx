import React from "react";

import * as Styled from "./styles";

import AllTimeAvatar from "../icons/AllTimeAvatar.png";

interface IWeeklyTop {}

export const WeeklyTop: React.FC<IWeeklyTop> = () => {
  return (
    <Styled.Container
      flex={2.05}
      direction="column"
      boxSizing="border-box"
      bg="black.700"
      borderRadius="12px"
      p="24px 16px"
    >
      <Styled.Header>
        <Styled.HeaderTitle fontSize="16px" fontWeight="700" color="white" m="0">Weekly Top</Styled.HeaderTitle>
      </Styled.Header>
    </Styled.Container>
  );
};
