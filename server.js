const express = require('express');
const addBreadcrumbs = require('./src/middlewares/breadcrumb.middleware');
const app = express();
const port = 3000;

app.use(addBreadcrumbs);
app.use((req, res, next) => {
  res.locals = { breadcrumbs: req.breadcrumbs };
  next();
});
app.set('view engine', 'ejs');
app.set('views', './src/views');

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/shop/about', (req, res) => {
  console.log(req.breadcrumbs);
  res.render('about');
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
