const { addnewProduct } = require('../controllers/controllers');

// const app = require('express');
// const router = express.Router();

export const routes = app => {
  app.route('/products').post(addnewProduct);
};

// router.post('/products', addnewProduct);

// module.exports = router;
