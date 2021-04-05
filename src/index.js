const { app } = require('./app');
const { createConnection } = require('./models/database');
const PORT = 3000;


createConnection();

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
})