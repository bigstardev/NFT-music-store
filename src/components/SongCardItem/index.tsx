import React, { useState } from "react";
import * as Styled from "./styles";
import CartIcon from "../icons/CartIcon";
import QuestionIcon from "../icons/QuestionIcon"

import Song from "../icons/featured/featured.svg";

interface ISongCardItem {
  songName: string;
  artist: string;
}

export const SongCardItem: React.FC<ISongCardItem> = ({ songName, artist }) => {
  const [focus, setFocus] = useState(false);

  return (
    <Styled.CardContainer
      direction="column"
      boxSizing="border-box"
      position="relative"
      flex={1}
      onMouseEnter={() => setFocus(true)}
      onMouseLeave={() => setFocus(false)}
    >
      <Styled.ImageBox bg="black.700" borderRadius="8px" position="relative">
        <Styled.DotContainer
          align="center"
          justify="center"
          position="absolute"
          top="-5px"
          right="-5px"
          bg="black.700"
          w="16px"
          h="16px"
          borderRadius="8px"
          zIndex="1"
        >
          <Styled.Dot w="12px" h="12px" borderRadius="6px" bg="#0EAD69" />
        </Styled.DotContainer>

        <Styled.Image src={Song.src} />

        {focus && (
          <Styled.FocusContainer
            position='absolute'
            top="0"
            bottom="0"
            left="0"
            right="0"
            bg="rgba(0, 0, 0, 0.5)"
            align="center"
            justify="center"
            gap="18px"
          >
            <CartIcon />
            <QuestionIcon />
          </Styled.FocusContainer>
        )}
      </Styled.ImageBox>

      <Styled.SongName
        fontSize="12px"
        fontWeight="600"
        color="white"
        m="12px 0 2px"
      >
        {songName}
      </Styled.SongName>
      <Styled.Artist fontSize="12px" fontWeight="500" color="black.500" m="0">
        {artist}
      </Styled.Artist>
    </Styled.CardContainer>
  );
};
