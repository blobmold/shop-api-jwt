import Order from "../models/Order.js";

export const createOrder = async (req, res) => {
    try {
        const newOrder = await Order.create(req.body);

        return res.status(200).json({ message: `Order successfully created`, newOrder });
    } catch (error) {
        return res.status(500).json({ message: `Couldn't create Order`, error });
    }
};

export const updateOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedOrder = await Order.findByIdAndUpdate(id, req.body, { new: true });

        return res.status(200).json({ message: `Order has been updated`, updatedOrder });
    } catch (error) {
        return res.status(500).json({ message: `Could not update the Order`, error });
    }
};

export const deleteOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedOrder = await Order.findByIdAndDelete(id);

        return res.status(200).json({ message: `Order has been deleted`, deletedOrder });
    } catch (error) {
        return res.status(500).json({ message: `Could not delete the Order`, error });
    }
};

export const getOrder = async (req, res) => {
    try {
        const { userId } = req.params;
        const order = await Order.find({ userId });

        if (!order) return res.status(500).json({ message: `Order not found` });

        return res.status(200).json({ message: `Order found`, order });
    } catch (error) {
        return res.status(500).json({ message: `Order not found`, error });
    }
};

export const getOrders = async (req, res) => {
    try {
        const orders = await Order.find({});

        return res.status(500).json({ message: `Orders found`, orders });
    } catch (error) {
        return res.status(500).json({ message: `Orders not found`, error });
    }
};
