require("dotenv").config({path: './config.env'});
const mongoose = require("mongoose");
const app = require("./app");

const DB_String = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DB_PASSWORD
);

mongoose
  .connect(DB_String)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => console.log(err));

app.listen(process.env.PORT, () => {``
  console.log(`Server is listening on port ${process.env.PORT}`);
});
