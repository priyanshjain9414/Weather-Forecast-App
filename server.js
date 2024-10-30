const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname))); 


const API_KEY = "YOUR API KEY";


app.get('/api/weather', async (req, res) => {
    const city = req.query.city;

    try {
        const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=yes`);
        res.json(response.data);
    } catch (error) {
        res.status(404).json({ message: 'City not found' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
