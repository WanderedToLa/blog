---
sidebar_position: 1
---

# [FECONF 2022] 내 import 문이 그렇게 이상했나요?

- [FECONF 2022 [B4] 내 import 문이 그렇게 이상했나요?](https://www.youtube.com/watch?v=mee1QbvaO10)
- 토스 FrontEnd 박서진님
- Github [raon0211](https://github.com/raon0211)

## 배경

```javascript
// 1
SyntaxError: Unexpected token import

// 2
Error [ERR_REQUIRE_ESM]: require() of ES Module
```

대표적으로 위와 같은 에러는 우리의 이상한 import 문 때문에 발생하는 에러  
올바른 진짜 import 문으로 변경하면 해결가능

## Common JS

javascript가 browser에만 사용되던 시절에 module이란 개념은 존재 하지않았고  
`script` 태그를 통해 전역적으로 정의된 변수를 통해 사용했다.

```html
<!-- 전역 jquery 객체 -->
<script src="https://cdn.com/jquery.js"></script>

<!-- 전역 loadash 객체 -->
<script src="https://cdn.com/loadash.js"></script>

<script>
  jQuery(document).ready(function () {
    loadash.get(obj, 'foo');
  });
</script>
```

위의 문제점은 전역변수를 참조하기 때문에 이름이 겹칠수도 있고,  
규모가 커질수록 관리를 하기 힘들어진다.  
이것을 해결하기위해 CommonJS의 `require`등장

```Javascript
const jQuery = require("jQuery");
const loadash = require("loadash");

jQuery(document).ready(function () {
    loadash.get(obj, "foo");
});
```

- "파일단위"의 개발가능
- 수백,수천개의 JS파일로 분리가능
- 쉬운 라이브러리 함수 재사용

이러한 장점 때문에 node.js 에서는 아직까지도 CommonJS 모듈시스템을 사용한다.

## 비밀은 TS/Babel의 트랜스파일링

```Javascript
import React from "react"

// TS/Babel 컴파일러를 통해 아래와 같이 변환
const React = require("react")
```

## 문제점은 없나?

CommonJS는 언어표준이 아니기 때문에 CommonJS를 지원하지 않는 환경 (`Deno`, `browser`)  
에서는 사용할 수 없다 이러한 문제말고도 CommonJS자체의 문제들이 있는데

### 1.정적 분석이 어렵다.

`require`함수는 말그대로 함수이기 때문에 조건적으로 호출을 하거나  
함수에 필요한 대상이 동적으로 변하거나 할 수 있다.  
이러한 문제점은 코드의 분석을 어렵게하고  
browser에서 쓰지않는 코드들을 제거하는 `treeShaking` 같은 작업을 어렵게 한다.

```Javascript
if (SOME_CONDITION) {
    React = require("react")
}

require(SOME_CONDITION ? "foo" : "bar")

const originalRequire = global.require
originalRequire(...)
```

### 2.비동기 모듈 정의 불가능

CommonJS는 기본적으로 동기적으로 동작하기 때문에 비동기 동작을 정의하기 까다롭다.
아래와 같이 DB에 읽고 쓰는 모듈을 만든다고 했을때  
연결을 맺고 다른 함수를 사용할때 매번 `initialize` 검사를 해주어야 함.

```Javascript
let isInitialized = false;

exports.intialized = async function initialize() {
    if (isInitialized) {
        throw new Error("이미 intialize 되었습니다.")
    }

    await connectToDB();
    isInitialized = true;
}

exports.readFromDB = async function readFromDB(...) {
    if (!isInitialized) {
        throw new Error("initialize 를 호출하세요.")
    }
}
```

### 3.require 함수 재정의

말그대로 함수이기 때문에 동작의 재정의 가능

```Javascript
const defaultRequire = global.require;

const myRequire = (request:string) => {
    //...
}

global.require = myRequire;
```

## ECMAScript Modules등장

위와 같은 CommonJS의 문제점들을 ESM은 해결하였고 언어 표준으로써  
Node.js와 Browser, Deno등 다양한 런타임 환경에서도 사용이 가능하다.  
또한 기본적으로 비동기적으로 동작하며 `Top-level Await`과 같은 기능들로 인해  
비동기 처리도 쉽게 할 수 있다.

따라서 이러한 장점들때문에 2022년초부터 Node.js 생태계는 ESM으로 가는 중이지만  
점점 많아지는 ESM패키지들 때문에 다양한 에러메세지들의 원인이 되는것이고,
이러한 오류들을 해결하기 위해서, 우리의 패키지들을 ESM으로 옮기는것이 최선의 방법

## Node.js 에서의 ESM 규칙

ESM으로 점진적인 마이그레이션을 위해 Node.js에서는  
package.json에 `type: module`을 추가하였다.  
기본적으로 `type: commonjs`로 동작함

```json title="package.json"
{
  "type": "module"
}
```

위와 같이 명시할경우 패키지 하위의 모든 js 파일들은 ESM방식으로 동작하게 됨.  
또한 .js 파일은 가장 가까운 Package.json 설정을 따른다.

### .cjs/.mjs

하지만 일부파일만 CommonJS로 사용하거나 ESM을 사용하려는 경우에는 확장자를 통해  
설정 할 수 있다.

- .cjs -> 항상 require()
- .mjs -> 항상 import

## 하지만 어렵다

ESM으로 바로 옮기기 어려운 이유는 크게 두가지

- 가짜 ESM사용
- 성숙하지 않은 생태계문제

```Javascript
// 가짜
import { Component } from "./MyComponent"

//진짜
import { Component } from "./MyComponent.js"
```

위와 같이 확장자를 생략한다면 Node.js의 require함수는 다양한 파일들을 순회하면서  
찾아주는데 당연하게도 이러한 순회동작은 비용이 비싸고  
번들링속도의 저하 그리고 Node.js의 성능이 나빠지는 대표적 원인중 하나이다.

따라서 ESM에서는 확장자를 포함한 정확한 경로를 표시해야 하고  
Node.js의 공식문서에서 "import 하는 파일은 확장자가 반드시 명시되어야 하며 브라우저에서 import하는 방식과 동일하다"  
라고 언급했다.

따라서 ESM으로 정확하게 옮기기 위해선 파일의 확장자를 명시하는것이 중요하다.

## ESM으로 옮겨도 되는 상황

- Typescript를 사용하지 않을 때
- 사용하는 라이브러리가 ESM환경을 지원할 때
- Jest, Yarn PnP, ts-node 등 사용하지 않을 때

## 내 서비스를 ESM으로 옮기기

### 1.패키지를 ESM으로

```json title="package.json"
{
  "type": "module"
}
```

### 2.파일 확장자 추가

```Javascript
// bad
import { add } from "./add"

// good
import { add } from "./add.js"
```

### 3. require() 호출 삭제

```Javascript
const path = require("path")

module.exports = {...}

import path from "path"

export default {...}
```

또한 Node.js의 API들을 새롭게 정의하는 방식으로 사용하고 (`__dirname`)  
require함수가 필요하다면 최후의 방법으로 `createRequire`함수를 사용할것을 권장한다.
