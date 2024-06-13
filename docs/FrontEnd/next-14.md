---
sidebar_position: 3
---

# Next.js 14

- [Introduction](https://nextjs.org/docs) Next.js 공식문서
- 참고용으로만 정리 순서X

## App Router

새로운 App Router 등장  
The App Router is a newer router that allows you to use React's latest features, such as Server Components and Streaming.  
기존의 pages router문서도 남아있으니 선택하여 볼 수 있음.

`pages router`와는 달리 특수파일인 `page.js`가 index역할을 함

```tsx title="app/page.tsx"
// `app/page.tsx` is the UI for the `/` URL
export default function Page() {
  return <h1>Hello, Home page!</h1>;
}
```

## Route Groups

- [Route Groups](https://nextjs.org/docs/app/building-your-application/routing/route-groups)  
  기본적으로 `app`안에 있는 폴더들은 url경로에 표시되지만 url경로에 포함되지 않으면서 그룹으로 묶을 수 있음  
  괄호로 묶어 생성(folderName) 여러개의 독립적인 레이아웃을 가져야 하거나 특정 페이지만 레이아웃을 가질 때  
  사용할 수 있다.

:::tip

- Route Groups자체는 조직을 위한것 외에는 큰 의미가 있지 않음.
- Route Groups를 사용할때 동일한 경로를 사용하면 안됨. `(shop)/about/page.js` / `(marketing)/about/page.js`
- 최상위 layout파일이 없이 여러개의 RootLayout을 사용하는경우 RouteGroup 안에 정의해야함
- 여러개의 RootLayout을 탐색할 경우 전체 페이지가 로드됨.

:::

## Parallel Routes

- [Parallel Routes](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes#useselectedlayoutsegments)

동일한 레이아웃 내에서 한개 이상의 페이지를 동시 혹은 조건부 렌더링 가능.  
`Parallel Route`는 `Slots`으로 정의 `@foldername`와 같이 생성  
`Slot`은 상위 레이아웃에 Props로 전달하여 사용함 이는 url경로에 영향을 주지않음.

```tsx title="app/layout.tsx"
export default function Layout({
  children,
  team,
  analytics,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
}) {
  return (
    <>
      {children}
      {team}
      {analytics}
    </>
  );
}
```

## Intercepting Routes

- [Intercepting Routes](https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes)

url을 intercept하여 서로다른 url을 동시에 화면에 띄울수있음.  
예를들어 피드에서 사진을 클릭`photo/123` 할때 의 경로를 가로채 url을 가리고 오버레이로 전환 `/feed`

- ### Convention

  `(..)`와 같은 규칙을 따름 폴더 상대경로 규칙`../`과 유사함  
  이를 활용하여 모달을 만들때 유용함

  - url을 통해 공통으로 사용하는 모달 생성
  - 모달을 닫는대신 페이지를 새로고칠 때 컨텍스트 유지
  - 이전 경로로 이동하는 대신 모달을 닫을 수 있음
  - 앞으로 이동시 모달 생성
