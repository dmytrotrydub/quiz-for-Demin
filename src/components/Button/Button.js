import css from "../Button/Button.module.css";

const Button = (props) => {
  const handler = (e) => {
    props.click(e.target.innerText);
  };
  return (
    <button className={css.button} onClick={handler}>
      {props.button}
    </button>
  );
};

export default Button;
