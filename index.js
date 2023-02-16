import express from "express";
import { createElement } from "react";
import * as ReactDOMServer from "react-dom/server";
import { App } from "./app.js";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const innerHTML = ReactDOMServer.renderToString(createElement(App));

  res.send(
    `<!DOCTYPE html>
<html lang="en">
  <head></head>
  <body>
    <div id="root">
      ${innerHTML}
    </div>
  </body>
</html>
`
  );
});

app.listen(port, () => {
  console.log(`server started: http://localhost:${port}`);
});
