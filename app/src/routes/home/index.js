"use strict";
// 라우팅 분리 , 또한 app 변수를 사용할 수 있도록 app.js에서 가져와야함 
//  express 를 받아옴으로써 
const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl")

router.get('/', ctrl.output.home);
router.get('/login', ctrl.output.login);  
router.get('/register', ctrl.output.register);

router.post('/login', ctrl.process.login);
router.post('/register', ctrl.process.register);




module.exports = router;

// 간단하다 그냥 module.exports로 빼주고 
//ctrl 즉 home.ctrl.js 폴더의 hello,login
//을 명시해준것 뿐이다. 
