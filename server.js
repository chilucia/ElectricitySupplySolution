import express from 'express';
import ownerRouter from './route/route.js';
import street from './config/config.js';

const PORT = 1010;
const app = express();
app.use(express.json());
app.use('/api', ownerRouter);

app.listen(PORT, () => {
    console.log(`App is listening to port:` + PORT)
});