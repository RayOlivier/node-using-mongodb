const mongoose = require('mongoose');
const { ProductSchema } = require('../models/models');

const Product = mongoose.model('Product', ProductSchema);

export const addnewProduct = (req, res) => {
	console.log('POST req.body', req.body);
	const newProduct = new Product(req.body);
	newProduct.save((err, Product) => {
		if (err) {
			console.log(err);
			res.status(400).json({ message: err.message });
		} else {
			res.status(201).json(Product);
		}
	});
};

export const getProducts = (req, res) => {
	Product.find({}, (err, Product) => {
		if (err) {
			console.log(err.message);
			res.status(400).json({ message: err.message });
		} else {
			res.status(200).json(Product);
		}
	});
};

// prettier-ignore
export const getProductWithID = (req, res) => {
  Product.findById(req.params.ProductID, (err, Product) => {
      if (err) {
        console.log(err.message);
        res.status(400).json({ message: err.message });
      } else {
        res.status(200).json(Product);
      }
    }
  );
};

export const updateProduct = (req, res) => {
	Product.findOneAndUpdate({ _id: req.params.ProductID }, req.body, { new: true, useFindAndModify: false }, (err, Product) => {
		if (err) {
			console.log(err.message);
			res.status(400).json({ message: err.message });
		} else {
			res.status(200).json(Product);
		}
	});
};

export const deleteProduct = (req, res) => {
	// prettier-ignore
	Product.deleteOne({ _id: req.params.ProductID}, (err, Product) => {
		if (err) {
			console.log(err.message);
			res.status(400).json({ message: err.message });
		} else {
			res.json({ message: 'successfully deleted product' });
		}
	});
};
