const axios = require("axios");
const config = require("../config/default.json");
module.exports = {
    unitGetoken: async() => {
        try {
            let options = {
                method: "POST",            
                url: `http://127.0.0.1:${config.port}${config.env}/${config.version}/info/login`,
                data: {
                    "user": "test1",
                    "password": "test123"
                },
                headers: {
                    "Content-Type": "application/json",
                    "Scope": "*"
        
                }
            };
            let resData = await axios(options);
            
            return resData.data.token;
        } catch (error) {
            console.log(error);
        }
    }
};