---
sidebar_position: 6
---

# @actions/toolkit

github action을 개발하기위한 패키지 `@actions/toolkit`의 내부구조

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

- 입출력 결과 및 로깅,변수관리

1. **input/outputs**
