const app = require('./app');

const dotenv = require('dotenv');
const PORT = process.env.PORT || 4000;

const connectDatabase = require('./config/Database');

dotenv.config({path: "backend/config/config.env"});


connectDatabase()



const server = app.listen(process.env.PORT, () => {
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
  });



process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);
  
    server.close(() => {
      process.exit(1);
    });
  });