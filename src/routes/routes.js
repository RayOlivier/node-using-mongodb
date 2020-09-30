const { addnewProduct, getProducts, getProductWithID } = require('../controllers/controllers');

// const app = require('express');
// const router = express.Router();

export const routes = app => {
  app.route('/products').post(addnewProduct);
  app.route('/products').get(getProducts);
  app.route('/products/:ProductID').get(getProductWithID);
};

// router.post('/products', addnewProduct);

// module.exports = router;
