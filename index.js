const express = require('express');
const mongoose = require('mongoose');
const body_parser = require("body-parser");
const app = express();

app.use(body_parser.urlencoded({ extended: true }))
app.use(body_parser.json());

const loopupRoute=require('./Route/lookupRoute')
app.use(loopupRoute)

// const port = 4300;
const port=process.env.PORT || 4300
const dbLink = "mongodb+srv://souvikdb:cSgmsmo8GCvTW05X@cluster0.bsndvpo.mongodb.net/Nested_LookUp";
mongoose.connect(dbLink, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(res => {
        app.listen(port, () => {
            console.log(`Server Running http://localhost:${port}`);
            console.log("Database Connected...");
        })
    }).catch(err => {
        console.log(err);
    })