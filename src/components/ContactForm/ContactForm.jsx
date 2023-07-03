import React, { useState, useRef } from "react";
import {
  PhoneOutlined,
  MailOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";

import images from "../../constants/images.js";

import { useTranslation } from "react-i18next";
import "./ContactForm.scss";

const ContactForm = ({ popup, closePopup }) => {
  const [image, setImage] = useState("");
  const { t } = useTranslation(["home"]);

  const {
    call_us,
    phone_number,
    email_address,
    mail_us,
    office_hours,
    office_hrs,
  } = t("contact", { returnObjects: true });

  const {
    label_form_subject,
    label_form_name,
    label_form_company,
    label_form_email,
    label_form_jobTitle,
    label_form_phone,
    label_form_message,
    label_form_attachment,
    file_types_title,
    file_types,
    disclaimer_file_types,
    file_types_NDA,
    title,
    send_button,
    close_button,
  } = t("contact", { returnObjects: true });

  const fileInput = useRef();
  const fileSelect = useRef(null);
  const selectName = useRef(null);

  const fileSelectClick = () => {
    fileInput.current.click();
  };

  const [chooseFile, setChooseFile] = useState("");

  const uploadImageHandler = (e) => {
    setImage(e.target.value);
    let filename = fileInput.current.files[0].name;
    console.log(e);
    console.log(selectName);
    setChooseFile(filename);
  };

  return (
    <>
      <div className="app__contact-wrapper-container">
        {!popup ? (
          <div className="app__contact-details-wrapper">
            <div className="app__contact-small-wrapper">
              <div className="app__contact-list-item">
                <PhoneOutlined />

                <div>
                  <h4>{call_us}</h4>
                  <a href={`tel:${phone_number}`}>{phone_number}</a>
                </div>
              </div>

              {/* email */}

              <div className="app__contact-list-item">
                <MailOutlined />

                <div>
                  <h4>{mail_us}</h4>
                  <a href="mailto:mivitsrl@gmail.com">{email_address}</a>
                </div>
              </div>

              {/* office hours */}
              <div className="app__contact-list-item">
                <ClockCircleOutlined />

                <div>
                  <h4>{office_hours}</h4>
                  <p>{office_hrs}</p>
                </div>
              </div>
            </div>
            {/* office hours */}
            <div
              className="app__contact-list-item"
              style={{ width: "100%", height: 70 }}
            >
              <img
                src={images.logo}
                alt="logo"
                style={{
                  filter: "opacity(0.1)",
                  userSelect: "none",
                  height: "100%",
                  width: "100%",
                  objectFit: "scale-down",
                }}
              />
            </div>
          </div>
        ) : null}

        <div
          className={
            popup
              ? "app__contact-form-wrapper-popup"
              : "app__contact-form-wrapper"
          }
        >
          <form
            action="https://formsubmit.co/mivitsrl@gmail.com"
            method="POST"
            encType="multipart/form-data"
            id="form"
          >
            <h1>{title}</h1>
            <input type="hidden" name="_captcha" value="false" />

            <div className="app__contact-form-group-wrapper">
              <div className="app__contact-form-group-container">
                <label htmlFor="_subject">
                  <span>{label_form_subject}</span>{" "}
                </label>
                <input
                  autoComplete="off"
                  type="subject"
                  name="_subject"
                  required
                />
              </div>
              <div className="app__contact-form-group-container">
                <label htmlFor="jotTitle">
                  {" "}
                  <span>{label_form_jobTitle}</span>{" "}
                </label>
                <input
                  autoComplete="off"
                  type="text"
                  name="job title"
                  id="jobTitle"
                  required
                />
              </div>
            </div>

            <div className="app__contact-form-group-wrapper">
              <div className="app__contact-form-group-container">
                <label htmlFor="name">
                  <span>{label_form_name} </span>{" "}
                </label>
                <input
                  autoComplete="off"
                  type="text"
                  name="name"
                  id="name"
                  required
                />
              </div>

              <div className="app__contact-form-group-container">
                <label htmlFor="company">
                  <span>{label_form_company}</span>{" "}
                </label>
                <input
                  autoComplete="off"
                  type="text"
                  name="company"
                  id="company"
                  required
                />
              </div>
            </div>

            <div className="app__contact-form-group-wrapper">
              <div className="app__contact-form-group-container">
                <label htmlFor="email">
                  {" "}
                  <span>{label_form_email} </span>{" "}
                </label>
                <input
                  autoComplete="off"
                  type="email"
                  name="email"
                  id="email"
                  required
                />
              </div>

              <div className="app__contact-form-group-container">
                <label htmlFor="phone">
                  {" "}
                  <span>{label_form_phone}</span>{" "}
                </label>
                <input
                  autoComplete="off"
                  type="phone"
                  name="phone"
                  id="phone"
                  required
                />
              </div>
            </div>

            <label htmlFor="message" style={{ width: "100%" }}>
              {" "}
              <span>{label_form_message} </span>{" "}
            </label>
            <textarea
              autoComplete="off"
              type="text"
              name="message"
              id="message"
              required
            />

            <div className="app__contact-form-file-upload-wrapper">
              <input
                type="file"
                ref={fileInput}
                onChange={(e) => uploadImageHandler(e)}
                name="attachment"
                id="attachment"
                accept="image/png, image/jpeg, application/pdf, .zip,.rar, .jpg"
                value={image}
              />

              <h4>{file_types_title}</h4>

              <p>{file_types}</p>
              <p>{disclaimer_file_types}</p>
              <p>{file_types_NDA}</p>

              <div className="file-upload">
                <div
                  className="file-upload-select"
                  ref={fileSelect}
                  onClick={() => fileSelectClick()}
                >
                  <div className="file-select-button">
                    {label_form_attachment}
                  </div>
                  <div className="file-select-name" ref={selectName}>
                    {chooseFile}
                  </div>
                </div>
              </div>
            </div>

            <input
              autoComplete="off"
              type="hidden"
              name="_next"
              value="https://mivitsrl.com"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                justifyContent: popup ? "flex-end" : "center",
                gap: "3rem",
              }}
            >
              <button type="submit" className="app__contact-form-submit-btn">
                {send_button}
              </button>
              {popup ? (
                <button
                  type="submit"
                  className="app__contact-form-close-btn"
                  onClick={closePopup}
                >
                  {close_button}
                </button>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
