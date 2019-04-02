const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const cors = require("cors");
app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res, next) => {
  res.sendFile(process.cwd() + "/views/index.html");
});
app.use("/api/fileanalyse", upload.single("upfile"), (req, res, next) => {
  let img = req.file;
  let name = req.file.originalname;
  let size = req.file.size.toString().concat(" Bytes");
  return res.json({
    name: name,
    size: size
  });
});

app.listen(3000, () => console.log("Server running"));
