import React from "react";
import {
  InputProps,
} from "@chakra-ui/react";
import { Container, Label, Input } from "./styles";

export interface IInput extends InputProps {
  label?: string;
}

export const CustomInput: React.FC<IInput> = ({ label, ...rest }) => {
  return (
    <Container direction="column">
      {label && (
        <Label fontSize="12px" fontWeight={700} color="white.900" mb="9px">
          {label}
        </Label>
      )}
      <Input
        border="none"
        bg="black.900"
        color="white.900"
        _focus={{ boxShadow: "none" }}
        {...rest}
      />
    </Container>
  );
};
