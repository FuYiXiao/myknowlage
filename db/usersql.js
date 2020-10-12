// 数据库操作语句
var UserSQL = {  
                insert:'INSERT INTO User(uid,userName) VALUES(?,?)', 
                queryAll:'SELECT * FROM User',  
                getUserById:'SELECT * FROM User WHERE uid = ? ',
            };
 module.exports = UserSQL;