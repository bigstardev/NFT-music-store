import React, { useState } from "react";
import { Button, ButtonProps, Text, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";

export interface ISideMenuButton extends ButtonProps {
  id?: string;
  label: string;
  icon?: any;
  sm?: boolean;
  path: string;
}

export const SideMenuButton: React.FC<ISideMenuButton> = ({
  id,
  label,
  icon,
  sm,
  path,
  ...rest
}) => {
  const router = useRouter();
  const [focus, setFocus] = useState(false);

  const selected = router.asPath === path || (id && router.asPath.includes(id));

  return (
    <Button
      bg="transparent"
      color="white.900"
      _hover={{ backgroundColor: "transparent" }}
      _active={{ backgroundColor: "transparent" }}
      _focus={{ boxShadow: "none" }}
      p="0"
      h="auto"
      onMouseEnter={() => setFocus(true)}
      onMouseLeave={() => setFocus(false)}
      {...rest}
    >
      {icon ? (
        <Flex
          w="1.5rem"
          h="1.5rem"
          mr="0.875rem"
          align="center"
          justify="center"
        >
          {React.cloneElement(icon, { bgColor: (selected || focus) ? "white" : "#8D8D8E" })}
        </Flex>
      ) : null}
      <Text
        fontSize={sm ? "0.75rem" : "0.875rem"}
        fontWeight="600"
        letterSpacing="-0.24px"
        color={(selected || focus) ? "white" : "black.500"}
        margin="0"
      >
        {label}
      </Text>
    </Button>
  );
};
