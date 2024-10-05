import expres from "express";
import cors from "cors";
import { EnvVars } from "./src/config/serverConfig";
import connectDB from "./src/config";
import cookieParser from "cookie-parser";
import allRoutes from "./src/routes";
import { paths } from "./src/routes/path";

const { PORT } = EnvVars;

const app = expres();
connectDB();

app.use(expres.json());
app.use(cors());
app.use(cookieParser());
app.use(paths.Base, allRoutes);

app.listen(PORT, () => {
  console.log(`Server is runing on the PORT ${PORT}`);
});
