# Steps to config project

### To init we need NodeJs

## starting backend server

#### To init package.json (-y to confirm all questions)
```
$ npm init -y
```
#### To help on API functions
```
$ npm install express 
```
```
$ npm install @types/express -D
```
#### To help reload node instance when save new code
```
$ npm install ts-node-dev -D
```
#### To config TypeScript
```
$ npx tsc --init
```
#### To run the code (use Script = "tsc")
```
$ npm run build
```

## ORM - Prisma
```
$ npm install prisma -D
```
#### To see options
```
$ npx prisma init -h
```
### To init with
```
$ npx prisma init --datasource-provider SQLite
```

#### To create migration asking name
```
$ npx prisma migrate dev
```

#### Client
```
$ npm install @prisma/client
```

#### Cors
```
$ npm install cors 
```
```
$ nmp install --save-dev @types/cors
```




