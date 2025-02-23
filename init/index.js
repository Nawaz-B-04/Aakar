const mongoose = require("mongoose")
const initdata = require("./data.js")
const dashboard = require("../models/dashboard.js")

main().then(()=>{
    console.log("connected to db")
})

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/gis');
}

const initDb = async()=>{
    await dashboard.deleteMany({});
    await dashboard.insertMany(initdata.data)
    console.log("data initialized")
}

initDb();