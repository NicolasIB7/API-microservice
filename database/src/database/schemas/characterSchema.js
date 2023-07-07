const {Schema} = require("mongoose");

const characterSchema= new Schema({
    _id: String,
    name:String ,
    height: String,
    mass: String,
    hair_color: String,
    skin_color: String,
    eye_color: String,
    birth_year: String,
    gender: String,
    homeworld: {type:String, ref:"Planet"}, // REFERENCIA A EL ID DEL PLANETA
    films: [{type:String, ref:"Film"}], // ASÍ YA QUE HACE REFERENCIA A PELICULAS
})

characterSchema.statics.list= async function() { // No usamos funcion flecha porque queremos usar THIS para referirse al schema
return await this.find().populate("homeworld",["_id", "name"]).populate("films", ["_id", "title"])
} // CREAMOS UN METODO DEL MODELO PARA QUE CUANDO YO QUIERA TRAER LOS PERSONAJES YA ME LOS TRAIGA CON EL POPULATE APLICADO.

characterSchema.statics.get = async function(id){
    return await this.findById(id).populate("homeworld",["_id", "name"]).populate("films", ["_id", "title"])
};

characterSchema.statics.insert = async function(character){
    return await this.create(character)
}


module.exports = characterSchema;