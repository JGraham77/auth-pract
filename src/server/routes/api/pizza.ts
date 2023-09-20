import * as express from "express";
import { ReqUser } from "../../../types";
import { tokenCheck } from "../../middlewares/auth.mw";

const router = express.Router();

router.get("/", tokenCheck, (req: ReqUser, res) => {
    try {
        const user = <{ id: number; email: string }>req.user;
        res.json({ message: `Enjoy your Pizza Time ${user.email}` });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "uh oh, we done goofed", error: error.message });
    }
});

export default router;
