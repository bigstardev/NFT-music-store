import React, { useState } from "react";
import { Flex } from "@chakra-ui/react";

import SongIcon from "@components/icons/songs/Song1.svg";
import { TabHeader } from "@components/TabHeader";
import { FirstTab, SecondTab, ThirdTab } from "./Tabs";

import * as Styled from "./styles";

export const SongInfo = () => {
  const [selectedTab, setSelectedTab] = useState(0);

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
            Dance Monkey
          </Styled.Title>
          <Styled.Subtitle
            color="black.500"
            fontSize="12px"
            fontWeight={500}
            margin={0}
          >
            Ty Dollar Sign
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
        <TabHeader
          options={[
            { id: 0, label: 'General' },
            { id: 1, label: 'Owners' },
            { id: 2, label: 'Drops' },
          ]}
          selected={selectedTab}
          setSelected={(id) => setSelectedTab(id)}
        />

        {selectedTab === 0 && <FirstTab />}
        {selectedTab === 1 && <SecondTab />}
        {selectedTab === 2 && <ThirdTab />}
      </Styled.Body>
    </Styled.Container>
  );
};
