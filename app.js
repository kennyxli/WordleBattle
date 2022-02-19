function data(result, word){
    console.log(result)
}

function fetchApi(word){
    let url = 'https://api.datamuse.com/words?sp=?????'
    fetch(url).then(res => res.json()).then(result => data(result, word))
}


const mongoose = require('mongoose');
const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

const port = process.env.PORT || 4000;

app.get("/", (req, res) => res.send("Hello World"));

app.listen(port, () => console.log(`Server is running on port ${port}`));