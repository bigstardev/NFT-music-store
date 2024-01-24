import React from "react";
import Image from "next/image";
import { FlexProps } from "@chakra-ui/react";

import * as Styled from "./styles";
import SongIcon from "@components/icons/SongIcon";

export interface IDropCard extends FlexProps {
  image: string;
  title: string;
  album: string;
  author: string;
  status: string;
}

export const DropCard: React.FC<IDropCard> = ({
  image,
  title,
  album,
  author,
  status,
  ...rest
}) => {
  return (
    <Styled.Container
      width="100%"
      height="262px"
      bg="transparent"
      boxSizing="border-box"
      position="relative"
      bgColor="black.500"
      borderRadius="12px"
      overflow="hidden"
      {...rest}
    >
      <Image src={image} layout="fill" objectFit="cover" />
      <Styled.InfoContainer position="absolute" bottom="24px" left="16px" right="16px" direction="column">
        <Styled.InfoTitle color="white" fontSize="20px" fontWeight="700" mb="8px">{title}</Styled.InfoTitle>

        <Styled.Wrapper direction="row" align="center">
          <SongIcon bgColor="black.500" />
          <Styled.Song color="black.500" fontSize="12px" fontWeight="500" mb="0" ml="6px">{album} - {author} <span>· {status}</span></Styled.Song>
        </Styled.Wrapper>
      </Styled.InfoContainer>
    </Styled.Container>
  );
};
