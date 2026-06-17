import React from "react";
import "./QualityPolicy.scss";
import { DoubleRightOutlined, CaretRightOutlined } from "@ant-design/icons";

import { useTranslation } from "react-i18next";

import { PagesHeaderImage } from "../../components/";
import images from "../../constants/images.js";

const QualityPolicy = () => {
  const { t } = useTranslation(["quality"]);

  const { title, p_one, p_two, p_three, values } = t("quality", {
    returnObjects: true,
  });

  return (
    <div className="app__quality_policy">
      <PagesHeaderImage />

      <div className="app__quality_policy-content-wrapper">
        <div className="app__quality_policy-page-title-wrapper">
          <h1>{title}</h1>
        </div>

        <div className="app__quality_policy-page-divider" />

        <div className="app__quality_policy-page-section">
          <p>{p_one}</p>
          <p>{p_two}</p>
          <div className="app__qualityPolicy-values-wrapper">
            {values?.map((item) => (
              <React.Fragment key={item?.title}>
                <div className="app__qualityPolicy-values-title">
                  <DoubleRightOutlined />
                  <>{item?.title} </>
                </div>
                {item?.subtitles ? (
                  <div className="app__qualityPolicy-values-subtitles-wrapper">
                    {item?.subtitles?.map((subtitle) => (
                      <div className="app__quality-values-subtitles" key={subtitle}>
                        <CaretRightOutlined />
                        <>{subtitle}</>
                      </div>
                    ))}
                  </div>
                ) : null}
              </React.Fragment>
            ))}
          </div>

                 <div className="app__about-media-photos">
                   <img className="solar_pannel_image" src={images.pannels_image_one} alt="solar-panel-installation-1" />
                  
                  
                 <video
                   className="app__about-media-video"
                   src={images.pannel_video}
                   autoPlay
                   loop
                   muted
                   playsInline
                 />
         
                   <img  className="solar_pannel_image" src={images.pannels_image_two} alt="solar-panel-installation-2" />
         
               </div>

          <p>{p_three}</p>
        </div>
      </div>
    </div>
  );
};

export default QualityPolicy;