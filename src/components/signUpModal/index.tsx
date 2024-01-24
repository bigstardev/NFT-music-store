import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Flex,
  Center,
} from "@chakra-ui/react";

import { UploadImage, CustomInput, CustomButton } from "../index";

import {
  Container,
  LeftColumn,
  LeftTitle,
  LeftSubtitle,
  LogoIcon,
  RightColumn,
  BackIcon,
  CloseIcon,
  RightTitle,
  Tip,
  Regular,
  Img,
  ErrorMessage,
} from "./styles";

import StyledClose from "../icons/styledCloseIcon";
import StyledBack from "../icons/styledBackIcon";
import SignUpImage from "../icons/SignUpImage.svg";
import Logo from "../icons/TetaviLogo.svg";
import VerifyIcon from "../icons/verifyIcon.svg";
import WelcomeIcon from "../icons/welcomeIcon.svg";

export type ISignUpModal = {
  isOpen: boolean;
  onClose: () => void;
  username: string;
  setUsername: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  img: string | undefined;
  setImage: (value: string, target: HTMLInputElement) => void;
  handleContinue: () => void;
  error?: string | null;
  setError: (value: string | null) => void;
};

export const SignUpModal: React.FC<ISignUpModal> = ({
  isOpen,
  onClose,
  username,
  setUsername,
  email,
  setEmail,
  img,
  setImage,
  handleContinue,
  error,
  setError,
}) => {
  const [step, setStep] = useState("username");

  const handleClose = () => {
    setStep("username");
    setError(null);
    onClose();
  };

  const handleUsername = () => {
    if (!username) setError("Username is empty");
    else {
      setError(null);
      setStep("email");
    }
  };

  const handleCreateUser = async (isSkip?: boolean) => {
    const validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email || !email.match(validEmail)) {
      setError("Email address is not a valid email")
    } else {
      setError(null);
      try {
        await handleContinue();

        if (isSkip) {
          setStep("welcome");
        } else {
          setStep("verify");
        }
      } catch (err) {
        setStep("username");
      }
    }
  };

  const _getUsernameStep = (
    <>
      <Flex direction="column">
        <Flex align="center" justify="space-between">
          <RightTitle fontSize="20px" fontWeight={600} color="white.900" m="0">
            Create an account
          </RightTitle>
          <CloseIcon onClick={handleClose}>
            <StyledClose bgColor="#000" iconColor="#fff" />
          </CloseIcon>
        </Flex>
        <Flex mt="56px" mb="33px" justify="center">
          <UploadImage img={img} onChange={(file, target) => setImage(file, target)} />
        </Flex>
        <CustomInput
          label="Username"
          placeholder="e.g John Doe"
          value={username}
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            setUsername((e.target as HTMLInputElement).value);
            if (error) {
              setError(null);
            }
          }}
        />
        <ErrorMessage color="red.900" fontSize={12} marginTop={0.5}>
          {error}
        </ErrorMessage>
      </Flex>
      <CustomButton onClick={handleUsername}>Continue</CustomButton>
    </>
  );

  const _getEmailStep = (
    <>
      <Flex direction="column">
        <Flex align="center" justify="space-between" mb="16px">
          <BackIcon onClick={() => setStep("username")}>
            <StyledBack />
          </BackIcon>
          <CloseIcon onClick={handleClose}>
            <StyledClose bgColor="#000" iconColor="#fff" />
          </CloseIcon>
        </Flex>
        <RightTitle
          fontSize="20px"
          fontWeight={600}
          color="white.900"
          mb="25px"
        >
          Add an email address
        </RightTitle>
        <CustomInput
          label="Enter email address"
          placeholder="e.g Johndoe@example.com"
          value={email}
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setEmail((e.target as HTMLInputElement).value)
          }
        />
        <Tip fontSize="12px" fontWeight={500} color="black.500" mt="16px">
          We will only use your email address for marketing communications and
          notifications.
        </Tip>
        <ErrorMessage color="red.900" fontSize={12} marginTop={0.5}>
          {error}
        </ErrorMessage>
      </Flex>
      <Flex direction="column">
        <CustomButton onClick={() => handleCreateUser()}>Continue</CustomButton>
        <CustomButton
          bg="transparent"
          color="purple.900"
          onClick={() => handleCreateUser(true)}
        >
          Skip
        </CustomButton>
      </Flex>
    </>
  );

  const _getVerifyStep = (
    <>
      <Flex direction="column" h="100%">
        <Flex align="center" justify="space-between">
          <Flex />
          <CloseIcon onClick={handleClose}>
            <StyledClose bgColor="#000" iconColor="#fff" />
          </CloseIcon>
        </Flex>
        <Center flexDirection="column" h="100%">
          <Img src={VerifyIcon.src} />
          <RightTitle
            fontSize="20px"
            fontWeight={600}
            color="white.900"
            m="40px 0 10px"
          >
            Verify your email address
          </RightTitle>
          <Regular
            fontSize="16px"
            fontWeight={500}
            color="black.500"
            textAlign="center"
          >
            Please click on the link in order to verify your email address.
            Please note that this link will expire in 24 hours.
          </Regular>
        </Center>
      </Flex>
      <CustomButton onClick={() => setStep("welcome")}>Complete</CustomButton>
    </>
  );

  const _getWelcomeStep = (
    <>
      <Flex direction="column" h="100%">
        <Center flexDirection="column" h="100%">
          <Img src={WelcomeIcon.src} />
          <RightTitle
            fontSize="20px"
            fontWeight={600}
            color="white.900"
            m="30px 0 10px"
          >
            Welcome to Tetavi
          </RightTitle>
          <Regular
            fontSize="16px"
            fontWeight={500}
            color="black.500"
            textAlign="center"
          >
            Unlock a world of NFTs and music royalties
          </Regular>
        </Center>
      </Flex>
      <CustomButton onClick={handleClose}>Continue</CustomButton>
    </>
  );

  return (
    <Modal isOpen={isOpen} onClose={handleClose} isCentered>
      <ModalOverlay bg="overlay.900" />
      <ModalContent
        bg="black.700"
        borderRadius="20px"
        border="1px solid"
        borderColor="black.500"
        boxShadow="0px 0px 60px 10px rgba(0, 0, 0, 0.4)"
        p="0"
        overflow="hidden"
        maxW="862px"
      >
        <ModalBody p="0">
          <Container h="582px">
            <LeftColumn
              w="431px"
              height="100%"
              bgImage={`url(${SignUpImage.src})`}
              bgPosition="center"
              bgRepeat="no-repeat"
              bgSize="contain"
              p="40px"
              direction="column"
              align="flex-start"
              justify="space-between"
            >
              <Flex direction="column">
                <LeftTitle
                  fontSize="12px"
                  fontWeight={700}
                  color="white.900"
                  opacity={0.5}
                  mb="8px"
                >
                  ABOUT
                </LeftTitle>
                <LeftSubtitle
                  fontSize="24px"
                  fontWeight={400}
                  color="white.900"
                  mb="0"
                >
                  Bringing the next generation of video creation to the
                  Metaverse. Powered by deep-learning.
                </LeftSubtitle>
              </Flex>
              <LogoIcon src={Logo.src} />
            </LeftColumn>
            <RightColumn
              flex={1}
              padding="25px 32px 32px"
              direction="column"
              justify="space-between"
            >
              {[step].includes("username") && _getUsernameStep}
              {[step].includes("email") && _getEmailStep}
              {[step].includes("verify") && _getVerifyStep}
              {[step].includes("welcome") && _getWelcomeStep}
            </RightColumn>
          </Container>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
