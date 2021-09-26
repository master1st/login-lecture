"use strict";

const id = document.querySelector("#id"),
name = document.querySelector("#name"),
psword = document.querySelector("#psword"),
confirmPsword = document.querySelector("#confirm-psword"),
registerBtn = document.querySelector("#button");

registerBtn.addEventListener('click', register);

function register() {
    const req = {
        id: id.value,
        name: name.value,
        psword: psword.value,
        confirmPsword: confirmPsword.value,
    };
    console.log(req);
    fetch("/register", {          
        method: "POST",     
        headers: {
            "Content-Type": "application/json",
        },
      body : JSON.stringify(req),
    }).then((res) => res.json())
    .then((res) => {
        if (res.success) {
            location.href ="/login";
        } else {
            alert(res.msg);       
         }
    })
    .catch((err) => {
        console.error(("회원가입 중 에러 발생"));
    });
}
 //어떠한 경로로 데이터전달 근데 register 경로는 실제로 
 //백엔드상에 존재하지 않음. 즉 데이터받아줄 api존재없음
 