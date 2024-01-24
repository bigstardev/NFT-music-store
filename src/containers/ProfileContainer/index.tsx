import React from "react";

import { ScreenHeader } from "@components/ScreenHeader";
import { ProfileHeader } from "@components/ProfileHeader";

import { FameMeter } from "@components/FameMeter";
import ProfileBg from "@components/icons/ProfileBg.svg";

import { useUserContext } from "src/contexts/UserContext";

import * as Styled from "./styles";

type IProfileContainer = {
  clickDisconnectWallet: () => void;
  clickConnectWallet: () => void;
  walletDetail?: { name: string | null; address: string | null | undefined };
};

export const ProfileContainer: React.FC<IProfileContainer> = ({
  clickDisconnectWallet,
  clickConnectWallet,
  walletDetail,
}) => {
  const { user } = useUserContext();

  return (
    <Styled.Container
      direction="column"
      bgColor="black.900"
      w="100%"
      overflow="auto"
      position="relative"
    >
      <Styled.ImageContainer
        position="absolute"
        top="-30px"
        left="-130px"
        right="0"
      >
        <Styled.Image src={ProfileBg.src} style={{ width: "100%" }} />
      </Styled.ImageContainer>
      <ScreenHeader
        screenTitle="Profile"
        isProfile
        clickConnectWallet={clickConnectWallet}
        clickDisconnectWallet={clickDisconnectWallet}
        walletDetail={walletDetail}
      />
      <ProfileHeader username={user?.username} profileImg={user?.profile_photo_url || undefined} />
      <Styled.SectionLabel fontSize="20px" fontWeight="700" color="white" m="46px 32px 0">FAME</Styled.SectionLabel>
      <Styled.FameBox p="24px 16px" boxSizing="border-box" m="15px 32px 0" bg="black.700" borderRadius="12px">
        <FameMeter min={2000} max={4000} fame={2350} />
      </Styled.FameBox>
    </Styled.Container>
  );
};
