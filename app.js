// //路由错误处理
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// 路由信息 （接口地址）开始 存放在./routes目录下
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const knowlegeRouter = require('./routes/knowlege');

const app = express();

// 应用程序视图的目录或目录数组。如果一个数组，视图会按照数组中出现的顺序查找
// app.set(name, value) 将设置项 name 的值设为 value
app.set('views', path.join(__dirname, 'views'));
// 当省略时使用的默认引擎扩展名   eg： app.set('view engine', 'ejs') //设置模板引擎为 ejs
app.set('view engine', 'jade');

// app.use([path], function) 使用中间件 function,可选参数path默认为"/"。这么设计的为了让间件可以在不需要更改代码就在任意"前缀"路径下执行
// app.use是用来给path注册中间函数的，这个path默认是’/’，也就是处理用户的任何url请求，同时会处理path下的子路径： 比如设置path为’/hello’，那么当请求路径为’/hello/’、’/hello/nihao’、’/hello/nihao/1’等等这样的请求也都会交给中间函数处理的
app.use(logger('dev'));
// Express中内置的中间件功能。它使用JSON有效负载分析传入请求，并基于body-parser
app.use(express.json());
// express.urlencoded用URL编码的有效负载解析传入的请求 //post参数设置
app.use(express.urlencoded({ extended: false }));
// 用来实现cookie的解析
app.use(cookieParser());
// //将静态文件目录设置为：项目根目录+/public 传递一个包含静态资源的目录给 express.static 中间件用于立刻开始提供文件
app.use(express.static(path.join(__dirname, 'build')));

// 注册接口
app.use('/', indexRouter); // 在app中注册routes该接口
app.use('/users', usersRouter); // 在app中注册users接口
app.use('/knowlege', knowlegeRouter); // 在app中注册users接口

// catch 404 and forward to error handler
// // 当于所有路径都不匹配时,报404,自定义
// Express 对于没有设定的请求路径，默认会返回 Cat not get xxx
// 如果你想要定制这个 404
// 需要通过中间件来配置
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
