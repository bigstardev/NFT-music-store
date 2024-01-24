import React from "react";

import { ScreenHeader } from "@components/ScreenHeader";
import { FavouritesTable } from "@components/FavouritesTable";
import { FavouritesFilter } from "@components/FavouritesFilter";

import Song1 from "@components/icons/songs/Song1.svg";
import Song2 from "@components/icons/songs/Song2.svg";
import Song3 from "@components/icons/songs/Song3.svg";
import Song4 from "@components/icons/songs/Song4.svg";
import Song5 from "@components/icons/songs/Song5.svg";

import { DrawerOptions } from "pages/_app";
import * as Styled from "./styles";

const LIBRARY = [
  {
    id: 0,
    song: {
      image: Song1,
      name: "Love Me Tender",
      artist: "David Scott",
    },
    owners: [
      { id: 0, name: "Catherine", type: "common" },
      { id: 1, name: "Richard", type: "epic" },
    ],
    points: 44,
    streamsWeek: "38k",
    earnedWeek: 482,
    addLabel: false,
  },
  {
    id: 1,
    song: {
      image: Song2,
      name: "Lily",
      artist: "Skhyzo",
    },
    owners: [{ id: 0, name: "Catherine", type: "common" }],
    points: 44,
    streamsWeek: "38k",
    earnedWeek: 482,
    addLabel: false,
  },
  {
    id: 2,
    song: {
      image: Song3,
      name: "Before You Go",
      artist: "Janine Ayn",
    },
    owners: [
      { id: 0, name: "Catherine", type: "common" },
      { id: 1, name: "Richard", type: "rare" },
      { id: 2, name: "Ernest", type: "epic" },
    ],
    points: 44,
    streamsWeek: "38k",
    earnedWeek: 482,
    addLabel: false,
  },
  {
    id: 3,
    song: {
      image: Song4,
      name: "Hand In My Pocket",
      artist: "Me Like Bees",
    },
    owners: [
      { id: 0, name: "Catherine", type: "common" },
      { id: 1, name: "Richard", type: "rare" },
    ],
    points: 44,
    streamsWeek: "38k",
    earnedWeek: 482,
    addLabel: false,
  },
  {
    id: 4,
    song: {
      image: Song5,
      name: "Country Roads",
      artist: "Emezzy",
    },
    owners: [
      { id: 0, name: "Catherine", type: "common" },
      { id: 1, name: "Richard", type: "rare" },
      { id: 2, name: "Ernest", type: "epic" },
      { id: 3, name: "Lizzie", type: "legendary" },
    ],
    points: 44,
    streamsWeek: "38k",
    earnedWeek: 482,
    addLabel: true,
  },
  {
    id: 5,
    song: {
      image: Song1,
      name: "Love Me Tender",
      artist: "David Scott",
    },
    owners: [
      { id: 0, name: "Catherine", type: "common" },
      { id: 1, name: "Richard", type: "epic" },
    ],
    points: 44,
    streamsWeek: "38k",
    earnedWeek: 482,
    addLabel: false,
  },
];

type ILibraryContainer = {
  setDrawerOption: (options: DrawerOptions) => void;
  clickConnectWallet?: () => void;
  clickDisconnectWallet?: () => void;
  walletDetail?: { name: string | null; address: string | null | undefined };
};

export const FavouritesContainer: React.FC<ILibraryContainer> = ({
  clickConnectWallet,
  clickDisconnectWallet,
  walletDetail,
}) => {
  return (
    <Styled.Container
      direction="column"
      bgColor="black.900"
      w="100%"
      overflow="auto"
    >
      <ScreenHeader
        screenTitle="Favourites"
        clickConnectWallet={clickConnectWallet}
        clickDisconnectWallet={clickDisconnectWallet}
        walletDetail={walletDetail}
      />

      <Styled.Body p="0 32px 32px" direction="column">
        <FavouritesFilter />
        <FavouritesTable library={LIBRARY} />
      </Styled.Body>
    </Styled.Container>
  );
};
