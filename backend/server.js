const app = ("./app");

const dotenv = require('dotenv');
const PORT = process.env.PORT || 4000;

dotenv.config({path: "backend/config/config.env"});

app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})