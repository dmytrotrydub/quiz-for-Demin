import Row from "../Row/Row";
import { useState } from "react";
import css from "./MainPage.module.css";

const Page = (props) => {
  const [displayedRow, setDisplayedRow] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [code, setCode] = useState("");

  const rowSelectHandler = (val) => {
    setCode((prevState) =>
      prevState.concat(props.questions[displayedRow].items.findIndex((element) => element === val))
    );
    setDisplayedRow((prevState) => prevState + 1);
    setSelectedOptions((prevState) => [
      ...prevState,
      { question: props.questions[displayedRow].question, value: val, code: code },
    ]);
  };

  const rows = props.questions.map((row, index) => {
    return (
      <div key={index}>
        <h1 className={css.header}>{`QUESTION ${++index}`}</h1>
        <Row props={row.items} rowSelect={rowSelectHandler}>
          {row.question.toUpperCase()}
        </Row>
      </div>
    );
  });

  const content = rows[displayedRow] ? (
    rows[displayedRow]
  ) : (
    <div className={css.result}>
      <h2 className={css.code}>{`CODE: ${code}`}</h2>
      {selectedOptions.map((option) => {
        return (
          <div>
            <h3 className={css.result} key={option.question}>
              {`${option.question.replace("Select", "")}: ${option.value.toUpperCase()}`}{" "}
            </h3>
          </div>
        );
      })}
    </div>
  );
  return content;
};

export default Page;
