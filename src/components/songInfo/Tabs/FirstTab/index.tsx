import React from "react";
import { Flex, TextProps, Text as ChakraText } from "@chakra-ui/react";

import { SpotifyComponent } from "@components/SpotifyComponent";

import * as Styled from "./styles";
import { colorType } from "src/utils/colorType";

const song = {
  artist: 'Ty Dollar Sign',
  album: 'Mission Impossible',
  releaseDate: '29 Jan 2022',
  streams: '32,500',
  drops: 5,
  supply: [
    { id: 0, label: 'common', buy: 500, available: 1000 },
    { id: 1, label: 'rare', buy: 500, available: 1000 },
    { id: 2, label: 'epic', buy: 500, available: 1000 },
    { id: 3, label: 'legendary', buy: 500, available: 1000 },
    { id: 4, label: 'unique', buy: 500, available: 1000 },
  ],
  season: [
    { id: 0, label: 'Season 8 (Current)', place: '4th', pts: 1934 },
    { id: 1, label: 'Season 7', place: '55th', pts: 482 },
    { id: 2, label: 'Season 6', place: '102nd', pts: 323 },
    { id: 3, label: 'Season 5', place: '204th', pts: 121 },
  ],
};

export const FirstTab = () => {
  return (
    <Styled.Container height="100%" direction="column" mt="21px">
      <SpotifyComponent />
      <Styled.SectionLabel fontSize="16px" fontWeight={700} color="white" m="24px 0 16px">Information</Styled.SectionLabel>
      <Flex direction="column" gap="16px">
        <Flex direction="row" align="center" justify="space-between">
          <Text>Artist</Text>
          <Text color="purple.900">{song?.artist}</Text>
        </Flex>
        <Flex direction="row" align="center" justify="space-between">
          <Text>Album</Text>
          <Text color="purple.900">{song?.album}</Text>
        </Flex>
        <Flex direction="row" align="center" justify="space-between">
          <Text>Release Date</Text>
          <Text color="white">{song?.releaseDate}</Text>
        </Flex>
        <Flex direction="row" align="center" justify="space-between">
          <Text>Streams</Text>
          <Text color="white">{song?.streams}</Text>
        </Flex>
        <Flex direction="row" align="center" justify="space-between">
          <Text>Content Drops</Text>
          <Text color="purple.900">View ({song?.drops})</Text>
        </Flex>
      </Flex>

      <Styled.SectionLabel fontSize="16px" fontWeight={700} color="white" m="20px 0 18px">Supply</Styled.SectionLabel>
      <Flex direction="column" gap="20px">
        {song.supply.map((itm) => (
          <SupplyRow key={itm.id} label={itm.label} buy={itm.buy} available={itm.available} />
        ))}
      </Flex>

      <Styled.Divider minH="1px" bg="#ffffff" opacity="0.1" m="26px -16px 16px" />

      <Styled.SectionLabel fontSize="16px" fontWeight={700} color="white" mb="20px">Rank History</Styled.SectionLabel>
      <Flex direction="column" gap="24px">
        {song.season.map((itm) => (
          <SeasonRow key={itm.id} label={itm.label} place={itm.place} pts={itm.pts} />
        ))}
      </Flex>
    </Styled.Container>
  );
};

interface LabelTextProps extends TextProps {
  color?: string;
}

const Text: React.FC<LabelTextProps> = ({ children, color, ...rest }) => (
  <ChakraText fontSize="12px" fontWeight={400} color={color || "black.500"} m="0" {...rest}>{children}</ChakraText>
);

const SupplyRow: React.FC<{ label: string; buy: number; available: number }> = ({ label, buy, available }) => {
  return (
    <Flex direction="row" align="center" justify="space-between">
      <Flex direction="row" align="center">
        <Styled.Dot w="12px" h="12px" borderRadius="12px" bg={colorType(label)} mr="8px" />
        <Text textTransform="capitalize">{label}</Text>
      </Flex>
      <Text color="white">{buy} / {available} Available</Text>
    </Flex>
  );
};

const SeasonRow: React.FC<{ label: string; place: string; pts: number }> = ({ label, place, pts }) => {
  return (
    <Flex direction="row" align="center" justify="space-between">
      <Text textTransform="capitalize">{label}</Text>
      <Text color="white">{place} · {pts} pts</Text>
    </Flex>
  );
};
