import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config({ path: './config.env' });
import {connectToServer} from './db/conn.js';
import  agentRoutes  from './routes/agent.route.js';

const port = process.env.PORT || 3001;
const app = express();
app.use(express.json());
app.use(cors());
app.use(agentRoutes);

// get driver connection


app.listen(port, () => {
  connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Server is running on port: ${port}`);

  
})