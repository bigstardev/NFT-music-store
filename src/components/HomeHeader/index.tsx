import React from "react";

import * as Styled from "./styles";
import { chakra, Button, Flex } from "@chakra-ui/react";

import PlayPurple from "../icons/playPurple.svg";
import EllipsisIcon from "@components/icons/EllipsisIcon";

import BigImage from '../icons/BigImage.png';
import SmallImage from '../icons/SmallImage.png';

interface IHomeHeader {}

export const HomeHeader: React.FC<IHomeHeader> = () => {
  return (
    <Styled.Container
      direction="column"
      boxSizing="border-box"
      flex={1}
      gap="18px"
    >
      <Styled.RowWrapper direction="row" flex={1} gap="18px">
        <Styled.ImgContainer
          flex={2.05}
          height="356px"
          bg="purple.900"
          borderRadius="12px"
          overflow="hidden"
          position="relative"
        >
          <Styled.Image src={BigImage.src} />
          <Styled.BottomContainer
            position="absolute"
            bottom="26px"
            left="16px"
            right="16px"
            align="center"
            justify="space-between"
          >
            <Styled.TitleWrapper direction="column">
              <Styled.Title
                fontSize="20px"
                fontWeight="700"
                color="white"
                mb="4px"
              >
                Out of Time
              </Styled.Title>
              <Styled.Subtitle
                fontSize="12px"
                fontWeight="400"
                color="black.500"
                m="0"
              >
                The Weeknd ·{" "}
                <chakra.span color="#42C5EE">Legendary</chakra.span>
              </Styled.Subtitle>
            </Styled.TitleWrapper>

            <Styled.GetWrapper align="center" gap="12px">
              <Button
                h="auto"
                p="6px 16px"
                borderRadius="20px"
                bg="rgba(0, 0, 0, 0.5)"
                _hover={{ bg: "rgba(0, 0, 0, 0.5)" }}
                _active={{ bg: "rgba(0, 0, 0, 0.5)" }}
                _focus={{ boxShadow: "none" }}
                fontSize="12px"
                fontWeight="700"
                color="purple.900"
              >
                GET
              </Button>
              <Styled.Play src={PlayPurple.src} />
              <Flex cursor="pointer">
                <EllipsisIcon />
              </Flex>
            </Styled.GetWrapper>
          </Styled.BottomContainer>
        </Styled.ImgContainer>

        <Styled.ImgContainer
          flex={1}
          height="356px"
          bg="purple.900"
          borderRadius="12px"
          overflow="hidden"
          position="relative"
        >
          <Styled.Image src={SmallImage.src} />
          <Styled.BottomContainer
            position="absolute"
            bottom="26px"
            left="16px"
            right="16px"
          >
            <Styled.TitleWrapper direction="column">
              <Styled.Title
                fontSize="20px"
                fontWeight="700"
                color="white"
                mb="4px"
              >
                Words
              </Styled.Title>
              <Styled.Subtitle
                fontSize="12px"
                fontWeight="400"
                color="black.500"
                m="0"
              >
                Alesso · <chakra.span color="#42C5EE">Legendary</chakra.span>
              </Styled.Subtitle>
            </Styled.TitleWrapper>
          </Styled.BottomContainer>
        </Styled.ImgContainer>
      </Styled.RowWrapper>

      <Styled.RowWrapper direction="row" flex={1} gap="18px">
        <Styled.ImgContainer
          flex={1}
          height="262px"
          bg="purple.900"
          borderRadius="12px"
          overflow="hidden"
          position="relative"
        >
          <Styled.Image src={SmallImage.src} />
          <Styled.BottomContainer
            position="absolute"
            bottom="26px"
            left="16px"
            right="16px"
          >
            <Styled.TitleWrapper direction="column">
              <Styled.Title
                fontSize="20px"
                fontWeight="700"
                color="white"
                mb="4px"
              >
                Love Is A Battlefield
              </Styled.Title>
              <Styled.Subtitle
                fontSize="12px"
                fontWeight="400"
                color="black.500"
                m="0"
              >
                Jimi Hendrix ·{" "}
                <chakra.span color="#42C5EE">Legendary</chakra.span>
              </Styled.Subtitle>
            </Styled.TitleWrapper>
          </Styled.BottomContainer>
        </Styled.ImgContainer>
        <Styled.ImgContainer
          flex={1}
          height="262px"
          bg="purple.900"
          borderRadius="12px"
          overflow="hidden"
          position="relative"
        >
          <Styled.Image src={SmallImage.src} />
          <Styled.BottomContainer
            position="absolute"
            bottom="26px"
            left="16px"
            right="16px"
          >
            <Styled.TitleWrapper direction="column">
              <Styled.Title
                fontSize="20px"
                fontWeight="700"
                color="white"
                mb="4px"
              >
                Bang a Gong (Get It On)
              </Styled.Title>
              <Styled.Subtitle
                fontSize="12px"
                fontWeight="400"
                color="black.500"
                m="0"
              >
                Alice Cooper ·{" "}
                <chakra.span color="#42C5EE">Legendary</chakra.span>
              </Styled.Subtitle>
            </Styled.TitleWrapper>
          </Styled.BottomContainer>
        </Styled.ImgContainer>
        <Styled.ImgContainer
          flex={1}
          height="262px"
          bg="purple.900"
          borderRadius="12px"
          overflow="hidden"
          position="relative"
        >
          <Styled.Image src={SmallImage.src} />
          <Styled.BottomContainer
            position="absolute"
            bottom="26px"
            left="16px"
            right="16px"
          >
            <Styled.TitleWrapper direction="column">
              <Styled.Title
                fontSize="20px"
                fontWeight="700"
                color="white"
                mb="4px"
              >
                Working Man
              </Styled.Title>
              <Styled.Subtitle
                fontSize="12px"
                fontWeight="400"
                color="black.500"
                m="0"
              >
                Smashing Pumpkins ·{" "}
                <chakra.span color="#42C5EE">Legendary</chakra.span>
              </Styled.Subtitle>
            </Styled.TitleWrapper>
          </Styled.BottomContainer>
        </Styled.ImgContainer>
      </Styled.RowWrapper>
    </Styled.Container>
  );
};
