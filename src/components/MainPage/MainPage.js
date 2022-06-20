import Row from "../Row/Row";
import { useState } from "react";
import css from "./MainPage.module.css";

const Page = (props) => {
  const [displayedRow, setDisplayedRow] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);

  // const     { "question #": 1, "value": null },

  const rowSelectHandler = (val) => {
    setDisplayedRow((prevState) => prevState + 1);
    setSelectedOptions((prevState) => [
      ...prevState,
      { question: props.things[displayedRow].question, value: val },
    ]);
  };

  const rows = props.things.map((row, index) => {
    return (
      <div key={index}>
        <h1 className={css.header}>{`Row Number ${++index}`}</h1>
        <Row props={row.items} rowSelect={rowSelectHandler}>
          {row.question}
        </Row>
      </div>
    );
  });

  const content = rows[displayedRow]
    ? rows[displayedRow]
    : selectedOptions.map((option) => {
        return (
          <h3 className={css.result} key={option.question}>
            {`${option.question.replace("Select", "")}: ${option.value}`}{" "}
          </h3>
        );
      });
  return content;
};

export default Page;
