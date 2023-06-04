import { NextFunction, Response } from "express";

const isUserLoggedIn = (req: any, res: Response, next: NextFunction) => {
  req.user ? next() : res.send(401).json({ message: "user is not authorized" });
};

export default isUserLoggedIn;
