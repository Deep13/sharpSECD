import React, { useEffect } from "react";
import { HashRouter, Switch, Route, useHistory, Redirect } from "react-router-dom";
import App from "./App";
import Products from "./components/Products/products";
// import Productdetail from "./components/Products/productdetail";
import Contact from "./components/Contact";
import MemoryLCD from "./components/Technologies/MemoryLCD";
import RIGZO from "./components/Technologies/RIGZO";
import IGZO from "./components/Technologies/IGZO";
import MemoryLCDProduct from "./components/Products/Memory_lcd";
import Eposters_product from "./components/Eposters_product";
import ReflectiveIGZOProduct from "./components/Products/Reflective_IGZO";
import Product4k8k from "./components/Products/Product4k8k";
import Custom_camera from "./components/Products/Custom_camera";
import SearchResults from "./components/SearchResults";
import NotFound from "./components/NotFound";
import News from "./components/News";
import AboutUs from "./components/AboutUs";
import RIGZOLinkedIn from "./components/RIGZOLinkedIn";
import MemoryInPixel from "./components/MemoryInPixel";
import ReflectiveIGZO from "./components/ReflectiveIGZO";
import ODonnellMIP from "./components/ODonnellMIP";
import MIPTCS from "./components/MIPTCS";
import MIPITM from "./components/MIPITM";
import ControlSales from "./components/ControlSales";
import ControlSalesRIGZO from "./components/ControlSalesRIGZO";
import RIGZOGoogle from "./components/RIGZOGoogle";
import MemoryInPixelLanding from "./components/MemoryInPixelLanding";
import ReflectiveLCDLanding from "./components/ReflectiveLCDLanding";
import Eposters from "./components/Eposters";
import Eposters_Displays from "./components/Eposters_Displays";
import LowPowerODonnel from "./components/LowPowerODonnel";
import RIGZOTCS from "./components/RIGZOTCS";
import { Cookies } from "react-cookie-consent";
import ReactGA from "react-ga";
import LinkedInTag from "react-linkedin-insight";
import Low_power_displays from './components/Products/Low_power_displays'

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
    <HashRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/industrial-lcds-product" render={() => <Redirect to="/general-purpose-lcds" />} />
        <Route path="/general-purpose-lcds" component={Products} />
        <Route
          path="/memory-in-pixel-lcds-product"
          component={MemoryLCDProduct}
        />
        {/* <Route
          path="/custom-camera-modules-product"
          component={Custom_camera}
        /> */}
        {/* <Route path="/igzo-8k-displays-product" component={Product4k8k} /> */}
        <Route
          path="/reflective-igzo-displays-product"
          component={ReflectiveIGZOProduct}
        />
        <Route path="/contact" component={Contact} />
        <Route path="/news" component={News} />
        <Route path="/about" component={AboutUs} />
        {/* <Route path="/igzo-technology" component={IGZO} /> */}
        {/* <Route path="/reflective-igzo-technology" component={RIGZO} /> */}
        <Route path="/search-result/:search" component={SearchResults} />
        <Route path="/memory-in-pixel-lcds-technology" component={MemoryLCD} />
        <Route path="/R-IGZO-LinkedIn" component={RIGZOLinkedIn} />
        <Route path="/ReflectiveLCDLanding" component={ReflectiveLCDLanding} />
        <Route path="/R-IGZO-Google" component={RIGZOGoogle} />
        <Route path="/MemoryInPixel" component={MemoryInPixel} />
        {/* <Route path="/LowPowerDisplays" component={Low_power_displays} /> */}
        {/* <Route path="/ReflectiveIGZO" component={ReflectiveIGZO} /> */}
        <Route path="/MemoryInPixelLanding" component={MemoryInPixelLanding} />
        <Route path="/Eposters_product" component={Eposters_product} />
        <Route path="/MemoryInPixel-TCS" component={MIPTCS} />
        <Route path="/MemoryInPixel-IntelliMark" component={MIPITM} />
        <Route path="/Low-Power-ODonnell" component={LowPowerODonnel} />
        <Route path="/R-IGZO-TCS" component={RIGZOTCS} />
        <Route path="/R-IGZO-Control-Sales" component={ControlSalesRIGZO} />
        <Route path="/eposters" component={Eposters} />
        <Route path="/eposters-displays" component={Eposters_Displays} />
        <Route path="/MemoryInPixel-ODonnell" component={ODonnellMIP} />
        <Route path="/MemoryInPixel-Control-Sales" component={ControlSales} />
        <Route path="/*" component={NotFound} />
      </Switch>
    </HashRouter>
  );
}
export default Routes;
