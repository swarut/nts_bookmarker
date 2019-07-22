import express from 'express';
import path from 'path';
const app = express();
const port = 8080;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (request, response) => {
  response.render('index')
});

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server is started at http://localhost:${port}`);
});
