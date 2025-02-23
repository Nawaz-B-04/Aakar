const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const citySchema = new Schema({
    city_id: {
        type: Number,
        required: true,
        unique: true,  
    },
    city_name: {
        type: String,
        required: true,
        maxlength: 100,  
    },
    state: {
        type: String,
        required: true,
        maxlength: 100,  
    },
    latitude: {
        type: Number,
        required: true,
    },
    longitude: {
        type: Number,
        required: true,
    },
    population: {
        type: Number,
        required: true,
    },
    literacy_rate: {
        type: Number,
        required: true,
    },
    aqi: {
        type: Number,
        required: true,
    },
    average_temperature: {
        type: Number,
        required: true,
    },
    average_rainfall: {
        type: Number,
        required: true,
    },
    gdp: {
        type: Number,
        required: true,
    },
    number_of_schools: {
        type: Number,
        required: true,
    },
    hospital_count: {
        type: Number,
        required: true,
    },
    poverty_rate: {
        type: Number,
        required: true,
    },
    unemployment_rate: {
        type: Number,
        required: true,
    },
    urbanization_rate: {
        type: Number,
        required: true,
    },
    crime_rate: {
        type: Number,
        required: true,
    },
    hospitalLat: {
        type: Number,
    },
    hospitalLon: {
        type: Number,
    }
});

const City = mongoose.model("City", citySchema);



module.exports = City;
