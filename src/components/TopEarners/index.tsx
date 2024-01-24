import React from "react";
import * as Styled from "./styles";

import Avatar from "../icons/topEarners/earnerAvatar.svg";

const DATA = [
  {
    id: 0,
    username: "dpolden",
    coin: "MATIC",
    amount: 457,
  },
  {
    id: 1,
    username: "tstrettonp",
    coin: "MATIC",
    amount: 457,
  },
  {
    id: 2,
    username: "kcrews",
    coin: "MATIC",
    amount: 457,
  },
  {
    id: 3,
    username: "krosu",
    coin: "MATIC",
    amount: 457,
  },
  {
    id: 4,
    username: "fvareyg",
    coin: "MATIC",
    amount: 457,
  },
  {
    id: 5,
    username: "acurrieri",
    coin: "MATIC",
    amount: 457,
  },
];

interface ITopEarners {}

export const TopEarners: React.FC<ITopEarners> = () => {
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
          key={item.id}
          direction="column"
          boxSizing="border-box"
          flex={1}
        >
          <Styled.ImageBox bg="black.700" borderRadius="8px" p="22px">
            <Styled.ImageRelative position="relative">
              <Styled.Image src={Avatar.src} />

              <Styled.PositionWrapper
                position="absolute"
                top="0"
                right="0"
                w="27px"
                h="27px"
                borderRadius="14px"
                bg="black.700"
                align="center"
                justify="center"
              >
                <Styled.Position
                  w="20px"
                  h="20px"
                  borderRadius="10px"
                  bg="purple.900"
                  align="center"
                  justify="center"
                  fontSize="14px"
                  fontWeight="600"
                  color="white"
                >
                  {item.id + 1}
                </Styled.Position>
              </Styled.PositionWrapper>
            </Styled.ImageRelative>
          </Styled.ImageBox>

          <Styled.Username
            fontSize="12px"
            fontWeight="600"
            color="white"
            m="12px 0 2px"
          >
            {item.username}
          </Styled.Username>
          <Styled.Money fontSize="12px" fontWeight="500" color="black.500" m="0">
            {item.amount} {item.coin}
          </Styled.Money>
        </Styled.CardContainer>
      ))}
    </Styled.Container>
  );
};
