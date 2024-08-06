const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/api/inventory/check', (req, res) => {
  const { products, threshold } = req.body;

  if (!Array.isArray(products) || typeof threshold !== 'number') {
    return res.status(400).json({ error: 'Invalid input format' });
  }

  const productsUnderThreshold = products.filter(product => product.inventory < threshold);

  res.json({ productsUnderThreshold });
});

app.listen(port, () => {
  console.log(`Inventory service listening at http://localhost:${port}`);
});

