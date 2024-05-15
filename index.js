const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const rateLimitMiddleware = require('./middleware/rateLimitMiddleware');
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config({ path: '.env' });
}

const app = express();
const PORT = process.env.PORT;

// Error handling for uncaught exceptions
process.on('uncaughtException', (err) => {
    console.log(`Error: ${err.message}`);
    process.exit(1);
});

// Apply rate limit middleware
app.use(rateLimitMiddleware);

// Enable CORS
app.use(cors());

// Parse JSON requests
app.use(express.json());

// Parse URL-encoded requests
app.use(bodyParser.urlencoded({ extended: true }));

// Error handler for rate limit exceeded errors
app.use((err, req, res, next) => {
    if (err && err.message === 'Too many requests from this IP, please try again later') {
        res.status(429).json({ error: 'Rate limit exceeded' });
    } else {
        next(err);
    }
});

//Product Creation Route
const createProduct = require('./routes/createRoute');
app.use('/create', createProduct)

// Health check endpoint
app.get('/healthCheck', (req, res) => {
    res.send('Server is Running! 🚀');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
