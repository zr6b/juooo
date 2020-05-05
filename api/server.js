const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json())
// 登陆
const phoneList = ["123","456","789","123456789"];
app.post("/Login",(req,res)=>{
    const {phoneNumber} = req.body;
    console.log('111')
    if(phoneList.includes(phoneNumber)){
        res.json({
            ok:1,
            msg:"登陆成功"
        })
    }else{
        res.json({
            ok:-1,
            msg:"登陆失败"
        })
    }
})
app.listen(80,function () {
    console.log("success");
})