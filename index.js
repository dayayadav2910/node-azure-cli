const express = require('express');
const app = express();
const port = 5000;



app.get('/', (req, res) => {
    res.send("Appllication is running")
});

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
