## 安装

```bash
$ pnpm install
```

## 运行

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

### docker 运行数据库
```bash
docker run -p 3306:3306 --name mysql -e MYSQL_ROOT_PASSWORD=test -d mysql:latest

create database xxx;

mysql -u root -p   

show databases;   

use databases;   

show tables;  

insert into tableName(name, password, createdAt, updatedAt) values ('test', 'test', '2023-02-20', '2023-02-20');

select * from tableName;   
```

### 用户登陆
```bash
curl -X POST http://localhost:3000/auth/login -d '{"name": "xinxin", "password": "xinxin"}' -H "Content-Type: application/json"
```

### 保存用户
```bash
curl http://localhost:3000/users -X POST -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoieGlueGluIiwiaWF0IjoxNzA1NTg3NzU3LCJleHAiOjE3MDU1ODgzNTd9.izpCye9z0Pbt9hPJcM5cbqykSz_6785bBfUd_1akPOo" -d '{"name": "xinxin2", "password": "xinxin2"}' -H "Content-Type: application/json"
```

### 查询单个用户
```bash
curl "http://localhost:3000/users?id=2" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoieGlueGluIiwiaWF0IjoxNzA1NTg5MDYyLCJleHAiOjE3MDU1ODk2NjJ9.E2LsOJ65Lt4BssFJUm9M8PYCaDMC5wgOfedvkoUDDjM"
```

### 查询所有账户
```bash
curl "http://localhost:3000/users" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoieGlueGluIiwiaWF0IjoxNzA4NTI1MzI4LCJleHAiOjE3MDg1MjU5Mjh9.zq7fo4WFNDcSlq8XsaANo6fiG70P4GEZ0XuPMuXxB30"
```

### 删除某个账户
```bash
curl -X DELETE "http://localhost:3000/users/1" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoieGlueGluIiwiaWF0IjoxNzA1NTg2NDQ1LCJleHAiOjE3MDU1ODcwNDV9.KsbRO4kEZkY0WF_pAvAATmiB_VTT9Y0FIJCc70sudqg"
```


