import React from "react";
import { useRouter } from "next/router";
import { FlexProps } from "@chakra-ui/react";
import { LogoButton } from "./LogoButton";
import { SideMenuButton } from "./sideMenuButton";

import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  ProfileIcon,
  FavouriteIcon,
  NotificationsIcon,
} from "../icons/SideMenuIcons";

import * as Styled from "./styles";
import { LearnMore } from "@components/learnMore";
import { TermsAndConditions } from "@components/termsAndConditions";
import { DrawerOptions } from "pages/_app";

export interface ISideMenu extends FlexProps {
  setDrawerOption: (options: DrawerOptions) => void;
}

const IconButtons = [
  { id: "home", icon: <HomeIcon />, label: "Home", path: "/" },
  {
    id: "search",
    icon: <SearchIcon />,
    label: "Search NFTs",
    path: "/search-nfts",
  },
  { id: "library", icon: <LibraryIcon />, label: "Library", path: "/library" },
  { id: "profile", icon: <ProfileIcon />, label: "Profile", path: "/profile" },
  {
    id: "favourites",
    icon: <FavouriteIcon />,
    label: "Favourites",
    path: "/favourites",
  },
  {
    id: "notifications",
    icon: <NotificationsIcon />,
    label: "Notifications",
    path: "/notifications",
  },
];

const OtherButtons = [
  { id: "help", label: "Help & Support", path: "/help" },
  {
    id: "terms-conditions",
    label: "Terms & Conditions",
    path: "/terms-conditions",
  },
  { id: "privacy-policy", label: "Privacy Policy", path: "/privacy-policy" },
];

export const SideMenu: React.FC<ISideMenu> = ({ setDrawerOption, ...rest }) => {
  const router = useRouter();

  const handleNav = (path: string) => {
    router.push(`/${path}`);
  };

  const handleOpenDrawer = (id: string) => {
    let component;

    switch (id) {
      case "terms-conditions":
        component = <TermsAndConditions />;
        break;
      default:
        component = <LearnMore />;
    }
    setDrawerOption({
      isActive: true,
      component,
      width: 430,
    });
  };

  return (
    <Styled.Container
      w="15.5rem"
      h="100vh"
      bg="black.700"
      boxSizing="border-box"
      p="32px 20px"
      direction="column"
      align="flex-start"
      {...rest}
    >
      <LogoButton onClick={() => handleNav("/")} />
      <Styled.Scrollable alignSelf="stretch" direction="column">
        <Styled.ButtonWrapper
          direction="column"
          align="flex-start"
          gap="1.875rem"
        >
          {IconButtons.map((btn) => (
            <SideMenuButton
              key={btn.id}
              id={btn.id}
              icon={btn.icon}
              label={btn.label}
              path={btn.path}
              onClick={() => handleNav(btn.path)}
            />
          ))}
        </Styled.ButtonWrapper>
        <Styled.Divider w="100%" h="1px" bg="black.500" m="2rem 0" />

        <Styled.OtherButtonWrapper
          direction="column"
          align="flex-start"
          gap="1.5rem"
        >
          <Styled.OtherLabel
            fontSize="0.75rem"
            fontWeight="700"
            letterSpacing="1.76px"
            textTransform="uppercase"
            color="black.500"
            m="0"
            userSelect="none"
          >
            Other
          </Styled.OtherLabel>
          {OtherButtons.map((other) => (
            <SideMenuButton
              key={other.id}
              sm
              label={other.label}
              path={other.path}
              onClick={() => handleOpenDrawer(other.id)}
            />
          ))}
        </Styled.OtherButtonWrapper>
      </Styled.Scrollable>
    </Styled.Container>
  );
};
