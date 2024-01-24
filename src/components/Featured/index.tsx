import React from "react";
import * as Styled from "./styles";

import Song from "../icons/featured/featured.svg";

const DATA = [
  {
    id: 0,
    songName: "Bang a Gong (Get It On)",
    artist: "Chicago",
  },
  {
    id: 1,
    songName: "Limelight",
    artist: "Chicago",
  },
  {
    id: 2,
    songName: "Hi Hi Hi",
    artist: "Chicago",
  },
  {
    id: 3,
    songName: "YYZ",
    artist: "Chicago",
  },
  {
    id: 4,
    songName: "Eye of the Tiger",
    artist: "Chicago",
  },
  {
    id: 5,
    songName: "Hit Me With Your Best Shot",
    artist: "Chicago",
  },
];

interface IFeatured {}

export const Featured: React.FC<IFeatured> = () => {
  return (
    <Styled.Container
      direction="row"
      align="flex-start"
      boxSizing="border-box"
      flex={1}
      gap="38px"
    >
      {DATA.map((item) => (
        <Styled.CardContainer
          direction="column"
          boxSizing="border-box"
          flex={1}
        >
          <Styled.ImageBox bg="black.700" borderRadius="8px" position="relative">
            <Styled.DotContainer align="center" justify="center" position="absolute" top="-5px" right="-5px" bg="black.700" w="16px" h="16px" borderRadius="8px">
              <Styled.Dot w="12px" h="12px" borderRadius="6px" bg="#0EAD69" />
            </Styled.DotContainer>

            <Styled.Image src={Song.src} />
          </Styled.ImageBox>

          <Styled.SongName
            fontSize="12px"
            fontWeight="600"
            color="white"
            m="12px 0 2px"
          >
            {item.songName}
          </Styled.SongName>
          <Styled.Artist fontSize="12px" fontWeight="500" color="black.500" m="0">
            {item.artist}
          </Styled.Artist>
        </Styled.CardContainer>
      ))}
    </Styled.Container>
  );
};
