import React, { useState } from "react";
import { Flex, Button } from "@chakra-ui/react";
import * as Styled from "./styles";

interface OptionsProps {
  id: number;
  label: string;
}

interface ITabHeader {
  options: OptionsProps[];
  selected: number;
  setSelected: (id: number) => void;
}

export const TabHeader: React.FC<ITabHeader> = ({ options, selected, setSelected }) => {
  return (
    <Styled.Container
      direction="row"
      w="100%"
      minH="40px"
      h="40px"
      borderRadius="40px"
      bg="black.900"
      gap="15px"
      p="2px"
      boxSizing="border-box"
    >
      {options.map((opt) => (
        <Button
          key={opt.id}
          flex={1}
          h="100%"
          borderRadius="50px"
          bg={selected === opt.id ? "black.700" : "transparent"}
          fontSize="12px"
          fontWeight={500}
          color={selected === opt.id ? "white" : "black.500"}
          _hover={{
            bg: 'black.700',
            color: 'white',
          }}
          _active={{
            bg: 'black.700',
            color: 'white',
          }}
          _focus={{
            boxShadow: 'none',
          }}
          onClick={() => setSelected(opt.id)}
        >
          {opt.label}
        </Button>
      ))}
    </Styled.Container>
  );
};
