const Planet=require("../data/index")

module.exports = async (req,res)=>{
    const planets= await Planet.planet();
res.status(200).json(planets)


}