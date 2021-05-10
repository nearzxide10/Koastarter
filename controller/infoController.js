const infoService = require("../service/infoService");
const response = require("../utility/response");
module.exports = {
    /**
     *
     *
     * @param {*} text url params
     * @return {Object}  response msg
     */
    getRouteExample: async(text) => {
        try {
            let data =  await infoService.getRouteExample(text);
            return response.responseSuccess(200, data);
        } catch (error) {
            console.log(error);
            return response.responseError(400);
        }
    },
    /**
     *
     *
     * @param {Object} reqData request body
     * @return {Object}  response msg
     */
    login: async(reqData) => {
        try {
            let data = await infoService.login(reqData);
            return response.responseSuccess(200, data);
        } catch (error) {
            console.log(error);
            if (error == "authorization_expire") {
                return  response.responseError(401, error);
            } else {
                return  response.responseError(400);
            }
            
        }
    }


    
};
