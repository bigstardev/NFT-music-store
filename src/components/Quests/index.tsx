import React from "react";

import LabelSong from "@components/icons/LabelSong.svg";
import { SongItem } from "@components/addToLabel/SongItem";
import { SongSkeleton } from "@components/addToLabel/SongSkeleton";

import * as Styled from "./styles";
import { ProgressItem } from "@components/ProgressItem";
import { Flex } from "@chakra-ui/react";

const DATA = [
  {
    id: 0,
    title: "Eat your heart out",
    subtitle: "Favourite your first song",
    porcentage: 25,
    fame: 234,
  },
  {
    id: 1,
    title: "Early Adopter",
    subtitle: "Buy two songs that were released this week",
    porcentage: 50,
    fame: 234,
  },
  {
    id: 2,
    title: "Oh Marilyn...",
    subtitle: "Collect a Marilyn Mason song",
    porcentage: 0,
    fame: 234,
  },
  {
    id: 3,
    title: "True Believer",
    subtitle: "Collect 3 NFTs from an artist",
    porcentage: 95,
    fame: 234,
  },
  {
    id: 4,
    title: "90’s Hits",
    subtitle: "Collect 5 NFTs that were 90’s hits",
    porcentage: 100,
    fame: 234,
  },
  {
    id: 5,
    title: "Mask Off",
    subtitle: "Collect 2 songs by Future",
    porcentage: 0,
    fame: 234,
  },
];


interface IQuests {}

export const Quests: React.FC<IQuests> = () => {
  return (
    <Styled.Container
      direction="row"
      boxSizing="border-box"
      flex={1}
      bg="black.700"
      borderRadius="12px"
      p="8px"
      flexWrap="wrap"
    >
      {DATA.map((item) => (
        <Flex w="calc(100% / 3)" key={item.id}>
          <ProgressItem title={item.title} subtitle={item.subtitle} porcentage={item.porcentage} />
        </Flex>
      ))}
    </Styled.Container>
  );
};
