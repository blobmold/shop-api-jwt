import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
    {
        username: { type: String, unique: true, required: true },
        email: { type: String, unique: true, required: true },
        password: { type: String, required: true },
        isAdmin: { type: Boolean, default: false },
    },
    {
        timeStamps: true,
    }
);

const User = mongoose.model("User", UserSchema);

export default User;
