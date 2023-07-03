import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a
        style={{ cursor: "pointer" }}
        rel="noreferrer"
        href="https://www.facebook.com/p/MIVIT-srl-100049790696778/"
        target="_blank"
      >
        <FaFacebook />
      </a>
      <a
        style={{ cursor: "pointer" }}
        rel="noreferrer"
        href="https://www.instagram.com/mivitsrl/"
                 target="_blank"
      >
        <BsInstagram />





      </a>
    </div>
  );
};

export default SocialMedia;
