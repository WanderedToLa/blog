---
sidebar_position: 2
---

# Github Advanced Search 팁

- [Advanced search](https://github.com/search/advanced)
- 원하는 이슈 `label` 찾기 `stars`옵션은 repo에만적용 `good first issue`와 repo의 star갯수는 &&안됨

```js
/*
* stars 범위 설정
* 100..500 // 100 부터 500 사이
* 100 // 100개만 search
* <500 // 500개 미만 전부 search
*/

label:"good first issue" language:TypeScript language:TypeScript stars:100..500
```
