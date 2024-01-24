import styled from "styled-components";
import { 
  border,
  BorderProps,
  color,
  ColorProps,
  layout,
  LayoutProps,
  PositionProps,
  space,
  SpaceProps,
  typography,
  TypographyProps 
} from "styled-system";

interface Props extends PositionProps, LayoutProps, BorderProps, SpaceProps, ColorProps, TypographyProps {
  children: React.ReactNode;
}

export const Card = styled.div<Props>`
    ${border}
    ${color}
  ${layout}
  ${space}
`;

export const CardHeader = styled.header<Props>`
    h2 {
        font-weight: 600;
    }

    ${border}
    ${space}
`;

export const CardContent = styled.main<Props>`
    p {
        margin-bottom: 1rem;
        color: darkslategrey;
    }

    ${space}
`;

export const CardFooter = styled.footer<Props>`
    ${border}
    ${space}
  ${typography}
`;

export const Button = styled.a<Props>`
    text-decoration: none;

    ${border}
    ${color}
  ${space}
  ${typography}
`;
