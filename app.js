const express = require ("express");
const bodyparser = require("body-parser");
const app = express();
const port = process.env.PORT || 5420;
const host="0.0.0.0";
const route= require("./Routes/index");
const mongoose =require("mongoose");
app.use(bodyparser.json());

app.use(( req,res,next)=> {
    res.setHeader('Access-Control-Allow-Origin','*');//or '*' for acess to all origin
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization');
    next();
});


app.use('/api', route);
mongoose.connect(
    'mongodb+srv://dbuser:dbuser@cluster0.jyzqv.mongodb.net/Color-Clouds?retryWrites=true&w=majority'
    ,
      {
        useNewUrlParser:  true,   
          useUnifiedTopology: true
      }
).then( (err,data) => {
    console.log("Connected to Mongo DB");
    app.listen( port,host, (req,res) => {
       
        console.log("listing on port "+port);
    });
}).catch(err => {
    console.log("can't connect to the database"+err);
});
