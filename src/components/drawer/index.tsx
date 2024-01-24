import { DrawerOptions } from "pages/_app";
import React, { ReactNode } from "react";
import { useSpring, animated } from "react-spring";
import closeIcon from "@components/icons/closeIcon.svg";
import { CloseIcon } from "./styles";

export type IDrawer = {
  show: boolean;
  component: ReactNode;
  width: number;
  setDrawerOption: (options: DrawerOptions) => void;
};

export const Drawer: React.FC<IDrawer> = ({
  show,
  component,
  width,
  setDrawerOption,
}) => {
  const props: any =
    typeof window !== "undefined"
      ? useSpring({
          left: show ? window.innerWidth - width : window.innerWidth,
          position: "absolute",
          top: 0,
          height: "100vh",
          width: `${width}px`,
          zIndex: 2,
        })
      : null;

  const overlayProps: any =
    typeof window !== "undefined" ? useSpring({
      display: show ? 'block' : 'none',
      opacity: show ? 1 : 0,
      position: 'fixed',
      bottom: 0,
      top: 0,
      left: 0,
      right: 0,
      background: 'rgba(15, 31, 56, 0.84)',
      zIndex: 1,
    }) : null;

  const handleClose = () => {
    setDrawerOption({
      isActive: false,
      component,
      width,
    });
  };

  return (
    <>
      <animated.div style={overlayProps} onClick={handleClose} />
      <animated.div style={props}>
        <CloseIcon src={closeIcon.src} onClick={handleClose} />
        {component}
      </animated.div>
    </>
  );
};
