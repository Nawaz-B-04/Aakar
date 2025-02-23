const express = require("express");
const app = express();
const mongoose = require("mongoose");
const city = require("./models/dashboard.js")
const path = require("path")
main().then(()=>{
    console.log("connected to db")
})

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/gis');
}

 
app.listen(8000,()=>{
    console.log("server is listening to port 8000")
})

app.set("view engine","ejs")
app.set("views", path.join(__dirname, "views"))
app.use(express.urlencoded({extended: true}));

app.get("/",(req,res)=>{
    res.send("Hello there")
})
app.get("/testdashboard", (req,res)=>{
    let sampleDashboard = new city({
        
            "city_id": 1,
            "city_name": "Mumbai",
            "state": "Maharashtra",
            "latitude": 19.0760,
            "longitude": 72.8777,
            "population": 12442373,
            "literacy_rate": 89.5,
            "aqi": 120.5,
            "average_temperature": 27.5,
            "average_rainfall": 2300.5,
            "gdp": 400000000000,
            "number_of_schools": 5000,
            "hospital_count": 150,
            "poverty_rate": 18.5,
            "unemployment_rate": 5.6,
            "urbanization_rate": 80.2,
            "crime_rate": 50.2
    })
    sampleDashboard.save()
    console.log("sample was saved")
    res.send("Testing succesfull");
})

app.get("/cities",async (req,res)=>{
    const allcities = await city.find({})
    res.render("index.ejs",{allcities});
})

const API_KEY = "f801053732a618a3f48efee733a83fdafdab6f3a";

app.get("/cities/:id",async (req,res)=>{
    let {id} = req.params;
    const cityData = await city.findById(id)    
    
    res.render("show.ejs",{cityData});
})

app.get("/cities/maps/:id",async (req,res)=>{
    let {id} = req.params;
    const cityData = await city.findById(id)
    const cityName = cityData.city_name;
    const response = await fetch(`https://api.waqi.info/feed/${cityName}/?token=${API_KEY}`)
    const aqiData = await response.json();
    console.log(aqiData)
   
   

    res.render("map.ejs",{cityData,aqiData})
})