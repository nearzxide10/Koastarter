const jwt = require("jsonwebtoken");
const jwtConfig = require("../config/default.json").jwt;

const expireTime = "1h";
module.exports = {
    /**
     *
     *
     * @param {Object} payLoad jwt payLoad
     * @return {Object}  token jwt token 
     */
    tokensign: async(payLoad) => {
        //需確定token是固定格式或依傳入資訊變動產生
        let token = jwt.sign(payLoad, jwtConfig.secret, {expiresIn: expireTime});
        return token;
    }

};
