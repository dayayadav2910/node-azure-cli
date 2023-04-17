require('dotenv').config();
const express = require('express');
const app = express();

const port = parseInt(process.env.PORT,10) || 3000 ;



app.get('/', (req, res) => {
    res.send("Appllication is running " + port + " The name is" + " "+ process.env.NAME )
});

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
