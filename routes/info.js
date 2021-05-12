const Router = require("koa-router");
const infoController = require("../controller/infoController");
const response = require("../utility/response");

const router = new Router();
router.get("/sample/:text", async(ctx) => {
    let text = ctx.params.text;
    let data = await infoController.getRouteExample(text);
    response.response(ctx, data);
});

router.post("/login", async(ctx) => {
    let reqData = {
        "body": ctx.request.body,
        //取得request來源IP
        "ip": ctx.request.ip.split(":")[3]
    };
    let data = await infoController.login(reqData);
    response.response(ctx, data);
});

module.exports = router;