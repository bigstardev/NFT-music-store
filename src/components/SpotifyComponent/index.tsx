import React from "react";
import * as Styled from "./styles";

interface ISpotifyComponent {
  songUrl?: string;
}

export const SpotifyComponent: React.FC<ISpotifyComponent> = ({
  songUrl = "https://open.spotify.com/embed/track/30wWZkgDfUCugZlBiaDCax?utm_source=generator",
}) => {
  return (
    <Styled.Container
      direction="row"
      borderRadius="15px"
      boxSizing="border-box"
      overflow="hidden"
      flex={1}
    >
      <iframe
        src={songUrl}
        width="100%"
        height="80"
        frameBorder="0"
        allowFullScreen={false}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></iframe>
    </Styled.Container>
  );
};
