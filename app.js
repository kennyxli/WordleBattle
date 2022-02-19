const mongoose = require('mongoose');
const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
const bodyParser = require('body-parser');

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
    res.send("Hello World")
});


app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use("/api/users", users);



const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server is running on port ${port}`));




// function data(result, word){
//     console.log(result)
// }

// function fetchApi(word){
//     let url = 'https://api.datamuse.com/words?sp=?????'
//     fetch(url).then(res => res.json()).then(result => data(result, word))
// }