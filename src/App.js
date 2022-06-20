import "./App.css";
import Page from "./components/MainPage/MainPage";

function App() {
  const questions = [
    { question: "Select Your skin type", items: ["Normal", "Oily", "Dry", "Sensitive", "Combine"] },
    {
      question: "Select Your main problem",
      items: ["Acne", "Aging", "Pigment", "Redness", "Blackheads"],
    },
    {
      question: "Select Your secondary problem",
      items: ["Acne", "Aging", "Pigment", "Redness"],
    },
    // {
    //   question: "Another silly question",
    //   items: ["PoPo", "Eleven", "Beatles", "Yes", "13"],
    // },
  ];

  return <Page questions={questions}></Page>;
}

export default App;

// NOTE: If you uncomment line 15 to 18 you will add 1 more question. Each element in questions array will automatically add a new question, where each element in question items will represent a button
