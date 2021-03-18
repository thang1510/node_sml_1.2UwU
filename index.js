const express = require('express');
const app = express();
const port = 3001;

app.set('view engine', 'ejs');
app.set('views', './viewUwU');


app.get('/', (req, res) => {
  res.render('./clientUwU/index.ejs');
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
})