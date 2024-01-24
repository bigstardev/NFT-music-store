import React from "react";

import * as Styled from "./styles";

import AllTimeAvatar from "../icons/AllTimeAvatar.png";

interface ILeaderAllTime {}

export const LeaderAllTime: React.FC<ILeaderAllTime> = () => {
  return (
    <Styled.Container
      direction="column"
      boxSizing="border-box"
      bg="black.700"
      borderRadius="12px"
      p="24px 16px 41px"
    >
      <Styled.AllTime fontSize="16px" fontWeight="700" color="white" mb="29px">All Time</Styled.AllTime>

      <Styled.Image src={AllTimeAvatar.src} />

      <Styled.Username fontSize="20px" fontWeight="700" color="white" textAlign="center" m="16px 0 8px">@brunopadilha</Styled.Username>
      <Styled.Record bg="rgba(255, 255, 255, 0.15)" p="4px 16px" m="0 auto" borderRadius="20px" fontSize="12px" fontWeight="700" color="white">RECORD LABEL EXEC</Styled.Record>

      <Styled.RowWrapper align="center" gap="32px" m="48px auto 0">
        <Styled.ColumnWrapper direction="column" align="center">
          <Styled.Number fontSize="20px" fontWeight="700" color="white" m="0 0 4px">1</Styled.Number>
          <Styled.Label fontSize="12px" fontWeight="400" color="black.500">All-time Position</Styled.Label>
        </Styled.ColumnWrapper>

        <Styled.ColumnWrapper direction="column" align="center">
          <Styled.Number fontSize="20px" fontWeight="700" color="white" m="0 0 4px">582</Styled.Number>
          <Styled.Label fontSize="12px" fontWeight="400" color="black.500">Season 1 Points</Styled.Label>
        </Styled.ColumnWrapper>

        <Styled.ColumnWrapper direction="column" align="center">
          <Styled.Number fontSize="20px" fontWeight="700" color="white" m="0 0 4px">8274</Styled.Number>
          <Styled.Label fontSize="12px" fontWeight="400" color="black.500">All Time Points</Styled.Label>
        </Styled.ColumnWrapper>
      </Styled.RowWrapper>
    </Styled.Container>
  );
};
