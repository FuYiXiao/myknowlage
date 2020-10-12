// 数据库操作语句
var KnwoledgeSQL = {  
                insert:'INSERT INTO knowledge(ID,ParentsID,ChildsID,HasOver,ViewRecords,LastViewTime,Importance,ChildSortArray,LabelsArray,IsArticle,Title,Descrptions,LinksArray,ImagesArray) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,? )', 
                queryAll:'SELECT * FROM knowledge',
                upData:'UPDATE `knowledge` SET `ParentsID` = (?), `ChildsID` = (?), `HasOver` = (?), `ViewRecords` = (?), `LastViewTime` = (?), `Importance` = (?), `ChildSortArray` = (?), `LabelsArray` = (?), `IsArticle` = (?), `Title` = (?), `Descrptions` = (?), `LinksArray` = (?), `ImagesArray` = (?) WHERE (`ID` = (?))'
                // upData:'UPDATE `knowledge` SET (?) WHERE (`ID` = (?))'
            };
 module.exports = KnwoledgeSQL;

