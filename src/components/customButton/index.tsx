import React from "react";
import { Button, ButtonProps } from "@chakra-ui/react";

export interface IButton extends ButtonProps {}

export const CustomButton: React.FC<IButton> = ({ children, ...rest }) => {
  return (
    <Button
      bg={rest.bg || "purple.900"}
      color={rest.color || "white.900"}
      _hover={{ backgroundColor: rest.bg }}
      _active={{ backgroundColor: rest.bg, opacity: 0.5 }}
      _focus={{ boxShadow: "none" }}
      {...rest}
    >
      {children}
    </Button>
  );
};
