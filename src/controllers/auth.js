import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(password, salt);
        const newUser = await User.create({ username, email, password: hash });

        console.log(`User Created`, newUser);
        res.status(200).json({ username, email, password, hash });
    } catch (error) {
        console.error(error);
        res.status(404).json(error);
    }
};

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const userFound = await User.findOne({ username });

        if (!userFound) return res.status(401).json({ message: `Unauthorized` });

        const passwordMatch = await bcrypt.compare(password, userFound.password);

        if (!passwordMatch) return res.status(401).json({ message: `Unauthorized` });

        const accessToken = jwt.sign(
            {
                id: userFound._id,
                isAdmin: userFound.isAdmin,
            },
            process.env.JWT_SK,
            { expiresIn: "3d" }
        );

        return res.status(200).json({ message: `Authorized`, userFound, accessToken });
    } catch (error) {
        return res.status(401).json({ message: `Unauthorized` });
    }
};
