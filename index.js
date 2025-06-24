import express from "express";
// import  checkConnection  from "./config/dbConnection.js";

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello, Gess!");
});

// Check database connection
// checkConnection()

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
