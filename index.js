const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/branches", require("./routes/branches"));

app.post("/proxy", async (req, res) => {
  const { url, headers, body } = req.body;
  console.log(`Proxying request to: ${url}`);
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Connection": "close", // Avoid keep-alive issues
        ...headers,
      },
      body: JSON.stringify(body),
    });
    console.log(`Target response status: ${response.status}`);
    const data = await response.text();
    res.status(response.status).send(data);
  } catch (error) {
    console.error("Proxy error details:", error);
    res.status(500).json({ 
      error: "Proxy failed to reach target", 
      details: error.message,
      stack: error.stack
    });
  }
});

app.get("/", (req, res) => {
  res.json({ message: "Tiffin Mock API is running" });
});

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
