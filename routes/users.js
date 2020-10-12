var express = require('express');
var URL = require('url');  
var User = require('./user'); 
var router = express.Router();

// 导入MySQL模块
var mysql = require('mysql');
var dbConfig = require('../db/DBConfig');
var userSQL = require('../db/Usersql');

// 使用DBConfig.js的配置信息创建一个MySQL连接池
// 用 createConnection 创建 Mysql 连接，每执行一次 connection.query 都是一个全新的连接，会造成一个资源的极大浪费，降低性能。
// 连接池是另外的一种执行方法，它一次性的创建了多个连接，然后根据客户端的查询，自动的 分发、复用、管理 这些连接
var pool = mysql.createPool( dbConfig.mysql );
// var connection = mysql.createConnection(dbConfig.mysql);
// connection.connect();


// 响应一个JSON数据
var responseJSON = function (res, ret) {
     if(typeof ret === 'undefined') { 
          res.json({     code:'-200',     msg: '操作失败'   }); 
    } else { 
      var backObj ={
        code:200,
        data:ret
      }
      res.json(backObj); 
}};



// 添加用户
router.get('/addUser', function(req, res, next){
  // 从连接池获取连接 
  pool.getConnection(function(err, connection) { 

  // 获取前台页面传过来的参数  
  var param = req.query || req.params;   
  // 建立连接 增加一个用户信息 
  connection.query(
    userSQL.insert, 
    [param.uid,param.name], 
    function(err, result) {
        if(result) {      
             result = {   
                      code: 200,   
                     msg:'增加成功'
             };  
        }     
          
      // 以json形式，把操作结果返回给前台页面     
      responseJSON(res, result);   

     // 释放连接  
      connection.release();  
    });
  });

 });


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/getUserInfo', function(req, res, next) {

  // 从连接池获取连接 
  pool.getConnection(function(err, connection) { 

  // 获取前台页面传过来的参数  
  var param = req.query || req.params;   
  // 建立连接 增加一个用户信息 
  connection.query(
    userSQL.queryAll,  
    function(err, result) {
        //if(result) {      
             // result = {   
             //          code: 200,   
             //         msg:'增加成功'
             // };
            //var response = {status:1,data:user};
            //res.send(JSON.stringify(response));   
        //}     
          
      // 以json形式，把操作结果返回给前台页面     
      responseJSON(res, result);   

     // 释放连接  
      connection.release();  
    });
  });



});

module.exports = router;
