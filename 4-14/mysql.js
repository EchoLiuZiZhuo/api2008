const mysql = require('mysql')


var connection = mysql.createConnection({
	  host     : 'localhost',    
	  user     : 'root',
	  password : 'root',
	  database : 'vue2008'
	});
	 
	connection.connect();
	
	
//添加数据
let addsql = "INSERT INTO user(u_name,u_age,u_pwd)VALUE(?,?,?)";
let insert = ["脉脉",'22','123'];
	connection.query(addsql,insert,function(error,result){
		if(error) {
			console.log(error);
			return
	}
	console.log(result);
})


//查询数据
let sql = "SELECT * FROM user";
connection.query(sql,function(error,result){
	if(error) {
			console.log(error);
			return
	}
	console.log(result);
})


//删除数据
let del = "DELETE FROM user WHERE u_id = 1";
connection.query(del,function(error,result){
	if(error) {
		console.log(error);
		return
	}
	console.log(result);
})


//修改数据
let update = "UPDATE user SET u_name='哈哈哈',u_age='55',u_pwd='123' WHERE u_id = 2";
connection.query(update,function(error,result){
	if(error) {
		console.log(error);
		return
	}
	console.log(result);
})