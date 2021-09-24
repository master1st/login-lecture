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