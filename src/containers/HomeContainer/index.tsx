import React from "react";
import { useRouter } from "next/router";
import { Progress } from "@chakra-ui/react";

import { ScreenHeader } from "@components/ScreenHeader";
import { WeekPot } from "@components/WeekPot";
import { SectionHeader } from "@components/SectionHeader";
import { TopEarners } from "@components/TopEarners";
import { Featured } from "@components/Featured";
import { ManageLabel } from "@components/ManageLabel";
import { Quests } from "@components/Quests";
import { UpComing } from "@components/UpComing";
import { MostStreamsWeek } from "@components/MostStreamsWeek";
import { HomeHeader } from "@components/HomeHeader";
import { Leaderboards } from "@components/Leaderboards";

import * as Styled from "./styles";

type IHomeContainer = {
  clickConnectWallet?: () => void;
  clickDisconnectWallet?: () => void;
  walletDetail?: { name: string | null; address: string | null | undefined };
};

export const HomeContainer: React.FC<IHomeContainer> = ({
  clickConnectWallet,
  clickDisconnectWallet,
  walletDetail,
}) => {
  const router = useRouter();

  const manageLeft = (
    <Styled.ManageLeftContainer bg="black.700" borderRadius="4px" p="4px 8px" fontSize="12px" fontWeight="500" color="white">Season 1 · 1947 pts total</Styled.ManageLeftContainer>
  );

  const questsCustom = (
    <Styled.QuestsContainer direction="column" align="flex-end" gap="4px">
      <Styled.QuestsProgressCount fontSize="12px" fontWeight="400" color="black.500" m="0">3 of 583</Styled.QuestsProgressCount>
      <Progress bg="black.700" w="139px" h="4px" borderRadius="10px" value={20} />
    </Styled.QuestsContainer>
  );

  const handleClickMostStreams = () => {
    router.push('/home/most-streamed');
  };

  const handleClickTopEarners = () => {
    router.push('/home/top-earners');
  };

  return (
    <Styled.Container
      direction="column"
      bgColor="black.900"
      w="100%"
      overflow="auto"
    >
      <ScreenHeader
        screenTitle="Home"
        clickConnectWallet={clickConnectWallet}
        clickDisconnectWallet={clickDisconnectWallet}
        walletDetail={walletDetail}
      />

      <Styled.Body p="0 32px 32px" direction="column">
        <Styled.HomeHeaderWrapper m="0 0 32px">
          <HomeHeader />
        </Styled.HomeHeaderWrapper>

        <WeekPot />

        <Styled.TopEarnersWrapper direction="column" m="24px 0 32px">
          <SectionHeader mb="16px" sectionTitle="All-time top earners" sectionSubtitle="The biggest take home earners since launch" showPaginate={false} />
          <TopEarners />
        </Styled.TopEarnersWrapper>

        <Styled.FeaturedWrapper direction="column" m="0 0 32px">
          <SectionHeader mb="16px" sectionTitle="Featured" sectionSubtitle="Tracks with the highest FAME level. Learn more about FAME here." showPaginate={false} />
          <Featured />
        </Styled.FeaturedWrapper>

        <Styled.ManageWrapper direction="column" m="0 0 32px">
          <SectionHeader mb="16px" sectionTitle="Manage my label" sectionSubtitle="Points are earned on your 12 tracks on a weekly basis. Learn more about points here." showPaginate={false} customLeft={manageLeft} />
          <ManageLabel />
        </Styled.ManageWrapper>

        <Styled.QuestsWrapper direction="column" m="0 0 32px">
          <SectionHeader mb="16px" sectionTitle="Quests" customSeeAll={questsCustom} />
          <Quests />
        </Styled.QuestsWrapper>

        <Styled.LeaderboardsWrapper direction="column" m="0 0 32px">
          <SectionHeader mb="16px" sectionTitle="Leaderboards" hidePagButtons clickExpand={handleClickTopEarners} />
          <Leaderboards />
        </Styled.LeaderboardsWrapper>

        <Styled.MostStreamsWrapper direction="column" m="0 0 32px">
          <SectionHeader mb="16px" sectionTitle="Most streams this week" hidePagButtons clickExpand={handleClickMostStreams} />
          <MostStreamsWeek />
        </Styled.MostStreamsWrapper>

        <Styled.UpComingWrapper direction="column" m="0 0 32px">
          <SectionHeader mb="16px" sectionTitle="Up & coming" showPaginate={false} />
          <UpComing />
        </Styled.UpComingWrapper>
      </Styled.Body>
    </Styled.Container>
  );
};
