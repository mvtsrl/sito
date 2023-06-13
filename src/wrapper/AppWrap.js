import React from "react";
import { NavigationDots, SocialMedia } from "../components";

const AppWrap = (Component, idName, classNames, linkTitle) =>
  function HOC() {
    const allLinks = [
      {
        title: "homepage",
        links: ["header", "services", "experience", "flow", "contact"],
      },
      { title: "services", links: ["hero", "services", "contact"] },
    ];

    let segments = allLinks.filter((links) => links.title === linkTitle);

    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />

        <div className="app__wrapper app__flex ">
          <Component style={{ scrollSnapAlign: "center" }} />
        </div>

        <NavigationDots active={idName} segments={segments[0].links} />
      </div>
    );
  };

export default AppWrap;
