import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Flex, chakra } from "@chakra-ui/react";

import LockerIcon from "@components/icons/LockerIcon";
import EllipsisIcon from "@components/icons/EllipsisIcon";
import { CardOptions } from "@components/CardOptions";

import { colorType } from "src/utils/colorType";

import * as Styled from "./styles";
import LockedImg from "../../../icons/LockedImg.png";
import UnlockedImg from "../../../icons/UnlockedImg.svg";
import Play from "../../../icons/PlayIcon.svg";

const songs = [
  {
    id: 0,
    name: "Bang a Gong (Get It On)",
    type: "Video",
    rarity: "epic",
    unlocked: false,
    image: LockedImg,
  },
  {
    id: 1,
    name: "Bang a Gong (Get It On)",
    type: "Image",
    rarity: "common",
    unlocked: true,
    image: UnlockedImg,
  },
];

export const ThirdTab = () => {
  return (
    <Styled.Container height="100%" direction="column" mt="21px" gap="16px">
      {songs.map((itm) => {
        if (itm.unlocked) {
          return (
            <UnlockedCard
              key={itm.id}
              image={itm.image}
              name={itm.name}
              type={itm.type}
              rarity={itm.rarity}
            />
          );
        } else {
          return (
            <LockedCard
              key={itm.id}
              image={itm.image}
              name={itm.name}
              type={itm.type}
              rarity={itm.rarity}
            />
          );
        }
      })}
    </Styled.Container>
  );
};

const UnlockedCard: React.FC<{
  image: string;
  name: string;
  type: string;
  rarity: string;
}> = ({ image, name, type, rarity }) => {
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
    <Styled.CardContainer
      borderRadius="12px"
      overflow="hidden"
      minH="262px"
      position="relative"
    >
      <Image src={image} />
      <Styled.UpperCont position="absolute" top="15px" right="19px" zIndex="1">
        <Styled.EllipsisButton
          ref={ref}
          cursor="pointer"
          userSelect="none"
          onClick={() => setOptionsVisible(!optionsVisible)}
        >
          <EllipsisIcon bgColor="white" />

          <CardOptions visible={optionsVisible} />
        </Styled.EllipsisButton>
      </Styled.UpperCont>
      <Styled.BottonCont
        direction="row"
        align="center"
        position="absolute"
        bottom="24px"
        left="0"
        right="0"
        zIndex="1"
        p="0 16px"
      >
        <Image src={Play} />
        <Flex direction="column" ml="12px">
          <Styled.Title fontSize="20px" fontWeight={700} color="white" m="0">
            {name}
          </Styled.Title>
          <Styled.Subtitle
            fontSize="12px"
            fontWeight={500}
            color="black.500"
            m="0"
          >
            {type} ·{" "}
            <chakra.span color={colorType(rarity)} textTransform="capitalize">
              {rarity}
            </chakra.span>
          </Styled.Subtitle>
        </Flex>
      </Styled.BottonCont>
    </Styled.CardContainer>
  );
};

const LockedCard: React.FC<{
  image: string;
  name: string;
  type: string;
  rarity: string;
}> = ({ image, name, type, rarity }) => (
  <Styled.CardContainer
    borderRadius="12px"
    overflow="hidden"
    minH="262px"
    position="relative"
  >
    <Styled.UpperCont position="absolute" top="15px" right="19px" zIndex="1">
      <LockerIcon />
    </Styled.UpperCont>
    <Image src={image} />
    <Styled.BottonCont
      direction="column"
      position="absolute"
      bottom="24px"
      left="0"
      right="0"
      zIndex="1"
      p="0 16px"
    >
      <Styled.Title fontSize="20px" fontWeight={700} color="white" m="0">
        {name}
      </Styled.Title>
      <Styled.Subtitle fontSize="12px" fontWeight={500} color="black.500" m="0">
        {type} ·{" "}
        <chakra.span color={colorType(rarity)} textTransform="capitalize">
          {rarity}
        </chakra.span>
      </Styled.Subtitle>
    </Styled.BottonCont>
  </Styled.CardContainer>
);
