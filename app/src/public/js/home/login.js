"use strict";

const id = document.querySelector("#id"),
psword = document.querySelector("#psword"),
loginBtn = document.querySelector("button");

loginBtn.addEventListener('click', login);

function login() {
    const req = {
        id: id.value,
        psword: psword.value,
    };
    fetch("/login", {           //어떠한 경로로 데이터전달 근데 login 경로는 실제로 
                                //백엔드상에 존재하지 않음. 즉 데이터받아줄 api존재없음
        body : JSON.stringify(req)
    })
}
