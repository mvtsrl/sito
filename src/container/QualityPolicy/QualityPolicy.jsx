import React from "react";
import "./QualityPolicy.scss";
import { DoubleRightOutlined, CaretRightOutlined } from "@ant-design/icons";

import { useTranslation } from "react-i18next";

import { PagesHeaderImage } from "../../components/";

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
            {values?.map((item, index) => (
              <>
                <div
                  key={item?.title}
                  className="app__qualityPolicy-values-title"
                >
                  <DoubleRightOutlined />
                  <>{item?.title} </>
                </div>
                {item?.subtitles ? (
                  <div className="app__qualityPolicy-values-subtitles-wrapper">
                    {item?.subtitles?.map((item, index) => (
                      <div className="app__quality-values-subtitles" key={item}>
                        <CaretRightOutlined />
                        <>{item}</>
                      </div>
                    ))}
                  </div>
                ) : null}
              </>
            ))}
          </div>
          <p>{p_three}</p>
        </div>
      </div>
    </div>
  );
};

export default QualityPolicy;
