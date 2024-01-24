import React from "react";
import { Select } from "@chakra-ui/react";

import * as Styled from "./styles";

import User from "../icons/ownersIcon.svg";

const DATA = [
  {
    id: 0,
    username: 'friendfilm',
    type: 'Record Label Exec',
    points: 384,
    position: 1,
  },
  {
    id: 1,
    username: 'refreezelayla',
    type: 'Groupie',
    points: 384,
    position: 2,
  },
  {
    id: 2,
    username: 'evaluatorcat',
    type: 'Groupie',
    points: 384,
    position: 3,
  },
  {
    id: 3,
    username: 'kittsolve',
    type: 'Groupie',
    points: 384,
    position: 4,
  },
  {
    id: 4,
    username: 'unmannedhorologium',
    type: 'Groupie',
    points: 384,
    position: 5,
  },
  {
    id: 5,
    username: 'buckpasserjaundice',
    type: 'Groupie',
    points: 384,
    position: 6,
  },
];

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
      <Styled.Header align="center" justify="space-between" mb="24px">
        <Styled.HeaderTitle
          fontSize="16px"
          fontWeight="700"
          color="white"
          m="0"
        >
          Weekly Top
        </Styled.HeaderTitle>

        <Select
          placeholder="Week 2"
          w="fit-content"
          h="fit-content"
          bg="transparent"
          border="none"
          color="purple.900"
          fontWeight="700"
          _focus={{ border: "none" }}
        >
          <option value="option1">Week 1</option>
          <option value="option1">Week 2</option>
          <option value="option1">Week 3</option>
        </Select>
      </Styled.Header>

      <Styled.ItensWrapper h="100%" direction="column" justify="space-between">
        {DATA.map((item) => (
          <LeaderItem key={item.id} position={item.position} username={item.username} type={item.type} points={item.points} />
        ))}
      </Styled.ItensWrapper>
    </Styled.Container>
  );
};

interface ILeaderItem {
  position: number;
  username: string;
  type: string;
  points: number;
}

const LeaderItem: React.FC<ILeaderItem> = ({ position, username, type, points }) => (
  <Styled.LeaderContainer align="center" justify="space-between">
    <Styled.LeftWrapper align="center" gap="16px">
      <Styled.Position
        w="24px"
        h="24px"
        borderRadius="12px"
        bg="black.900"
        align="center"
        justify="center"
        fontSize="14px"
        fontWeight="600"
        color="white"
      >
        {position}
      </Styled.Position>

      <Styled.UserImg src={User.src} />

      <Styled.UserWrapper direction="column">
        <Styled.Username fontSize="14px" fontWeight="600" color="white" mb="4px">{username}</Styled.Username>
        <Styled.Sub fontSize="12px" fontWeight="400" color="black.500" mb="4px">{type}</Styled.Sub>
      </Styled.UserWrapper>
    </Styled.LeftWrapper>

    <Styled.Points fontSize="14px" fontWeight="600" color="purple.900" m="0">{points} pts</Styled.Points>
  </Styled.LeaderContainer>
);
