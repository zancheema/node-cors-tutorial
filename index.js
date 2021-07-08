const app = require("express")();

app.get("/", (req, res) => res.send("Server running..."));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");

    next();
});

app.get("/api", (req, res) => {
    res.send("GET request Accepted");
});

app.post("/api", (req, res) => {
    res.send("POST request Accepted");
});

app.put("/api", (req, res) => {
    res.send("PUT request Accepted");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});