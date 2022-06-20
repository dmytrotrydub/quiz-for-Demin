import Button from "../Button/Button";
import css from "./Row.module.css";

const Row = (props) => {
  const buttonHandler = (val) => {
    props.rowSelect(val);
  };

  const buttons = props.props.map((button, key) => {
    return <Button key={key} button={button} click={buttonHandler}></Button>;
  });
  return (
    <div className={css.row}>
      <h1>{props.children}</h1>
      {buttons}
    </div>
  );
};
export default Row;
