import "./App.css";
import Page from "./comps/page";

function App() {
  const things = [
    ["Normal", "Oily", "Dry", "Sensetive", "Text"],
    ["Acne", "Aging", "Pigmentation", "Redness", "Blackheads"],
    ["Acne", "Aging", "Pigmentation", "Redness", "Jopa"],
  ];

  return <Page things={things}></Page>;
}

export default App;
