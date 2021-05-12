# koastarter 

Koa Starter 

    內容包含串接JWT token與mysql and postgresql套件引用，以及簡易實作login與sample route。
## 專案結構說明

index.js 

    專案起始點，設定Server所需使用的middleware，例如Jwt、bodyParser 等，以及設定Server port and cors等。

router.js

    管理所有route與url之env and version，以及設定個route url路徑等。

ecosystem.config.js

    pm2啟動設定檔，包含啟動後的name，程式起始點，與log格式化條件。


資料夾config

    放置專案所需之所有config檔案。

資料夾 routes

    route實作內容，各API實作method，與api url及根據controller回應結果回應資料。

資料夾 controller

    用於判斷收取資料格式是否正確以及service處理結果，回應各route回傳status code及回傳資料
    ，命名規則為該routeName_Controller。

資料夾service

    各route商務邏輯實作，存取DB及格式化資料操作等，命名規則為該routeName_Service。


資料夾utility

    專案所需Tool實作內容。

資料夾test

    實作專案個route test。

## 執行步驟

### 安裝套件及執行程式 By NodeJs >= v10.0 
一般啟動
```
$ npm install
```
```
$ node index.js
```

### 使用docker
```
$ docker build -t "koastarter:v1.0" .
```

```
$ docker run -dit -p 3001:3001 --name koastarter koastarter:v1.0
```

