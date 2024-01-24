import React, { useState, useRef, useEffect } from "react";
import { Flex, FlexProps, Button } from "@chakra-ui/react";

import { OwnersStack } from "@components/OwnersStack";
import EllipsisIcon from "@components/icons/EllipsisIcon";

import * as Styled from "./styles";
import { OwnersTooltip } from "@components/OwnersTooltip";
import { TableOptions } from "@components/TableOptions";

interface SongProps {
  image: string;
  name: string;
  artist: string;
}

interface OwnersProps {
  id: number;
  name: string;
  type: string;
}

interface LibraryProps {
  id: number;
  song: SongProps;
  owners: OwnersProps[];
  points: number;
  streamsWeek: string;
  earnedWeek: number;
  addLabel: boolean;
}

export interface ILibraryTable extends FlexProps {
  library: LibraryProps[];
  openSongDrawer: () => void;
  openLabelDrawer: () => void;
}

export const LibraryTable: React.FC<ILibraryTable> = ({
  library,
  openSongDrawer,
  openLabelDrawer,
  ...rest
}) => {
  return (
    <Styled.Container
      width="100%"
      bg="black.700"
      boxSizing="border-box"
      borderRadius="12px"
      p="16px"
      mb="34px"
      gap="32px"
      direction="column"
      {...rest}
    >
      {library.map((item) => (
        <Styled.RowWrapper
          key={item.id}
          direction="row"
          align="center"
          flex={1}
        >
          <SongColumn song={item.song} openSongDrawer={openSongDrawer} />
          <OwnersColumn owners={item.owners} firstItem={item.id === 0} />
          <PointsColumn points={item.points} />
          <StreamsColumn streams={item.streamsWeek} />
          <EarnedColumn
            earned={item.earnedWeek}
            addLabel={item.addLabel}
            openLabelDrawer={openLabelDrawer}
          />
        </Styled.RowWrapper>
      ))}
    </Styled.Container>
  );
};

const SongColumn = ({
  song,
  openSongDrawer,
}: {
  song: { image: string; name: string; artist: string };
  openSongDrawer: () => void;
}) => (
  <Styled.SongColumnWrapper
    h="48px"
    direction="row"
    align="center"
    flex={2}
    onClick={openSongDrawer}
    cursor="pointer"
  >
    <Styled.SongImage src={song.image} width={48} height={48} />
    <Styled.SongInfoWrapper direction="column" ml="16px" justify="center">
      <Styled.SongTitle color="white" fontSize="14px" fontWeight="600" m="0">
        {song.name}
      </Styled.SongTitle>
      <Styled.SongArtist
        color="black.500"
        fontSize="12px"
        fontWeight="500"
        m="0"
      >
        {song.artist}
      </Styled.SongArtist>
    </Styled.SongInfoWrapper>
  </Styled.SongColumnWrapper>
);

const OwnersColumn = ({
  owners,
  firstItem,
}: {
  owners: { id: number; name: string; type: string }[];
  firstItem: boolean;
}) => {
  const [focus, setFocus] = useState(false);

  return (
    <Styled.ColumnWrapper
      h="48px"
      direction="row"
      align="center"
      justify="flex-end"
      p="5px 0 5px 32px"
      flex={1}
      onMouseEnter={() => setFocus(true)}
      onMouseLeave={() => setFocus(false)}
      position="relative"
    >
      <OwnersTooltip visible={focus} firstItem={firstItem} />
      <Flex flex={1} justify="center">
        <Styled.Wrapper direction="column" align="flex-end">
          <OwnersStack owners={owners} />
          <Styled.LabelText
            color="black.500"
            fontSize="12px"
            fontWeight="500"
            m="0"
          >
            Fractions Owned
          </Styled.LabelText>
        </Styled.Wrapper>
      </Flex>
      <Styled.Divider
        w="1px"
        height="32px"
        bg="rgba(255, 255, 255, 0.05)"
        ml="32px"
      />
    </Styled.ColumnWrapper>
  );
};

const PointsColumn = ({ points }: { points: number }) => (
  <Styled.ColumnWrapper
    h="48px"
    direction="row"
    align="center"
    justify="flex-end"
    p="5px 0 5px 32px"
    flex={1}
  >
    <Flex flex={1} justify="center">
      <Styled.Wrapper direction="column" align="flex-end">
        <Styled.InfoText color="white" fontSize="14px" fontWeight="500" m="0">
          {points} pts
        </Styled.InfoText>
        <Styled.LabelText
          color="black.500"
          fontSize="12px"
          fontWeight="500"
          m="0"
        >
          Points per stream
        </Styled.LabelText>
      </Styled.Wrapper>
    </Flex>
    <Styled.Divider
      w="1px"
      height="32px"
      bg="rgba(255, 255, 255, 0.05)"
      ml="32px"
    />
  </Styled.ColumnWrapper>
);

const StreamsColumn = ({ streams }: { streams: string }) => (
  <Styled.ColumnWrapper
    h="48px"
    direction="row"
    align="center"
    justify="flex-end"
    p="5px 0 5px 32px"
    flex={1}
  >
    <Flex flex={1} justify="center">
      <Styled.Wrapper direction="column" align="flex-end">
        <Styled.InfoText color="white" fontSize="14px" fontWeight="500" m="0">
          {streams}
        </Styled.InfoText>
        <Styled.LabelText
          color="black.500"
          fontSize="12px"
          fontWeight="500"
          m="0"
        >
          Streams this week
        </Styled.LabelText>
      </Styled.Wrapper>
    </Flex>
    <Styled.Divider
      w="1px"
      height="32px"
      bg="rgba(255, 255, 255, 0.05)"
      ml="32px"
    />
  </Styled.ColumnWrapper>
);

const EarnedColumn = ({
  earned,
  addLabel,
  openLabelDrawer,
}: {
  earned: number;
  addLabel: boolean;
  openLabelDrawer: () => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [optionsVisible, setOptionsVisible] = useState(false);

  useEffect(() => {
    // Close dropdown clicking outside of it
    function handleClickOutside(event: Event) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOptionsVisible(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Styled.ColumnWrapper
      h="48px"
      direction="row"
      align="center"
      justify="flex-end"
      p="5px 0 5px 32px"
      flex={1}
    >
      <Flex flex={1} justify="center">
        <Styled.Wrapper direction="column" align="flex-end">
          {!addLabel ? (
            <>
              <Styled.InfoText
                color="white"
                fontSize="14px"
                fontWeight="500"
                m="0"
              >
                {earned} pts
              </Styled.InfoText>
              <Styled.LabelText
                color="black.500"
                fontSize="12px"
                fontWeight="500"
                m="0"
              >
                Earned this week
              </Styled.LabelText>
            </>
          ) : (
            <Button
              p="4px 16px"
              bg="black.900"
              h="fit-content"
              w="fit-content"
              borderRadius="20px"
              _hover={{ backgroundColor: "purple.900", color: "black.900" }}
              _active={{ backgroundColor: "black.900" }}
              _focus={{ boxShadow: "none" }}
              color="purple.900"
              fontSize="12px"
              fontWeight="700"
              textTransform="uppercase"
              onClick={openLabelDrawer}
            >
              Add to label
            </Button>
          )}
        </Styled.Wrapper>
      </Flex>
      <Styled.EllipsisButton
        ref={ref}
        position="relative"
        ml="32px"
        cursor="pointer"
        userSelect="none"
        onClick={() => setOptionsVisible(!optionsVisible)}
      >
        <EllipsisIcon bgColor="rgba(255, 255, 255, 0.5)" />

        <TableOptions visible={optionsVisible} />
      </Styled.EllipsisButton>
    </Styled.ColumnWrapper>
  );
};
