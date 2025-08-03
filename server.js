const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const users = [
    { email: "admin@example.com", password: "admin123", role: "admin" },
    { email: "employee@example.com", password: "employee123", role: "employee" },
    { email: "insurance@example.com", password: "insurance123", role: "insurance" }
];

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        res.json({ success: true, role: user.role });
    } else {
        res.json({ success: false });
    }
});

app.listen(3000, () => console.log("Server running on port 3000"));

