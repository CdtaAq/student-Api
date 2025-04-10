const express = require("express");
const path = require("path");
const router = express.Router();

// Route param example
router.get("/info/:studentId", (req, res) => {
  const { studentId } = req.params;
  res.json({
    message: `Student ID received: ${studentId}`,
    studentId,
  });
});

// Query string example
router.get("/search", (req, res) => {
  const { name, grade } = req.query;
  res.json({
    message: "Student search results",
    name,
    grade,
  });
});

// Send file example
router.get("/welcome", (req, res) => {
  res.sendFile(path.join(globalThis.rootPath, "/public/studentWelcome.html"));
});

// Custom API: return student list
router.get("/all", (req, res) => {
  res.json([
    { id: 1, name: "Alice", grade: "A" },
    { id: 2, name: "Bob", grade: "B" },
    { id: 3, name: "Charlie", grade: "A" },
  ]);
});

module.exports = router;
