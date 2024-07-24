---
sidebar_position: 1
---

# @tanstack/table

> 테이블 및 데이터그리드를 그리기위한 **Headless UI** 라이브러리

## Headless UI

개발중인 제품에 UI라이브러리를 사용한다면 스타일의 재정의는 거의 필수이고 제품에 맞는  
스타일을 적용하기 위해 어려움을 겪기도 하는데 Headless UI는 상태관리 및 데이터 계산에  
초점을 두어 UI와 상태의 의존성을 분리시켜 UI에 대한 고민사항을 제거하고  
추상화를 통한 상태관리로 유지보수가 용이한 어플리케이션을 만들 수 있다.

Headless UI가 만능은 아니며 Component based 라이브러리와 비교하여 각각의 장단이 존재함.

### Component based library

이미 만들어진 스타일을과 적은 설정으로 사용하기 쉽지만 번들의 크기가 크고 커스텀 마크업 및 스타일을  
적용하기 까다롭다.

### Headless UI library

커스텀 마크업 및 스타일을 적용하기 쉬우며(CSS-in-JS, library...) 작은 번들크기를 가지지만  
기본적인 스타일이 제공되지 않고 사용하기 위해 많은 설정이 필요하다.

- [토스ㅣSLASH 22 - Effective Component 지속 가능한 성장과 컴포넌트](https://www.youtube.com/watch?v=fR8tsJ2r7Eg)
- [Headless UI Library란](https://www.jbee.io/articles/react/Headless%20UI%20Library%EB%9E%80)

## Getting Started

모노레포 관리 도구인 `nx`를 사용하며 `packages`폴더안에 다양한 프레임 워크에 맞는 table이 있음

```
packages
├── angular-table
├── lit-table
├── match-sorter-utils
├── qwik-table
├── react-table
├── react-table-devtools
├── solid-table
├── svelte-table
├── table-core
└── vue-table
```

그 중 table의 핵심 기능을 관리하는 `table-core` 패키지

```
table-core/src
├── aggregationFns.ts
├── columnHelper.ts
├── core
│   ├── cell.ts
│   ├── column.ts
│   ├── headers.ts
│   ├── row.ts
│   └── table.ts
├── features
│   ├── ColumnFaceting.ts
│   ├── ColumnFiltering.ts
│   ├── ColumnGrouping.ts
│   ├── ColumnOrdering.ts
│   ├── ColumnPinning.ts
│   ├── ColumnSizing.ts
│   ├── ColumnVisibility.ts
│   ├── GlobalFaceting.ts
│   ├── GlobalFiltering.ts
│   ├── RowExpanding.ts
│   ├── RowPagination.ts
│   ├── RowPinning.ts
│   ├── RowSelection.ts
│   └── RowSorting.ts
├── filterFns.ts
├── index.ts
├── sortingFns.ts
├── types.ts
├── utils
│   ├── filterRowsUtils.ts
│   ├── getCoreRowModel.ts
│   ├── getExpandedRowModel.ts
│   ├── getFacetedMinMaxValues.ts
│   ├── getFacetedRowModel.ts
│   ├── getFacetedUniqueValues.ts
│   ├── getFilteredRowModel.ts
│   ├── getGroupedRowModel.ts
│   ├── getPaginationRowModel.ts
│   └── getSortedRowModel.ts
└── utils.ts
```
