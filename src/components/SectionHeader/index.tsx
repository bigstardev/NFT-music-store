import React, { ReactNode } from "react";
import { FlexProps } from "@chakra-ui/react";

import * as Styled from "./styles";
import ChevronLeft from "@components/icons/ChevronLeft";
import ChevronRight from "@components/icons/ChevronRight";

export interface ISectionHeader extends FlexProps {
  sectionTitle: string;
  sectionSubtitle?: string;
  expanded?: boolean;
  clickExpand?: () => void;
  showPaginate?: boolean;
  clickPrevious?: () => void;
  clickNext?: () => void;
  activePage?: number;
  totalPages?: number;
  mb?: string;
  customSeeAll?: ReactNode;
  customLeft?: ReactNode;
  hidePagButtons?: boolean;
}

export const SectionHeader: React.FC<ISectionHeader> = ({
  sectionTitle,
  sectionSubtitle,
  expanded,
  clickExpand,
  showPaginate = true,
  clickPrevious,
  clickNext,
  activePage,
  totalPages,
  mb,
  customSeeAll,
  customLeft,
  hidePagButtons,
  ...rest
}) => {
  return (
    <Styled.Container
      w="100%"
      bg="transparent"
      boxSizing="border-box"
      mb={mb || "20px"}
      direction="row"
      align="center"
      justify="space-between"
      {...rest}
    >
      <Styled.TitleWrapper direction="column">
        <Styled.SectionTitle
          color="white"
          fontSize="20px"
          fontWeight="700"
          m={0}
        >
          {sectionTitle}
        </Styled.SectionTitle>
        {sectionSubtitle && (
          <Styled.SectionSubtitle
            color="black.500"
            fontSize="12px"
            fontWeight="500"
            mt="4px"
          >
            {sectionSubtitle}
          </Styled.SectionSubtitle>
        )}
      </Styled.TitleWrapper>

      {showPaginate && (
        <Styled.RightWrapper direction="row" align="center">
          {!expanded && !customSeeAll && !hidePagButtons && (
            <>
              <Styled.Button
                w="28px"
                h="28px"
                mr="16px"
                userSelect="none"
                display="flex"
                alignItems="center"
                onClick={clickPrevious}
                cursor={
                  activePage && activePage > 1 ? "pointer" : "not-allowed"
                }
              >
                <ChevronLeft
                  bgColor={
                    activePage && activePage > 1
                      ? "#ffffff"
                      : "rgba(255, 255, 255, 0.2)"
                  }
                />
              </Styled.Button>
              <Styled.Button
                w="28px"
                h="28px"
                userSelect="none"
                display="flex"
                alignItems="center"
                onClick={clickNext}
                cursor={
                  activePage && totalPages && activePage < totalPages
                    ? "pointer"
                    : "not-allowed"
                }
              >
                <ChevronRight
                  bgColor={
                    activePage && totalPages && activePage < totalPages
                      ? "#ffffff"
                      : "rgba(255, 255, 255, 0.2)"
                  }
                />
              </Styled.Button>
              <Styled.Divider h="21px" w="1px" bgColor="black.500" m="0 16px" />
            </>
          )}
          {customSeeAll && (
            <>
              {customSeeAll}
              <Styled.Divider h="21px" w="1px" bgColor="black.500" m="0 16px" />
            </>
          )}
          <Styled.SeeAll
            color="purple.900"
            fontSize="14px"
            fontWeight="600"
            cursor="pointer"
            userSelect="none"
            onClick={clickExpand}
          >
            {expanded ? "See less" : "See all"}
          </Styled.SeeAll>
        </Styled.RightWrapper>
      )}

      {customLeft && customLeft}
    </Styled.Container>
  );
};
