const express = require('express');
const connectToDB = require('./src/config/db');
const mainRouter = require('./src/routes/mainRoutes');
require('dotenv/config');

const PORT = process.env.PORT;

const app = express();

connectToDB();

app.use(express.json());

app.use('/api/v1/vector-interviews', mainRouter);

app.listen(PORT, () => {
    console.log(`Server is running at: localhost:${PORT}/api/v1/vector-interviews`);
});