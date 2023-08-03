### 프로젝트 세팅 구성
react에서 제공하는 설치 명령어인 CRA(create-react-app)을 사용하여 기본적인 세팅을 하였으며   
기존 홈페이지 프로젝트에서 사용되었던 라이브러리 (AOS, Gsap, ScrollTrigger, Swiper) 와 React 내장 hooks 들을 사용하였습니다.   
라우팅(페이지 분리)은 react-router-dom v6를 사용하였습니다.

------------------------------------------------------------------------   
### 프로젝트 Local 세팅방법
1. nodeJs 설치
2. npm -v node -v 로 설치 잘 되었는지 확인
3. npm install -g yarn 으로 패키징 매니저 설치 (권장)
4. 본인이 사용하는 IDE로 해당 프로젝트가 설치된 폴더를 연다. (vscode 추천)
5. 터미널을 열고 npm install 혹은 yarn 입력후 엔터
6. 중간에 추가로 설치를 묻는 게 나오면 y를 입력후 마저 설치를 진행
7. 설치가 완료되면 npm start 혹은 yarn start를 통해 localhost:포트번호 에서 확인 가능

------------------------------------------------------------------------   
### 프로젝트 구조
프로젝트 구조는 프로젝트의 성격에 따라 달라지며 기존 홈페이지의 구조에서 크게 벗어나지 않은 형태로 작업하였습니다.

|  1depth  |   2depth    |  설명  |
|----------|:-------------:|------:|
| *node_modules* |   | 사용된 모든 라이브러리 파일이 이 폴더에 설치됩니다. |
| *public* |       | 앱이 컴파일 되는데 필요하지 않은 외부 파일들이 저장되는 폴더 (index.html, 파비콘 등..) |
| *src* |  | 기본적인 프로젝트와 관련된 소스들이 모두 저장되는 폴더 |
| src | *assets* | 폰트, 이미지, 스타일 등이 저장되는 폴더 |  
| src | *components* | 컴포넌트들을 모아놓은 폴더. 하위 폴더로 용도나 페이지별로 폴더를 추가로 만들기도 합니다. 추가로 폴더 안에 컴포넌트와 동일한 이름의 css를 만들어 같이 관리하기도 합니다. |  
| src | *layout* | 공통으로 사용되는 레이아웃(헤더, 푸터, GNB 등..)이 있을때 별도 폴더로 레이아웃을 관리하기도 합니다. |  
| src | *pages* | 각 페이지를 기준으로 공통 레이아웃을 제외하고 큰 틀에 해당하는 페이지 컴포넌트를 저장하는 폴더입니다. |  
| src | *styles* | reset.css, common.css 등 전체적인 css를 관리하는 폴더입니다. |  
| src | *utils* | 공통으로 사용 가능한 데이터나 함수들을 모아놓을 때 사용하는 폴더입니다. |  
| src | *pages* | 각 페이지를 기준으로 공통 레이아웃을 제외하고 큰 틀에 해당하는 페이지 컴포넌트를 저장하는 폴더입니다. |
| *App.js* |  | 핵심적인 중요 컴포넌트이며 여기에서 페이지별 라우터 설정, 레이아웃 적용 등 다양한 설정들을 해줄수 있습니다. |  
| *Index.js* |  | 제일 처음 불러오는 JS 파일이라고 보면 됩니다. 우선적으로 적용되어야 하는 파일이 있다면 여기에 import 해서 적용이 가능합니다. |   
| *.gitignore* |  | GIT에 올라가지 않는 파일 리스트(node_modules폴더 등..) |  
| *pakage.json* |  | 프로젝트에 설치된 패키지와 프로젝트 실행 및 배포방법들이 적혀있는 안내문서 |  
| *READ.ME* |  | 현재 이 markdown 파일 | 
| *yarn.lock* |  | yarn 패키징 매니저를 설치했을 경우 추가되는 파일 (각 설치된 패키지에 대한 상세정보가 기록되어있습니다.) | 

------------------------------------------------------------------------   

[리액트 추천강의 보기](https://github.com/dndmobilePub/dndmobile_react/wiki/%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%B6%94%EC%B2%9C-%EA%B0%95%EC%9D%98)
