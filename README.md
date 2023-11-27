# typescript-study
typescript study note

## typescript install
```
$ npm install -g typescript 
$ tsc -v
``````

## init
```
$ npm init
$ tsc --init

```

## run
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

<br>

- "target" : "es2016"
> 바뀐 js 파일이 어떤 JS 버전으로 변환될지 설정하는 옵션