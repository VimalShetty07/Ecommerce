const app = require('./app');

const dotenv = require('dotenv');
const PORT = process.env.PORT || 8080;

const connectDatabase = require('./config/Database');

dotenv.config({path: "backend/config/config.env"});


connectDatabase()



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
