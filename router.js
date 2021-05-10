const Router = require("koa-router");
const info = require("./routes/info");

const jwtKoa = require("koa-jwt");
const config = require("./config/default.json");
const router = new Router();


//執行這段程式碼時即作jwt驗證(是否存在、有效性、時效性) 
router.use(jwtKoa({secret: config.jwt.secret}).unless({
    //符合路徑的api不做jwt驗證
    path: config.jwt.jwtunless
}));
router.use(`${config.env}/${config.version}/Info`, info.routes());


module.exports = router;
