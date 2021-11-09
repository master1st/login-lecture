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

// 물품대여 DB c
// 물품 등록 create 
// 물품 삭제 delete
// 물품 대여(수정)U Update
// 물품 표시 read


