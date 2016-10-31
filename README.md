
Application created by [ThinkJS](http://www.thinkjs.org)

## Install dependencies

```
npm install
```

## Start server

```
npm start
```

## Deploy with pm2

Use pm2 to deploy app on production enviroment.

```
pm2 startOrReload pm2.json
```
pm2 startOrReload pm2.json
```
微云数据库使用
export default {
  type: 'mysql',
  adapter: {
    mysql: {
      host: '57fef99e3fae0.gz.cdb.myqcloud.com',
      port: '13903',
      database: 'xmgh5',
      user: 'cdb_outerroot',
      password: 'ming31451',
      prefix: 'xmg_',
      encoding: 'utf8'
    },
    mongo: {

    }
  }
};
