const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const logger = require("koa-logger");
const router = require("./router");
const cors = require("koa2-cors");
const serve = require("koa-static");
const path = require("path");
const config = require("./config/default.json");
const jwtKoa = require("koa-jwt");
const app = new Koa();
app.use(bodyParser());
// 後端靜態資料夾路徑，可放網頁或要給user下載檔案
app.use(serve(path.join(__dirname, "public")));
app.use(logger());
app.use(cors({
    origin: () => {
        return "*";
    },
    exposeHeaders: ["WWW-Authenticate", "Server-Authorization", "Authorization"],
    credentials: true,
    allowMethods: ["PUT", "GET", "POST", "DELETE", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization", "Accept"]
}));
//jwt驗證(是否存在、有效性、時效性) 
app.use(jwtKoa({secret: config.jwt.secret}).unless({
    //符合路徑的api不做jwt驗證
    path: config.jwt.jwtunless
}));
app.use(router.routes());

app.listen(config.port);
