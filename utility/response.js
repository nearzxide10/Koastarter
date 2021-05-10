module.exports = {
    response: async (ctx, resData) => {
        if (resData && resData.statusCode && resData.statusCode > 204) {           
            ctx.response.status = resData.statusCode;               
            ctx.response.body = resData.info;       
        } else {
            ctx.response.status = resData.statusCode;            
            ctx.response.body = resData.info;
        }
            
    },
    /**
     *
     *
     * @param {Number} errCode
     * @param {Object} data
     * @returns {Object} errMsg 
     *  - {Number} errCode
     *  - {Object} info
     * 
     */
    responseError: (errCode, data) => {
        /* Error message template */
        let errMsg = {};
        if (data == undefined) {
            errMsg.statusCode = errCode;
            errMsg.info = "";
        } else {
            errMsg.statusCode = errCode;
            errMsg.info = data;
        }
        
        return errMsg;
    },
    /**
     *
     *
     * @param {*} suCode
     * @param {*} data
     * @returns {Object} suMsg
     *  - {Number} suCode
     *  - {Object} info
     */
    responseSuccess: (suCode, data) => {
        /* Error message template */
        let suMsg = {   
            statusCode: suCode,
            info: data
        };
        return suMsg;
        
    }
};
