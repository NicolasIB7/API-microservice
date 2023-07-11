//const characters = require("./characters.json");
const axios=require("axios");

module.exports = {  //simula ser un modelo.
    list: async ()=>{
        const characters = await axios.get("http://database:8004/Character");
        return characters.data

    }
}