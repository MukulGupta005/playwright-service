const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => res.json({status: "running"}));

app.post("/generate-search-url", (req, res) => {
    const desc = req.body.description || "general audience";
    const q = encodeURIComponent(desc);
    return res.json({ searchUrl: `https://demo-search?q=${q}` });
});

app.post("/run-scraper", (req, res) => {
    const sample = [
        { id: 1, name: "Danielle Morgan", title: "CEO", linkedin_url: "" },
        { id: 2, name: "Arjun Singh", title: "Founder", linkedin_url: "" },
        { id: 3, name: "Lina Kaur", title: "Marketing Lead", linkedin_url: "" }
    ];
    res.json({ items: sample });
});

app.post("/personalize", (req, res) => {
    const lead = req.body.lead;
    res.json({ icebreaker: `Hey ${lead.first_name || lead.name}, loved your work!` });
});

app.post("/launch-agent", (req, res) => {
    res.json({ success: true });
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Service running");
});
