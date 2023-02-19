import useMediaQuery from "../views/Main/useMediaQuery";


export default function useBreakpoints() {
  const breakpoints = {
    isSm: useMediaQuery("(min-width: 375px) and (max-width: 768px)"),
    isMd: useMediaQuery("(min-width: 769px) and (max-width: 1024px)"),
    isLg: useMediaQuery("(min-width: 1025px)"),
    active: "sm",
  };
  if (breakpoints.isSm) breakpoints.active = "sm";
  if (breakpoints.isMd) breakpoints.active = "md";
  if (breakpoints.isLg) breakpoints.active = "lg";
  return breakpoints;
}


const size = {
  mobile: "375px",
  tablet: "768px",
  desktop: "1024px",
};

// Mobile: 375px -> 767px
// Tablet: 768px -> 1023px
// Desktop: >= 1024px

export const device = {
  mobile: `(min-width: ${size.mobile});`,
  tablet: `(min-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
};