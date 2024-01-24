import React from "react";
import { Button, ButtonProps } from "@chakra-ui/react";

import { TetaviIcon } from "../../icons/SideMenuIcons";

export interface ILogoButton extends ButtonProps {}

export const LogoButton: React.FC<ILogoButton> = ({ ...rest }) => (
  <Button
    mb="3.125rem"
    bg="transparent"
    border="none"
    p="0"
    h="auto"
    _hover={{ backgroundColor: "transparent" }}
    _active={{ backgroundColor: "transparent" }}
    _focus={{ boxShadow: "none" }}
    {...rest}
  >
    <TetaviIcon />
  </Button>
);
