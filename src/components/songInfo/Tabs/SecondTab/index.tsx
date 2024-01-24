import React from "react";
import {
  Flex,
  Text,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";

import * as Styled from "./styles";
import OwnersIcon from "../../../icons/ownersIcon.svg";
import Image from "next/image";

export const SecondTab = () => {
  return (
    <Styled.Container height="100%" direction="column" mt="21px">
      <Styled.SeasonContainer
        alignSelf="stretch"
        bg="rgba(255, 255, 255, 0.04)"
        borderRadius="50px"
        p="8px 0"
        color="black.500"
        fontSize="12px"
        fontWeight="500"
        textAlign="center"
        mb="24px"
      >
        Displaying points from current season
      </Styled.SeasonContainer>

      <Accordion allowToggle borderColor="transparent">
        {[...Array(5).keys()].map((_, idx) => (
          <AccordionItem key={idx}>
            {({ isExpanded }) => (
              <>
                <AccordionButton
                  w="100%"
                  justifyContent="space-between"
                  alignItems="center"
                  _focus={{ boxShadow: "none" }}
                  p="8px 0"
                >
                  <Flex gap="16px" align="center">
                    <Image src={OwnersIcon} />
                    <Flex direction="column" align="flex-start">
                      <Text
                        fontSize="14px"
                        fontWeight={600}
                        color="white"
                        m="0"
                      >
                        pilkinsplucky
                      </Text>
                      <Text
                        fontSize="12px"
                        fontWeight={400}
                        color="black.500"
                        m="0"
                      >
                        472 Fractions
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex gap="18px" align="center">
                    <Text
                      fontSize="14px"
                      fontWeight={600}
                      color="purple.900"
                      m="0"
                    >
                      382 pts
                    </Text>
                    {isExpanded ? (
                      <AccordionIcon color="white" />
                    ) : (
                      <AccordionIcon color="white" opacity={0.4} />
                    )}
                  </Flex>
                </AccordionButton>
                <AccordionPanel ml="64px" p="0" color="white">
                  <Styled.Divider w="100%" h="1px" bg="white" opacity="0.1" mb="15px" />
                  <Styled.SectionLabel fontSize="12px" fontWeight={700} color="white" mb="12px">Common (200)</Styled.SectionLabel>
                  <Flex align="center" gap="24px">
                    <AccordionInfo label="Diamond" color="purple.400" value={100} />
                    <AccordionInfo label="Platinum" color="#D5D5D6" value={20} />
                    <AccordionInfo label="Gold" color="#F9BC83" value={80} />
                  </Flex>
                  <Styled.Divider w="100%" h="1px" bg="white" opacity="0.1" m="16px 0" />
                  <Styled.SectionLabel fontSize="12px" fontWeight={700} color="white" mb="12px">Rare (272)</Styled.SectionLabel>
                  <Flex align="center" gap="24px">
                    <AccordionInfo label="Diamond" color="purple.400" value={100} />
                    <AccordionInfo label="Platinum" color="#D5D5D6" value={20} />
                    <AccordionInfo label="Gold" color="#F9BC83" value={80} />
                  </Flex>
                  <Styled.Divider w="100%" h="1px" bg="white" opacity="0.1" m="16px 0 8px" />
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </Styled.Container>
  );
};

const AccordionInfo: React.FC<{ label: string; value: number; color: string }> = ({ label, value, color }) => (
  <Flex direction="column">
    <Text fontSize="12px" fontWeight={400} color={color} mb="4px">{label}</Text>
    <Text fontSize="12px" fontWeight={400} color="black.500" mb="0">{value}</Text>
  </Flex>
);
