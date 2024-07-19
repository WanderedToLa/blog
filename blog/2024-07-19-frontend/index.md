---
slug: frontend-environment
title: 안전한 서비스를위한 환경구성 in frontend
authors: [WanderedToLa]
tags: [frontend, environment]
---

얼마전 토스과제를 진행하며 알게된 점들은 매끄러운 사용자경험을 위해 frontend 로직뿐 아니라  
보이지 않는 환경설정에도 엄청난 노력을 하고있음을 알게되었다. 이전에 개발을 하며  
알고는 있지만 자세하게 몰랐던 부분과 그들의 디테일에 놀라워하며 면접준비를 했는데  
이 글에서는 이 과정에서 알게된 사실들을 정리한다.

:::important 참고
Youtube 및 toss tech blog를 참고하여 작성한 글 입니다.
:::

## dependencies in Package.json

우리가 개발을하며 패키지매니저를 통해 라이브러리를 설치할 때는
`package.json` 내의 `dependencies` 필드를 통해 의존성을 규정하는것으로 설치한다
이때 해당 패키지의 이름과 버전범위를 지정한 객체를 통해 설치하는데
버전의 범위는 하나 혹은 여러개의 공백으로 분리된 문자열이다.  
버전범위를 지정하는 자세한 방법은 [semver](https://docs.npmjs.com/misc/semver)를 참고

만약 개발중에만 필요한 라이브러리일 경우 `devDependencies`필드를 활용하며

```bash
npm install some-package --save-dev
```

위와 같은 명령어로 설치 가능하고 패키지를 설치 후 `devDependencies`에 추가한다.  
여기서 만약 내가 clone된 repository에서 `npm install`했을 경우 npm은 이를 프로젝트를  
개발중이라고 인식하고 `devDependencies`에 추가하니 유의할 것.

~~ peerdependencies

## 참고

- [package.json 번역](https://programmingsummaries.tistory.com/385)
