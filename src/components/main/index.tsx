import React from "react";
import { Box, Button, Spinner, useTheme } from "@chakra-ui/react";
import { LoadingState, useUserContext } from "../../contexts/UserContext";

type IMain = {
  clickConnectWallet: () => void;
  clickDisconnectWallet: () => void;
};

export const Main: React.FC<IMain> = ({
  clickConnectWallet,
  clickDisconnectWallet,
}) => {
  const { userToken, loadingState } = useUserContext();
  const theme = useTheme();

  return (
    <Box bg="main.100" color="white" textAlign="center" py={10}>
      <h1 data-test="main-heading" style={{ fontSize: theme.fontSizes["5xl"] }}>
        tetavi
      </h1>
      <p style={{ fontSize: theme.fontSizes["lg"] }}>Boilerplate</p>
      <Button
        minW={170}
        bg="blue.900"
        _focus={{ boxShadow: "none" }}
        onClick={!userToken ? clickConnectWallet : clickDisconnectWallet}
      >
        {loadingState !== LoadingState.LOADING &&
          (!userToken ? "Connect Wallet" : "Disconnect Wallet")}
        {loadingState === LoadingState.LOADING && <Spinner />}
      </Button>
    </Box>
  );
};
