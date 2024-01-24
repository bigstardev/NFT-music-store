import React from "react";
import { FlexProps, Flex } from "@chakra-ui/react";

import * as Styled from "./styles";

export interface IProfileHeader extends FlexProps {
  username?: string;
  profileImg: string | undefined;
}

export const ProfileHeader: React.FC<IProfileHeader> = ({ username, profileImg, ...rest }) => {
  return (
    <Styled.Container
      w="100%"
      bg="transparent"
      boxSizing="border-box"
      p="20px 32px 0"
      direction="row"
      align="center"
      justify="space-between"
      {...rest}
    >
      <Flex align="center">
        <Styled.ImageContainer
          w="148px"
          h="148px"
          borderRadius="74px"
          bg="black.500"
          overflow="hidden"
        >
          {profileImg ? (
            <Styled.Image src={profileImg} />
          ) : (
            <div />
          )}
        </Styled.ImageContainer>
        <Flex direction="column" ml="32px">
          <Styled.Name fontSize="24px" fontWeight="700" color="white" mb="12px">
            {username || ''}
          </Styled.Name>
          <Styled.TitleContainer
            bg="rgba(255, 255, 255, 0.15)"
            backdropFilter="blur(4px)"
            borderRadius="50px"
            p="4px 16px"
            fontSize="12px"
            fontWeight="700"
            color="white"
            textTransform="uppercase"
          >
            Groupie
          </Styled.TitleContainer>
        </Flex>
      </Flex>

      <Flex gap="32px">
        <UserInfo label="All-time Position" value={4737} />
        <UserInfo label="Season 1 Points" value={582} />
        <UserInfo label="All Time Points" value={8274} />
      </Flex>
    </Styled.Container>
  );
};

interface UserInfoProps {
  label: string;
  value: number;
}

const UserInfo: React.FC<UserInfoProps> = ({ label, value }) => (
  <Flex direction="column" align="flex-end">
    <Styled.InfoValue fontSize="20px" fontWeight="700" color="white" mb="4px">
      {value}
    </Styled.InfoValue>
    <Styled.InfoLabel fontSize="12px" fontWeight="500" color="black.500" m="0">
      {label}
    </Styled.InfoLabel>
  </Flex>
);
