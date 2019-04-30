const express=  require('express');
const rutas= express.Router();
const customerController=require('../controllers/customerController');

/*
rutas.get("/", (req,res)=>{
	res.send("Hola mundo en node ");
});
*/
rutas.get('/',customerController.list);
//rutas.post('/add',customerController.save);
//rutas.get('/delete',customerController.delete);
//rutas.get('/update/:id',customerController.edit);
//rutas.post('/update/:id',customerController.update)

module.exports = rutas;