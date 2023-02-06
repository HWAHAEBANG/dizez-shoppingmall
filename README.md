# 1. 프로젝트 개요 (Desciption)

## 1.1. UI

가장 대중적인 구성과 기본적인 기능에 충실한 쇼핑몰 웹사이트 모델입니다. 심플하면서도 모던한 디자인과 핵심적인 기능 구현에 방점을 두었으며, 반응형으로 제작되어 모바일웹에서도 사용이 가능합니다.

## 1.2. 성능 및 보안

REACT와 ReactRouter를 활용한 SPA(Single Page Application)로, 페이지 전환이 빠르며 사용성이 뛰어납니다.
사용자 인증을 필요로하여, 권한별로(로그인 여부, 관리자 권한 획득 여부) 접근할 수 있는 페이지의 범위가 다른 것이 특징입니다. 접근권한이 없는 사용자에게는 해당 버튼이 비활성화되며, 주소창으로 우회 접근시에도 경로 보호를 받아 Home page로 리다이렉트 됩니다.
<br/>
<br/>
<br/>

# 2. 프로젝트 구성

## 2.1. 기술 스택

<center><img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"> <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=for-the-badge&logo=TailwindCSS&logoColor=white"> <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white">

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">
<img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white">
 <img src="https://img.shields.io/badge/React Query-FF4154?style=for-the-badge&logo=React Query&logoColor=white">

<img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=Firebase&logoColor=white">
<img src="https://img.shields.io/badge/Cloudlinary-1261FE?style=for-the-badge&logo=iCloud&logoColor=white">

<img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=Netlify&logoColor=white">
</center>
<br/>
<br/>

## 2.2. 페이지 구성도 (Page Tree)

![대체 텍스트(alt)](public\image\main\pageTree.png "이미지 설명(title)")

# 3. 실행환경 (Environment)

# 4. 프로젝트 기능설명

## 4.1. 새 제품 등록

최대 5장의 제품 사진, 카테고리, 제품 정보, 신상품·베스트상품 태그를 입력하여 제품을 등록합니다.

## 4.2. 제품 목록

navbar를 통해 카테고리별로 분류된 제품의 목록을 확인할 수 있으며, HOME page 에서는 신상품·베스트상품별 분류된 제품 목록을 확인할 수 있습니다. 각각의 제품 카드 클릭시 해당 상품의 제품 상세 페이지 이동할 수 있습니다.

검정색 ♥ 버튼을 클릭(토글) 할 시에는 빨간색 ♥ 버튼으로 변하며, 찜목록에 해당 상품이 추가됩니다. 또한 토글 상태를 LocalStorage에 저장하여, 페이지를 재방문할 시에도 ♥ 버튼의 색상이 그대로 유지되도록 합니다.

## 4.3. 찜목록

제품 목록에서 ♥ 버튼을 토글하여

장바구니

랜딩페이지

카테고리별 상품 목록 페이지
세부정보

새 제품 등록(firebase cloudinery)
최근 본 상품
쿠키 팝업
구글 계정을 연동 로그인

5. 저작권 및 사용권 정보

---

6. 버그

---

7. 프로그램 작성자 및 도움을 준 사람

---

8. 버전 (업데이트 소식)

---

FAQ

# 프로젝트 설치하는 방법

# 프로젝트 사용법
