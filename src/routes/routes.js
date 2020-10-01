const { addnewProduct, getProducts, getProductWithID, updateProduct } = require('../controllers/controllers');

// const app = require('express');
// const router = express.Router();

export const routes = app => {
	app.route('/products').post(addnewProduct);
	app.route('/products').get(getProducts);
	app.route('/products/:ProductID').get(getProductWithID);
	app.route('/products/:ProductID').put(updateProduct);
	app.route('/products/:ProductID').delete(deleteProduct);
};

// router.post('/products', addnewProduct);

// module.exports = router;
