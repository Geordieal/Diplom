import React from "react";
import styles from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.info}>
        <div className={styles.item}>
          <h4>STORE LOCATOR</h4>
          <ul>
            <li>
              <Link>Find a Boutique</Link>
            </li>
            <li>
              <Link>Book an Appointment</Link>
            </li>
          </ul>
        </div>
        <div className={styles.item}>
          <h4>CLIENT SERVICE</h4>
          <ul>
            <li>
              <Link>Contact Us</Link>
            </li>
            <li className={styles.df}>
              <Link>Help / FAQs</Link>
            </li>
          </ul>
        </div>
        <div className={styles.item}>
          <h4>ABOUT US</h4>
          <ul>
            <li>
              <Link>Sitemap</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.social}>
        <div>
          <Link>
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ color: "#fff" }}
              className={styles.icon}
            />
          </Link>
        </div>

        <div>
          <Link>
            <FontAwesomeIcon
              icon={faTwitter}
              style={{ color: "#fff" }}
              className={styles.icon}
            />
          </Link>
        </div>

        <div>
          <Link>
            <FontAwesomeIcon
              icon={faFacebook}
              style={{ color: "#fff" }}
              className={styles.icon}
            />
          </Link>
        </div>

        <div>
          <Link>
            <FontAwesomeIcon
              icon={faYoutube}
              style={{ color: "#fff" }}
              className={styles.icon}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
