const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve the static files from the React app
app.use("/sysdesign", express.static(path.join(__dirname, "build")));

// Redirect all requests to index.html for React Router
app.get("/sysdesign/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/sysdesign`);
});
