import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) return res.status(401).json({ message: `Authorization failed` });

    const token = authorization.split(" ")[1];
    jwt.verify(token, process.env.JWT_SK, (err, user) => {
        if (err) return res.status(403).json({ message: `Token not valid` });

        req.user = user;
        next();
    });
};

export const verifyTokenAndAuthorization = (req, res, next) => {
    const cb = () => {
        if (req.user.id === req.params.id || req.user.isAdmin) return next();
        return res.status(403).json({ message: `Forbidden` });
    };

    verifyToken(req, res, cb);
};

export const verifyTokenAndAdmin = (req, res, next) => {
    const cb = () => {
        if (req.user.isAdmin) return next();
        return res.status(403).json({ message: `Forbidden` });
    };

    verifyToken(req, res, cb);
};
