const express = require("express");
const { connection } = require("./config/db");
const userRouter = require("./router/userRouter");
const employeeRouter = require("./router/employeeRouter");

const app = express();

app.use("/", userRouter);

app.use("/", async (req, res) => {
  try {
    res.send("employee-mmanagement home router");
  } catch (error) {
    console.log(errro);
  }
});

app.use("/", employeeRouter);

const PORT = 8080;
app.listen(PORT, async () => {
  try {
    await connection;
    console.log(`app listening on port ${PORT}`);
  } catch (error) {
    console.log({ error: "error" });
  }
});
