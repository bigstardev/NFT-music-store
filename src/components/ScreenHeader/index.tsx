import React, { useState, useEffect, useRef } from "react";
import { FlexProps, Flex, Button } from "@chakra-ui/react";
import { LoadingState, useUserContext } from "src/contexts/UserContext";
import Image from "next/image";

import ChevronDown from "@components/icons/ChevronDown";
import HeaderBackIcon from "@components/icons/HeaderBackIcon";

import * as Styled from "./styles";
import Meta from "../icons/MetaMaskIcon.svg";
import CoinBase from "../icons/CoinBaseIcon.svg";
import ConnectWalletIcon from "../icons/connectWalletIcon.svg";
import Fame from "../icons/fameIcon.svg";
import CogIcon from "@components/icons/CogIcon";
import { useRouter } from "next/router";
export interface IConnectWallet {
  clickConnectWallet?: () => void;
}
interface IHeaderDropDwon {
  walletDetail?: { name: string | null; address: string | null | undefined };
  clickDisconnectWallet?: () => void;
}

export interface IScreenHeader extends FlexProps {
  screenTitle: string;
  isProfile?: boolean;
  clickConnectWallet?: () => void;
  clickDisconnectWallet?: () => void;
  walletDetail?: { name: string | null; address: string | null | undefined };
  goBack?: () => void;
}

export const ScreenHeader: React.FC<IScreenHeader> = ({
  screenTitle,
  isProfile,
  clickDisconnectWallet,
  clickConnectWallet,
  walletDetail,
  goBack,
  ...rest
}) => {
  const { userToken, loadingState } = useUserContext();

  return (
    <Styled.Container
      w="100%"
      minH="6.375rem"
      bg="transparent"
      boxSizing="border-box"
      p="0 32px"
      direction="row"
      align="center"
      justify="space-between"
      {...rest}
    >
      <Styled.TitleWrapper align="center" gap="20px">
        {goBack && (
          <Styled.BackBtn cursor="pointer" onClick={goBack}>
            <HeaderBackIcon />
          </Styled.BackBtn>
        )}

        <Styled.HeaderTitle color="white" fontSize="20px" fontWeight="700" m={0}>
          {screenTitle}
        </Styled.HeaderTitle>
      </Styled.TitleWrapper>

      <Flex align="center">
        {loadingState !== LoadingState.LOADING &&
          (!userToken ? (
            <ConnectWallet clickConnectWallet={clickConnectWallet} />
          ) : (
            <Flex align="center" gap="8px">
              {typeof window !== 'undefined' && window.ethereum.networkVersion !== '80001' && (
                <ChangeNetwork />
              )}
              <HeaderDropdown
                walletDetail={walletDetail}
                clickDisconnectWallet={clickDisconnectWallet}
              />
              <FameCounter />
              {isProfile && (
                <Button
                  bg="transparent"
                  _hover={{ bg: "transparent" }}
                  _active={{ bg: "transparent" }}
                  _focus={{ boxShadow: "none" }}
                >
                  <CogIcon />
                </Button>
              )}
            </Flex>
          ))}
      </Flex>
    </Styled.Container>
  );
};

const HeaderDropdown: React.FC<IHeaderDropDwon> = ({
  walletDetail,
  clickDisconnectWallet,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Close dropdown clicking outside of it
    function handleClickOutside(event: Event) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Styled.DropdownContainer
      bg="black.700"
      backdropFilter="blur(4px)"
      borderRadius="8px"
      p="3px 4px"
      align="center"
      cursor="pointer"
      direction="column"
      position="relative"
      onClick={() => setOpen(!open)}
      ref={ref}
    >
      <Styled.WalletInfor align="center">
        <Styled.ImageCont
          w="24px"
          h="24px"
          borderRadius="4px"
          bg="black.900"
          mr="8px"
          align="center"
          justify="center"
        >
          {walletDetail?.name === "injected" ? (
            <Image src={Meta} height="16px" width="16px" />
          ) : (
            <Image src={CoinBase} height="16px" width="16px" />
          )}
        </Styled.ImageCont>
        <Styled.Dot w="6px" h="6px" borderRadius="6px" bg="#0EAD69" mr="5px" />
        <Styled.DropdownText
          color="white"
          fontSize="12px"
          fontWeight="700"
          m="0 9px 0 0"
        >
          {walletDetail?.address?.substring(0, 2) +
            "..." +
            walletDetail?.address
              ?.trim()
              .substring(walletDetail?.address.length - 5)}
        </Styled.DropdownText>
        <ChevronDown />
      </Styled.WalletInfor>
      {open && (
        <Button
          bg="#fff"
          backdropFilter="blur(4px)"
          borderRadius="8px"
          p="4px 12px"
          h="fit-content"
          color="black.700"
          fontSize="12px"
          fontWeight="700"
          position="absolute"
          top="30px"
          w="100%"
          _active={{
            bg: "black.700",
          }}
          _focus={{
            boxShadow: "none",
          }}
          onClick={() => {
            router.push("/");
            clickDisconnectWallet && clickDisconnectWallet();
          }}
        >
          Disconnect wallet
        </Button>
      )}
    </Styled.DropdownContainer>
  );
};

const FameCounter = () => (
  <Styled.DropdownContainer
    bg="black.700"
    backdropFilter="blur(4px)"
    borderRadius="8px"
    p="3px 4px"
    minH="30px"
    align="center"
  >
    <Image src={Fame} height="16px" width="12px" />
    <Styled.DropdownText
      color="white"
      fontSize="12px"
      fontWeight="700"
      m="0 9px 0 8px"
    >
      38,4929 FAME
    </Styled.DropdownText>
  </Styled.DropdownContainer>
);

const ConnectWallet: React.FC<IConnectWallet> = ({ clickConnectWallet }) => (
  <Styled.DropdownContainer
    bg="black.700"
    backdropFilter="blur(4px)"
    borderRadius="8px"
    p="3px 4px"
    minH="30px"
    align="center"
    cursor="pointer"
    onClick={clickConnectWallet}
  >
    <Image src={ConnectWalletIcon} height="24px" width="24px" />
    <Styled.DropdownText
      color="white"
      fontSize="12px"
      fontWeight="700"
      m="0 9px 0 8px"
    >
      Connect Wallet
    </Styled.DropdownText>
  </Styled.DropdownContainer>
);

const ChangeNetwork: React.FC = () => {
  const handleChangeNetwork = async () => {
    const chainIdHex = '0x13881';
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{chainId: chainIdHex}],
      });
    } catch (err: any) {
      try {
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              chainId: chainIdHex,
              chainName: 'Mumbai Testnet',
              nativeCurrency: {
                symbol: 'MATIC',
                decimals: 18,
              },
              rpcUrls: ['https://rpc-mumbai.maticvigil.com'],
            },
          ],
        });
      } catch (error: any) {
        console.log(error);
      }
    }
  };

  return (
    <Styled.DropdownContainer
      bg="#131419"
      backdropFilter="blur(4px)"
      borderRadius="8px"
      p="3px 4px"
      align="center"
      cursor="pointer"
      onClick={handleChangeNetwork}
    >
      <Image src={ConnectWalletIcon} height="24px" width="24px" />
      <Styled.DropdownText
        color="white"
        fontSize="12px"
        fontWeight="700"
        m="0 9px 0 8px"
      >
        Switch to Mumbai Network
      </Styled.DropdownText>
    </Styled.DropdownContainer>
  );
};

