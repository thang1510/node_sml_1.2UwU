const express = require('express');
const slugify = require('slugify');
const ejsEngine = require('ejs-mate');

const routes = require('./router');

const app = express();
const port = 3001;



app.set('view engine', 'ejs');
app.set('views', './viewUwU');

app.engine('ejs', ejsEngine);
app.use('/public', express.static('./public'));

app.use(routes);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
})