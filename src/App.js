import "./App.css";
import Page from "./components/MainPage/MainPage";

function App() {
  const things = [
    { question: "Select Your skin type", items: ["Normal", "Oily", "Dry", "Sensitive", "Text"] },
    {
      question: "Select Your main problem",
      items: ["Acne", "Aging", "Pigment", "Redness", "Blackheads"],
    },
    {
      question: "Select Your secondary problem",
      items: ["Acne", "Aging", "Pigment", "Redness", "Jopa"],
    },
  ];

  return <Page things={things}></Page>;
}

export default App;
