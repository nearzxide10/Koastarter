const Router = require("koa-router");
const info = require("./routes/info");
const config = require("./config/default.json");
const router = new Router();

router.use(`${config.env}/${config.version}/Info`, info.routes());

module.exports = router;
