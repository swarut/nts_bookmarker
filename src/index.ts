import express from "express";
const app = express();
const port = 8080;

app.get('/', (request, response) => {
  response.send("hi dude");
});

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server is started at http://localhost:${port}`);
});
