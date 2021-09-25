"use strict";
// 유저데이터를 바로바로 다른 js파일에서 불러올 수 없도록 , 즉 
// 비밀번호를 가져올 수 없도록 # 표시를 멤버변수 앞에 달아주면 
// private 선언을 해주는것 -> 외부에서 불러올 수 없음.
class UserStorage {
      static #users = { 
        id: ["gah1234", "나개발", "김팀장"],
        psword: ["1234", "1234", "1234"],
        name : ["우리밋", "나개발", "치킨"],
    };

    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;
// db의 역할 하는 UserStorage