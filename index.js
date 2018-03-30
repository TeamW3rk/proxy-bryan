const express = require('express')
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const $ = require('jquery');

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

const axios = require('axios');
const mainHTML = require('./templates/main.js');
const downloadBundles = require('./helpers/downloadBundles.js');
const requireBundles = require('./helpers/requireBundles.js');
const renderComponents = require('./helpers/renderComponents.js');
let components;

app.get('/r/:id', (req, res) => {
  renderComponents(req.params.id, components)
    .then((renderedComponents) => {
      res.send(mainHTML(renderedComponents));
    });
});

downloadBundles().then(() => {
  components = requireBundles();
  app.listen(port, () => {
    console.log(`server running at: http://localhost:${port}`)
  });
});
