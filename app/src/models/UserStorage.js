"use strict";

const fs = require('fs').promises; 

const db = require("../config/db");
// 유저데이터를 바로바로 다른 js파일에서 불러올 수 없도록 , 즉 
// 비밀번호를 가져올 수 없도록 # 표시를 멤버변수 앞에 달아주면 
// private 선언을 해주는것 -> 외부에서 불러올 수 없음.
class UserStorage {
    static #getUserInfo(data, id){
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {}); 
       
        return userInfo;
    }
    static #getUsers(data ,isAll,fields){
        const users = JSON.parse(data)
        if(isAll) return users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
    
    static getUsers(isAll, ...fields){
        return fs
    .readFile("./src/databases/users.json")
    .then((data) =>{
    return this.#getUsers(data , isAll,fields);
})
    .catch(console.error);
    }

static getUserInfo(id) {
    return fs
    .readFile("./src/databases/users.json")
    .then((data) =>{
    return this.#getUserInfo(data , id);
})
    .catch(console.error);
}

static async save(userInfo){
    const users = await this.getUsers(true);
    // db에 저장된 아이디가 클라이언트의 아이디랑 중복되는지 
     // db에 저장된 아이디와 중복이 아니라면 데이터를 입력 
    if(users.id.inclueds(userInfo.id)){
       throw "이미 존재하는 아이디 입니다.";
    }
    else{
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
   fs.writeFile("./src/databases/users.json", JSON.Stringify(users));
   return {success : true};
    }
    }
}
module.exports = UserStorage;
// db의 역할 하는 UserStorage