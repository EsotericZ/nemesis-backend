const express = require('express');
const app = express();
// const path = require('path');
const cors = require('cors');
// corsOptions?
const { logger } = require('./middleware/logger');
// errorHandler?
const cookieParser = require('cookie-parser');
const credentials = require('./middleware/credentials');


// DO I NEED THIS
// const bodyParser = require('body-parser');


const sequelize = require('./config');
const PORT = process.env.PORT || 3001;

let routes = require('./routes/api');


app.use(logger);
app.use(credentials);

app.use(
    cors({
        origin: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true,
    })
);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

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
app.use(express.static("public"));

app.use("/", routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
});