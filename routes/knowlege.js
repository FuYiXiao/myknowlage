var express = require('express');
var URL = require('url');
var kenowleageObj = require('./kenowleageObj');
var router = express.Router();

// 导入MySQL模块
var mysql = require('mysql');
var dbConfig = require('../db/DBConfig');
var knowlegeSQL = require('../db/knowlegeSql');

// 使用DBConfig.js的配置信息创建一个MySQL连接池
// 用 createConnection 创建 Mysql 连接，每执行一次 connection.query 都是一个全新的连接，会造成一个资源的极大浪费，降低性能。
// 连接池是另外的一种执行方法，它一次性的创建了多个连接，然后根据客户端的查询，自动的 分发、复用、管理 这些连接
var pool = mysql.createPool(dbConfig.mysql);
// var connection = mysql.createConnection(dbConfig.mysql);
// connection.connect();


// 响应一个JSON数据
var responseJSON = function (res, ret) {
  if (typeof ret === 'undefined') {
    res.json({ code: '-200', msg: '操作失败' });
  } else {
    var backObj = {
      code: 200,
      data: ret
    }
    res.json(backObj);
  }
};


router.get('/getKnowlege', function (req, res, next) {

  // 从连接池获取连接 
  pool.getConnection(function (err, connection) {

    // 获取前台页面传过来的参数  
    var param = req.query || req.params;
    // 建立连接 增加一个用户信息 
    connection.query(
      knowlegeSQL.queryAll,
      function (err, result) {
        // 以json形式，把操作结果返回给前台页面     
        responseJSON(res, result);
        // 释放连接  
        connection.release();
      });
  });
});


// 添加用户
router.get('/addKnowlege', function (req, res, next) {
  // 从连接池获取连接 
  pool.getConnection(function (err, connection) {

    // 获取前台页面传过来的参数  
    var params = req.query || req.params;

    // 建立连接 增加一个用户信息 
    connection.query(
      knowlegeSQL.insert,
      [params.ID, params.ParentsID, params.ChildsID, params.HasOver, params.ViewRecords, params.LastViewTime, params.Importance, params.ChildSortArray, params.LabelsArray, params.IsArticle, params.Title, params.Descrptions, params.LinksArray, params.ImagesArray],
      function (err, result) {

        console.log("err", err, "result", result);

        if (result) {
          result = {
            code: 200,
            msg: '增加成功'
          };
        }

        // 以json形式，把操作结果返回给前台页面     
        responseJSON(res, result);

        // 释放连接  
        connection.release();
      });
  });

});

// 添加用户
router.get('/upDataKnowlege', function (req, res, next) {
  // 从连接池获取连接 
  pool.getConnection(function (err, connection) {

    // 获取前台页面传过来的参数  
    var params = req.query || req.params;
    // ParentsID=${params.ParentsID}, params.ChildsID,params.HasOver,params.ViewRecords,params.LastViewTime,params.Importance,params.ChildSortArray,params.LabelsArray,params.IsArticle,params.Title,params.Descrptions,params.LinksArray,params.ImagesArray,
    // var upDataString = `Title=${params.Title}`
    // 建立连接 增加一个用户信息 
    connection.query(
      knowlegeSQL.upData,
      //[params.ID,params.ParentsID,params.ChildsID,params.HasOver,params.ViewRecords,params.LastViewTime,params.Importance,params.ChildSortArray,params.LabelsArray,params.IsArticle,params.Title,params.Descrptions,params.LinksArray,params.ImagesArray], 
      [params.ParentsID, params.ChildsID, params.HasOver, params.ViewRecords, params.LastViewTime, params.Importance, params.ChildSortArray, params.LabelsArray, params.IsArticle, params.Title, params.Descrptions, params.LinksArray, params.ImagesArray, params.ID],
      function (err, result) {

        console.log("err", err, "result", result);


        if (result) {
          result = {
            code: 200,
            msg: '增加成功'
          };
        }

        // 以json形式，把操作结果返回给前台页面     
        responseJSON(res, result);

        // 释放连接  
        connection.release();
      });
  });

});

module.exports = router;
