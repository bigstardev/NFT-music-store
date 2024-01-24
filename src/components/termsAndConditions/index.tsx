import React from "react";
import { Header, Body, Title, Subtitle, Text, Container } from "./styles";

export const TermsAndConditions: React.FC = () => {
  return (
    <Container height="100%" direction="column">
      <Header
        bg="black.900"
        align="flex-start"
        justify="center"
        minHeight="80px"
        direction="column"
        paddingLeft="24px"
      >
        <Title
          color="white.900"
          fontSize="14px"
          fontWeight={600}
          margin={0}
          marginBottom="4px"
        >
          Terms & Conditions
        </Title>
        <Subtitle color="black.500" fontSize="12px" fontWeight={500} margin={0}>
          Read more below
        </Subtitle>
      </Header>
      <Body
        padding="24px"
        bg="black.800"
        direction="column"
        overflowY="auto"
				height="100%"
      >
        <Title
          color="white.900"
          fontSize="14px"
          fontWeight={600}
          margin={0}
          marginBottom="5px"
        >
          Right to data
        </Title>
        <Text color="black.500" fontSize="12px" fontWeight={500} margin={0}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. <br />
          <br />
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?
        </Text>
      </Body>
    </Container>
  );
};
