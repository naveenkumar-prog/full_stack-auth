require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");
const adminRoutes = require("./routes/adminRoutes");
const morgan = require("morgan");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/tasks", taskRoutes);
app.use("/api/v1/admin", adminRoutes);

const auth = require("./middleware/authMiddleware");

app.get("/protected", auth, (req, res) => {
res.json({
message: "Protected route",
user: req.user
});
});
mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("DB Connected"))
.catch(err => console.log(err));

app.listen(5000,()=>{
console.log("Server running");
});