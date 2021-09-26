const UserStorage = require("../../models/Userstorage");
const User = require("../../models/Users");
const output = {
    home: function (req, res) {
        res.render("home/index");
    },
    login: function (req, res) {
        res.render("home/login");
    },
    register: function (req, res) {
        res.render("home/register");
    }
};


const process = {
    login: (req, res) => {
        const user = new User(req.body);
        const response = user.login()
        return res.json(response);

        // const id = req.body.id,
        //     psword = req.body.psword;
        //     console.log(UserStorage.getUsers("id", "psword"));

        //     const response = {};
        // // 만약 데이터베이스에 iD PW 값과 같다면 ! 클라이언트에게 로그인 성공을 그려줘야한다.
        // if (users.id.includes(id)) {
        //     const idx = users.id.indexOf(id);
        //     if (users.psword[idx] === psword) {
        //         response.success = true;
        //         return res.json(response);
                
        //     }
        // }

        // response.success = false;
        // response.msg = "로그인에 실패하셨습니다.";
        // return res.json(response);
    },
};

module.exports = {
    output,
    process
};

