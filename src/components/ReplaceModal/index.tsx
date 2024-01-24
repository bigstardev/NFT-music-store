import React from "react";
import Image from "next/image";
import { Flex, Button } from "@chakra-ui/react";
import * as Styled from "./styles";

import Replace1 from "../icons/replace/Replace1.svg";
import Replace2 from "../icons/replace/Replace2.svg";
import ReplaceIcon from "@components/icons/ReplaceIcon";

interface IAddToLabel {
  visible: boolean;
  confirmReplace: () => void;
  cancelReplace: () => void;
}

export const ReplaceModal: React.FC<IAddToLabel> = ({
  visible,
  confirmReplace,
  cancelReplace,
}) => {
  return visible ? (
    <Styled.Container
      position="absolute"
      top="0"
      bottom="0"
      right="0"
      left="0"
      bg="rgba(28, 28, 28, 0.8)"
      backdropFilter="blur(15px)"
      direction="column"
      p="0 32px"
      align="center"
      justify="center"
    >
      <Styled.SongContainer
        w="100%"
        h="fit-content"
        p="1px"
        borderRadius="20px"
        bg="linear-gradient(180deg, rgba(255, 255, 255, 0.33) 0%, rgba(28, 28, 29, 0.29) 100%)"
        mb="24px"
        overflow="hidden"
      >
        <Styled.SongInner
          w="100%"
          p="42px 0 37px"
          borderRadius="20px"
          bg="rgba(0, 0, 0, 0.4)"
          align="center"
          justify="center"
        >
          <Flex direction="column" align="center">
            <Styled.ImageContainer
              w="88px"
              h="88px"
              borderRadius="4px"
              overflow="hidden"
            >
              <Image src={Replace1} />
            </Styled.ImageContainer>
            <Styled.SongTitle
              color="white"
              fontSize="14px"
              fontWeight="600"
              mt="12px"
              mb="4px"
            >
              Cheap Thr...
            </Styled.SongTitle>
            <Styled.SongArtist
              color="black.500"
              fontSize="12px"
              fontWeight="500"
              mb="0"
            >
              The Weeknd
            </Styled.SongArtist>
          </Flex>

          <Styled.ReplaceContainer
            w="40px"
            h="40px"
            borderRadius="20px"
            bg="black.700"
            align="center"
            justify="center"
            m="0 12px 50px"
          >
            <ReplaceIcon />
          </Styled.ReplaceContainer>

          <Flex direction="column" align="center">
            <Styled.ImageContainer
              w="88px"
              h="88px"
              borderRadius="4px"
              overflow="hidden"
            >
              <Image src={Replace2} />
            </Styled.ImageContainer>
            <Styled.SongTitle
              color="white"
              fontSize="14px"
              fontWeight="600"
              mt="12px"
              mb="4px"
            >
              Love Hard...
            </Styled.SongTitle>
            <Styled.SongArtist
              color="black.500"
              fontSize="12px"
              fontWeight="500"
              mb="0"
            >
              Ariana Grande
            </Styled.SongArtist>
          </Flex>
        </Styled.SongInner>
      </Styled.SongContainer>

      <Styled.Title
        color="white"
        fontSize="20px"
        fontWeight="700"
        textAlign="center"
        mb="8px"
      >
        Replace Track
      </Styled.Title>
      <Styled.Subtitle
        color="black.500"
        fontSize="12px"
        fontWeight="500"
        textAlign="center"
        mb="16px"
      >
        Replacing this track will forefit all points earned this from this track
        today (110pts). Wait until 12am if you’d like to retain any points
        earned from the track today.
      </Styled.Subtitle>

      <Button
        bg="purple.900"
        p="14px 48px"
        w="auto"
        h="auto"
        color="white"
        fontSize="16px"
        fontWeight="600"
        mb="10px"
        _hover={{ bg: "purple.900", color: "white" }}
        _active={{ bg: "purple.900" }}
        _focus={{ boxShadow: "none" }}
        onClick={confirmReplace}
      >
        Confirm
      </Button>
      <Button
        bg="transparent"
        p="14px 48px"
        w="auto"
        h="auto"
        color="purple.900"
        fontSize="14px"
        fontWeight="600"
        _hover={{ bg: "transparent", color: "purple.900" }}
        _active={{ bg: "transparent" }}
        _focus={{ boxShadow: "none" }}
        onClick={cancelReplace}
      >
        Cancel
      </Button>
    </Styled.Container>
  ) : null;
};
