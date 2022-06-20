import Button from "./button";
import { useState } from "react";
import css from "./row.module.css";

const Row = (props) => {
  console.log(props);
  const [value, setValue] = useState(true);

  const buttonHandler = (val) => {
    setValue(false);
  };

  const buttons = props.props.map((button, key) => {
    return <Button key={key} button={button} click={buttonHandler}></Button>;
  });
  return value && buttons;
};
export default Row;
