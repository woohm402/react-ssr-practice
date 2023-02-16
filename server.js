const express = require("express");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const { App } = require("./app");
const fs = require("fs");
const e = React.createElement;

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const innerHTML = ReactDOMServer.renderToString(e(App));

  res.send(
    `<!DOCTYPE html>
<html lang="en">
<head></head>
<body>
<div id="root">${innerHTML}</div>
<script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
<script src="/app" type="text/javascript"></script>
</body>
</html>`
  );
});

app.get("/app", (req, res) => {
  const file = fs.readFileSync("./app.js");
  res.send(file);
});

app.listen(port, () => {
  console.log(`server started: http://localhost:${port}`);
});
