# Postman Test Automation
## 使うもの
- Postman
- Newman
- swagger2-to-postman
- このツール

## 使い方
- Rootで `npm install` する
- Rootで[swagger2-to-postman](https://github.com/postmanlabs/swagger2-to-postman)をインストールする
- swagger2-to-postmanで `npm install` する
- swaggerのschema.jsonをダウンロードする
  - WP Swagger UI だったら `hoge/rest-api/schema` にある
- `./cli.js -i schema.json  > postman.json` する
  - 整形したければ、パイプで `jq "."`
- Postmanにインポートする
- Testsを修正する
- エクスポートする
- `npm install -g newman` でNewmanをインストールする
- `newman run postman.json` を実行

## なんでsubmodulesにしないの？
プロジェクトで使って死にそうになったから。。

## 参考資料
https://qiita.com/developer-kikikaikai/items/74cedc67643ca93d2e0b  
https://qiita.com/moaikids/items/1e05ef2595504689fe3e  
https://living-sun.com/ja/arrays/70915-tv4-json-schema-array-of-objects-validation-arrays-json-jsonschema-tv4.html
