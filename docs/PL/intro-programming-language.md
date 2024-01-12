---
sidebar_position: 1
---

# 프로그래밍 언어란?

- 인간이 컴퓨터로 수행하고자 하는 바를 컴퓨터에게 전달하기 위한 표현법?

- 1940년 이전의 컴퓨터: `Hard-Weired` 방법 (컴퓨터 내부 스위치 세팅)

- 1940년대: `폰 노이만 컴퓨터(stored programming)`
  - 일련의 명령코드로 작성, main memory에 저장함
  - 어셈블리어 탄생
    - 기계 종속성, 저급수준의 추상화, 읽고쓰기가 어렵다.

## 프로그래밍언어의 정의

- 프로그래밍 언어는 기계가 읽을 수 있고, 사람이 읽을 수 있는  
  형식으로 계산을 서술하기 위한 표기체계

  - 계산(Computation)

    - Turing machine: 수학적 개념으로 형식적인 정의
    - 컴퓨터가 수행가능한 모든 작업.

  - Machine-readable

    - Machine independent
    - 모호하지 않고, 유한한 단계적 처리로 번역 가능한 알고리즘이 존재해야함.

  - Human-readable
    - 컴퓨터 행위를 읽기 쉽도록 `추상화` 시키는 방법을 제공

## 프로그래밍언어에서 추상화

- ## Data abstraction (데이터 추상화)

  1. basic abstraction

     - 메모리에 저장되는 데이터 타입 제약
     - char, int, float, double, Boolean, string, pointer

  2. structured abstraction

     - 메모리 블록에 명칭부여 -> 변수, 배열, 구조체
     - `type arr = array[1...10] of real`

  3. unit abstraction

     - 추상 자료형: module, package, class

- ## Process abstraction (제어 추상화)

  1. 기계어 명령들 여러개를 구조화 시킴

     - 고급 언어 수식
     - 구조화된 문장: if, for, while등
     - 함수, 프로시저

  2. basic abstraction

     - 여러개의 명령어를 모아 추상 구문으로 만듬

     ```
     x = x+3

     READ X
     ADD X, TMP
     STORE TMP, X
     ```

  3. structured abstraction

     - 조건문, 반복문, 프로시저

  4. unit abstraction
     - 프로시저 집합 추상화: module, package, class

## Computing Paradigm

- 프로그래밍 언어는 컴퓨터의 연산을 모방하고 추상화에서부터 시작

  - 명령의 순차적 실행, 기억장소 위치를 표현하는 변수 사용
  - 변수값 변경을 위한 배정문 사용

- 명령형 언어

  - 순차적 실행 -> 폰노이만 병목 현상

- 함수형 언어: Lisp

  - 함수의 평가 및 호출 방법 제공 (applicative language)
  - 변수와 배정문이 없음.
  - 반복문이 없음 -> 재귀함수로 구현

- 논리형 언어: Prolog

  - 선언적 언어 (declarative language)
  - 기호 논리학에 근거함.

- 객체지향 언어
  - 객체: 기억장소와 이 기억장소의 값을 변경할 수 있는 연산의 집합.
