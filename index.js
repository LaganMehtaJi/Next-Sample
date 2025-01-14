const express = require("express");
const fs = requires("fs");
const app = express();
const PORT = 8000;
app.listen(PORT ,() =>console.log(`Server started at :${PORT} `));