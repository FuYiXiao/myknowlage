
const data = [
  {
    "ID": "25635",
    "ParentsID": "0",
    "ChildsID": ["12345", "236544"],
    "HasOver": "true",
    "ViewRecords": ["1596666877207", "1596666877307"],
    "lastViewTime": "1596666877207",
    "Importance": "2",
    "ChildSortArray": ["236544", "12345"],
    "LabelsArray": [],
    "IsArticle": "true",
    "Title": "万物之源",
    "Descrptions": "大家好，我是描述部分",
    "LinksArray": ["https://www.baidu.com/", "https://www.w3school.com.cn/"],
    "ImagesArray": ["236544", "12345"]
  },
  {
    "ID": "12345",
    "ParentsID": "0",
    "ChildsID": ["236544"],
    "HasOver": "true",
    "ViewRecords": ["1596666877207", "1596666877307"],
    "lastViewTime": "1596666877207",
    "Importance": "2",
    "ChildSortArray": ["236544"],
    "LabelsArray": [],
    "IsArticle": "true",
    "Title": "万物之源1",
    "Descrptions": "大家好，我是描述部分",
    "LinksArray": ["https://www.baidu.com/", "https://www.w3school.com.cn/"],
    "ImagesArray": ["236544", "12345"]
  },
  {
    "ID": "236544",
    "ParentsID": "0",
    "ChildsID": [],
    "HasOver": "true",
    "ViewRecords": ["1596666877207", "1596666877307"],
    "lastViewTime": "1596666877207",
    "Importance": "2",
    "ChildSortArray": ["236544", "12345"],
    "LabelsArray": [],
    "IsArticle": "true",
    "Title": "万物之源1",
    "Descrptions": "大家好，我是描述部分",
    "LinksArray": ["https://www.baidu.com/", "https://www.w3school.com.cn/"],
    "ImagesArray": ["236544", "12345"]
  }
]
module.exports = {
  // 同时支持 GET 和 POST
  // '/api/users/1': { data: {} },
  // '/api/foo/bar': { data: {} },


  // 支持参数
  'GET /getKnowlege': (req, res) => {
    const { id } = req.params;
    res.send(data);
  },
};

