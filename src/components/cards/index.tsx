import React from "react";
import { SimpleGrid, Box, Heading, Text } from "@chakra-ui/react";

import data from "@public/meta.json";
import { DrawerOptions } from "pages/_app";
import { TermsAndConditions } from "@components/termsAndConditions";
import { LearnMore } from "@components/learnMore";

type ICards = {
  setDrawerOption: (options: DrawerOptions) => void
}

export const Cards: React.FC<ICards> = ({ setDrawerOption }) => {
  const handleOpenDrawer = (id: string) => {
    let component;

    switch (id) {
      case 'terms':
        component = <TermsAndConditions />
        break
      default:
        component = <LearnMore />
    }
    setDrawerOption({
      isActive: true,
      component,
      width: 430
    })
  }

  return (
    <SimpleGrid columns={4} spacing={10} px={20} py={10}>
      {(data?.drawers ?? []).map((drawer) => (
        <Box key={drawer.name}  data-testid="container">
          <Heading fontSize={16} fontWeight="500" py={5}>
            {drawer.name}
          </Heading>
          <Text onClick={() => handleOpenDrawer(drawer.id)} fontSize={14}>{drawer.description}</Text>
        </Box>
      ))}
    </SimpleGrid>
  );
};
