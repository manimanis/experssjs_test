let express = require('express');

let app = express();

let personRoute = require('./routes/person');

app.use((req, res, next) => {
    console.log(`${new Date().toString()}`);
    next();
});

app.use(personRoute);
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.info(`server is listening on ${PORT}`));
