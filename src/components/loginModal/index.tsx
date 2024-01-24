import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Flex,
  Center,
  Link,
} from "@chakra-ui/react";
import { Container, Title, Subtitle, Tip, CloseIcon } from "./styles";
import { LoginCard } from "./loginCard";

import MetaMask from "../icons/MetaMaskBg.svg";
import CoinBase from "../icons/CoinBase.svg";
import MetaMaskIcon from "../icons/MetaMaskIcon.svg";
import CoinBaseIcon from "../icons/CoinBaseIcon.svg";
import Close from "../icons/closeIcon.svg";

export type ILoginModal = {
  isOpen: boolean;
  onClose: () => void;
  clickContinue: (type: string) => void;
};

export const LoginModal: React.FC<ILoginModal> = ({
  isOpen,
  onClose,
  clickContinue,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay bg="overlay.900" />
      <ModalContent
        bg="black.700"
        borderRadius="12px"
        border="1px solid"
        borderColor="black.500"
        boxShadow="0px 0px 60px 10px rgba(0, 0, 0, 0.4)"
      >
        <CloseIcon src={Close.src} onClick={onClose} />
        <ModalBody p="48px 24px 32px">
          <Container direction="column">
            <Center flexDirection="column" mb="30px">
              <Title
                color="white.900"
                fontSize="16px"
                fontWeight={700}
                margin={0}
              >
                Learn more
              </Title>
              <Subtitle
                color="black.500"
                fontSize="12px"
                fontWeight={500}
                textAlign="center"
                margin={0}
              >
                To login or register to Tetavi, connect either a MetaMask or
                Coinbase Wallet.
              </Subtitle>
            </Center>

            <Flex gap="22px" mb="24px">
              <LoginCard
                info={{
                  bgImage: MetaMask.src,
                  icon: MetaMaskIcon.src,
                  title: "MetaMask",
                  subtitle:
                    "Available on iOS, Android & Desktop. No KYC required.",
                }}
                clickContinue={() => clickContinue("injected")}
              />
              <LoginCard
                info={{
                  bgImage: CoinBase.src,
                  icon: CoinBaseIcon.src,
                  title: "Coinbase Wallet",
                  subtitle:
                    "Available on iOS, Android & Desktop. No KYC required.",
                }}
                clickContinue={() => clickContinue("coinbaseWallet")}
              />
            </Flex>

            <Tip
              color="black.400"
              fontSize="12px"
              fontWeight={500}
              textAlign="center"
              margin={0}
            >
              Download Metamask{" "}
              <Link
                _focus={{ boxShadow: "none" }}
                target="_blank"
                color="blue.900"
                href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en"
              >
                here
              </Link>
              , or alternatively
              <br />
              download Coinbase wallet{" "}
              <Link
                _focus={{ boxShadow: "none" }}
                target="_blank"
                color="blue.900"
                href="https://www.coinbase.com/pt/wallet/getting-started-mobile"
              >
                here
              </Link>
              .
            </Tip>
          </Container>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
