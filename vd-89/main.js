const express = require("express");
const app = express();
const blogRouter = require("./routes/blog");
const shopRouter = require("./routes/shop");
const port = 3000;

app.use(express.static("public"));
app.use("/blog", blogRouter);
app.use("/shop", shopRouter);

app.get("/", (req, res) => {
  res.send("Hello World! Get Request received ");
  console.log("Get Request received /");  
});

app.get("/index", (req, res) => {
  console.log('Hello World! Get Request received /index'); 
  res.sendFile("/template/index.html", { root: __dirname });
});

app.get("/api", (req, res) => {  
  res.json({ name: "John", age: 30, city: "New York" });
});


app.post("/", (req, res) => {
    res.send("Hello World! POST Request received ");
    console.log("POST Request received  /");
});

app.put("/", (req, res) => {
  res.send("Hello World! PUT Request received ");
  console.log("PUT Request received  /");
});


app.delete("/", (req, res) => {
  res.send("Hello World! delete Request PUT received ");
  console.log("delete Request received  /");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
