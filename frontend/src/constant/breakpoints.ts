const size = {
  mobile: { max: "767px" },
  tablet: { min: "768px", max: "1023px" },
  desktop: { min: "1024px" },
};

export const device = {
  mobile: `(max-width: ${size.mobile.max})`,
  tablet: `( min-width: ${size.tablet.min}) and (max-width: ${size.tablet.max})`,
  desktop: `(min-width: ${size.desktop.min})`,
};
