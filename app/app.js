 //모듈
 const express = require("express");
 const app = express();

//라우팅
 const home = require('./src/routes/home'); // 주소를 그냥 받아온거다

 // 앱세팅
app.set("views","./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`)); //login.js와 login.ejs 미들웨어

app.use("/", home); // use -> 미들웨어를 등록해주는 메서드.

module.exports = app;
