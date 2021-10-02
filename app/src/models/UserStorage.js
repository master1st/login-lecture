"use strict";

const db = require("../config/db");
// 유저데이터를 바로바로 다른 js파일에서 불러올 수 없도록 , 즉 
// 비밀번호를 가져올 수 없도록 # 표시를 멤버변수 앞에 달아주면 
// private 선언을 해주는것 -> 외부에서 불러올 수 없음.
class UserStorage {

    //query메소드를 사용해서 sql문법을 이용할 수 있고, 첫번째는 에러 두번째 파라미터는 콜백함수를 가져올 수가 있다.
    //왜 data 배열처럼해서 0번지로 user에게 날렸냐면 mysql 에서 받아온 데이터값이 배열형태로 감싸져서 와서 0번지에 내가 원하는 데이터값이 있기에 
    //저렇게 0번지 명시해준것.
    static getUserInfo(id) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM users WHERE id = ?;";
            db.query(query, [id], (err, data) => {
                if (err) reject(err);
                resolve(data[0]);

            });
        });
    }

    static async save(userInfo) {
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO users(id, name, psword) VALUES(?,?,?);";
            db.query(query, [userInfo.id, userInfo.name, userInfo.psword], (err) => {
                if (err) reject(`이미 존재하는 아이디 입니다.`);
                resolve({ success: true });

            });
        });
    }
}
module.exports = UserStorage;
// db의 역할 하는 UserStorage