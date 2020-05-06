const formidable = require("formidable");
const path = require("path");
const fs = require("fs");
/*
* 上传图片
*   结果：{
* ok:1,成功，2，未上传图片，3 ，图片格式不正确
* req:请求对象
* picName:图片的名字（表单当中的name值）
* cb:返回的结果
* }
* */
const uploadDir = path.resolve(__dirname,"../upload");
module.exports = function (req,picName,cb) {
    const form = new formidable.IncomingForm();
    form.encoding = "utf-8";
    form.uploadDir = uploadDir;
    form.keepExtensions = true;// 保留扩展名
    form.parse(req,(err,params,file)=>{
        const picInfo = file[picName];
        // 未上传了
        if(!picInfo){
            cb({
                ok:2,
                msg:"未上传图片",
                params
            })
        }
        else if(picInfo.size <= 0){
            // 删除空文件
            fs.unlink(picInfo.path,err=>{
                cb({
                    ok:2,
                    msg:"未上传图片",
                    params
                })
            })
        }else{
            // 允许上传的扩展名
            const extArr = [".gif",".png",".jpg"];
            const extname = path.extname(picInfo.path).toLowerCase();// 得到扩展名
            if(extArr.includes(extname)){
                const newPicName = Date.now()+extname;
                fs.rename(picInfo.path,uploadDir+"/"+newPicName,err=>{
                    params.newPicName = newPicName;
                    cb({
                        ok:1,
                        msg:"上传图片成功",
                        params
                    })
                })
            }else{
                fs.unlink(picInfo.path,err=>{
                    cb({
                        ok:3,
                        msg:"请选择正确的图片格式.gif,.png,.jpg"
                    })
                })
            }
        }
    })
}