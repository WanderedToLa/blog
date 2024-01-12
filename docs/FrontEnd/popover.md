---
sidebar_position: 2
---

# FrontEnd의 modal관리

1. slice(Redux)하나로 관리
2. React-portal
3. html popover

## Popover

최신 HTML api 스펙에 추가된 Popover 속성으로 모달을 관리할 수 있다.
5월에 실험단계였는데 현재는 출시된 상태.

기본적으로 `display:none`속성  
`<button>` 이나 `<input type='button'>` 을통해 호출하거나 `HTMLElement.showPopover()`를 통해서 호출가능하다.  
호출이 되었을때 다른 모든 요소위에 표시되면서 상위스타일에 영향받지 않는다.

```html
<button popovertarget="my-popover">Open Popover</button>

<div popover id="my-popover">My Popover</div>
```

2023/10/23 기준 React에는 지원이 되어있지 않고 React의 현재 열려있는 이슈에 의하면,
곧 추가될 예정이라고 한다.

- [Add Popover API support](https://github.com/facebook/react/compare/dddfe688206dafa5646550d351eb9a8e9c53654a...3578155879917d837d8a2cd7112ba6e5386dd52b)

- [Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API)
- [Semantics and the popover attribute: what to use when?](https://hidde.blog/popover-semantics/)
