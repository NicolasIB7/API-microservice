//const planets= require("./planets.json");
const axios=require("axios");

module.exports = {
    planet: async ()=>{
        const planets = await axios.get("http://database:8004/Planet");
        return planets.data
    }

}