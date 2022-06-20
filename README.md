##In App.js##

_Questions Array:_

```const questions = [
  { question: "Select Your skin type", items: ["Normal", "Oily", "Dry", "Sensitive", "Combine"] },
  {
    question: "Select Your main problem",
    items: ["Acne", "Aging", "Pigment", "Redness", "Blackheads"],
  },
  {
    question: "Select Your secondary problem",
    items: ["Acne", "Aging", "Pigment", "Redness", "Jopa"],
  },
  // {
  //   question: "Another silly question",
  //   items: ["PoPo", "Eleven", "Beatles", "Yes", "13"],
  // },
];
```

Each question and its items will automatically be added to the list, there are no limits to number of questions or to the options each question has.

**Assume the following:**
questions.length = number of questions in quiz  
questions[n].items.length = number of answer for the question
