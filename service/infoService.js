const jwtUtil = require("../utility/jwt");
module.exports = {
    /**
     *  Echo request url params
     *
     * @param {String} url params
     * @returns {Object} resData
     */
    getRouteExample: async(text) => {
        try {
            let resData = {};
            resData.result = text;
            return resData;            
        } catch (error) {
            throw error;
        }
    },
    /**
     *
     * 實作簡易JWT login機制
     * @param {Object} reqData
     * @return {Object}  resData
     */
    login: async(reqData) => {
        try {
            let resData = {};
            if (reqData.body.user === "test1" && reqData.body.password === "test123" ) {
                let ployLoad = {
                    user: reqData.body.user
                };
                let token =  await jwtUtil.tokensign(ployLoad);
                resData.token = token;
                resData.ip = reqData.ip;
                return resData;
            } else {
                throw "authorization_expire";
            }
            
           

        } catch (error) {
            throw error;
        }
    }
    
};
