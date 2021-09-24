 //모듈
 const express = require("express");
 const app = express();

//라우팅
 const home = require('./routes/home'); // 주소를 그냥 받아온거다

 // 앱세팅
app.set("views","./views");
app.set("view engine", "ejs");

app.use("/", home); // use -> 미들웨어를 등록해주는 메서드.

module.exports = app;
