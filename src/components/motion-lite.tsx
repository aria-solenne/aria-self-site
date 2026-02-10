import React from "react";

type AnyProps = Record<string, unknown>;

const MOTION_KEYS = [
  "initial",
  "animate",
  "exit",
  "whileInView",
  "whileHover",
  "whileTap",
  "whileFocus",
  "transition",
  "viewport",
  "layout",
  "layoutId",
  "drag",
  "dragConstraints",
  "dragElastic",
  "dragMomentum",
  "onAnimationStart",
  "onAnimationComplete",
];

const stripMotionProps = (props: AnyProps) => {
  const next = { ...props };
  for (const key of MOTION_KEYS) delete next[key];
  return next;
};

const createMotionComponent = (tag: string) => {
  const Comp = React.forwardRef<HTMLElement, AnyProps>((props, ref) => {
    const safeProps = stripMotionProps(props);
    return React.createElement(tag, { ...safeProps, ref });
  });

  Comp.displayName = `MotionLite(${tag})`;
  return Comp;
};

export const motion = new Proxy(
  {},
  {
    get: (_, tag: string) => createMotionComponent(tag),
  }
) as Record<string, React.ComponentType<AnyProps>>;

export const useScroll = () => ({ scrollYProgress: 1 });
export const useSpring = <T,>(value: T, config?: unknown) => {
  void config;
  return value;
};
