const express = require("express");
const path = require("path");

const app = express();

// Use the port given by Azure, or 3000 for local dev
const PORT = process.env.PORT || 3000;

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, "public")));

// Optional health check route
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

// Fallback route - send index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
