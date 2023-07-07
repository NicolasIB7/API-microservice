const server = require("./src/server");
//Tengo dos metodos llamados de la misma forma y solo cambio el nombre del modelo.


server.listen(8004, ()=>{
    console.log( "Database listening on port 8004")
});