const rateLimit = require('express-rate-limit');

const authLimit = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 5, // Limit each IP to 5 create account requests per `window` (here, per 1 minute)
    message : {message: "Too many requests, please try again after 1 minute"},
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

module.exports = authLimit;