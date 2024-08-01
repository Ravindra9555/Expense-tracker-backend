import { Router } from "express";
import { verifyJwt } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";
 import { createExpense, getExpensesOfMonth ,getMonthlyExpensesByYear } from "../controllers/expense.controller.js";
const router = Router();
router.route("/createExpense").post(verifyJwt,upload.single('bill_img'),createExpense);
router.route("/expenses/monthly").get(verifyJwt,getExpensesOfMonth);
router.route("/expenses/:userId/:year").get(verifyJwt, getMonthlyExpensesByYear);


export default router;