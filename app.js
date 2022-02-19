import 'dotenv/config';
import express from 'express';
import settings from './routes/settings.js';
import users from './routes/users.js';

const app = express();

app.listen(process.env.SERVER_PORT, () => {
    console.log(`App listening on port ${process.env.SERVER_PORT}`)
})

/**********************
 * Routes V1
 **********************/
app.use('/api/v1/settings', settings);
app.use('/api/v1/users', users);