
https://github.com/GomaGoma676/restapi-todo-nestjs
## Nest.js introduction
- Nest.js
- Prisma
- PostgresQL

## commands

### nest.js
```
yarn global add @nestjs/cli
```

```
npx nest new next-introduction
```

→nest dependency packages
```
yarn add @nestjs/config @nestjs/jwt @nestjs/passport
yarn add cookie-parser csurf passport passport-jwt bcrypt class-validator
yarn add -D @types/express @types/cookie-parser @types/csurf @types/passport-jwt @types/bcrypt
```

#### Module/Service/Controller

```
nest g module auth
nest g module user
nest g module todo
nest g module prisma
nest g controller auth --no-spec
nest g controller user --no-spec
nest g controller todo --no-spec
nest g service auth --no-spec
nest g service user --no-spec
nest g service todo --no-spec
nest g service prisma --no-spec
```

prisma moduleはDIとして使う汎用的なmoduleなのでcontrollerは不要。
（外部のnest libraryなどもこの方式で作成されている）

### prisma

```
yarn add -D prisma
yarn add @prisma/client
```

```
npx prisma init
```

```
npx prisma migrate dev
```
→ schema.prismaからmigrationを実行

```
npx prisma studio
```

```
npx prisma generate
```

### docker

```
docker-compose up -d
```