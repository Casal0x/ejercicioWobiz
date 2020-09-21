const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "http://localhost:8080",
  })
);
app.use(helmet());
app.use(morgan("tiny"));

//Routes

app.get("/", (req, res) => res.send("Fake Api"));

app.post("/login", (req, res) => {
  const USER = "test@test.com";
  const PASSWORD = "123123";
  const { email, password } = req.body;

  if (email !== USER)
    return res
      .status(401)
      .json({ success: false, code: 108, message: "Wrong username" });

  if (password !== PASSWORD)
    return res
      .status(401)
      .json({ success: false, code: 106, message: "Wrong password for user" });

  res.json({
    token: "ba7c2cf6c55e3e382f2f48231aafc6b8725d723b",
    expires: 1567619449,
    user_id: 21432,
  });
});

app.use((req, res) => {
  res.status(404).json({
    status: "error",
    message: "Error 404, contactate con un Administrador.",
  });
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
