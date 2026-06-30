const express = require('express');
const authRouter = require('./routes/auth.routes');
const postRouter = require('./routes/post.routes');
const loginRouter = require('./routes/login.routes');
const verifyOtp = require('./routes/verify-otp.routes');
const logOut = require('./routes/logOut.routes');
const loggedIn = require('./routes/loggedIn.routes')
const adminRoute = require("./routes/admin.routes")
const paymentRoute = require('./routes/payment.routes');

const cookie = require('cookie-parser')
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cookie());
app.use(cors({
    origin: process.env.API_URL,
    credentials: true
}));


app.use('/api/auth', authRouter);
app.use('/api/post', postRouter);
app.use('/api/user', loginRouter);
app.use('/api/verify', verifyOtp);
app.use('/api/user', logOut);
app.use('/api/user', loggedIn)
app.use('/api/admin', adminRoute);
app.use('/api/payment', paymentRoute);

module.exports = app;