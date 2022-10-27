import Cart from "../models/Cart.js";

export const createCart = async (req, res) => {
    try {
        const newCart = await Cart.create(req.body);

        return res.status(200).json({ message: `Cart successfully created`, newCart });
    } catch (error) {
        return res.status(500).json({ message: `Couldn't create Cart`, error });
    }
};

export const updateCart = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedCart = await Cart.findByIdAndUpdate(id, req.body, { new: true });

        return res.status(200).json({ message: `Cart has been updated`, updatedCart });
    } catch (error) {
        return res.status(500).json({ message: `Could not update the Cart`, error });
    }
};

export const deleteCart = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCart = await Cart.findByIdAndDelete(id);

        return res.status(200).json({ message: `Cart has been deleted`, deletedCart });
    } catch (error) {
        return res.status(500).json({ message: `Could not delete the Cart`, error });
    }
};

export const getCart = async (req, res) => {
    try {
        const { userId } = req.params;
        const cart = await Cart.find({ userId });

        if (!cart) return res.status(500).json({ message: `Cart not found` });

        return res.status(200).json({ message: `Cart found`, cart });
    } catch (error) {
        return res.status(500).json({ message: `Cart not found`, error });
    }
};

export const getCarts = async (req, res) => {
    try {
        const carts = await Cart.find({});

        return res.status(500).json({ message: `Carts found`, carts });
    } catch (error) {
        return res.status(500).json({ message: `Carts not found`, error });
    }
};
