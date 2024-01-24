import React, { useState } from "react";
import { Button, Flex } from "@chakra-ui/react";
import Image from "next/image";

import { SongsProps } from "..";
import * as Styled from "./styles";

interface ISongItem {
  song: SongsProps;
  openReplace?: () => void;
  hideFocus?: boolean;
  showStatus?: boolean;
}

export const SongItem: React.FC<ISongItem> = ({
  song,
  openReplace,
  hideFocus,
  showStatus,
}) => {
  const [focus, setFocus] = useState(false);

  return (
    <Styled.Container
      w="100%"
      align="center"
      justify="space-between"
      p="8px"
      _hover={{ bg: "rgba(255, 255, 255, 0.04)", borderRadius: 8 }}
      onMouseEnter={() => setFocus(true)}
      onMouseLeave={() => setFocus(false)}
    >
      <Flex>
        <Styled.ImageContainer
          w="48px"
          h="48px"
          borderRadius="4px"
          bg="black.500"
          align="center"
          justify="center"
          position="relative"
        >
          <Image src={song?.image} />

          <Styled.StatusContainer
            position="absolute"
            top="-6px"
            right="-6px"
            w="12px"
            h="12px"
            borderRadius="12px"
            bg="black.700"
            align="center"
            justify="center"
          >
            <Styled.Status w="7px" h="7px" borderRadius="7px" bg="#0EAD69" />
          </Styled.StatusContainer>
        </Styled.ImageContainer>

        <Styled.ColumnWrapper direction="column" ml="16px">
          <Styled.Title color="white" fontSize="14px" fontWeight="600" mb="2px">
            {song?.title}
          </Styled.Title>
          <Styled.Subtitle
            color="black.500"
            fontSize="12px"
            fontWeight="500"
            m="0"
          >
            {song?.artist}
          </Styled.Subtitle>
        </Styled.ColumnWrapper>
      </Flex>
      {!hideFocus && (
        <>
          {!focus ? (
            <Styled.PointsContainer
              bg="black.900"
              p="4px 8px"
              borderRadius="4px"
              color="black.500"
              fontSize="12px"
              fontWeight="500"
            >
              {song?.points} pts
            </Styled.PointsContainer>
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
              onClick={openReplace}
            >
              Replace
            </Button>
          )}
        </>
      )}
    </Styled.Container>
  );
};
