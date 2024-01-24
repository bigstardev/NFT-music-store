import React from "react";
import { Divider } from '@chakra-ui/react';

import { Container, Wrapper, Icon, Title, Subtitle, Continue, Chevron } from "./styles";

import ChevronRight from "../../icons/chevronRight.svg";

type IInfo = {
  bgImage?: string;
  icon?: string;
  title: string;
  subtitle: string;
}

type ILoginCard = {
  info: IInfo,
  clickContinue: () => void;
}

export const LoginCard: React.FC<ILoginCard> = ({ info, clickContinue }) => {
  return (
    <Container
      flex={1}
      direction="column"
      background="black.400"
      bgImage={`url(${info.bgImage})`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      borderRadius="12px"
      overflow="hidden"
      cursor="pointer"
      onClick={clickContinue}
    >
      <Wrapper direction="column" p="16px 18px" boxSizing="border-box">
        <Icon src={info.icon} />
        <Title fontSize="16px" fontWeight={700} color="white.900" mb="4px">{info.title}</Title>
        <Subtitle fontSize="12px" fontWeight={500} color="white.900" m="0">{info.subtitle}</Subtitle>
      </Wrapper>
      <Divider />
      <Wrapper align="center" justify="space-between" p="12px 18px" boxSizing="border-box">
        <Continue fontSize="12px" fontWeight={500} color="white.900" m="0">Continue</Continue>
        <Chevron src={ChevronRight.src} />
      </Wrapper>
    </Container>
  );
};
