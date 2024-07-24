---
sidebar_position: 4
---

# Javascript의 null check

javascript 에서의 `null`은 falsy한 원시 값이지만 타입은 `object`인 특별한 존재.

```javascript
typeof null === 'object'; // true
```

정확히는 `null`을 반환하는 쪽이 맞겠지만 근 20년간 버텨왔고 이제와 수정하기에는 늦어버렸으니 사용하는데 주의 할것.  
따라서 값을 정확히 확인하기위해 조건이 하나 더 필요함

```javascript
var a = null;
!a && typeof a === 'object'; // true
```

# function type

```javascript
typeof function a(b , c) {
  /*... */
}; === 'function' // true
```

위의 코드는 마치 `function`이 최상위 레벨의 내장타입 처럼 보이지만
정확히는 `object`의 하위타입이고,  
함수는 호출가능한 객체라고 명시되어 있음  
따라서 `object`의 하위 타입이기 때문에 `length`프로퍼티로 인자의 갯수를 알수있다.

```javascript
a.length; //2
```

# 배열

배열또한 마찬가지 인데 배열은 숫자 인덱스를 가지며 length 프로퍼티가  
자동으로 관리되는 특성을 가진 객체의 하위타입이다.

```javascript
typeof [1, 2, 3] === 'object'; //true
```

typescript에서는 이러한 특성을 이용해 제네릭에서 사용하기도 하는데,  
예를 들어 배열의 길이를 추론하는 타입의 경우

```typescript
type Length<T extends any[]> = T extends { length: infer L } ? L : never;
```

위와 같이 배열에 length 프로퍼티가 있다는 점을 활용할 수 있음
