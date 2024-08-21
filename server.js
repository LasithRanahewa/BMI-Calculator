const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/', (req, res) => {
    const { weight, height } = req.body;
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);

    if (isNaN(weightNum) || isNaN(heightNum) || heightNum <= 0) {
        return res.status(400).json({ error: 'Invalid input' });
    }

    const bmi = weightNum / (heightNum * heightNum);
    res.json({ bmi: bmi.toFixed(2) });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});