import "dotenv/config"
import express from 'express';
import { router } from "./routes";
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(4000, () => console.log('🚀  Server is running on PORT 4000!'));

export default app;