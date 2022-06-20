import { useState } from "react";
import Button from "../Button/Button";
import css from "./Row.module.css";

const Row = (props) => {
  const [hide, setHide] = useState(false);

  const buttonHandler = (val) => {
    setHide(true);
    setTimeout(() => {
      props.rowSelect(val);
    }, 600);
  };

  const buttons = props.props.map((button, key) => {
    return <Button key={key} button={button} click={buttonHandler}></Button>;
  });

  return (
    <div className={hide ? `${css.row} ${css.out}` : `${css.row} ${css.in}`}>
      <h1 className={css.question}>{props.children}</h1>
      {buttons}
    </div>
  );
};
export default Row;
