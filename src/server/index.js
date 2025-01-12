const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { analyzeUrl } = require("./analyse");

const app = express();
const PORT = 8000;

dotenv.config();

app.use(cors());
app.use(express.static("dist"));
app.use(express.json());

const MEANING_CLOUD_API_KEY = process.env.API_KEY;

app.get("/", (req, res) => {
    res.render("index.html");
});

app.post("/", async (req, res) => {
    try {
        const { URI: url } = req.body;
        const analysisResult = await analyzeUrl(url, MEANING_CLOUD_API_KEY);
        const { code, msg, sample } = analysisResult;

        if (code === 212 || code === 100) {
            return res.status(400).json({ msg, code });
        }

        return res.status(200).json({ sample, code });
    } catch (error) {
        return res.status(500).json({ msg: "An internal server error occurred." });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});