import React from "react";
import styles from "./helpbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";

const HelpBar = () => {
  return (
    <div className={styles.helpbars}>
      <article className={styles.item}>
        <div className={styles.headerIcon}>
          <a href="1">
            <FontAwesomeIcon
              icon={faQuestion}
              style={{ color: "#000000" }}
              className={styles.icon}
            />
          </a>
        </div>

        <div>
          <span>КАК СДЕЛАТЬ ЗАКАЗ</span>
        </div>

        <div>
          <span>Подробная инструкция для новых клиентов</span>
        </div>
      </article>
      <article className={styles.item}>
        <div className={styles.headerIcon}>
          <a href="1">
            <FontAwesomeIcon
              icon={faQuestion}
              style={{ color: "#000000" }}
              className={styles.icon}
            />
          </a>
        </div>

        <div>
          <span>ВОПРОСЫ И ОТВЕТЫ</span>
        </div>

        <div>
          <span>Все о доставке, возврате и пошлинах</span>
        </div>
      </article>
      <article className={styles.item}>
        <div className={styles.headerIcon}>
          <a href="1">
            <FontAwesomeIcon
              icon={faComment}
              style={{ color: "#000000" }}
              className={styles.icon}
            />
          </a>
        </div>

        <div>
          <span>НУЖНА ПОМОЩЬ?</span>
        </div>

        <div>
          <span>Обратитесь в нашу клиентскую службу</span>
        </div>
      </article>
    </div>
  );
};

export default HelpBar;
