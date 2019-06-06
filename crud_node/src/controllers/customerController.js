const controller = {

};

controller.list = (req,res) => {
	req.getConnection((err,conn)=> {
		conn.query('SELECT * FROM customers',(err,customers)=>{
			if(err){
				res.json(err);
			}
			//console.log(customers);
			res.render('customer',{
				data: customers
			})

		});

	});


};
controller.save = (req,res)=>{

}
controller.delete = (req, res) =>{
	const { id } = req.params;
	req.getConnection((err,conn)=>{
		conn.query('DELETE FROM customers WHERE id = ?',[id],(err,rows)=>{
			res.redirect('/');
		});
	});
}

module.exports = controller;