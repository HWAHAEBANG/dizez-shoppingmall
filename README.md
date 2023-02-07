# 1. 프로젝트 개요 (Desciption)

## 1.1. UI

가장 대중적인 구성과 기본적인 기능에 충실한 쇼핑몰 웹사이트 모델입니다. 심플하면서도 모던한 디자인과 핵심적인 기능 구현에 방점을 두었으며, 반응형으로 제작되어 테블릿과 모바일웹에서도 사용이 가능합니다.

## 1.2. 성능 및 보안

REACT와 ReactRouter를 활용한 SPA(Single Page Application)로, 페이지 전환이 빠르며 사용성이 뛰어납니다.

사용자 인증을 필요로하여, 권한별로(로그인 여부, 관리자 권한 획득 여부) 접근할 수 있는 페이지의 범위가 다른 것이 특징입니다. 접근권한이 없는 사용자에게는 해당 버튼이 비활성화되며, 주소창으로 우회 접근시에도 경로 보호를 받아 Home으로 리다이렉트 됩니다.
<br/>
<br/>
<br/>

# 2. 프로젝트 구성

## 2.1. 기술 스택

<br/>
<center><img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white"> <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=for-the-badge&logo=TailwindCSS&logoColor=white"> <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white">

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">
<img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white">
 <img src="https://img.shields.io/badge/React Query-FF4154?style=for-the-badge&logo=React Query&logoColor=white">

<img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=Firebase&logoColor=white">
<img src="https://img.shields.io/badge/Cloudlinary-1261FE?style=for-the-badge&logo=iCloud&logoColor=white">

<img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=Netlify&logoColor=white">
</center>
<br/>
<br/>

## 2.2. 페이지 구성 (Page Tree)

![대체 텍스트(alt)](public\image\main\pageTree.png "이미지 설명(title)")
<br/>
<br/>

# 3. 실행환경 (Environment)

## 배포 : https://admirable-fairy-a53587.netlify.app

<br/>

## 개발 환경 : yarn bulid.

```
$ yarn
$ yarn start
```

<br/>
<br/>

# 4. 프로젝트 기능설명

## 4.1. 새 상품 등록

최대 5장의 상품 이미지, 카테고리, 상품 정보, 신상품·베스트상품 태그를 입력하여 상품을 등록합니다. 상품 목록의 상품 카드에 게시되는 대표 이미지는 첫번째 이미지입니다.

이미지 업로드 시 가장 크게 보이는 미리보기 Main Image는 선택한 이미지의 첫번째 이미지를 띄우는 것을 기본값으로 하며, 하단의 다른 이미지들을 클릭할 경우 해당 이미지로 교체됩니다.

Tag 항목을 제외한 나머지 사항들은 모두 필수 입력사항으로, 미입력시 alert로 입력값 재확인을 요구합니다.

```js
/* firebase.js */

// 데이터베이스에 카테고리별로 상품 정보 저장
export async function addNewProduct(product, imageUrl, timeStamp) {
  const id = uuid(); // uuid 라이브러리로 고유한 id값 할당
  set(ref(database, `products/${product.category}/${id}`), {
    ...product,
    id: id,
    price: parseInt(product.price), // 숫자만
    image: imageUrl, // cloudinary로 받아온 URL 할당
    size: product.size.split(","), // 콤마(,)를 기준으로 분할 저장
    timeStamp: timeStamp, // Date객체를 통한 시간값 저장
  });
}
```

> 해당 기능은 관리자한을 가진 사용자에게만 나타납니다.

<br/>
<br/>

## 4.2. 상품 목록 , 상품 카드, 정렬순서

상품 목록은 상품 카드의 나열로 이루어집니다.
Navbar에서는 카테고리별, Home에서는 신상품·베스트상품별로 분류된 상품 목록을 확인할 수 있습니다.

상품 목록의 상단에 위치한 SortBar는 좌측에는 카테고리별로 등록된 전체 상품수량을, 우측에는 상품 카드의 정렬 순서를 "최신순","낮은 가격순", "높은 가격순"으로 바꾸어주는 선택 태그를 가지고 있습니다.

각각의 상품 카드는 좌측상단에 신상품, 베스트상품 여부를 나타내어주는 태그를 보여주며, 우측상단의 검정색 ♥ 버튼을 클릭(토글) 할 시에는 빨간색 ♥ 버튼으로 변하며, 찜목록에 해당 상품이 추가됩니다. 또한 토글 상태를 LocalStorage에 저장하여, 페이지를 재방문할 시에도 ♥ 버튼의 색상이 그대로 유지되도록 합니다. 다시 클릭할 시 찜목록과 LocalStorage에서 삭제됩니다.

```js
/* firebase.js */

// 데이터베이스에 카테고리별 저장된 상품 정보 가져오기
export async function getProducts(category) {
  return get(ref(database, `products/${category}`)).then((snapshot) => {
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }
    return [];
  });
}

// 카테고리와 관계없이 모든 상품 가져오기 (getOnlyNew와 코드 동일)
export async function getOnlyBest() {
  return get(ref(database, `products`)) //
    .then((snapshot) => {
      const items = snapshot.val() || {};
      return Object.values(items);
    });
}
```

```js
/* OnlyBestList.jsx*/

// best 태그가 체크되어있는 상품만 골라 배열 생성 (getOnlyNew와 코드 동일)
let bestThings = [];

products &&
  products.map((item) => {
    bestThings.push(
      //다중 중첩된 객체에서 조건에 맞는 상품만 골라내기
      Object.values(item).filter(
        (thing) => thing.tags && thing.tags.best && thing.tags.best === true
      )
    );
    return bestThings; // 오류 안 생기는지 잘 확인
  });
```

<br/>
<br/>

## 4.3. 찜목록

상품 목록에서 ♥ 버튼을 토글한 상품들이 상품 카드 형식으로 보여집니다. 각각의 카드를 클릭하면 상품 상세 페이지도 이동할 수 있으며, "X" 아이콘을 클릭하여 찜목록과 LocalStorage에서 삭제할 수 있습니다.

```js
/* firebase.js */

// `dibbs/${userId}/${product.id}`경로에 찜한 상품 추가
export async function addOrUpdateToDibbs(userId, product) {
  return set(ref(database, `dibbs/${userId}/${product.id}`), product);
}

// `dibbs/${userId}/${product.id}`경로에서 productId와 일치하는 상품 삭제
export async function removeFromDibbs(userId, productId) {
  return remove(ref(database, `dibbs/${userId}/${productId}`));
}

// 찜한 상품 목록 받아오기
export async function getDibbs(userId) {
  return get(ref(database, `dibbs/${userId}`)) //
    .then((snapshot) => {
      const items = snapshot.val() || {};
      return Object.values(items);
    });
}
```

> 해당 기능은 로그인을 한 사용자만 사용가능합니다. 로그인 되지 않은 상태에서 아이콘을 클릭하거나, URL직접 입력을 통해 접근을 시도할 경우 HOME으로 리다이렉트 됩니다.

<br/>
<br/>

## 4.4. 상품 상세 정보

상품의 이미지들과 상세정보를 할 수 있습니다. 이미지는 "4.1. 새 상품 등록" 같이 첫번째 이미지를 MainImage로 하며, 하단의 다른 이미지들을 클릭할 경우 해당 이미지로 교체됩니다.

사이즈, 색상, 수량 항목을 선택하고 "add to basket" 버튼을 클릭하면 선택한 상품정보가 장바구니에 저장됩니다. SIZE와 COLOR는 필수 선택 항목으로 선택하지 않을 시 alert로 입력값 재확인을 요구합니다. QUANTITY는 설정하지 않을 시 기본값인 1개로 전달됩니다.

> 해당 기능은 로그인하지 않은 사용자도 사용할 수 있지만, "add to basket"버튼은 비활성화되어, alert로 입력값 로그인을 요구합니다.

<br/>
<br/>

## 4.5. 장바구니

상품 상세 정보 페이지에서 추가된 상품들이 저장되어있습니다. 선택된 SIZE, COLOR, QUANTITY를 표기?해주어 재차 확인할 수있으며, 수량에 따라 단가에 수량을 곱한 SUBTOTAL 값을 표기?합니다. 또한 모든 SUBTOTAL의 합계를 우측 Order Summary 란에서 TOTAL(최종결제금액)로 확인할 수 있습니다.

"X"버튼을 클릭하여 해당 상품별로 주 삭제할 수 있습니다.

상품 목록에서 ♥ 버튼을 토글한 상품들이 상품 카드 형식으로 보여집니다. 각각의 카드를 클릭하면 상품 상세 페이지도 이동할 수 있으며, "X" 아이콘을 클릭하여 찜목록과 LocalStorage에서 삭제할 수 있습니다.

```js
/* firebase.js */

// `cart/${userId}/${product.id}`경로에 찜한 상품 추가
export async function addOrUpdateToCart(userId, product) {
  return set(ref(database, `cart/${userId}/${product.id}`), product);
}

// `cart/${userId}/${product.id}`경로에서 productId와 일치하는 상품 삭제
export async function removeFromCart(userId, productId) {
  return remove(ref(database, `cart/${userId}/${productId}`));
}

// 카트 상품 목록 받아오기
export async function getCart(userId) {
  return get(ref(database, `cart/${userId}`)) //
    .then((snapshot) => {
      const items = snapshot.val() || {};
      return Object.values(items);
    });
}
```

> 해당 기능은 로그인을 한 사용자만 사용가능합니다. 로그인 되지 않은 상태에서 아이콘을 클릭하거나, URL직접 입력을 통해 접근을 시도할 경우 HOME으로 리다이렉트 됩니다.

<br/>
<br/>

## 4.6. 쿠키 팝업

Home 방문시 나타나는 광고용 팝업으로, 카운트다운 기능을 통해 이벤트의 남은 행사 시간을 알립니다. "X"버튼을 눌러 종료하게되면 Home재방문시 다시 팝업이 나타나지만, 오늘하루 보지않기 체크박스를 체크한 뒤 "X"을 클릭하면 24시간의 유효기간을 가진 쿠키가 브라우저에 생성되어 하루동안 팝업이 나타나지 않습니다.

```js
/* Popup.jsx */

// "X" 버튼 토글 상태저장
const handleClose = () => {
  setOpen((prev) => !prev);
};

// 오늘만보기 체크박스 체크여부 상태저장
const handleChange = (e) => {
  const changed = e.target.checked;
  changed ? setChecked(true) : setChecked(false);
};

// 쿠키 유효기한 입력하기위한 함수
const getExpiredDate = (days: number) => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date;
};

//cokkies에 쿠키 존재유무를 상태에 저장
useEffect(() => {
  if (cookies["DIZEZ_Cookie"]) {
    setHasCookie(true);
  } else {
    setHasCookie(false);
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

// 체크박스 체크되거나, 닫기버튼 누를때마다 실행
useEffect(() => {
  // 체크가 되지 않은 상태에서 팝업을 닫으면 그냥 리턴
  if (!checked && !open) {
    return;
  }
  // 체크된 상태에서 팝업을 닫으면 쿠키자 저장되여 24시간동안 팝업 X
  if (checked && !open) {
    const expires = getExpiredDate(1);
    setCookies("DIZEZ_Cookie", true, { path: "/", expires: expires });
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [checked, open]);
```

<br/>
<br/>

## 4.7. 최근 본 상품

상품 상세 정보를 방문 시 LocalStrage에 해당 상품의 Product.Image의 값을 문자열 형대로 최대 5개까지 저장합니다. Popup 컴포넌트는 이를 다시 불러와 이미지를 나열합니다.

최근 본 상품은 반드시 영구적으로 저장되어야하는 정보가 아니므로, 서버가 아닌 strorage를 사용함으로써, 서버와 통신하는 불필요한 로딩 횟수를 줄여 성능을 보장합니다.

```js
/* productDetail.jsx */

// 만약 로컬스토리지에 viewedKey 가 있다면
if (JSON.parse(localStorage.getItem("viewedKey")) !== null) {
  //값을 가져와서 String -> JSON 으로 변환 후 arr 에 할당
  let arr = JSON.parse(localStorage.getItem("viewedKey"));
  // arr들 filter로 돌며, 현재 페이지와 id가 다른 item아이템만
  // already 라는 변수에 저장 (같은 상품이 중복 저장되지 않도록 하기 위함)
  let already = arr.filter((item) => {
    return item.id !== product.id;
  });
  // already에 현재 상품을 배열의 맨앞에 추가.
  already.unshift(product);
  // 만약 개수가 6개가 넘어 가면 가장 뒤에 요소 하나 제거한 후
  // 다시 로컬스토리지에 저장
  if (already.length >= 6) {
    already.pop();
    localStorage.setItem("viewedKey", JSON.stringify(already));
  } else {
    localStorage.setItem("viewedKey", JSON.stringify(already));
  }
} else {
  localStorage.setItem("viewedKey", JSON.stringify([product]));
}
```

```js
/* recentlyViewed.jsx */

useEffect(() => {
  if (JSON.parse(localStorage.getItem("viewedKey")) !== null) {
    setViewed(JSON.parse(localStorage.getItem("viewedKey")));
  } else {
    return;
  }
}, [clicked, updater]);

/**
useEffect의 두번째 인자 "updater"의 역할이 중요하다.
로컬스토리지에 데이터를 저장하는 productDetail.jsx와 그것을 내려받아 사용하는 Recently viewed.jsx는 완전히 동떨어져있는 컴포넌트이다.
그러므로 productDetail.jsx 로컬스토리에 데이터를 저장을 하고 상태를 업데이트하여도 Recently viewed.jsx 반응이 없다. 다른 페이지로 이동을 해야 비로소 해당 상품이 표시가 된다.
즉, UI업데이트가 한 박자 느리다는 얘기다. 이 두개의 컴포넌트를 하나의 useState로 이어주기 위해 context의 도움을 받았다.
즉, 로컬스토리지가 업로드 되면서 setUpdater가 실행되고, 이를 useEffect의 두번째 인자로 참조하고 있는 updater가 반응하면서, 디테일 페이지에 들어감과 동시에 최근 본 상품 목록이 반응하게된다.
*/
```

<br/>
<br/>

## 4.8. 로그인

로그인은 FireBdase의 Authentication을 통해 구글 계정 로그인을 지원합니다.

```js
/* 로그인 및 admin권한 확인 로직 */

// Google 로그인 팝업 창을 띄워 로그인을 진행한다.
export function login() {
  signInWithPopup(auth, provider).catch(console.error);
}

// 로그아웃
export function logout() {
  signOut(auth).catch(console.error);
}

// user 상태 변경시 실행
export function onUserStateChange(callback) {
  onAuthStateChanged(auth, async (user) => {
    // 로그인을 했다면 adminUser함수를 실행하여 반환값을 updateUser에 할당하고,
    //로그인하지 않았다면 null값을 할당한다.
    const updatedUser = user ? await adminUser(user) : null;
    callback(updatedUser);
  });
}

async function adminUser(user) {
  // database의 admins경로에 있는 데이터를 받아온다.
  return get(ref(database, `admins/${user.uid}/`)).then((snapshot) => {
    if (snapshot.exists()) {
      //해당 데이터 안에 현재 로그인한 user의 uid가 있다면 true를 반환한다.
      const admins = snapshot.val();
      const isAdmin = admins.includes(user.uid);
      return { ...user, isAdmin };
    }
    return user;
  });
}
```

데이터베이스는 FireBase의 Realtime Database를 사용합니다.
관련 코드는

<br/>
<br/>

## 4.9. 이미지 최적화 Cloudinary API

```js
/* uploadImage.jsx */

export async function uploadImage(files) {
  let temp = [];
  const url = process.env.REACT_APP_CLOUDINARY_URL;

  const formData = new FormData();

  // 이미지를 업로드하여 최적화한 후 URL을 생성하여 반환.
  for (let i = 0; i < files.length; i++) {
    let file = files[i];
    formData.append("file", file);
    formData.append("upload_preset", process.env.REACT_APP_CLOUDINARY_PRESET);

    await fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        temp.push(data.url);
      });
  }
  return temp;
}
```

<br/>
<br/>

# 5. 버그

- 모바일웹으로 접근시 Google로그인 기능 사용 제한 ( FireBase 추가 설정 요망 )
  <br/>
  <br/>

# 6. 향후 발전사항

- 대표 이미지를 업로드 순이 아닌, 추가로 선택할 수 있도록 설정할 것.
- 이미지 순서를 드래그앤 드롭으로 변경할 수 있도록 지원.
- 기존 상품의 상세 정보를 수정할 수 있는 관리자 페이지 추가.
- 상세 정보 페이지에서도 찜목록 추가 제거버튼(♥)을 구성
  <br/>
  <br/>

# 7. 프로그램 작성자 및 도움을 준 사람

- 방충림 (개인프로젝트)
  <br/>
  <br/>

# 8. 버전 (업데이트 소식)

- v1.1.1 - beta1 ( 2023.02.07 )
  <br/>
  <br/>

# 9. 저작권 및 사용권 정보

- 일부 상품의 이미지 저작권은 DIOR 공식스토어에 있습니다.
  <br/>
  <br/>
