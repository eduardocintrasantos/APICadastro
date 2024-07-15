const express = require("express");

const app = express();
app.use(express.json());
const port = 8000;

const users = [];

app.post("/usuarios", (req, res) => {
  users.push(req.body);

  res.send("Post Ok.");
});

app.get("/usuarios", (req, res) => {
  res.json(users);
});

app.listen(port, () => {
  console.log(`Server rodando na porta ${port}`);
});
