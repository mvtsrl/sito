import React from "react";
import { motion } from "framer-motion";
import { CaretDownFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { images } from "../../constants";

import "./DropdownNavbar.scss";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.01,
      staggerChildren: 0.07,
    },
  },
};

const children = {
  hidden: { y: 5, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const DropdownNavbar = ({
  item,
  handleClose,
  type,
  setRegion,
  dropdownType,
}) => {
  const subtitles = item.subItems.map((item) => item);

  return (
    <>
      {dropdownType === "absolute" ? (
        <>
          {item && (
            <>
              <div
                className="app__dropdown-backdrop"
                onClick={() => handleClose()}
              />
              <div className="app__dropdown-wrapper ">
                <motion.div style={{ flex: 1, padding: " 0 0 0 1rem" }}>
                  <CaretDownFilled
                    style={{
                      fontSize: "1.2rem",
                      flex: 1,
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      color: "var(--orange-color)",
                    }}
                  />
                </motion.div>

                <motion.ul
                  variants={container}
                  className="app__navbar-subitems-container"
                  initial="hidden"
                  animate="visible"
                >
                  {subtitles.map((subtitle, index) => (
                    <motion.li
                      variants={children}
                      key={index}
                      className="app__dropdown-li"
                    >
                      {type === "dropdown" ? (
                        <HashLink
                          smooth
                          to={subtitle.link}
                          onClick={handleClose}
                          style={{ textDecoration: "none" }}
                        >
                          <p>{subtitle.title}</p>
                        </HashLink>
                      ) : (
                        type === "image" && (
                          <img
                            onClick={() => {
                              setRegion(subtitle.title);
                              handleClose();
                            }}
                            src={images[subtitle.title]}
                            alt="flag"
                          />
                        )
                      )}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </>
          )}
        </>
      ) : (
        <>
          {item && (
            <>
              <div
                className="app__dropdown-backdrop"
                onClick={() => handleClose()}
              />
              <div className="app__dropdown-wrapper-relative">
                <motion.div
                  style={{ flex: 1, padding: " 0 0 0 1rem" }}
                ></motion.div>

                <motion.ul
                  variants={container}
                  className="app__navbar-subitems-container"
                  initial="hidden"
                  animate="visible"
                >
                  {subtitles.map((subtitle, index) => (
                    <motion.li
                      variants={children}
                      key={index}
                      className="app__dropdown-li"
                    >
                      {type === "dropdown" ? (
                        <Link
                          to={subtitle.link}
                          onClick={handleClose}
                          style={{ textDecoration: "none" }}
                        >
                          <p>{subtitle.title}</p>
                        </Link>
                      ) : (
                        type === "image" && (
                          <img
                            style={{ height: 30 }}
                            onClick={() => {
                              setRegion(subtitle?.title);
                              handleClose();
                            }}
                            src={images[subtitle.title]}
                            alt="flag"
                          />
                        )
                      )}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default DropdownNavbar;
