const express = require("express");
const app = express();
app.use(express.static("public"));

const request = require("request");



app.get("/",(req,res)=>{
    // request({url:"https://api.exchangeratesapi.io/latest"},(error,response)=>{
    //     const data = JSON.parse(response.body);
    //     console.log(data.rates.USD);
    //     res.send("The value of USD: " + data.rates.USD);
    // })

    // request({url:"https://quotes.rest/quote/random?language=en&limit=1"},(error,response)=>{
    //     const data = JSON.parse(response.body);
    //     console.log(data.contents.quotes[0].author);
    //     res.send("The quote of the day \n" + data.contents.quotes[0].quote);
    // })
    res.sendFile(__dirname + "/index.html");
})














app.listen(process.env.PORT || 3000 , ()=>{
    console.log("Server listening");
})