const Button = (props) => {
  const handler = (e) => {
    props.click(e.target.innerText);
  };
  return <button onClick={handler}>{props.button}</button>;
};

export default Button;
