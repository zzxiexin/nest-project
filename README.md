## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
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
curl "http://localhost:3000/users?id=2" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoieGlueGluIiwiaWF0IjoxNzA1NTg3OTMxLCJleHAiOjE3MDU1ODg1MzF9.4MgcAnPjJ-NypWMQuLEdBeNoceduXeSQDKPfYt5iVm4"
```

### 查询所有账户
```bash
curl "http://localhost:3000/users" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoieGlueGluIiwiaWF0IjoxNzA1NTg2MDUyLCJleHAiOjE3MDU1ODY2NTJ9.GRdsJWzITMqso1HCkn7SeG52MfUVLLiLr8fhwV3UvMg"
```

### 删除某个账户
```bash
curl -X DELETE "http://localhost:3000/users/1" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoieGlueGluIiwiaWF0IjoxNzA1NTg2NDQ1LCJleHAiOjE3MDU1ODcwNDV9.KsbRO4kEZkY0WF_pAvAATmiB_VTT9Y0FIJCc70sudqg"
```

