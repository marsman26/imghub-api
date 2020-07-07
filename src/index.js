const express = require('express');
const app = express();

const authRouter = require('./routes/auth');
const postRouter = require('./routes/post');

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/post', postRouter);

require('./config/db');

app.listen(3000, () => console.log('Server is listening on port 3000!'));