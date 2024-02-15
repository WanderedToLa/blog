---
sidebar_position: 2
---

# Github Advanced Search 팁

- [Advanced search](https://github.com/search/advanced)

오픈소스 컨트리뷰트를 목적으로 `good first issue` 를 찾아 다닐때  
복붙용 조건 설정 옵션이 많긴한데 일단 이정도면 충분

```js
/*
* stars 범위 설정
* 100..500 // 100 부터 500 사이
* 100 // 100개만 search
* <500 // 500개 미만 전부 search
*/

label:"good first issue" language:TypeScript language:TypeScript stars:100..500
```
