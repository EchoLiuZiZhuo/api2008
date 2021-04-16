var mysql      = require('mysql');//引入模块

//设置连接参数
var connection = mysql.createConnection({
  host     : 'localhost',    
  user     : 'root',
  password : 'root',
  database : 'vue2008'
});
 
connection.connect();
 

//执行query
connection.query('select u_id,u_name from user limit 1', function (error, results, fields) {
	// console.log(error);//查询出错位置
	//获取查询结果  results
	// console.log(result);//查询所有
	console.log(results[0].u_name);//查询其中一个字段
});
 
connection.end();

