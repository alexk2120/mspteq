import "./App.css";
import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import RestaurantLandingPage from "./components/RestaurantLandingPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|restaurant-landing-page)">
          <RestaurantLandingPage {...restaurantLandingPageData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const restaurantLandingPageData = {
    aboutPageBannerImageBackgroundRemov: "/img/about-page-banner-image-background-removed-1.png",
    rectangle1: "/img/rectangle-1.png",
    rectangle5: "/img/rectangle-5.png",
    rectangle4: "/img/rectangle-4.png",
    rectangle3: "/img/rectangle-3.png",
    spanText1: " Question In Mind?",
    spanText2: "Let Us Help",
    inputType: "email",
    inputPlaceholder: "yourmail@gmail.com",
    submit: "Submit",
    rectangle2: "/img/rectangle-2.png",
    title: "About MSP Tequila",
    spanText3: "Step into the world of Mr. Sancho Pancho, where passion, tradition, and adventure blend to create the finest tequila. Born in Mexico, our tequila embodies the spirit of the land, honoring our ancestors while embracing the energy of today. From agave fields to your glass, join us on a sensory journey. Each sip transports you to sun-kissed fields, where skilled hands harvest mature plants with car",
    spanText4: "",
    spanText5: "We select only the finest blue agave, ensuring our tequila embodies its essence. Crafted using time-honored techniques, our tequila is smooth, balanced, and full of character. Explore our classic and innovative expressions. We're not just about tequila; we value sustainability and community. Connect with us through phone, email, or social media. Let's foster a lasting bond over tequila, as friends do. Your voice matters to us. Join our tequila community and keep the spirit alive. Cheers!",
    spanText6: "",
    homePageBannerImageBackgroundRemove: "/img/home-page-banner-image-background-removed-1.png",
    phone: "(516) 881-6196",
    salesMrsanchopanchoCom: "Sales@mrsanchopancho.com",
    spanText7: "",
    spanText8: "©2023 GENUINE GOLD LLC. NAME & LOGO TRADEMARKS.",
    spanText9: "HANDCRAFTED IN MEXICO.",
    spanText10: "TEQUILA – 40% ALC. BY VOL.",
    spanText11: "",
    spanText12: "CONTENT FOR 21+. ONLY SHARE WITH THOSE OF LEGAL DRINKING AGE. FOR MORE INFORMATION ON ALCOHOL RESPONSIBILITY VISIT RESPONSIBLEDRINKING.ORG AND RESPONSIBILITY.ORG.",
};

