import React, { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
import * as Styled from "./styles";
import SongIcon from "@components/icons/songIcon.svg";
import { SongSkeleton } from "./SongSkeleton";
import { SongItem } from "./SongItem";
import { ReplaceModal } from "@components/ReplaceModal";
import LabelSong from "@components/icons/LabelSong.svg";

export interface SongsProps {
  id: number;
  image: string;
  title: string;
  artist: string;
  points: number;
}

interface IAddToLabel {
  songs: SongsProps[];
}

export const AddToLabel: React.FC<IAddToLabel> = ({ songs }) => {
  const [labelledSongs, setLabelledSongs] = useState(songs);
  const [emptyLabels, setEmptyLabels] = useState(0);
  const [replaceVisible, setReplaceVisible] = useState(false);

  useEffect(() => {
    setEmptyLabels(10 - labelledSongs?.length)
  }, [labelledSongs]);

  const setAddToLabel = () => {
    const newSong = {
      id: labelledSongs.length,
      image: LabelSong,
      title: "Cheap Thrills",
      artist: "The Weeknd",
      points: 473,
    };
    const array = [...labelledSongs, newSong];
    setLabelledSongs(array);
  };

  return (
    <Styled.Container height="100%" direction="column">
      <Styled.Header
        bg="black.900"
        justify="flex-start"
        align="center"
        minHeight="80px"
        direction="row"
        paddingLeft="24px"
      >
        <Styled.FlameIcon src={SongIcon.src} />
        <Flex direction="column" marginLeft="16px">
          <Styled.Title
            color="white.900"
            fontSize="14px"
            fontWeight={600}
            margin={0}
            marginBottom="4px"
          >
            Add to label
          </Styled.Title>
          <Styled.Subtitle
            color="black.500"
            fontSize="12px"
            fontWeight={500}
            margin={0}
          >
            Displaying tracks from your label
          </Styled.Subtitle>
        </Flex>
      </Styled.Header>
      <Styled.Body
        padding="16px"
        bg="black.800"
        direction="column"
        overflowY="auto"
        height="100%"
      >
        <Styled.SeasonContainer
          alignSelf="stretch"
          bg="rgba(255, 255, 255, 0.04)"
          borderRadius="50px"
          p="8px 0"
          color="black.500"
          fontSize="12px"
          fontWeight="500"
          textAlign="center"
          mb="24px"
        >
          Displaying points from current season
        </Styled.SeasonContainer>
        <Flex gap="12px" direction="column">
          {labelledSongs.map((song) => (
            <SongItem key={song.id} song={song} openReplace={() => setReplaceVisible(true)} />
          ))}
          {[...Array(emptyLabels).keys()].map((_, idx) => (
            <SongSkeleton key={idx} onClick={setAddToLabel} />
          ))}
        </Flex>
      </Styled.Body>

      <ReplaceModal
        visible={replaceVisible}
        confirmReplace={() => setReplaceVisible(false)}
        cancelReplace={() => setReplaceVisible(false)}
      />
    </Styled.Container>
  );
};
