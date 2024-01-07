const express = require('express');
const fs = require('fs');
const app = express();

app.get('/docs/melody.txt', (req, res) => {
    // melody.txtの内容を読み込んでクライアントに返す
    fs.readFile('./docs/melody.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Error:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.send(data);
    });
});

app.use(express.static('./docs/melody.txt'));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
