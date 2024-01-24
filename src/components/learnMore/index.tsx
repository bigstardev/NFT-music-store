import React from "react";
import { Flex, Divider } from "@chakra-ui/react";
import {
  Header,
  Body,
  Title,
  Subtitle,
  Text,
  Container,
  FlameIcon,
} from "./styles";
import FlameIconImage from "@components/icons/flameIcon.svg";

export const LearnMore: React.FC = () => {
  return (
    <Container height="100%" direction="column" >
      <Header
        bg="black.900"
        justify="flex-start"
        align="center"
        minHeight="80px"
        direction="row"
        paddingLeft="24px"
      >
        <FlameIcon src={FlameIconImage.src} />
        <Flex direction="column" marginLeft="16px">
          <Title
            color="white.900"
            fontSize="14px"
            fontWeight={600}
            margin={0}
            marginBottom="4px"
          >
            Learn more
          </Title>
          <Subtitle
            color="black.500"
            fontSize="12px"
            fontWeight={500}
            margin={0}
          >
            How FAME is calculated
          </Subtitle>
        </Flex>
      </Header>
      <Body
        padding="24px"
        bg="black.800"
        direction="column"
        overflowY="auto"
        height="100%"
      >
        <Title
          color="white.900"
          fontSize="14px"
          fontWeight={600}
          margin={0}
          marginBottom="5px"
        >
          What is FAME?
        </Title>
        <Text color="black.500" fontSize="12px" fontWeight={500} margin={0}>
          FAME is a soft currency earned by players to use to influence songs
          they like. IT is earned via completing quests and buying NFTs. In the
          future FAME may be purchasable directly using crypto/fiat but this is
          not to be included in the MVP.
        </Text>
        <Divider
          orientation="horizontal"
          h="1px"
          color="black.500"
          opacity="0.1"
          margin="24px 0"
        />
        <Title
          color="white.900"
          fontSize="14px"
          fontWeight={600}
          margin={0}
          marginBottom="16px"
        >
          How FAME is calculated
        </Title>
        <Text
          color="white.900"
          fontSize="12px"
          fontWeight={500}
          margin={0}
          marginBottom="4px"
        >
          Quests
        </Text>
        <Text
          color="black.500"
          fontSize="12px"
          fontWeight={500}
          margin={0}
          marginBottom="16px"
        >
          Each quest will have a different amount of FAME as a reward. When
          players complete a quest they will be rewarded FAME.
        </Text>
        <Text
          color="white.900"
          fontSize="12px"
          fontWeight={500}
          margin={0}
          marginBottom="4px"
        >
          Buying NFTs
        </Text>
        <Text color="black.500" fontSize="12px" fontWeight={500} margin={0}>
          Each time a player buys an NFT, they will be rewarded with a small
          amount of FAME. This FAME.
        </Text>
        <Divider
          orientation="horizontal"
          h="1px"
          color="black.500"
          opacity="0.1"
          margin="24px 0"
        />
        <Title
          color="white.900"
          fontSize="14px"
          fontWeight={600}
          margin={0}
          marginBottom="5px"
        >
          Applying FAME to Songs
        </Title>
        <Text color="black.500" fontSize="12px" fontWeight={500} margin={0}>
          Each song will have a “Popularity Rating/Popularity Level” attaches to
          them. Players can use their FAME to boost a songs popularity, and
          therefore having eventually appear on the “Most Famous” carousel on
          the main page. <br />
          <br />
          When a song first drops it will be considered level 1. As more people
          apply FAME to a song, it will begin to level up. Each time a song
          levels up, it will be featured on the “Most Famous” carousel on the
          main page. Each time the song levels up, it will require more FAME to
          be applied to have it featured. <br />
          <br />
          Songs that are higher levels will earn players who own those NFTs more
          points.
        </Text>
        <Divider
          orientation="horizontal"
          h="1px"
          color="black.500"
          opacity="0.1"
          margin="24px 0"
        />
        <Title
          color="white.900"
          fontSize="14px"
          fontWeight={600}
          margin={0}
          marginBottom="5px"
        >
          The Main Stage
        </Title>
        <Text color="black.500" fontSize="12px" fontWeight={500} margin={0}>
          Each season there will be a song featured on “The Main Stage” this
          will be at the top of the home page as a large viewport. The song that
          had the most FAME applied to it the previous week (regardless of
          level) will be featured here. <br/><br/>
          Suggestion: If we’re able to stream
          songs ourselves, this “main stage” song should automatically start
          playing for 2 reasons; It forces players to hear the most popular song
          of the week, and (not sure if this is correct) will count towards an
          extra stream for that song, thus rewarding owners of the NFTs
        </Text>
      </Body>
    </Container>
  );
};
