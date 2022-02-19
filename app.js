import express from 'express';
import settings from './routes/settings.js';
import users from './routes/users.js';

const app = express();
const port = 3300;

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})

/**********************
 * Routes V1
 **********************/
app.use('/api/v1/settings', settings);
app.use('/api/v1/users', users);