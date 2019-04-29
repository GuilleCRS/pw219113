const express=  require('express');
const rutas= express.Router();

rutas.get("/", (req,res)=>{
	res.send("Hola mundo en node ");
});

module.exports = rutas;