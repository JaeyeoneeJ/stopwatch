# stopwatch

## 0. 개요

- 이 프로젝트는 React App에서 Stopwatch를 라이브러리 없이 구현하고 앱에 부하가 걸려 성능이 나빠져 setInterval 등의 시간이 정상적으로 측정되지 않았을 때, 실제 시간을 적용하는 방법을 연구하기 위해 제작되었습니다.
- 해당 프로젝트에 대한 상세 정보는 아래 문서를 확인 바랍니다.
  - [stopwatch 구현](https://github.com/JaeyeoneeJ/TIL/blob/main/react/stopwatch_%EA%B5%AC%ED%98%84.md)
- 프로젝트 결과 예시

  <img src="https://github.com/user-attachments/assets/3b30d5d6-f488-427c-a77c-be741b1196da" alt="stopwatch" />

## 1. 개발 환경

이 프로젝트는 다음과 같은 환경에서 개발되었습니다.

- npm: 6.14.7
- node: v16.17.0
- dependencies

  - "react": "^18.2.0",
  - "react-dom": "^18.2.0",
  - "react-scripts": "5.0.1"

- 이 프로젝트의 구조는 다음과 같습니다.

```
├── package-lock.json
├── package.json
├── public
│   └── index.html
└── src
    ├── App.js
    ├── components
    │   └── Stopwatch
    │       └── Stopwatch.jsx
    ├── features
    │   ├── StopwatchRecorder.jsx
    │   └── StopwatchTest.jsx
    ├── hooks
    │   └── useStopwatch.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── reportWebVitals.js
    ├── setupTests.js
    └── utils
        └── stopwatch
            └── constants.js
```

## 2. 프로젝트 실행

### 1) `npm start` || `npm run start`

- 위 명령어를 통해 개발 모드의 앱을 실행할 수 있으며, [http://localhost:3000](http://localhost:3000)의 기본 포트의 브라우저에서 확인할 수 있습니다.

### 2) `npm run build`

- 위 명령어를 통해 개발 모드의 앱을 빌드할 수 있습니다.
- 만일 당신의 글로벌 환경에 http-server가 설치되어 있는 경우, 빌드 후, `npx http-server ./build`로 빌드된 앱을 확인할 수 있습니다.

## 3. 프로젝트 확인

- 버튼을 눌러 stopwatch의 기능을 실행할 수 있습니다.
