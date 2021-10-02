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

// ctrl의 process의 login함수는 로그인을 처리해주는 로직, post방식으로 데이터보내 그것을 body로
// 받으면 그것을 토대로 데베와 값 대조를 통해서 얻어오는 값을 json파일형태로 객체로 받아와서
// 그것을 res 다시 view 에게 보내줘서 화면에 렌더링해주도록 하는 역할 
 const process = {
    login: async (req, res) => {
        const user = new User(req.body); 
        const response = await user.login()
        return res.json(response);
    },
     register: async (req, res) => {
        const user = await new User(req.body);
        const response = user.register()
        return res.json(response);
    },
};

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
//     },
// };



module.exports = {
    output,
    process
};

