let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');

let app = express();

let personRoute = require('./routes/person');
let customerRoute = require('./routes/customer');

app.use(bodyParser.json());
app.use((req, res, next) => {
    console.log(`${new Date().toString()}`, req.body);
    next();
});

app.use(personRoute);
app.use(customerRoute);
app.use(express.static('public'));

// Error 404 handler
app.use((req, res, next) => {
    res.status(404).send('Resource not found');
});

// Error 500 handler
app.use((err, req, res, next) => {
    res.sendFile(path.join(__dirname, '../public/Error500.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.info(`server is listening on ${PORT}`));
