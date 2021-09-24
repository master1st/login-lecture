const users = {
    id: ["gah1234", "나개발", "김팀장"],
    psword: ["1234", "1234", "1234"],
};

const output = {
    home: function (req, res) {
        res.render("home/index");
    },
    login: function (req, res) {
        res.render("home/login")
    }
}


const process = {
    login: function (req, res) {
        const id = req.body.id,
            psword = req.body.psword;
        // 만약 데이터베이스에 iD PW 값과 같다면 ! 클라이언트에게 로그인 성공을 그려줘야한다.
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.psword[idx] === psword) {
                return res.json({
                    success: "true",
                });
            }
        }
        return res.json({
            success: false,
            msg: "로그인에 실패하셨습니다.",
        });
    },
};

module.exports = {
    output,
    process
};

