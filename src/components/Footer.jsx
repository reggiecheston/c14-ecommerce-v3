import React, { useState } from "react";
import { validateFooterEmail } from "../utils/formValidation";
// import "../scripts/subscribe.js";

export default function Footer() {
  // Footer email state and validation
  const [footerEmail, setFooterEmail] = useState("");
  const [footerEmailError, setFooterEmailError] = useState("");

  const handleFooterEmailChange = (e) => {
    setFooterEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the email
    const emailError = validateFooterEmail(footerEmail);
    setFooterEmailError(emailError);

    // Handle the form submission logic here
    if (emailError === "") {
      // Your form submission logic
      console.log("Form submitted successfully");
    } else {
      console.log("Form validation failed");
    }
  };

  return (
    <footer>
      <section className="main-footer">
        <ul className="main-footer__items">
          <li className="main-footer__item">
            <div className="main-footer__link-sections">
              <ul className="main-footer__links">
                <li className="main-footer__link--header">Shop</li>
                <li className="main-footer__link">
                  <a href="/">Chairs</a>
                </li>
                <li className="main-footer__link">
                  <a href="/">Sofas</a>
                </li>
                <li className="main-footer__link">
                  <a href="/">Lighting</a>
                </li>
              </ul>
              <ul className="main-footer__links">
                <li className="main-footer__link--header">Info</li>
                <li className="main-footer__link">
                  <a href="/">Return Policy</a>
                </li>
                <li className="main-footer__link">
                  <a href="/">Terms and Conditions</a>
                </li>
                <li className="main-footer__link">
                  <a href="/">FAQ</a>
                </li>
              </ul>
              <ul className="main-footer__links">
                <li className="main-footer__link--header">About</li>
                <li className="main-footer__link">
                  <a href="/">Contact</a>
                </li>
                <li className="main-footer__link">
                  <a href="/">Careers</a>
                </li>
                <li className="main-footer__link">
                  <a href="/">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="main-footer__item subscribe">
            <form id="subscribe" action="/" onSubmit={handleSubmit}>
              <label className="subscribe__header" htmlFor="footer-email">
                Subscribe to our newsletter:
              </label>
              <div className="email-input">
                <input
                  type="text"
                  className="contact__form-item"
                  id="footer-email"
                  size="30"
                  placeholder="name@humil.com"
                  onChange={handleFooterEmailChange}
                />
                <button className="subscribe__submit-btn" type="submit">
                  Submit
                </button>
                <div className="error">{footerEmailError}</div>
              </div>
            </form>
          </li>
        </ul>
      </section>
      <section className="main-footer__subsection">
        <div className="main-footer__item">
          <ul className="main-footer__social-links">
            <li className="main-footer__social-link">
              <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                <img
                  src="../assets/icons/blk/big-twitter-logo.png"
                  alt="twitter"
                />
              </a>
            </li>
            <li className="main-footer__social-link">
              <a
                href="https://github.com/reggiecheston/c14-ecommerce"
                target="_blank"
                rel="noreferrer"
              >
                <img src="../assets/icons/blk/github-logo.png" alt="Github" />
              </a>
            </li>
            <li className="main-footer__social-link">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="../assets/icons/blk/instagram-new-2016-glyph-logo-84CB825424-seeklogo.com.png"
                  alt="Instagram"
                />
              </a>
            </li>
          </ul>
        </div>
        <small className="copyright">© Humil 2023</small>
      </section>
    </footer>
  );
}