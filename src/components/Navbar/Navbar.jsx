import React, { useState, useEffect } from "react";
// import {motion} from 'framer-motion'
import { DropdownNavbar } from "../index.js";
import {
  HomeFilled,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";
import i18next from "i18next";

import { ContactPopUp } from "../index.js";
import { images } from "../../constants/";
import "./Navbar.scss";

const Navbar = () => {
  const [contactFormOpen, setContactFormOpen] = useState(false);
  const [region, setRegion] = useState(localStorage.getItem("i18nextLng"));
  const [onTop, setOnTop] = useState(true);
  const [selectedItem, setSelectedItem] = useState();

  const [drawerOpen, setDrawerOpen] = useState(false);

  const { t } = useTranslation(["navbar"]);

  useEffect(() => {
    i18next.changeLanguage(region);
  }, [region]);

  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  };

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
      console.log(getWindowDimensions());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    window.onscroll = () =>
      window.scrollY === 0 ? setOnTop(true) : setOnTop(false);

    return () => (window.onscroll = null);
  }, []);

  const handleSelectItem = (item) => {
    if (item === selectedItem) {
      setSelectedItem();
    } else {
      setSelectedItem(item);
    }
  };

  const handleClose = () => {
    setSelectedItem(null);
    handleCloseDrawer();
  };

  const handleOpenCloseDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <ContactPopUp
        contactFormOpen={contactFormOpen}
        setContactFormOpen={setContactFormOpen}
      />

      {windowDimensions.width < 900 ? (
        <nav
          style={
            onTop
              ? { height: 70 }
              : { height: 60, boxShadow: "5px 5px 5px rgba(0,0,0,0.15)" }
          }
          className="app__navbar"
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              maxWidth: 1200,
            }}
          >
            <div className="app_navbar-logo">
              <Link to="/">
                <img
                  style={
                    onTop
                      ? { height: 50, transition: "all 0.3s ease-in-out" }
                      : { height: 40, transition: "all 0.3s ease-in-out" }
                  }
                  src={images.logo}
                  alt="logo"
                />
              </Link>
            </div>

            <div
              className="app__navbar-hamburger-wrapper"
              onClick={handleOpenCloseDrawer}
            >
              {!drawerOpen ? (
                <MenuFoldOutlined
                  style={
                    onTop
                      ? {
                          zIndex: 20,
                          fontSize: "2rem",
                          transition: "all 0.3s ease-in-out",
                          color: "var(--darkBlue-color)",
                        }
                      : {
                          fontSize: "1.5rem",
                          transition: "all 0.3s ease-in-out",
                          color: "var(--darkBlue-color)",
                        }
                  }
                />
              ) : (
                <MenuUnfoldOutlined
                  style={
                    onTop
                      ? {
                          fontSize: "2rem",
                          transition: "all 0.3s ease-in-out",
                          color: "var(--darkBlue-color)",
                        }
                      : {
                          fontSize: "1.5rem",
                          transition: "all 0.3s ease-in-out",
                          color: "var(--darkBlue-color)",
                        }
                  }
                />
              )}
            </div>

            {drawerOpen ? (
              <div className="app__navbar-drawer">
                <div className="app__navbar-drawer-content">
                  <div
                    className="app__navbar-drawer-backdrop"
                    onClick={handleCloseDrawer}
                  />
                  <div
                    className="app__navbar-drawer-elements-wrapper-mobile"
                    style={onTop ? { marginTop: 70 } : { marginTop: 60 }}
                  >
                    {t("menuItems", { returnObjects: true }) &&
                      t("menuItems", { returnObjects: true }).items.map(
                        (item, index) => (
                          <div key={index} style={{ marginBottom: "0.5rem" }}>
                            {item.type === "dropdown" && (
                              <li
                                key={`link-${item.title}`}
                                className="app__flex p-text column"
                              >
                                <p
                                  className="app_navbar-list-titles"
                                  onClick={() => handleSelectItem(item.title)}
                                >
                                  {item.title}
                                </p>
                                {item.title === selectedItem && (
                                  <DropdownNavbar
                                    dropdownType="relative"
                                    type={item.type}
                                    item={item}
                                    handleClose={handleClose}
                                  />
                                )}
                              </li>
                            )}

                            {item?.type === "image" && (
                              <li
                                key={`link-${item.title}`}
                                className="app__flex p-text column"
                              >
                                <p>
                                  <img
                                    className="app_navbar-list-titles-image"
                                    src={images[region]}
                                    alt="flag"
                                    onClick={() => handleSelectItem(item.title)}
                                  />
                                </p>
                                {item.title === selectedItem && (
                                  <DropdownNavbar
                                    dropdownType="relative"
                                    setRegion={setRegion}
                                    type={item.type}
                                    item={item}
                                    handleClose={handleClose}
                                  />
                                )}
                              </li>
                            )}

                            {item.type === "title_only" && (
                              <li
                                key={`link-${item.title}`}
                                className="app__flex p-text column"
                              >
                                <Link to="/">
                                  <HomeFilled
                                    className="app_navbar-list-titles"
                                    onClick={() => {
                                      handleSelectItem(item.title);
                                      handleCloseDrawer();
                                    }}
                                  />
                                </Link>
                              </li>
                            )}
                          </div>
                        )
                      )}
                  </div>
                </div>
              </div>
            ) : null}

            {/* <ul className='app__navbar-links'>
    
    {!onTop &&   
    <button onClick={()=>setContactFormOpen(true)} style={!onTop ? {opacity: 1} : {opacity: 0}} className='app__navbar-btn' > 
 
    <h2>
    {t('buttonText')}
    </h2>
    </button>
}


    {t("menuItems", { returnObjects: true }) && 
    t("menuItems", { returnObjects: true }).items.map((item, index)=>(
        <div key ={index}>
        {item.type==='dropdown' &&
        <li key={`link-${item.title}`} className='app__flex p-text' >
        <p className='app_navbar-list-titles' onClick={()=> handleSelectItem(item.title)}>{item.title}</p>
        {item.title === selectedItem && <DropdownNavbar type={item.type} item={item} handleClose={handleClose}/>}
        </li>
     }

     {item.type==='image'&&
        <li key={`link-${item.title}`} className='app__flex p-text' >
        <p>
        <img className='app_navbar-list-titles-image' src={images[region]} alt='flag' onClick={()=> handleSelectItem(item.title)} />
        </p>
        {item.title === selectedItem && <DropdownNavbar setRegion={setRegion} type={item.type} item={item} handleClose={handleClose}/>}
        </li>
     }

     {item.type==='title_only'&&
        <li key={`link-${item.title}`} className='app__flex p-text' >
        <Link to='/'><HomeFilled className='app_navbar-list-titles'  onClick={()=> handleSelectItem(item.title)} /></Link>
        </li>
     }

      
        </div>
   ))}



    </ul> */}
          </div>
        </nav>
      ) : (
        <nav
          style={
            onTop
              ? { height: 100 }
              : { height: 80, boxShadow: "5px 5px 5px rgba(0,0,0,0.15)" }
          }
          className="app__navbar"
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              maxWidth: 1200,
              padding: "0 2rem",
            }}
          >
            <div className="app_navbar-logo">
              <Link to="/">
                <img
                  style={
                    onTop
                      ? { height: 70, transition: "all 0.3s ease-in-out" }
                      : { height: 60, transition: "all 0.3s ease-in-out" }
                  }
                  src={images.logo}
                  alt="logo"
                />
              </Link>
            </div>

            <ul className="app__navbar-links">
              {!onTop && (
                <button
                  onClick={() => setContactFormOpen(true)}
                  style={!onTop ? { opacity: 1 } : { opacity: 0 }}
                  className="app__navbar-btn"
                >
                  <h2>{t("buttonText")}</h2>
                </button>
              )}

              {t("menuItems", { returnObjects: true }) &&
                t("menuItems", { returnObjects: true }).items.map(
                  (item, index) => (
                    <div key={index}>
                      {item.type === "dropdown" && (
                        <li
                          key={`link-${item.title}`}
                          className="app__flex p-text"
                        >
                          <p
                            className="app_navbar-list-titles"
                            onClick={() => handleSelectItem(item.title)}
                          >
                            {item.title}
                          </p>
                          {item.title === selectedItem && (
                            <DropdownNavbar
                              dropdownType="absolute"
                              type={item.type}
                              item={item}
                              handleClose={handleClose}
                            />
                          )}
                        </li>
                      )}

                      {item.type === "image" && (
                        <li
                          key={`link-${item.title}`}
                          className="app__flex p-text"
                        >
                          <p>
                            {images[region] ? (
                              <img
                                className="app_navbar-list-titles-image"
                                src={images[region]}
                                alt="flag"
                                onClick={() => handleSelectItem(item.title)}
                              />
                            ) : null}
                          </p>
                          {item.title === selectedItem && (
                            <DropdownNavbar
                              dropdownType="absolute"
                              setRegion={setRegion}
                              type={item.type}
                              item={item}
                              handleClose={handleClose}
                            />
                          )}
                        </li>
                      )}

                      {item.type === "title_only" && (
                        <li
                          key={`link-${item.title}`}
                          className="app__flex p-text"
                        >
                          <Link to="/">
                            <HomeFilled
                              className="app_navbar-list-titles"
                              onClick={() => handleSelectItem(item.title)}
                            />
                          </Link>
                        </li>
                      )}
                    </div>
                  )
                )}
            </ul>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
