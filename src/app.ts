import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello..!');
});
var aq = 5;
app.listen(port, () => {
  return console.log(`Server is listening at http://localhost:${port}`);
});
