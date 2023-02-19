import React from 'react'
import { JsxElement } from 'typescript';
import { FlightDesktopTemplate } from '../../components/Flight/FlightDesktopTemplate/FlightDesktopTemplate';
import { FlightMobileTemplate } from '../../components/Flight/FlightMobileTemplate/FlightMobileTemplate';
import { FlightTabletTemplate } from '../../components/Flight/FlightTabletTemplate/FlightTabletTemplate';
import { SearchBar } from '../../components/SearchBar/SearchBar'
import useBreakpoints from '../../utils/RWD';


type Props ={
    at:any;
    children:any
}
export  function Breakpoint({ at, children }:Props) {
  if (!at) {
    console.error("<Breakpoint>: must specify a breakpoint for the `at` prop.");
  }
  const { active } = useBreakpoints();
  return active === at ? children : null;
}

export const Main = () => {

//     const SampleComponent = () => {
//   const theme = useTheme();
//   const onlySmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
//   const onlyMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
//   const onlyLargeScreen = useMediaQuery(theme.breakpoints.down("md"));

//   return (
//     <Box
//       sx={{
//         p: onlySmallScreen ? 2 : onlyMediumScreen ? 4 : onlyLargeScreen ? 6 : 1,
//       }}
//     />
//   );
// };



    const currentScreenWidth = window.screen.width;
    //@ts-ignore
    let currentDevice = ''
    const flights = ()=> { 
        if (currentScreenWidth< 375){
            return currentDevice = "mobile"
        }else if(currentScreenWidth<=375 &&currentScreenWidth>768){
        return currentDevice = "tablet"
            }else if (currentScreenWidth >= 768 && currentScreenWidth>1024) {
                currentDevice = "desktop";
            }
            return currentDevice = "tablet"
    }
    console.log(flights)


  return (
    <div>
      {/* <SearchBar />
      <Breakpoint at="mobile">
        <FlightMobileTemplate />
      </Breakpoint>
      <Breakpoint at="tablet">
        <FlightTabletTemplate />
      </Breakpoint>
      <Breakpoint at="desktop">
        <FlightDesktopTemplate />
      </Breakpoint> */}
      {/* <FlightDesktopTemplate />
      <FlightTabletTemplate />
      <FlightMobileTemplate /> */}
    </div>
  );
}
