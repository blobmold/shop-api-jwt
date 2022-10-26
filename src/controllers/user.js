import User from "../models/User.js";

export const getUsers = async (req, res) => {
    try {
        const users = await User.find({});

        if (users.length === 0) return res.status(500).json({ message: `No users found` });
        
        return res.status(200).json({ message: `Users found`, users });
    } catch (error) {
        return res.status(500).json({ message: `Could not get users`, error });
    }
};

export const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);

        if (!user) return res.status(500).json({ message: `User not found` });

        return res.status(200).json({ message: `User found`, user });
    } catch (error) {
        return res.status(500).json({ message: `User not found`, error });
    }
};

export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });

        return res.status(200).json({ message: `User has been updated`, updatedUser });
    } catch (error) {
        return res.status(500).json({ message: `Could not update the user`, error });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await User.findByIdAndDelete(id);

        return res.status(200).json({ message: `User has been deleted`, deletedUser });
    } catch (error) {
        return res.status(500).json({ message: `Could not delete the user`, error });
    }
};
