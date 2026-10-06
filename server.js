const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Restaurant API ishlayapti!"
    });
});

const taomlar = [
    {
        id: 1,
        nomi: "Osh",
        narxi: 30000
    },
    {
        id: 2,
        nomi: "Manti",
        narxi: 25000
    },
    {
        id: 3,
        nomi: "Lag'mon",
        narxi: 28000
    }
];

app.get("/taomlar", (req, res) => {
    res.json(taomlar);
});

app.get("/taomlar/:id", (req, res) => {
    const id = Number(req.params.id);

    const taom = taomlar.find(t => t.id === id);

    if (!taom) {
        return res.status(404).json({
            message: "Taom topilmadi"
        });
    }

    res.json(taom);
});

let buyurtmalar = [];

app.post("/buyurtmalar", (req, res) => {
    const yangiBuyurtma = {
        id: buyurtmalar.length + 1,
        ...req.body
    };

    buyurtmalar.push(yangiBuyurtma);

    res.status(201).json(yangiBuyurtma);
});

app.patch("/buyurtmalar/:id", (req, res) => {
    const id = Number(req.params.id);

    const buyurtma = buyurtmalar.find(b => b.id === id);

    if (!buyurtma) {
        return res.status(404).json({
            message: "Buyurtma topilmadi"
        });
    }

    Object.assign(buyurtma, req.body);

    res.json(buyurtma);
});

app.delete("/buyurtmalar/:id", (req, res) => {
    const id = Number(req.params.id);

    const index = buyurtmalar.findIndex(b => b.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Buyurtma topilmadi"
        });
    }

    buyurtmalar.splice(index, 1);

    res.json({
        message: "Buyurtma bekor qilindi"
    });
});

app.listen(3000, () => {
    console.log("Server 3000-portda ishlayapti!");
});
