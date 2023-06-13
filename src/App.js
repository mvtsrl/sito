import React, { Suspense } from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";

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
} from "./container";
import { Navbar, Footer } from "./components";

// i18next.use(LanguageDetector).init(i18nextOptions);

function App() {
  return (
    <>
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
          </Routes>
          <Footer />
        </div>
      </Suspense>
    </>
  );
}

export default App;
