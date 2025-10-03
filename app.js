const express = require('express');
const path = require('path');
const products = require('./data/products.json');

const layout = require('./views/layout');
const indexView = require('./views/index');

const app = express();

// Serve static files (css, images, js)
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  const bodyHTML = indexView(products);
  const html = layout('Alifaye Supermarket', bodyHTML);
  res.send(html);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
