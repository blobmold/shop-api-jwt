import mongoose from "mongoose";

const ProductSchema = mongoose.Schema(
    {
        title: { type: String, unique: true, required: true },
        description: { type: String, required: true },
        img: { type: String, required: true },
        categories: { type: Array },
        size: { type: String },
        color: { type: String },
        price: { type: Number, required: true },
    },
    {
        timeStamps: true,
    }
);

const Product = mongoose.model("Product", ProductSchema);

export default Product;
