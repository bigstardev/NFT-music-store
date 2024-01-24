import React, { ReactNode, useEffect, useState } from "react";
import { AppProps } from "next/app";
import { ChakraProvider, useBoolean, Flex } from "@chakra-ui/react";
import theme from "@definitions/chakra/theme";
import { StyledThemeProvider } from "@definitions/styled-components";
import { useWeb3React, Web3ReactProvider } from "@web3-react/core";
import { ethers } from "ethers";

import { SideMenu } from "@components/sideMenu";
import { Drawer } from "@components/drawer";
import { LoginModal } from "@components/loginModal";
import { SignUpModal } from "@components/signUpModal";

import { connectors } from "src/connectors";
import { updateImage, walletAuth } from "src/services/auth";
import {
  LoadingState,
  UserContextProvider,
  useUserContext,
} from "src/contexts/UserContext";

declare global {
  interface Window {
    ethereum: any;
  }
}

export type DrawerOptions = {
  isActive: boolean;
  component: ReactNode;
  width: number;
};

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const getLibrary = (provider: any) => {
    const library = new ethers.providers.Web3Provider(provider);
    library.pollingInterval = 8000; // frequency provider is polling
    return library;
  };

  return (
    <ChakraProvider theme={theme}>
      <StyledThemeProvider>
        <UserContextProvider>
          <Web3ReactProvider getLibrary={getLibrary}>
            <App Component={Component} {...pageProps} />
          </Web3ReactProvider>
        </UserContextProvider>
      </StyledThemeProvider>
    </ChakraProvider>
  );
}

const App = ({ Component, pageProps }: AppProps) => {
  const { library, account, activate, deactivate } = useWeb3React();
  const { userToken, setUserToken, setLoadingState, user, setUser } = useUserContext();

  const [drawerOption, setDrawerOption] = useState<DrawerOptions>({
    isActive: false,
    component: <></>,
    width: 430,
  });
  const [login, setLogin] = useBoolean();
  const [signUp, setSignUp] = useBoolean();

  const [provider, setProvider] = useState<string | null>(null);
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [img, setImage] = useState<string | undefined>(undefined);
  const [file, setFile] = useState<File | undefined>(undefined);
  const [signature, setSignature] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const providerLocalStorage = window.localStorage.getItem("provider");
    setProvider(providerLocalStorage);
  });

  useEffect(() => {
    if (provider?.length && provider === "injected") {
      activate(connectors.injected);
    } else if (provider?.length && provider === "coinbaseWallet") {
      activate(connectors.coinbaseWallet);
    }
  }, [provider]);

  useEffect(() => {
    const userInfo = window.localStorage.getItem("userInfo");
    if (userInfo && !user) {
      const userInfoParse = JSON.parse(userInfo);
      setUser(userInfoParse);
    }
  }, [account])

  useEffect(() => {
    if (library && !userToken) {
      try {
        signMessage();
        setLogin.toggle();
      } catch (err) {
        setLogin.toggle();
      }
    }
  }, [library]);

  useEffect(() => {
    if (signature !== "") {
      setLoadingState(LoadingState.LOADING);
      handleAuth();
    }
  }, [signature]);

  const disconnect = () => {
    window.localStorage.removeItem("provider");
    window.localStorage.removeItem("userInfo");
    setProvider(null);
    setUsername("");
    setEmail("");
    setImage(undefined);
    setFile(undefined);
    setSignature("");
    if (login) {
      setLogin.toggle();
    }
    if (signUp) {
      setSignUp.toggle();
    }
    setUserToken(null);
    setUser(null);
    deactivate();
  };

  const signMessage = async () => {
    if (!library) return;

    try {
      const signatureResp = await library.provider.request({
        method: "personal_sign",
        params: ["login_tetavi", account],
      });
      setSignature(signatureResp);
    } catch (error: any) {
      disconnect();
      console.error(error);
    }
  };

  const handleAuth = async () => {
    if (!account) return;

    const userData = {
      data: {
        type: "users",
        attributes: {
          username,
          ...(email && { email }),
        },
      },
      meta: {
        wallet_public_address: account,
        message_payload: "login_tetavi",
        signature,
      },
    };

    try {
      const resp = await walletAuth(userData);
      if (resp?.attributes) {
        setUserToken(resp.attributes.access_token);

        const userInfo = {
          id: resp?.id,
          type: resp?.type,
          email: resp?.attributes?.email,
          profile_photo_url: resp?.attributes?.profile_photo_url,
          username: resp?.attributes?.username,
        }
        setUser(userInfo);
        window.localStorage.setItem("userInfo", JSON.stringify(userInfo));
      }
      if (username) {
        if (file) {
          const newFile = new FormData();
          newFile.append('user[profile_photo]', file);
          await updateImage(resp.id, newFile, resp.attributes.access_token);
        }
      }
      setError(null);
    } catch (error: any) {
      setLoadingState(LoadingState.IDLE);
      if (username === "") {
        setSignUp.toggle();
      } else {
        setError(error?.response?.data?.errors[0]?.detail);
        throw error;
      }
    }
  };

  const handleChangeImage = (file: string, target: HTMLInputElement) => {
    setImage(file);
    setFile(target.files?.[0]);
  };

  const handleContinue = async (type: string) => {
    if (type === "injected") {
      window.localStorage.setItem("provider", type);
      await activate(connectors.injected);
    } else {
      window.localStorage.setItem("provider", type);
      await activate(connectors.coinbaseWallet);
    }
  };

  return (
    <>
      <Flex h="100vh" overflow="hidden">
        <SideMenu setDrawerOption={setDrawerOption} />
        <Flex w="calc(100% - 15.5rem)" h="100%">
          <Component
            setDrawerOption={setDrawerOption}
            clickConnectWallet={setLogin.toggle}
            clickDisconnectWallet={disconnect}
            walletDetail={{ name: provider, address: account }}
            {...pageProps}
          />
        </Flex>
      </Flex>
      <LoginModal
        isOpen={login}
        onClose={setLogin.toggle}
        clickContinue={handleContinue}
      />
      <SignUpModal
        isOpen={signUp}
        onClose={() => {
          disconnect();
          setSignUp.toggle;
        }}
        error={error}
        setError={setError}
        username={username}
        setUsername={(value) => setUsername(value)}
        email={email}
        setEmail={(value) => setEmail(value)}
        img={img}
        setImage={handleChangeImage}
        handleContinue={handleAuth}
      />
      <Drawer
        show={drawerOption.isActive}
        component={drawerOption.component}
        width={drawerOption.width}
        setDrawerOption={setDrawerOption}
      />
    </>
  );
};

export default MyApp;
