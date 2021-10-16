const app = require('./app');

const dotenv = require('dotenv');
const PORT = process.env.PORT || 8080;

dotenv.config({path: "backend/config/config.env"});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
