---
sidebar_position: 2
---

# @actions/toolkit

> github action을 개발하기위한 패키지 `@actions/toolkit`의 내부구조

```
├── docs
│   ├── adrs
│   ├── assets
│   └── specs
├── packages
│   ├── artifact
│   ├── attest
│   ├── cache
│   ├── core
│   ├── exec
│   ├── github
│   ├── glob
│   ├── http-client
│   ├── io
│   └── tool-cache
├── res
└── scripts
```

- npm
- lerna
- jest
- typescript

모노레포관리 툴인 `lerna`로 패키지를 관리하기 때문에 `npm install`후에  
`npm run bootstrap`으로 패키지들의 종속성 설치

## @actions/core

> 입출력 결과 및 로깅,변수관리

### 1. getInput

```typescript
export function getInput(name: string, options?: InputOptions): string {
  const val: string = process.env[`INPUT_${name.replace(/ /g, '_').toUpperCase()}`] || '';
  if (options && options.required && !val) {
    throw new Error(`Input required and not supplied: ${name}`);
  }

  if (options && options.trimWhitespace === false) {
    return val;
  }

  return val.trim();
}
```

action이 실행될 때 사용자가 정의한 입력값을 `getInput`함수로 호출할 수 있고  
입력값에 대한 유효성검사와 공백제거를 함

예를들어 아래와같은 `ci.yml`파일이 있을때

```
name: CI

on: [push]

jobs:
  ci-action:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v2

      - name: custom action
        uses: ./
        with:
          milliseconds: 1000
```

`ci-action`이 실행되면 `milliseconds`의 값으로 1000이 전달되고,  
`core.getInput('milliseconds')`로 호출하여 변수에 할당하여 사용가능.  
이 외에도 `getBooleanInput`,`getMultilineInput`등이 있음

### 2. setOutput
