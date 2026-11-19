import React, { useEffect } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  useHistory,
  Redirect,
} from "react-router-dom";
import App from "./App";
// import Productdetail from "./components/Products/productdetail";
import Contact from "./components/Contact";
import MemoryLCD from "./components/Technologies/MemoryLCD";
import MemoryLCDProduct from "./components/Products/Memory_lcd";
import Eposters_product from "./components/Eposters_product";
import SearchResults from "./components/SearchResults";
import NotFound from "./components/NotFound";
import News from "./components/News";
import AboutUs from "./components/AboutUs";
import MemoryInPixel from "./components/MemoryInPixel";
import ODonnellMIP from "./components/ODonnellMIP";
import MIPTCS from "./components/MIPTCS";
import MIPITM from "./components/MIPITM";
import ControlSales from "./components/ControlSales";
import ControlSalesRIGZO from "./components/ControlSalesRIGZO";
import Eposters_Displays from "./components/Eposters_Displays";
import EposterTechnology from "./components/Technologies/ePosterTechnology";
import LowPowerODonnel from "./components/LowPowerODonnel";
import RIGZOTCS from "./components/RIGZOTCS";
import { Cookies } from "react-cookie-consent";
import LinkedInTag from "react-linkedin-insight";
import SpecialLandingPage from "./components/SpecialLandingPage";

function Routes() {
  const history = useHistory();
  const trackPageView = () => {
    if (Cookies.get("_consent_sharp_") === "true") {
      // ReactGA.initialize(process.env.REACT_APP_TRACKING_ID);
      // ReactGA.pageview(window.location.hash);

      LinkedInTag.init(process.env.REACT_APP_PARTNER_ID, "px", false);
    } else {
      LinkedInTag.init(process.env.REACT_APP_PARTNER_ID, "px", true);
    }
  };
  useEffect(() => {
    trackPageView(); // To track the first pageview upon load
    history.listen(trackPageView); // To track the subsequent pageviews
  }, [history]);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route
          path="/industrial-lcds-product"
          render={() => <Redirect to="/" />}
        />
        <Route
          path="/general-purpose-lcds"
          render={() => <Redirect to="/" />}
        />
        <Route
          path="/memory-in-pixel-lcds-product"
          component={MemoryLCDProduct}
        />
        {/* <Route
          path="/custom-camera-modules-product"
          component={Custom_camera}
        /> */}
        {/* <Route path="/igzo-8k-displays-product" component={Product4k8k} /> */}
        <Route path="/contact" component={Contact} />
        <Route path="/news" component={News} />
        <Route path="/about" component={AboutUs} />
        {/* <Route path="/igzo-technology" component={IGZO} /> */}
        {/* <Route path="/reflective-igzo-technology" component={RIGZO} /> */}
        <Route path="/search-result/:search" component={SearchResults} />
        <Route path="/memory-in-pixel-lcds-technology" component={MemoryLCD} />
        <Route path="/Memory-In-Pixel-Displays" component={MemoryInPixel} />
        {/* Retired URLs. The server sends a 301 for direct hits; these cover
            in-app navigation from any link still pointing at the old paths. */}
        <Route
          path="/MemoryInPixel"
          render={() => <Redirect to="/Memory-In-Pixel-Displays" />}
        />
        <Route
          path="/MemoryInPixelLanding"
          render={() => <Redirect to="/Memory-In-Pixel-Displays" />}
        />
        <Route
          path="/eposters"
          exact
          render={() => <Redirect to="/eposters-displays" />}
        />
        <Route
          path="/reflective-igzo-displays-product"
          render={() => <Redirect to="/" />}
        />
        <Route
          path="/ReflectiveLCDLanding"
          render={() => <Redirect to="/" />}
        />
        <Route path="/R-IGZO-Google" render={() => <Redirect to="/" />} />
        <Route path="/R-IGZO-LinkedIn" render={() => <Redirect to="/" />} />
        {/* <Route path="/LowPowerDisplays" component={Low_power_displays} /> */}
        {/* <Route path="/ReflectiveIGZO" component={ReflectiveIGZO} /> */}
        <Route path="/Eposters_product" component={Eposters_product} />
        <Route path="/MemoryInPixel-TCS" component={MIPTCS} />
        <Route path="/MemoryInPixel-IntelliMark" component={MIPITM} />
        <Route path="/Low-Power-ODonnell" component={LowPowerODonnel} />
        <Route path="/R-IGZO-TCS" component={RIGZOTCS} />
        <Route path="/R-IGZO-Control-Sales" component={ControlSalesRIGZO} />
        <Route path="/eposters-displays" component={Eposters_Displays} />
        <Route
          path="/eposter-display-modules-technology"
          component={EposterTechnology}
        />
        <Route path="/MemoryInPixel-ODonnell" component={ODonnellMIP} />
        <Route path="/MemoryInPixel-Control-Sales" component={ControlSales} />

        <Route
          path="/eposters-displays-tech-coast"
          render={() => <SpecialLandingPage companyName="techCoastSales" />}
        />
        <Route
          path="/eposters-displays-quantum"
          render={() => <SpecialLandingPage companyName="quantum" />}
        />
        <Route
          path="/eposters-displays-control-sales"
          render={() => <SpecialLandingPage companyName="controlSales" />}
        />
        <Route
          path="/eposters-displays-thom-luke"
          render={() => <SpecialLandingPage companyName="thomLukeSales" />}
        />
        <Route
          path="/eposters-displays-odonnell"
          render={() => <SpecialLandingPage companyName="oDonnell" />}
        />
        <Route path="/*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
