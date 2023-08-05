require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');
const cookieParser = require('cookie-parser');
const credentials = require('./middleware/credentials');
const mongoose = require('mongoose');
const connectDB = require('./config/dbConnect');
let routes = require('./routes/api');

const PORT = process.env.PORT || 3001;

connectDB();

app.use(logger);
app.use(credentials);
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static("public"));

app.use("/", routes);

app.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'));
    } else if (req.accepts('json')) {
        res.json({ "error": "404 Not Found" });
    } else {
        res.type('txt').send("404 Not Found");
    }
});

app.use(errorHandler);

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});



// const path = require('path');
// const sequelize = require('./config');
// const bodyParser = require('body-parser');

// app.use(
//     cors({
//         origin: true,
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         credentials: true,
//     })
// );

// app.use(
//     bodyParser.json({
//         verify: (req, res, buf, encoding) => {
//             try {
//                 JSON.parse(buf);
//             } catch (e) {
//                 res.status(404).send({
//                     status: 'error',
//                     description: 'Invalid JSON',
//                 });
//                 throw Error('Invalid JSON');
//             }
//         },
//     })
// );

// app.use(bodyParser.urlencoded({ extended: true }));

// sequelize.sync({ force: false }).then(() => {
//     app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
// });