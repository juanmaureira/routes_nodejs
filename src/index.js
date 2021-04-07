require('dotenv').config();
const { app } = require('./app');
const { createConnection } = require('./models/database');
const { dbConnection } = require('./models/config');

const PORT = process.env.PORT;

dbConnection();
createConnection();

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
})