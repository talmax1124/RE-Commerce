import express from "express";
import formData from "express-form-data";
// Dot Env + Database
import "./utils/Environment.js";
import "./utils/Database.js";
import { ErrorHandler, NotFound } from "./utils/ErrorHandler.js";

const app = express();
app.use(express.json());
app.use(formData.parse());

// Routes
import AuthRoutes from "./routes/AuthRoutes.js";
import UserRoutes from "./routes/UserRoutes.js";
import SellerRoutes from "./routes/SellerRoutes.js";
import ProductRoutes from "./routes/ProductRoutes.js";
app.use("/api/auth", AuthRoutes);
app.use("/api/user", UserRoutes);
app.use("/api/seller", SellerRoutes);
app.use("/api/product", ProductRoutes);

// Middleware
app.use(NotFound);
app.use(ErrorHandler);

// Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`RE-Commerce is running now at port ${PORT}!`));
