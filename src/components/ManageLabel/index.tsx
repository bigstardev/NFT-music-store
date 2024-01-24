import React from "react";

import LabelSong from "@components/icons/LabelSong.svg";
import { SongItem } from "@components/addToLabel/SongItem";
import { SongSkeleton } from "@components/addToLabel/SongSkeleton";

import * as Styled from "./styles";

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
  {
    id: 6,
    image: LabelSong,
    title: "Cheap Thrills",
    artist: "The Weeknd",
    points: 473,
  },
  {
    id: 7,
    image: LabelSong,
    title: "Cheap Thrills",
    artist: "The Weeknd",
    points: 473,
  },
  {
    id: 8,
    image: LabelSong,
    title: "Cheap Thrills",
    artist: "The Weeknd",
    points: 473,
  },
  {
    id: 9,
    image: LabelSong,
    title: "Cheap Thrills",
    artist: "The Weeknd",
    points: 473,
  },
  {
    id: 10,
    image: LabelSong,
    title: "Cheap Thrills",
    artist: "The Weeknd",
    points: 473,
  },
];


interface IManageLabel {}

export const ManageLabel: React.FC<IManageLabel> = () => {
  return (
    <Styled.Container
      direction="row"
      boxSizing="border-box"
      flex={1}
      bg="black.700"
      borderRadius="12px"
      p="12px"
      gap="20px"
    >
      <Styled.Wrapper direction="column" flex={1}>
        {LabelSongs.slice(0, 4).map((song) => (
          <SongItem key={song.id} song={song} showStatus />
        ))}
      </Styled.Wrapper>

      <Styled.Wrapper direction="column" flex={1}>
        {LabelSongs.slice(5, 9).map((song) => (
          <SongItem key={song.id} song={song} />
        ))}
      </Styled.Wrapper>

      <Styled.Wrapper direction="column" flex={1}>
        {LabelSongs.slice(9, 10).map((song) => (
          <SongItem key={song.id} song={song} />
        ))}
        {[...Array(3).keys()].map((_, idx) => (
          <SongSkeleton key={idx} onClick={() => ({})} />
        ))}
      </Styled.Wrapper>
    </Styled.Container>
  );
};
