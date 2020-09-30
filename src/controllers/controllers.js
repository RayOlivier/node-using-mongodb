const mongoose = require('mongoose');
const { ProductSchema } = require('../models/models');

const Product = mongoose.model('Product', ProductSchema);

export const addnewProduct = (req, res) => {
  console.log('POST req.body', req.body);
  if (req.body !== typeof Product) {
    console.log('you done fucked up');
  }
  const newProduct = new Product(req.body);
  newProduct.save((err, Product) => {
    if (err) {
      console.log(err);
      res.status(400).json({ message: err.message });
    } else {
      res.status(200).json(Product);
    }
  });
};
