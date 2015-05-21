
#Hello Web Guide v1.1

이 문서는 이트라이브 내부 프로젝트 진행시 퍼블리셔들간의 가이드로써 외주 업체와 프로젝트시 아래 가이드를 바탕으로
기반을 마련할 수 있으며 사정에 따라서는 외주 업체 가이드를 따라야 할 수도 있음을 염두해 두시기 바랍니다.

가이드에 대한 의견은 언제든지 환영합니다.

----------

####목차
1. HTML
2. CSS
3. 모바일
4. 공통 네이밍
5. CSS 네이밍
6. 이미지 네이밍
7. 폼요소 네이밍


----------

##1. HTML
####1-1. 기본 HTML
- xhtml1.0 과 html5 DOCTYPE 중 프로젝트 시작시 선택하여 사용합니다.
- 라이브러리 폴더에서 세 가지 파일의 기본 템플릿을 확인 할 수 있습니다.(xhtml1.0, html5, html5_mobile)
- 모바일웹은 html5를 사용합니다.
- 레이아웃과 스타일을 위한 마크업을 잘 활용하도록 합니다. 예제 참고.
```
<div class="a"><!-- ul 리스트를 위한 레이아웃 영역 -->
    <ul><!-- 리스트 스타일을 적용 -->
        <li><!-- a 링크를 위한 레이아웃 영역 -->
            <a href="#"></a><!-- 링크의 스타일을 적용 -->
        </li>
    </ul>
</div>
<style type="text/css">
.a{position:relative;width:765px;}
.a ul{width:100%;border-top:1px solid red}
.a ul li{padding:10px 5px}
.a ul li a{color:#dddddd;font-weight:bold;}
</style>
```
- <,>,& 등의 특수기호를 엔티티 코드로 변환합니다.
- 태그의 속성값은 큰따옴표 ("") 로 묶는다. 스크립트는 작은따옴표 ('') 로 묶는다. 예제 참고.
```
<a href="#" class="ux"></a>

$('.ux').css('top','10px');
```
- 들여쓰기는 space 4칸 즉 tab 1칸 으로 통일합니다. 예제 참고.
```
<div>
    <ul>
        <li></li>
    </ul>
</div>
```

####1-2. XHTML 1.0
- 단일태그의 닫기를 해줍니다. 예제 참고.
```
<input type="text" name="" id="" />
<br />
<hr />
```

####1-3. HTML 5
- 단일태그의 닫기를 생략합니다. 예제 참고.
```
<input type="text" name="" id="">
<br>
<hr>
```
- table 태그에서 summary 속성을 생략합니다.

####1-4. HTML 주석표기
- 특히 수정사항과 관련된 주석표시는 반드시 해주도록 합니다.
- 주석표시 언어는 한글이면 한글, 영문이면 영문으로 통일을 해주시기 바랍니다. 되도록이면 영문표기를 권장드립니다.

```
<!-- 기본으로 갑니다. 이렇게 해주세요. -->
<div>주석표기통일합니다.</div>
```
```
<!-- 주석으로 처음과 끝을 알립니다. -->
<div> -- Hello Web Team -- </div>
<!-- 주석으로 처음과 끝을 알립니다. -->
```
```
<!-- 20140110 이트라이브 - 텍스트 내용 수정 -->
<div> 안녕하세요 </div>
<!-- 20140110 이트라이브 - 텍스트 내용 수정 -->

<!-- 20140110 교보웹접근성이트라이브 - 텍스트 수정 -->
<p>안녕하세요. 헬로우 웹팀 입니다.</p>
<!-- 20140110 교보웹접근성이트라이브 - 텍스트 수정 -->
```
####1-5. HTML 마크업 주의사항
```
<!-- 헤딩 태그 안에 제목과 관련없는 의미의 태그를 사용하지 않습니다. -->
<h3>
    <ul>
        <li></li>
    </ul>
    <dl>
        <dt></dt>
        <dd></dd>
    </dl>
</h3>
<!-- 헤딩 태그 안에 제목과 관련없는 의미의 태그를 사용하지 않습니다. -->
```
```
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
```
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
```
<!-- 사용가능과 불가능이라는 개발에서 뿌려주는 값이 들어가는 경우 아래와 같이 마크업 할 수 있지만... -->
<div>
    사용가능
    <img src="" alt="이미지" />
</div>
<!-- 사용가능과 불가능이라는 개발에서 뿌려주는 값이 들어가는 경우 아래와 같이 마크업 할 수 있지만... -->

<!-- 아래와 같이 마크업 하도록 합니다. 마크업을 최소화 하는 것도 좋긴 하지만 의미를 부여한 영역 구분은 반드시 필요합니다.-->
<div>
    <span>사용가능</span>
    <span><img src="" alt="이미지" /></span>
</div>
<!-- 또는, 의미에 따라 dl, ul 등 마크업 하도록 합니다. 중요한건 영역을 구분하지 않고 컨텐츠만 달랑 넣지 않도록 합니다. -->
<dl>
    <dt>사용가능</dt>
    <dd><img src="" alt="이미지" /></dd>
</dl>
<!-- 아래와 같이 마크업 하도록 합니다. 마크업을 최소화 하는 것도 좋긴 하지만 의미를 부여한 영역 구분은 반드시 필요합니다.-->
```

##2. CSS
####2-1. 기본 CSS
- 레이아웃을 제외하고 컨텐츠들은 id보다는 class를 사용하도록 합니다.
- css는 모두 소문자를 사용합니다. 단어사이의 구분은 언더스코어(_) 만 사용하도록 합니다. 예제 참고.
```
.abc_bcd{}
#wrap_in{}
.left_list_v1{}
.right_content_list_lst1{}
```
- 단어와 숫자 구분은 언더스코어(_)를 생략합니다. 예제 참고.
```
.box100
.box100_more10
```
- 스크립트 관련된 클래스명은 특정 prefix를 앞에 붙이기로 합니다. 예제 참고.
```
/* eui 붙임. etribe UI 줄임말 */
.eui_mouseover_v1
.eui_reserved_section_v2
```
- 컨텐츠 별 css 구분은 한줄띄기로 합니다. 들여쓰기는 하지 않습니다. 예제 참고.
```
/* 컨텐츠 리스트 */
.content_list{width:100px;height:200px}
.content_list .inner{width:10px;height:5px}

/* 컨텐츠 리스트2 */
.content_list02{width:100px;height:200px}
.content_list02 .inner{width:10px;height:5px}
```
- 주석표시 언어는 한글이면 한글, 영문이면 영문으로 통일을 해주시기 바랍니다. 되도록이면 영문표기를 권장드립니다. 예제 참고.
```
/* 상품 리스트 */
/* product list */
```
- z-index 단위는 5단위씩 상승합니다. 레이어팝업의 z-index는 100 이며 딤드는 95 입니다. 예제 참고.
(5와 10사이 중간에 먼가가 필요하면 이런경우에만 중간에 6,7,8,9 등의 단위를 지정해 줍니다.)
```
.layer01{position:absolute;z-index:5}
.layer02{position:absolute;z-index:10}
.layer02_1{position:absolute;z-index:12}
.layer03{position:absolute;z-index:15}
```
- css 속성간의 공백과 불필요한 기호들을 빼며 속성값이 0인 경우는 단위를 생략할 수 있습니다. 속성 마지막 ; 생략가능. 예제 참고.
```
.abc{position:relative;width:100px;height:0;background:url(/images/a.jpg) no-repeat left top}
```
- css 약식 속성 사용. 예제 참고.
```
.abc{
margin:10px 9px 8px 7px;padding:10px 9px 8px 7px;
margin:10px 10px;padding:10px 10px;
margin:10px 20px 10px;

font-size:12px;color:#000000;font-weight:bold;font-family:"돋움",dotum; /* 약식 사용 안함. */
/* 한글 글꼴을 선언할 때 한글이나 영문 이름 중 하나로만 표기하면 특정 브라우저에서 글꼴을 올바르게 출력하지 못하는 경우가
있으므로 반드시 한글과 영문 이름을 모두 선언합니다. */

background:url(/images/product/aaa.jpg) no-repeat left top;
}
```
- css 기본작성 예시. 예제 참고.
```
/* 기본적으로 가로 한줄 쓰기를 합니다. */
.abc{position:absolute;top:10px;left:10px}
.abc .def{position:absolute;top:0;left:30px;width:100px;height:100px}

/* 두개 이상의 요소에 하나의 속성값을 적용 할 경우 요소별로 줄 바꿈 해준다. */
.abc,
.bcd,
.asdf{position:absolute;top:0;left:30px;width:100px;height:100px}
```

####2-2. css 작성순서
> 아래와 같은 순서로 css 작성하도록 합니다.
속성은 레이아웃과 관련이 큰 것부터 선언합니다.

- display
- overflow
- float
- position
- top, left, bottom, right
- z-index
- width, height
- margin, padding
- border
- background
- color
- font
- text-align
- vertical-align
- line-height
- letter-spacing
- etc

####2-3. css 주석규칙
```
/* 기본으로 갑니다. */
.abc{position:relative;width:100px;height:100px}
```
```
/* 아래와 같이 주석은 해당 컨텐츠 시작되는 부분에만 표기합니다. */
/* 테이블 컨텐츠 */
.abc{position:relative;width:100px;height:100px}

/* 레이아웃 */
.wrap{position:relative;width:1024px}

```
```
/* 수정되는 주석은 html 형식과 동일합니다. 아래와 같이 수정사항 관련된 부분은 위아래로 주석을 감싸는 표기를 허용 합니다.
참고로 css수정은 다른 업체나 클라이언트 퍼블리셔와 협업을 하지 않는 이상 수정된 부분에 주석을 남길일은 많지 않을 것 같습니다.
(교보문고프로젝트 예외였음) */

/* 20140101 이트라이브 - 테이블 css 수정 */
table{width:100%}
table td{padding:5px 10px 5px 10px;text-align:left}
/* 20140101 이트라이브 - 테이블 css 수정 */
```

####2-4. CSS 작성 주의사항
```
/* 아래와 같이 id 또는 class명에 부차적인 태그를 앞에다 붙이지 않는다. */
div#wrap{position:relative;width:1024px;height:500px;border-top:1px solid red}
span.fontstyle01{font-weight:bold;color:#eeeeee}
```
```
<div class="abc">
    <ul>
        <li>
            <ul>
                <li></li>
            </ul>
        </li>
    </ul>
</div>
<style type="text/css">
.abc ul{width:100px;height:100px}
.abc ul > li{width:50px;height:50px}
.abc ul > li > ul > li{width:30px;height:20px}
</style>
<!-- 위와 같이 자식선택자를 최대한 사용하지 않도록 한다. -->
```
```
/* 불필요한 중첩을 최대한 줄입니다. */
table tr td{padding:5px 10px;text-align:left} - (X)
table tbody tr td{padding:5px 10px;text-align:left} - (X)
table td{padding:5px 10px;text-align:left} - (O)
table thead th{padding:5px 10px} - (O)
table tbody th{padding:5px 10px} - (O)

/* 불필요한 중첩을 줄이는 방법에는 클래스를 활용한 방법도 있습니다. */
table tbody tr td{padding:5px 10px;text-align:left} - (X)
table .space01{padding:5px 10px;text-align:left}
/* 부분적으로 사용하는 상황이면 클래스를 적절하게 활용합니다. */
```
```
/* 필요없는 속성이나 중복 속성을 최대한 줄입니다. */
table{overflow:hidden;position:relative;border:1px solid #dddddd;text-align:left;vertical-align:top}
table tbody{overflow:hidden;position:relative;text-align:left;vertical-align:top}
table td{overflow:hidden;position:relative;text-align:left;vertical-align:top}
/* 위와 같이 무분별한 overflow:hidden, position:relative 사용을 지양하고 vertical-align:top, text-align:left 와 같이 중복속성 사용을 주의하도록 합니다. */
```

####2-5. CSS 핵
```
/* IE6 */
div{_height:30px} - IE6 이하 적용

/* IE7 */
div{#height:30px} - IE7 이하 적용

/* IE8 */
div{height:30px\9} - IE8 이하 적용
div{height:30px\0IE8} - IE8만 적용

/* IE8 + IE9 */
div{height:30px\0IE8+9} - IE8 과 IE9 둘다 적용

/* IE9 */
div{height:30px\0IE9} - IE9만 적용
```

####2-6. CSS 파일 구성
- css 속에 import 하지 않고 각 기능별로 html 페이지에서 link 합니다.
```
<!-- css 파일은 아래와 같이 구성을 기본으로 합니다. -->
<link href="/inc/css/reset.css" type="text/css" rel="stylesheet" />
<link href="/inc/css/common.css" type="text/css" rel="stylesheet" />
<link href="/inc/css/프로젝트카테고리별.css" type="text/css" rel="stylesheet" />
```
- reset.css (리셋 스타일만)
```
/* reset */
```
- common.css (공통 컨텐츠 스타일 )
```
/* common */
/* skipnav */
/* form */
/* table */
/* btn */
/* layout */
/* header */
/* util */
/* gnb */
/* container */
/* snb */
/* content */
/* location */
/* footer */
/* popup */
/* layer popup */
/* 그 밖의 공통 스타일을 주석표기 후 작성 */
```

##3. 모바일
```
<!-- 기본 viewport -->
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
```
```
<!-- 기본 미디어 쿼리 -->
/* 모바일 가로 */
@media all and (min-width:11cm) and (max-width:19.9cm){

}
/* 태블릿 세로 */
@media all and (min-width:20cm) and (max-width:25.9cm){

}
/* 태블릿 가로 */
@media all and (min-width:26cm){

}

```

##4. 공통 네이밍 가이드
- 가이드를 기준으로 하되 프로젝트 상황별로 융통성있게 사용이 가능합니다.
- 네이밍시 HTML tag name 이나, CSS attribute, Javascript 예약어등을 단독으로 사용하지 않습니다.
예) style, border, case, for, function, div, html 등등
- 네이밍은 길어지더라도 최대한 직설적 표기를 권장 합니다.
- 단어의 요약어는 공통으로 지정된 단어를 사용하도록 합니다. (새롭게 생성시 PL과 협의 및 가이드에 추가)
- 반드시 prefix, suffix, subfix 를 붙이는 방법으로 네이밍 하도록 합니다.
- 비슷한 유형의 버전 관리는 01,02,03 순으로 번호로 구분합니다.
- 01과 02 사이의 예외상황은 01_1, 02_2 로 구분합니다.
- 네이밍은 '형태 + 의미 + 순서 + 상태' 순서로 조합합니다.
```
/* 예제 */
.btn_apply_on
.btn_more02_over
```
- 형태 네이밍 예약어
```
/* 타이틀 */
헤딩영역 타이틀 : h1_ ~ h6_
헤딩영역 타이틀 관련 부가적인 카피문구 : h1c_ ~ h6c_
헤딩영역을 제외한 타이틀 : tit_
타이틀 관련 부가적인 카피문구 : titc_

/* 영역 */
헤딩영역 그룹 영역 : section_
일반 컨텐츠 그룹 영역 : group_
group 보다 낮은단계의 그룹 영역 : _area

/* 내비게이션 */
헤더영역 전체 내비게이션 : gnb_
헤더영역 지역 내비게이션 : lnb_
헤더영역 유틸리티 내비게이션 : unb_
컨텐츠영역 사이드 내비게이션 : snb_

/* 기타 */
탭 : tab_
테이블 : tbl_
목록 : list_
버튼 : btn_
박스 : box_
아이콘 : ico_
블릿 : bu_
선 : line_
배경 : bg_
섬네일 : thumb_
배너 : bnr_
텍스트 : txt_
숫자 : num_
날짜 및 시간 : time_
광고 : ad_
```
- 의미 네이밍 예약어
```
설명 : _desc_
댓글 : _cmt_
방향(수직) : _v_
방향(수평) : _h_
점 : _dot_
처음 : _first_
중간 : _middle_
위 : _top_
아래 : _bottom_
왼쪽 : _left_
오른쪽 : _right_
가운데 : _center_
끝 : _last_
다음 : _next_
이전 : _prev_
기타 : _etc_
갱신/업데이트 : _update_
다운로드 : _dnld_
업로드 : _upld_
확인 : _confirm_
취소 : _cancel_
닫기 : _close_
보기 : _view_
삭제 : _del_
새로고침 : _refresh_
경로 : _path_
베스트 : _best_
원 : _circle_
사각형 : _square_
화살표 : _arr_
읽기 : _read_
찾기 : _find_
파일 : _file_
답변/회신 : _reply_
전송 : _submit_
정지/멈춤 : _stop_
등록 : _reg_
확대 : _zin_
축소 : _zout_
재생 : _play_
신규 : _new_

```
- 상태 네이밍 예약어
```
켜짐 : _on
꺼짐 : _off
오버 : _over
포커스 : _focus
더많이 : _more
```

##5. CSS 네이밍

- class 예약어. 아래 참고.
```
/* 스킵네비게이션 */
.skipnav

/* float 해제 */
.clfix

/* 숨김 텍스트 */
.hide_txt

/* 폼 요소 */
input_rdo : 라디오버튼
input_chk : 체크박스
select_form : 셀렉트박스
textarea_form : 텍스트에어리어

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
.paginate
.btn_first
.btn_prev
.btn_next
.btn_last
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

```
<!-- 마크업 샘플 -->
<div id="wrap">
    <div id="header">
        <div class="header_content">
            <div class="unb">
                <ul class="unb_list">
                    <li></li>
                </ul>
            </div>

            <div id="gnb">
                <ul class="gnb_list">
                    <li></li>
                </ul>
            </div>
        </div>
    </div>

    <div id="container">
        <div class="container_content">
            <div class="snb">
                <ul class="snb_list">
                    <li></li>
                </ul>
            </div>

            <div id="content">
                <ul class="location">
                    <li></li>
                </ul>
            </div>
        </div>
    </div>

    <div id="footer">
        <div class="footer_content"></div>
    </div>
</div>
<!-- 마크업 샘플 -->
```


##6. 이미지 네이밍
- 형태+의미+순서+상태.확장자 의 모습으로 네이밍 합니다.
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

/* 의미 */
공통 의미 네이밍 예약어 참조

/* 상태 */
공통 상태 네이밍 예약어 참조
```

##7. 폼요소 네이밍
- 퍼블리싱 단계에서 폼요소의 id, name 속성값을 적어 줍니다.
- 아래 없는 네이밍은 사전에서 찾거나 PL과 상의 하도록 합니다.

####7-1. form 태그
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
- form 태그 네이밍 적용 예
```
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

####7-2. input 태그
- 네이밍은 1-2단어 내에서 표기합니다.
- 첫글자는 소문자로 표기, 추가되는 단어들은 대소문자로 표기합니다.
- 대/소문자의 구분이 어려울 경우 underline(_)로 구분하여 표기합니다.
```
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













