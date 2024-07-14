---
sidebar_position: 5
---

# tree 명령어 사용팁

폴더의 하위 구조를 계층적으로 표시할 때 사용

1. 표시할 depth제한

- -L(Level) 옵션뒤에 depth 2까지 표시

```
tree -L 2
```

2. directory만 표시

```
tree -d
```

3. 특정폴더 제외

```
tree -I "node_modules"
```
