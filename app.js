const express = require("express");
const path = require("path");

globalThis.rootPath = __dirname;

const app = express();

// Static middleware for serving files
app.use("/static", express.static(path.join(__dirname, "public")));

// Routers
const defaultRoute = require("./routes/defaultRoute");
const studentRoute = require("./routes/studentRoute");

app.use("/", defaultRoute);
app.use("/student", studentRoute);

// Start server
const PORT = 9000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
