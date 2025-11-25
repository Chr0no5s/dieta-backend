const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/dietaApp")
  .then(()=>console.log("MongoDB conectado"))
  .catch(err=>console.log(err));

app.use("/", routes);

app.listen(3000, ()=>console.log("Servidor rodando na porta 3000"));
