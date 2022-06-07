import express from "express";
import cors from "cors";
import { readdirSync } from "fs";
const morgan = require("morgan");
require("dotenv").config();
import mongoose from "mongoose";
import csrf from "csurf";
import cookieParser from "cookie-parser";

const csrfProtection = csrf({ cookie: true });
const app = express();

//db
mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log("DB CONNECTION ERROR", err));

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
// app.use((req, res, next) => {
//   console.log("this is my own middleware");
//   next();
// });
app.use(cookieParser());

//route
readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));

//
app.use(csrfProtection);

app.get("/api/csrf-token", (req, res) => {
  res.json({ csrfToken: req.csrfToken() });
});

//port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`server is running on port ${port}`));
