//モジュールインポート
const server = require("express");
const line = require("@line/bot-sdk");

//パラメーター設定（環境変数を利用）
const line_config = {
    channelAccessToken: process.env.LINE_ACCESS_TOKEN,
    channelSecret: process.env.LINE_CHANNEL_SECRET
};

//Webサーバー設定
server.listen(process.env.PORT || 3000);

//ルーターの設定
server.post('/bot/webhook', line.middleware(line_config), (req, res, next) => {
    res.sendStatus(200);
    console.log(req.body);
})
