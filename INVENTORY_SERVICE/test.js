const axios = require('axios');

const testInventoryCheck = async () => {
  const payload = {
    products: [
      { id: 'prod1', name: 'Product 1', inventory: 50 },
      { id: 'prod2', name: 'Product 2', inventory: 10 },
      { id: 'prod3', name: 'Product 3', inventory: 5 }
    ],
    threshold: 20
  };

  try {
    const response = await axios.post('http://localhost:3000/api/inventory/check', payload);
    console.log(response.data);
  } catch (error) {
    console.error(error.response ? error.response.data : error.message);
  }
};

testInventoryCheck();
