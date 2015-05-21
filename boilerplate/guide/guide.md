# Code Guide
* 참고 사이트 (http://code-guide.aliencube.org/)


# 목차
<!-- MarkdownTOC -->

- HTML
    - 문법
    - 문서타입
    - 주석
    - 유의사항
- CSS
    - 문법
    - z-index
    - 주석
    - 작성순서
    - Hack
    - 미디어 쿼리
    - 유의사항
- 공통 네이밍
    - CSS
    - 이미지
    - Form

<!-- /MarkdownTOC -->


# HTML

## 문법

- 속성값을 지정할 때에는 작은 따옴표 대신 항상 큰 따옴표를 사용합니다.
- 단일 태그 엘리먼트들에서는 슬래시( / )를 사용하지 않습니다. HTML5 스펙에서는 선택 사항으로 되어 있습니다. XHTML 의 경우는 단일 태그 엘리먼트들에 슬래시( / )를 사용 합니다.
- 들여쓰기는 tab 1칸으로 통일 합니다. (현재 sublime text3 설정에 적용되어 있음.)
- HTML 문서상 특수 표시 글자들은 엔티티(Entities)로 변환 해줍니다.

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Page title</title>
    </head>
    <body>
        <img src="/images/common/edit.gif" alt="Edit">
        <h1 class="hello">Hello &amp; world!</h1>
    </body>
</html>
```

## 문서타입

- 현재 HTML5, XHTML1.0 두 가지 문서타입에 대해서만 구분하고 있습니다.
- 모바일은 HTML5, 모바일이 아닌 경우에는 HTML5, XHTML1.0 상황에 맞게 사용 합니다.
- 주 문서타입은 HTML5 입니다.

```html
<!-- HTML5 -->
<!DOCTYPE html>

<!-- XHTML1.0 -->
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ko" lang="ko">
```

## 주석

- 주석의 표시는 처음과 끝을 동일한 주석으로 표시 합니다. 또는 한쪽만 표시할 때는 위쪽에 표시 하도록 합니다.
- 기본적으로 수정의 주석은 날짜를 표시 하도록 합니다. 그 외의 주석들은 해당 내용을 알 수 있도록 영문 혹은 국문으로 표시 해주도록 합니다.

```html
<!-- 주석으로 처음과 끝을 알립니다. -->
<div>
    <a href="#">주석표시</a>
</div>
<!-- 주석으로 처음과 끝을 알립니다. -->
```

```html
<!-- 주석을 한쪽만 표시 할경우 -->
<div>
    <a href="#">주석표시</a>
</div>
```

```html
<!-- 20150515 수정내용 -->
<div>
    <a href="#">주석표시</a>
</div>
<!-- 20150515 수정내용 -->
```


## 유의사항

```html
<!-- 헤딩 태그 안에 제목과 관련없는 의미의 태그를 사용하지 않습니다. -->
<h3>
    <ul>
        <li></li>
    </ul>
</h3>
<!-- 헤딩 태그 안에 제목과 관련없는 의미의 태그를 사용하지 않습니다. -->
```

```html
<!-- 인라인 요소 안에 블록 요소를 사용하지 않습니다. -->
<span>
    <div></div>
    <dl>
        <dt></dt>
        <dd></dd>
    </dl>
</span>
<!-- 인라인 요소 안에 블록 요소를 사용하지 않습니다. -->

<!-- 예외로 HTML5 일 경우 <a> 태그안에서는 블록 요소를 감싸는것이 가능 합니다.
    단, 또다른 버튼 속성 및 포인터 속성버튼이 존재해서는 안됩니다. -->
<a href="">
    <div></div>
    <ul>
        <li></li>
    </ul>
</a>
<!-- 예외로 HTML5 일 경우 <a> 태그안에서는 블록 요소를 감싸는것이 가능 합니다.
    단, 또다른 버튼 속성 및 포인터 속성버튼이 존재해서는 안됩니다. -->
```

```html
<!-- ul,ol,dl 등 아래 div 태그와 같이는 사용 할 수 없습니다. -->
<ul>
    <li><div></div><li>
    <div><!-- li 없이 단독으로 사용 불가능 --></div>
</ul>
<dl>
    <dt></dt>
    <dd><div></div></dd>
    <div><!-- dd나 dt 없이 단독으로 사용 불가능 --></div>
</dl>
<ol>
    <li><div></div></li>
    <div><!-- li 없이 단독으로 사용 불가능 --></div>
</ol>
<!-- ul,ol,dl 등 아래 div 태그와 같이는 사용 할 수 없습니다. -->
<!-- 일부 IE계열 브라우저에서는 위와 같이 기술해도 화면에서는 제대로 나오는 경우가 있지만
그렇다고 해당 문법이 맞는 것은 아닙니다. -->
```

# CSS

## 문법

- 속성값을 지정할 때에는 작은 따옴표 대신 항상 큰 따옴표를 사용합니다.
- 들여쓰기는 Tab 1칸으로 통일 합니다. (현재 Sublime Text3 설정에 적용되어 있음.)
- 16진수 값들은 모두 소문자로 표현합니다. (예: #fff) 소문자들이 좀 더 가독성이 높기 때문입니다.
- 0 값들에서는 단위를 쓰지 않습니다. (예: margin: 0)
- CSS는 모두 소문자를 사용합니다. 단어 사이의 구분은 언더스코어( _ )로 사용합니다.
- CSS 작성은 기본적으로 가로 한줄 쓰기를 합니다.

```css
input[type="text"]{border:1px solid #dddddd;}
.btn_layout{display:block;}
.btn_layout:before{content:".";display:block;}
.box_model{margin:0;padding:20px;}
```

## z-index

- z-index 단위는 5단위씩 관리 합니다. 특정한 경우에 따라서 1-5 사이의 단위를 쓸 수 있습니다.
- 기본적으로 레이어팝업은 100, 레이어팝업 밑에 깔리는 딤드는 95 입니다.

```css
.dimm{z-index:95}
.layer_popup{z-index:100;}
```

## 주석

- 맨앞에 ! 표를 붙여줍니다.
- 주석의 표시는 해당 컨텐츠 그룹의 상단에만 표시 해줍니다.

```css
/*! 느낌표를 붙입니다. */

/*! 컨텐츠 그룹의 상단에만 표시 해줍니다. */
.btn_group{display:block;}
.btn_group .btn_more{display:block;}
```

## 작성순서

- 박스 모델
- 포지션 관련
- 타이포그라피
- 시각 효과

```css
.list{
    /*! Box-model */
    display:block;
    float:right;
    width:100px;
    height:100px;

    /*! Positioning */
    position:absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    z-index:100;

    /*! Typography */
    font-size:16px;
    font-family:"돋움";
    font-weight:700;
    color:#dddddd;
    line-height:1.5;
    text-align:center;

    /*! Visual */
    background-color:#dddddd;
    border:1px solid red;
    border-radius:3px;
}
```

## Hack

- 기존의 핵은 속성에 특정한 문자들을 넣어서 사용하는 방식으로 밸리데이션 체크에 걸립니다.
- 현재는 조건부주석을 활용한 각 브라우저별 클래스로 핵을 사용합니다.

```css
/*! 기존 방식 */
div{_height:30px}
div{#height:30px}
div{height:30px\9}
div{height:30px\0IE8}
div{height:30px\0IE8+9}
div{height:30px\0IE9}
```

```css
/*! 현재 방식 */
.ie7 div{height:30px;}
.ie8 div{height:30px;}
.ie9 div{height:30px;}
```

## 미디어 쿼리

- 미디어 쿼리의 위치는 가급적이면 해당 규칙의 최대한 가까이에 모아 놓습니다.
- 미디어 쿼리들을 별도의 스타일시트에 묶어 놓는다든가 문서의 맨 마지막에 놓는 것은 좋지 않습니다. 오히려 이곳저곳 왔다 갔다 하는 불편함이나 까먹기 좋은 형태 입니다.

```css
.element { ... }
.element-avatar { ... }
.element-selected { ... }

@media (min-width: 480px) {
    .element { ...}
    .element-avatar { ... }
    .element-selected { ... }
}
```

```css
/*! 미디어 쿼리 참고용 */
// mobile landscape
@media all and (min-width:11cm) and (max-width:19.9cm){
}
// tablet portrait
@media all and (min-width:20cm) and (max-width:25.9cm){
}
// tablet landscape
@media all and (min-width:26cm){
}
```

```css
/*! 미디어 쿼리 참고용 */
// mobile portrait
@media screen and (max-width:480px){
}
// mobile landscape
@media screen and (min-width:481px) and (max-width:768px){
}
// tablet portrait
@media screen and (min-width:769px) and (max-width:1024px){
}
// tablet landscape
@media screen and (min-width:1025px) and (max-width:1280px){
}
// 1280 desktops
@media screen and (min-width:1281px) and (max-width:1440px){
}
```

## 유의사항

- 불필요한 중첩은 최대한 줄입니다.
- 특별한 경우를 제외하고는 span.font01 과 같이 span 에만 묶여 있는 font01 클래스로 만들지 말고 유연하게 사용 할 수 있도록 만듭니다.

# 공통 네이밍

- 지나친 축약형은 사용하지 않는 것이 좋습니다. 예를 들어 .btn 정도는 button을 위해서는 괜찮지만 .s을 쓰게 되면 이것은 아무런 의미가 없습니다.
- 단어와 단어 사이의 구분은 언더스코어 ( _ )로 구분합니다.
- 의미있는 이름을 사용합니다. 표현보다는 구조라든가 목적을 나타내는 것이 좋습니다.
- 가장 가까운 부모라든가 베이스 클래스를 바탕으로 접두사를 사용하는 것도 좋습니다.
- 이름은 "형태 + 의미 + 순서 + 상태" 순소로 조합합니다.
- 비슷한 유형의 버전 관리는 01,02,03 순으로 번호로 구분합니다.

```
영역
_section_
_area_
_group_
_wrap_
예) .list_wrap
예) bg_wrap.gif
```

```
제목
h1_ ~ h6_
예) .h1_product
예) h1_product.gif
```

```
네비게이션
_gnb_
_lnb_
_unb_
_snb_
예) .gnb_list
예) bg_gnb_wrap.gif
```


## CSS

```
/* 스킵네비게이션 */
.skipnav

/* float 해제 */
.clfix

/* 숨김 텍스트 */
.hide_txt

/* 폼 요소 */
input_txt : 텍스트 입력
input_rdo : 라디오버튼
input_chk : 체크박스
input_select : 셀렉트박스
input_textarea : 텍스트에어리어
input_file : 파일첨부

/* 테이블 */
.tbl_col01 : scope="col" 형태의 테이블
.tbl_col02

.tbl_row01 : scope="row" 형태의 테이블
.tbl_row02

.tbl_etc01 : 기타 다른 형태의 테이블
.tbl_etc02

/* 박스 스타일 */
.box_round01 : 라운드 형태의 박스
.box_round01

.box_square01 : 사각형 형태의 박스
.box_square02

.box_etc01 : 기타 형태의 박스
.box_etc02

/* 페이지 네비게이션 */
.pagenavi
.btn_go_home
.btn_go_prev
.btn_go_next
.btn_go_end
```

```
/* 레이아웃 */
#wrap
: body 바로 아래 전체를 감싸는 영역

#header
: 헤더 영역
.header_content
: #header 영역이 width 값이 100%일 경우 고정된 컨텐츠 영역
.unb
: #header 영역내 유틸리티 메뉴 영역

#gnb
: gnb 영역

#container
: 헤더, 푸터 영역을 제외한 컨텐츠 및 사이드네비게이션을 감싸는 영역
.container_content
: #container 영역이 width값이 100%일 경우 고정된 컨텐츠 영역

.snb
: #container 영역내 컨텐츠의 양옆 네비게이션
#content
: 본문 영역
.location
: #content 내의 현재위치 표시 영역

#footer
: 푸터 영역
.footer_content
: #footer 영역이 width값이 100%일 경우 고정된 컨텐츠 영역
```

```
/* 일반 팝업 레이아웃 예약어 */
#pop_wrap
#pop_header
#pop_container
#pop_content
#pop_footer

/* 레이어 팝업 레이아웃 예약어 */
.layer_wrap
.layer_header
.layer_container
.layer_content
.layer_footer
```

## 이미지

```
/* 예제 */
btn_del01_on.gif
형태 - btn
의미 - del
순서 - 01
상태 - on
확장자 - gif
/* 위와 같이 네이밍 해주시면 됩니다. 숫자와 단어는 언더스코어로(_) 구분하지 않습니다. */
```

```
/* 형태 */
btn_ : 버튼
ico_ : 아이콘
bu_ : 블릿
tab_ : 탭
bg_ : 배경이미지
visual_ : 비주얼이미지
img_ : 컨텐츠 이미지
txt_ : 텍스트 이미지
h1_ ~ h6_ : 타이틀 이미지
h1c_ ~ h6c_ : 타이틀 관련 카피문구 이미지
tit_ : 헤딩영역 제외한 타이틀 이미지
titc_ : 헤딩영역 제외한 타이틀 카피문구 이미지
step_ : 스텝 이미지
ad_ : 광고 관련 이미지
bnr_ : 배너 관련 이미지
pop_ : 일반팝업 관련 이미지
layer_ : 레이어팝업 관련 이미지
label_ : 레이블 텍스트 이미지
num_ : 숫자 관련 이미지
temp_ : 임시이미지
line_ : 선 이미지
```

## Form

- 퍼블리싱 단계에서 폼요소의 id, name 속성값을 적어 줍니다.
- 아래에 없는 네이밍은 사전에서 찾거나 PL과 협의 합니다.

```
<!-- 아래와 같은 형식으로 퍼블리싱 합니다. id와 name 아래 네이밍 규칙대로 넣고,
method 와 action 은 속성은 표시하되 속성값은 표기하지 않습니다. -->
<form id="abc" name="abc" method="" action=""></form>
```
```
/* id 와 name 들어갈 네이밍 규칙 */
listForm : 목록
registerForm : 등록
detailForm : 상세
updateForm : 수정
popupForm : 팝업
searchForm : 검색
deleteForm : 삭제
hiddenForm : 숨김
globalForm : 전역

/* prefix 단어 뒤에 Form 을 붙여서 사용함.
global은 전역 prefix 이므로 globalSearchForm, globalDeleteForm 등 과 같이
활용 하면 됩니다. */
```

```html
<!-- 적용 예 -->

<!-- header -->
<form name="globalSearchForm" id="globalSearchForm" method=" " action="">
    <input type="text" title="검색어 입력" name="searchWord" value="" maxlength="50" />
    <input type="image" src="/images/common/btn_top_sch.gif" alt="검색" />
</form>
<!-- //header -->
<!-- 게시판 검색 -->
<form name="searchForm" id="searchForm" method=" " action="">
<fieldset>
    <legend>분류</legend>
    <select name="searchCategory" title="알립니다 분류 선택">
    </select>
    <span class="button btn_gray"><input type="submit" value="선택" /></span>
</fieldset>
<fieldset class="search_area">
    <legend>검색</legend>
    <select name="searchType" title="검색어 유형 선택">
    </select>
    <input type="text" title="검색어를 입력하세요" id="searchWord" name="searchWord" value="" />
    <span class="button btn_gray"><input type="submit" value="검색" /></span>
</fieldset>
</form>
<!-- //게시판 검색 -->
```

```
- 네이밍은 1-2단어 내에서 표기합니다.
- 첫글자는 소문자로 표기, 추가되는 단어들은 대소문자로 표기합니다.
- 대/소문자의 구분이 어려울 경우 underline(_)로 구분하여 표기합니다.

/* 게시판 */
제목 : title
내용 : contents
작성자 : writer
첨부파일 : attachFile
이미지파일 : imageFile
동영상파일 : videoFile

/* 검색 */
검색유형 : searchType
검색어 : searchWord
검색종류 : searchKind

/* 회원가입 */
아이디 : ID
- 변수명 단독 사용 금지 : userID

비밀번호 : PWD
- 변수명 단독 사용 금지 : userPWD

현재 비밀번호 : currentPWD
변경 비밀번호 : changePWD
확인 비밀번호 : confirmPWD

이름 : name
- userName

성별 : sexFlag
- 남 : sexM
- 여 : sexF

생년월일 : birthdate
- 년 : birthdate1
- 월 : birthdate2
- 일 : birthdate3

전화번호 : tel
- 지역번호 : tel1
- 앞번호 : tel2
- 뒷번호 : tel3

휴대폰 : mobile
- 앞번호 : mobile1
- 중간번호 : mobile2
- 끝번호 : mobile3

이메일 : email
- 아이디 : emilID
- 도메인 : emailDomain

이메일 수신거부 : receiveEmail
- 수신함 : value="Y"
- 수신안함 : value="N"

SMS 수신여부 : receiveSMS
- 수신함 : value="Y"
- 수신안함 : value="N"

우편번호 : zipcode
- 앞번호 : zipcode1
- 뒷번호 : zipcode2

주소 : address
상세 주소 : addressDetail
```

```
<!-- 적용 예 -->
<input type="text" id="title1" name="title1" />
<input type="text" id="title2" name="title2" />
<input type="checkbox" id="writer" name="writer" />

<input type="text" id="tel1" name="tel1" />
<input type="text" id="tel2" name="tel2" />
<input type="text" id="tel3" name="tel3" />

<input type="radio" id="receiveEmail" name="receiveEmail" value="Y" />
<input type="radio" id="receiveEmail" name="receiveEmail" value="N" />

<input type="radio" id="sexM" name="sexM" />
<input type="radio" id="sexF" name="sexF" />

<input type="text" id="userID" name="userID" />
<input type="text" id="clientID" name="clientID" />
<input type="text" id="adminID" name="adminID" />
```