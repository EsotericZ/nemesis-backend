const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const sequelize = require('./config');
const PORT = process.env.PORT || 3001;

let routes = require('./routes/api/routes');

app.use(
    cors({
        origin: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true,
    })
);

app.use(
    bodyParser.json({
        verify: (req, res, buf, encoding) => {
            try {
                JSON.parse(buf);
            } catch (e) {
                res.status(404).send({
                    status: 'error',
                    description: 'Invalid JSON',
                });
                throw Error('Invalid JSON');
            }
        },
    })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/", routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
});