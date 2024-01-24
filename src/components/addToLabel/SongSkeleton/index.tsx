import PlusIcon from "@components/icons/PlusIcon";
import React from "react";
import * as Styled from "./styles";

type ISongSkeleton = {
  onClick: () => void;
};

export const SongSkeleton: React.FC<ISongSkeleton> = ({ onClick }) => {
  return (
    <Styled.Container alignSelf="stretch" align="center" p="8px" onClick={onClick}>
      <Styled.Image
        w="48px"
        h="48px"
        borderRadius="4px"
        bg="black.900"
        align="center"
        justify="center"
        cursor="pointer"
      >
        <PlusIcon />
      </Styled.Image>

      <Styled.ColumnWrapper direction="column" ml="16px">
        <Styled.Title
          w="117px"
          h="16px"
          borderRadius="50px"
          mb="4px"
          bg="black.900"
        />
        <Styled.Subtitle
          w="147px"
          h="12px"
          borderRadius="50px"
          bg="black.900"
        />
      </Styled.ColumnWrapper>
    </Styled.Container>
  );
};
