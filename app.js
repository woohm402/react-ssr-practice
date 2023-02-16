import { createElement, useReducer } from "react";

export const App = () => {
  const [count, increment] = useReducer((c) => c + 1, 0);

  return createElement("div", { style: { color: "blue" } }, [
    "Hello World!",
    createElement("br"),
    createElement("button", { onClick: increment }, count),
  ]);
};
