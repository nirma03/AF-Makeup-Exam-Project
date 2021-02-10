const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Product Model
const productSchema = new Schema(
    {
        productName:{ type: String, required: true, trim: true},
        productDesc: { type: String, required: true, unique: true, trim: true },
        productType:{type: String, required: true, trim: true},
        productPrice:{type: String, required: true, trim: true},
        productOwner: { type: String, required: true, trim: true },
        productContact: { type: String, required: true, trim: true },
        // images: {
        //     type: Array,
        //     default: [],
        // },
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model("Product", productSchema);

//Export User
module.exports = Product;