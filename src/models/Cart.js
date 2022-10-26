import mongoose from "mongoose";

const CartSchema = mongoose.Schema(
    {
        userId: { type: String, required: true },
        products: [{
            productId: { type: String },
            quantity: { type: Number, default: 1 }
        }]
    },
    {
        timeStamps: true,
    }
);

const Cart = mongoose.model("Cart", CartSchema);

export default Cart;
