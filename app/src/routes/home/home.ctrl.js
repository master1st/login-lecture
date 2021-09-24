function home (req,res){
    res.render("home/index");
}

function login(req, res) { 
    res.render("home/login")       
}

// 그냥 객체로 만들어서 보내준것이다. 
module.exports = {
    home , 
    login ,
};

//라우터가 url 통해서 클라이언트가 무언가 자료를 요청하면 기능을 수행하는것은
//콘트롤러고 즉 여기서 react와 backend가 통신하게된다는 말이다. 