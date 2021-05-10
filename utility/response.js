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
     * @param {*} sucode
     * @param {*} data
     * @returns
     */
    responseSuccess: (sucode, data) => {
        /* Error message template */
        let suMsg = {   
            statusCode: sucode,
            info: data
        };
        return suMsg;
        
    }
};
