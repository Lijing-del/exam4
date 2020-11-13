const Mock=require("mockjs")
module.exports=Mock.mock({
    "list|10":[{
        "img":"@image(100x100,@color)",
        "title":"@ctitle(1,4)",
        "info":"@cword(4,6)",
        "id":"@id"
    }]
}).list