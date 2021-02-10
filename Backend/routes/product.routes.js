const router = require('express').Router();
let Product = require('../models/product.model');


//get product by id
router.route('/').get((req, res) => {
    Product.find()
        .then(products => res.json(products))
        .catch(err => res.status(400).json('Error:' +err));
});

// add a product
router.route('/add').post((req, res) => {
    const productName = req.body.productName;
    const productDesc = req.body.productDesc;
    const productType = req.body.productType;
    const productPrice= req.body.productPrice;
    const productOwner = req.body.productOwner;
    const productContact = req.body.productContact


    const newProduct = new Product({
        productName,
        productDesc,
        productType,
        productPrice,
        productOwner,
        productContact,});

    newProduct.save()
        .then(() => res.json('Product added!'))
        .catch(err => res.status(400).json('Error: ' + err));

});
//get data by id
router.route('/:id').get ((req, res) => {
    Product.findById(req.params.id)
        .then(product => res.json(product))
        .catch(err => res.status(400).json('Error:' + err));

});

//delete data
router.route('/:id').delete ((req, res) => {
    Product.findByIdAndDelete(req.params.id)
        .then(() => res.json(' Product Deleted '))
        .catch(err => res.status(400).json('Error:' + err));

});

//update product details
router.route('/update/:id').post ((req, res) => {
    Product.findById(req.params.id)
        .then(product => {
            product.productName = req.body.productName;
            product.productDesc = req.body.productDesc;
            product.productType = req.body.productType;
            product.productPrice = req.body.productPrice;
            product.productOwner = req.body.productOwner;
            product.productContact = req.body.productContact;

            product.save()
                .then(() => res.json('Product Updated'))
                .catch(err => res.status(400).json('Error:'  +err));

        })
        .catch(err => res.status(400).json('Error:' + err));

});

module.exports = router;


