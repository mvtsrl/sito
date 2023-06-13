import React from "react";

import images from "../../constants/images";

import "./PagesHeader.scss";

const PagesHeader = ({ image, hasImage }) => {
  return (
    <div className="app__about-headerIMG">
      <img src={images.headerSideBG} alt="header_img" />
      {hasImage ? (
        <div className="app__header-floating-img">
          <img src={images[image]} alt={image} />
        </div>
      ) : null}
    </div>
  );
};

export default PagesHeader;
