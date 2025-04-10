const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.get("/new", (req, res) => {
  res.send("<h2>I know Express is very powerful</h2>");
});

router.get("/test", (req, res) => {
  console.log(req.query);
  res.json({
    server: "Express",
    endpoint: "Test",
    api: "RestFul",
  });
});

router.get("/hello", (req, res) => {
  res.sendFile(globalThis.rootPath + "/public/index.html");
});

router.get("/test/:id", (req, res) => {
  console.log(req.params.id);
  console.log(req.query);
  res.json({
    server: "Express",
    endpoint: "Test",
    api: "RestFul",
  });
});

router.get("/queryString", (req, res) => {
  console.log(req.query);
  res.json({
    name: req.query.name,
    session: req.query.session,
    api: "RestFul",
  });
});

// Wildcard route for 404
router.all("*", (req, res) => {
  res.sendFile(globalThis.rootPath + "/public/notFound.html");
});

module.exports = router;
