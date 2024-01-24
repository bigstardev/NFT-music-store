import React from "react";
import * as Styled from "./styles";

import { SongCardItem } from "@components/SongCardItem";

const DATA = [
  {
    id: 0,
    songName: "Bang a Gong (Get It On)",
    artist: "Chicago",
  },
  {
    id: 1,
    songName: "Limelight",
    artist: "Chicago",
  },
  {
    id: 2,
    songName: "Hi Hi Hi",
    artist: "Chicago",
  },
  {
    id: 3,
    songName: "YYZ",
    artist: "Chicago",
  },
  {
    id: 4,
    songName: "Eye of the Tiger",
    artist: "Chicago",
  },
  {
    id: 5,
    songName: "Hit Me With Your Best Shot",
    artist: "Chicago",
  },
];

interface IUpComing {}

export const UpComing: React.FC<IUpComing> = () => {
  return (
    <Styled.Container
      direction="row"
      align="flex-start"
      boxSizing="border-box"
      flex={1}
      gap="38px"
    >
      {DATA.map((item) => (
        <SongCardItem songName={item.songName} artist={item.artist} key={item.id} />
      ))}
    </Styled.Container>
  );
};
