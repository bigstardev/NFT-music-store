import React from "react";

import { LeaderAllTime } from "@components/LeaderAllTime";
import { WeeklyTop } from "@components/WeeklyTop";

import * as Styled from "./styles";

interface ILeaderboards {}

export const Leaderboards: React.FC<ILeaderboards> = () => {
  return (
    <Styled.Container
      boxSizing="border-box"
      flex={1}
      gap="18px"
    >
      <WeeklyTop />
      <LeaderAllTime />
    </Styled.Container>
  );
};
