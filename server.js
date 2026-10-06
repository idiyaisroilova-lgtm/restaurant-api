const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Restaurant API ishlayapti!"
    });
});

app.listen(3000, () => {
    console.log("Server 3000-portda ishlayapti");
});
