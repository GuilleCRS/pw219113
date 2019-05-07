const app = new Vue ({
	el:'#app',
	data:{
		titulo:'hola mundo con vue',
		frutas: ['manzana','uva','peras','fresas'],
		frutas2: [
			{nombre: 'manzana', cantidad: 11},
			{nombre: 'uva', cantidad: 0},
			{nombre: 'peras', cantidad: 80},
			{nombre: 'fresas', cantidad:110}



		]

	}
});