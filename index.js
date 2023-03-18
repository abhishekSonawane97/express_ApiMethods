const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());
const calculatorRoutes = require("./routes/calculatorRoute");
const todoRoutes = require("./routes/todoRoute");

const port = 2000;
const secreteKey = "shoooo";

app.get("/", (req, res) => {
  res.send(
    `<h1 style='text-align:center; margin-top: 20vh; color:cyan; background: black;'>Digikull</h1>`
  );
});

app.use("/calculator", calculatorRoutes);
app.use("/todos", todoRoutes);

app.post("/login", (req, res) => {
  const user = {
    id: 1,
    name: "user1",
    email: "user1@gmail.com",
  };
  jwt.sign({ user }, secreteKey, { expiresIn: "400s" }, (err, token) => {
    res.json({ token });
  });
});

const verifyToken = (req, res, next) => {
  const bearerHeader = req.headers["authentication"];
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const token = bearer[1];
    // console.log(bearer, token)
    req.token = token;
    next();
  } else {
    res.send("invalid token");
  }
};

app.post("/home", verifyToken, (req, res) => {
  jwt.verify(req.token, secreteKey, (err, auth) => {
    if (err) {
      res.status(400).json({
        message: err.message,
      });
    } else {
      res.status(200).json({
        message: "welcome to home page",
        user: auth["user"],
      });
    }
  });
});

app.listen(port, () => console.log("server is running on port 2000"));
