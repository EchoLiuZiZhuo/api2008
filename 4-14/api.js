const express = require('express')   //引入模块
const mysql = require('mysql')
const app = express()				//调用express
const port = 8080					//服务运行端口

app.get('/user',function(req,res){
	//向客户端响应数据
	res.send("欢迎访问用户接口");
})


app.get('/list',(req,res)=>{
	
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
		//获取查询结果  results
		// console.log(result);//查询所有
		res.send(JSON.stringify(results));
	});
	 
	connection.end();
})

app.get('/', (req, res) => {
  const list = [
	  {
		userid:1001,
		name:"张脉",
		age:18
	  },
	  {
		  userid:1002,
		  name:"脉脉",
		  age:18
	  },
	  {
		 userid:1003,
		 name:"脉美女",
		 age:18
	  }
  ]
  
  //将数组转为JSON字符串
  res.send(JSON.stringify(list));
	
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})