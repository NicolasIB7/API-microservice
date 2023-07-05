const characters = require("./characters.json");

module.exports = {  //simula ser un modelo.
    list: async ()=>{
        return characters;
    }
}