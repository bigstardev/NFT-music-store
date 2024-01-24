import React, { useState } from "react";

import { ScreenHeader } from "@components/ScreenHeader";
import { SectionHeader } from "@components/SectionHeader";
import { DropCard } from "@components/DropCard";
import { LibraryTable } from "@components/LibraryTable";
import { AddToLabel } from "@components/addToLabel";
import { SongInfo } from "@components/songInfo";

import DropImage1 from "@components/icons/DropCard1.svg";
import DropImage2 from "@components/icons/DropCard2.svg";
import LabelSong from "@components/icons/LabelSong.svg";
import Song1 from "@components/icons/songs/Song1.svg";
import Song2 from "@components/icons/songs/Song2.svg";
import Song3 from "@components/icons/songs/Song3.svg";
import Song4 from "@components/icons/songs/Song4.svg";
import Song5 from "@components/icons/songs/Song5.svg";

import { DrawerOptions } from "pages/_app";
import * as Styled from "./styles";
import usePagination from "src/hooks/usePagination";

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
  {
    id: 6,
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
    id: 7,
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
    id: 8,
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
    id: 9,
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
];

const DROPS = [
  {
    id: 0,
    title: "Love Is A Battlefield",
    album: "I Can Breathe",
    author: "The Weeknd",
    status: "Legendary",
    image: DropImage1,
  },
  {
    id: 1,
    title: "Bang a Gong (Get It On)",
    album: "I Can Breathe",
    author: "The Weeknd",
    status: "Legendary",
    image: DropImage2,
  },
  {
    id: 2,
    title: "Working Man",
    album: "I Can Breathe",
    author: "The Weeknd",
    status: "Legendary",
    image: DropImage1,
  },
];

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
];

type ILibraryContainer = {
  setDrawerOption: (options: DrawerOptions) => void;
  clickConnectWallet?: () => void;
  clickDisconnectWallet?: () => void;
  walletDetail?: { name: string | null; address: string | null | undefined };
};

export const LibraryContainer: React.FC<ILibraryContainer> = ({
  setDrawerOption,
  clickConnectWallet,
  clickDisconnectWallet,
  walletDetail,
}) => {
  const addLabelOptions = {
    isActive: true,
    component: <AddToLabel songs={LabelSongs} />,
    width: 430,
  };

  const songOptions = {
    isActive: true,
    component: <SongInfo />,
    width: 430,
  };

  const [allTracksActivePage, setAllTracksActivePage] = useState(1);
  const { data, allData, pagination } = usePagination({
    data: LIBRARY,
    activePage: allTracksActivePage,
  });

  const [allTracksExpanded, setAllTracksExpanded] = useState(false);

  const handleClickTracksNext = () => {
    if (allTracksActivePage < pagination.totalPages) {
      setAllTracksActivePage(allTracksActivePage + 1);
    }
  };

  const handleClickTracksPrevious = () => {
    if (allTracksActivePage > 1) {
      setAllTracksActivePage(allTracksActivePage - 1);
    }
  };

  return (
    <Styled.Container
      direction="column"
      bgColor="black.900"
      w="100%"
      overflow="auto"
    >
      <ScreenHeader
        screenTitle="Library"
        clickConnectWallet={clickConnectWallet}
        clickDisconnectWallet={clickDisconnectWallet}
        walletDetail={walletDetail}
      />

      <Styled.Body p="0 32px 32px" direction="column">
        <SectionHeader
          sectionTitle="All Tracks"
          sectionSubtitle="View all your tracks here. Drag &amp; drop songs to replace items in your label."
          showPaginate={pagination.totalItemsCount > 6}
          expanded={allTracksExpanded}
          clickExpand={() => setAllTracksExpanded(!allTracksExpanded)}
          clickPrevious={handleClickTracksPrevious}
          clickNext={handleClickTracksNext}
          activePage={allTracksActivePage}
          totalPages={pagination.totalPages}
        />
        <LibraryTable
          library={allTracksExpanded ? allData : data}
          openSongDrawer={() => setDrawerOption(songOptions)}
          openLabelDrawer={() => setDrawerOption(addLabelOptions)}
        />

        {!allTracksExpanded && (
          <>
            <SectionHeader sectionTitle="All Drops" />
            <Styled.DropsWrapper direction="row" gap="18px">
              {DROPS.map((drop) => (
                <DropCard
                  key={drop.id}
                  image={drop.image}
                  title={drop.title}
                  album={drop.album}
                  author={drop.author}
                  status={drop.status}
                />
              ))}
            </Styled.DropsWrapper>
          </>
        )}
      </Styled.Body>
    </Styled.Container>
  );
};
