const express = require('express');

const app = express();

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});

app.get("/", (req, res) => {
    res.send("Soon this will be the home of the demo days app")
})