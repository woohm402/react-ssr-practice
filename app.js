const isServer = typeof window === "undefined";
const React = isServer ? require("react") : window.React;
const ReactDOM = isServer ? require("react-dom/client") : window.ReactDOM;

const e = React.createElement;

const App = () => {
  const [count, increment] = React.useReducer((c) => c + 1, 0);

  return e(
    "section",
    undefined,
    e("p", undefined, "Hello World!"),
    e("br"),
    e("button", { onClick: increment }, count)
  );
};

if (!isServer) {
  ReactDOM.hydrateRoot(document.getElementById("root"), e(App));
}

if (isServer) {
  module.exports = { App };
}
