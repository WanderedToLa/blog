---
sidebar_position: 5
---

# [WOOWACON 2023] 프론트엔드 상태관리 실전 편 with React Query & Zustand

_예제코드는 제외했습니다_

- [프론트엔드 상태관리 실전 편 with React Query & Zustand](https://www.youtube.com/watch?v=nkXIpGjVxWU&list=PLgXGHBqgT2TundZ81MAVHPzeYOTeII69j&index=21)
- 코어웹프론트개발팀 배민근

## 배경

State(상태)는 컴포넌트의 메모리이다. 현재 프론트엔드 개발의 중심은 컴포넌트에 있고  
많은 발전을 거듭하면서 단순 정적페이지가 아닌 팝업이나 주문/배달의 진행을 보여주는 수많은 인터랙션을 담당하게 되었음.  
이런 상태는 대표적으로 `useState`와 같이 컴포넌트에 귀속되어 있는 개념이지만  
프로덕트 전반에 걸쳐 공통으로 사용될 수 도 있는데 컴포넌트에 귀속되어 있지않는 새로운 상태관리 방법론을 필요로 함

## 상태관리 방법의 변화

1. 컴포넌트 계층분리
2. Props Drilling
3. Redux
4. MobX등 후발주자 등장 (Redux의 코드가 너무 많음)
5. React Hooks/Context API 와 기존 상태관리의 한계 도달
6. Post Redux 상태관리 (Recoil,Zustand..)
7. 원격 상태관리 방법 분리시도(React-query, SWR..)

## ReactQuery/Zustand 도입 배경

Store가 크고 복잡해지면서 상태관리라기 보다 API를 호출하는 코드가 더 많아짐  
상태관리를 위한 도구인데 API fetching용으로 사용하는 것이 적절한가? -> ReactQuery  
Store는 간단해졌지만 컴포넌트의 복잡성 증가, 비즈니스 로직 대부분이 컴포넌트에 있음  
얼마 남아있지도 않은 상태를 굳이 MobX로 사용해야 하는가? -> Zustand

따라서 Client에서 온전히 관리가능한 상태는 Zustand로, Client 외부에서 소유하며  
Server State인 경우는 React Query로 관리한다.(Client에서는 일종의 캐시형태로 존재함)

- [Store에서 비동기 통신 분리하기 (feat. React Query)](https://techblog.woowahan.com/6339/)

## Redux vs ReactQuery

팀 내 도메인들이 서버와 유기적으로 얽혀있으면서 비동기 호출 전략이 요구되므로 ReactQuery가 적합하다.

1. API 호출 코드로 비대해진 Store를 목적에 맞게 분리함
2. 리엑트 훅과 비슷한 직관적인 사용성
3. 여러 인터페이스&옵션을 제공해 적은 코드로 강력하게 동작
4. 자체 개발도구 제공

<h3>1. API호출코드에 Polling을 구현할 때</h3>

| Redux             | ReactQuery           |
| ----------------- | -------------------- |
| 1. Action 선언    | 1. Query 선언 + 옵션 |
| 2. State 추가     |                      |
| 3. Reducer 대응   |                      |
| 4. saga 폴링 구현 |                      |
| 5. 컴포넌트 연결  |                      |

<h3>2. API 호출 상태 확인</h3>

|      Redux       |    ReactQuery     |
| :--------------: | :---------------: |
|  1. State 추가   | 1. Query에서 제공 |
| 2. Reducer 대응  |                   |
| 3. 컴포넌트 연결 |                   |

## Redux vs Zustand

외부 상태관리 도구의 의존도가 낮은 팀 내 코드와  
전역 상태를 최소화하는 팀 방향성에 적합

1. 컴포넌트 밖에서도 상태변경 가능
2. 사용성이 단순함
3. 상태관리에 필요한 코드가 적음
4. Redux Devtools 확장 프로그램 활용가능

<h3>1. Store 구현</h3>

| Redux                  | Zustand               |
| ---------------------- | --------------------- |
| 1. 스토어 및 상태 선언 | 1. 스토어에 모두 구현 |
| 2. Action 선언         | 2. 컴포넌트에서 호출  |
| 3. Reducer 구현        |                       |
| 4. Provider 연결       |                       |
| 5. 컴포넌트 연결       |                       |

## 표준 개발 환경 설정 및 활용

레이어를 5개로 구분하여 관리

1. Page Layer
2. Component Layer
3. Business Layer (Hooks, Services)
4. Store Layer (Queries, Stores)
5. Utility Layer

## queries 와 stores 활용

### 1. Component Layer

컴포넌트 단에서 hooks, store, services를 호출함

```tsx title="PocketListContainer.tsx"
const PocketListContainer = () => {
  //...

  //zustand
  const { handler } = useBaeminpayModuleStore();
  const { selectedPocket, onSelectPocket } = usePayMethodStore();

  //hooks
  const { pocketList } = usePocketListViewModel();

  const handleSelectPocket = async (pocket: PocketItemViewModel) => {
    //services
    sendPocketSelectLog();
  };

  //...
};
```

### 2. Business Layer/hooks

pocketList를 리턴하기 위해 4개의 쿼리 호출, store를 호출하고 covertViewModel을 통해 데이터 가공  
컴포넌트단에서 쿼리 호출을 했다면 가독성이 저하됨

```ts title="usePocketListViewModel.ts"
const usePocketListViewModel = () => {
  // queries
  const { data: baeminpayPocketListData } = useFetchBaeminpayPocketListQuery();
  const { data: baeminpayMemberInfoData } = useFetchBaeminpayMemberInfoQuery();
  const { data: baeminpayMoneyInfoData } = useFetchBaeminpayMoneyInfoQuery();
  const { data: baeminpayMoneyAMLStatusData } = useFetchBaeminpayMoneyAMLStatusQuery();

  // store
  const { config } = useBaeminpayModuleStore();

  const convertPocketList = useMemo(() => {
    //...
    return convertPocketListViewModel({
      // 데이터 가공
    });
  }, []);

  //...
};
```

### 3. Store Layer/queries

API 호출시 global state를 참조하는 경우도 있기마련  
따라서 쿼리내부에서도 store를 호출하는 경우 존재 외부에서 받는경우도 있고 store에서 받을 수도 있음  
본인이 지향하는 바에따라 결정

```ts title="useFetchBaeminpayPocketListQuery.ts"
const baeminpayQueryKey = createQueryKey('baeminpay', {
  pocketList: (params: FetchBaeminpayPocketListRequest) => [params],
});

export const useFetchBaeminpayPocketListQuery = (options?: { enabled: boolean }) => {
  // store
  const { user } = useBaeminpayModuleStore();

  return useQuery({
    context: queryContext,
    //...
  });
};
```

### 4. Store Layer/stores

일반적인 store의 형태

```ts title="useBaeminpayModuleStore.ts"
export const useBaeminpayModuleStore = create<ModuleDataStore>(() => ({
  initialized: false,
  //...
}));

export const initializeBaeminpayModule = (moduleData: ModuleData) => {
  useBaeminpayModuleStore.setState({
    ...moduleData,
    initialized: true,
  });
};
```

## 아키텍쳐 Layer의 본질

간단한 페이지일 경우 위와 같은 과정은 불필요하다 형식에 집중하지 말고 본질을 바라보자  
위와 같은 Layer 구조를 선택한 이유는 컴포넌트에 집중된 로직을 적절히 분배하고 가독성/개발자 경험을 향상시키기 위한 것  
Class의 단일책임원칙까지는 어렵지만 역할을 적절히 분산시켜 유지보수에 용이하다.

## 영상 한줄 평

원래 적절히가 제일 어려움
