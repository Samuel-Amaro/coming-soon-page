import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebookF, faTwitter, faInstagram} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
      <footer className="footer">
        <ul className="social-media">
          <li className="social-media__item">
            <a
              href="#facebook"
              target={"_blank"}
              rel="external"
              className="link link__facebook"
              aria-label="link social media facebook"
            >
              <FontAwesomeIcon
                icon={faFacebookF}
                className="icon icon__facebook"
              />
            </a>
          </li>
          <li className="social-media__item">
            <a
              href="#twitter"
              target={"_blank"}
              rel="external"
              className="link link__twitter"
              aria-label="link social media twitter"
            >
              <FontAwesomeIcon icon={faTwitter} className="icon" />
            </a>
          </li>
          <li className="social-media__item">
            <a
              href="#instagram"
              target={"_blank"}
              rel="external"
              className="link link__instagram"
              aria-label="link social media instagram"
            >
              <FontAwesomeIcon icon={faInstagram} className="icon" />
            </a>
          </li>
        </ul>
        <p className="footer__copyright">
          &copy; Copyright Ping. All rights reserved.
        </p>
      </footer>
    );
}