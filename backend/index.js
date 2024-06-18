import express, {
 json
} from "express"
import {
    config
} from "dotenv";
config({
    path: "./.env"
});
import cors from "cors";
import {
    corsFunction
} from "./src/utils/cors.js";
import {
    createRequire
} from "module";
import swaggerUi from 'swagger-ui-express';
import {
    connectDB
} from './src/utils/database.js';
import { sequelize } from './src/utils/database.js';
import userRoutes from "./src/routes/userRoutes.js"
import bookRoutes from "./src/routes/bookRoutes.js"
import morgan from "morgan";

const require = createRequire(import.meta.url);
const swaggerJson = require("./swagger.json");
const app = express();

app.use(cors());
app.use(corsFunction);
app.use(json())
app.use(cors());
app.use(corsFunction);
app.use(json());
app.use(morgan("dev"));


app.use(bookRoutes)
app.use(userRoutes) 


app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJson));

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  await connectDB();
});
