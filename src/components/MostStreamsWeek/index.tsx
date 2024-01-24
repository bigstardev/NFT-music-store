import React from "react";

import LabelSong from "@components/icons/LabelSong.svg";
import { SongItem } from "@components/addToLabel/SongItem";

import * as Styled from "./styles";
import { Flex } from "@chakra-ui/react";

const LabelSongs = [
  {
    id: 0,
    image: LabelSong,
    title: "Cheap Thrills",
    artist: "The Weeknd",
    points: 473,
  },
  {
    id: 1,
    image: LabelSong,
    title: "Cheap Thrills",
    artist: "The Weeknd",
    points: 473,
  },
  {
    id: 2,
    image: LabelSong,
    title: "Cheap Thrills",
    artist: "The Weeknd",
    points: 473,
  },
  {
    id: 3,
    image: LabelSong,
    title: "Cheap Thrills",
    artist: "The Weeknd",
    points: 473,
  },
  {
    id: 4,
    image: LabelSong,
    title: "Cheap Thrills",
    artist: "The Weeknd",
    points: 473,
  },
  {
    id: 5,
    image: LabelSong,
    title: "Cheap Thrills",
    artist: "The Weeknd",
    points: 473,
  },
];


interface IMostStreamsWeek {}

export const MostStreamsWeek: React.FC<IMostStreamsWeek> = () => {
  return (
    <Styled.Container
      direction="row"
      boxSizing="border-box"
      flex={1}
      bg="black.700"
      borderRadius="12px"
      p="12px"
      gap="20px"
      flexWrap="wrap"
    >
      {LabelSongs.map((song) => (
        <Flex w="calc(100% / 3.12)">
          <SongItem key={song.id} song={song} showStatus hideFocus />
        </Flex>
      ))}
    </Styled.Container>
  );
};
