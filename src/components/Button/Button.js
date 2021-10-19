import Loader from "../Loader/Loader";
import React from "react";
import styles from "./Button.module.css";

const Button = ({ onClick, isLoading }) => (
  <button type="button" className={styles.Button} onClick={onClick}>
    <Loader
      type="TailSpin"
      color="#00BFFF"
      height={20}
      width={20}
      visible={isLoading}
    />
    {isLoading ? "Загружаем..." : "Load more"}
  </button>
);

export default Button;
