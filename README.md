# typescript-study
typescript study note

## typescript install

```
$ npm install -g typescript 
$ tsc -v
```

## init
```
$ npm init
$ tsc --init

```

## ts run
```
// 하나의 파일을 컴파일하고 실행시킬 때
$ tsc basic-ts/annotation.ts && node basic-ts/annotation.js 

// tsconfig.include에 해당하는 파일들을 모두 컴파일하고 싶을 때
$ tsc

// tsconfig.include에 해당하는 파일들을 모두 컴파일후 하나의 파일만 실행
$ tsc && node basic-ts/annotation.js
```

## tsconfig.json

- "module" : "AMD"
    > 컴파일한 JS 파일이 브라우저에서 동작하는 것을 뜻하는 옵션

- "module" : "commonjs"
    > 컴파일한 JS 파일이 node.js에서 동작하는 것을 뜻하는 옵션

- "target" : "es2016"
    > 바뀐 js 파일이 어떤 JS 버전으로 변환될지 설정하는 옵션

## ts-node
```
// ts-node 패키지 설치
$ npm install -g ts-node

// 타입스크립트 파일이 js로 변환되어 바로 실행된다. 이때 js 파일은 따로 실행되지 않는다.
$ ts-node basic.ts/typenode.ts
```

## install ts-node modules
```
// -D : develop flag, 빌드시 배포본에는 포함되지 않는다.
// @types/node => 기존 noe.js에 타입을 다 넣어주는 패키지, node에 사용되는 TypeScript의 타입 정의를 가져오는 것입니다.
// ex. @types/axios  => axios 패키지에 type을 다 달아준다
$ npm install -D @types/node

$ npm install -D @tsconfig/node16
```

<br>
<br>

# Nest.js
## nest install
```
$ npm install -g @nestjs/cli 
$ npx nest new ts-nest
```

## nest run
```
$ cd ts-nest
$ npm run start:dev
```

## install nest node_modules 
```
// dto를 만들기 위한 패키지
$ npm install class-validator class-transformer     
```