import React, { Suspense } from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Helmet from "react-helmet";
import ReactGA from "react-ga4";
import CookieConsent from "react-cookie-consent";
import { useTranslation } from "react-i18next";

import {
  Homepage,
  About,
  Legislation,
  ReworkingPressedParts,
  ServicesBroaching,
  ServicesMilling,
  ServicesThreading,
  ServicesTurning,
  SmallAssemblies,
  GetQuotation,
  QualityPolicy,
} from "./container";
import { Navbar, Footer } from "./components";

ReactGA.initialize("G-KHM593W1H4");
function App() {
  const { t } = useTranslation(["cookies"]);

  const { title, accept } = t("cookies", {
    returnObjects: true,
  });
  return (
    <>
      <CookieConsent
        location="bottom"
        buttonText={accept}
        cookieName="cookieMVT"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={15}
        acceptOnScroll={true}
        acceptOnScrollPercentage={10}
      >
        {title}
      </CookieConsent>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mivit</title>
        <link rel="canonical" href="icon.png" />
      </Helmet>
      <Suspense fallback={null}>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/legislation" element={<Legislation />} />
            <Route path="/assemblies" element={<SmallAssemblies />} />
            <Route
              path="/reworking_pressed_parts"
              element={<ReworkingPressedParts />}
            />
            <Route path="/CNC_broaching" element={<ServicesBroaching />} />
            <Route path="/CNC_milling" element={<ServicesMilling />} />
            <Route path="/CNC_threading" element={<ServicesThreading />} />
            <Route path="/CNC_turning" element={<ServicesTurning />} />
            <Route path="/get_quotation" element={<GetQuotation />} />
            <Route path="/quality_policy" element={<QualityPolicy />} />
          </Routes>
          <Footer />
        </div>
      </Suspense>
    </>
  );
}

export default App;
