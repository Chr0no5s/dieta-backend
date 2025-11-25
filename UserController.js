const User = require("../models/User");

module.exports = {
  async register(req,res){
    const {email,password} = req.body;
    const user = await User.create({email,password});
    return res.json(user);
  },
  async login(req,res){
    const {email,password} = req.body;
    const user = await User.findOne({email,password});
    if(!user) return res.status(400).json({error:"Usuário não encontrado"});
    return res.json(user);
  }
};
