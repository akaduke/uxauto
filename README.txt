
-- 템플릿 사용 안내사항 --

00. 프로젝트는 http://localhost:10001/codinglist.html
00. 가이드 문서는 http://localhost:10000/codinglist.html
00. livereload 를 사용 하기 위해선 URL 뒤에 ?ll=true 이라는 값을 넣어 줘야 작동합니다.

01. jade, less 파일내에서 //- 이렇게 주석처리할 경우 html, css 에는 노출되지 않음.

02. /images/common/blank_size_100.png (100px * 100px 기본 투명 이미지)
	작은 사이즈가 필요할 경우 제작해서 쓸것 (네이밍은 유사하게 하기)

03. /images/common/edit.gif
	/images/common/end.gif
	/images/common/ing.gif
	/images/common/line.gif
	코딩리스트에서 쓰이는 이미지.(기본으로 넣어둘것)

04. currentUrl 변수를 사용 합니다. jade 와 less 모두.
	jade 와 less 안에서 이미지 경로나 페이지 이동 링크 관련해서 루트 경로를 공통으로 빼놓을 수 있습니다.
	이는 혹시나 루트 경로가 바뀌어서 전체 페이지에 적용해야 할 경우에 유용하게 사용 될 수 있습니다.
	반드시 퍼블리싱 전에 설정하고 가도록 합니다.

05. run.bat
	윈도우 파워쉘에서 grunt 실행되게 해줌.
	바탕화면바로가기 해놓고 프로젝트별로 이름 변경해서 쓰면됨.
	다른프로젝트 폴더에서 사용시 run.bat 파일만 복사해 가져가면됨.
	아직 불안전 해서 불필요시 그냥 수동으로 쓰시면 됩니다.

06. /dev/ 폴더에서
	etribe_ux_*.less
	etribe_ux_*.jade
	위와 같이 etribe_ux_   라고 접두사가 붙으면 /www/ 폴더에 HTML 을 생성하지 않습니다.
	etribe_ux_ 파일은 라이브러리나, 레이아웃등의 퍼블리싱만을 위한 파일로 생성합니다.

	 /www/ 폴더는 개발자나 다른 퍼블리셔와 공유해야 하기 때문에 순수 HTML 있어야 하고
	 jade 와 less 를 더 잘 활용하기 위해서 만든 룰입니다.

07. 퍼블리싱 템플릿 생성시 몇가지 세팅이 필요합니다.
	페이지 샘플인 index.jade 에서
	extends 부분에 xhtml, html5, mobile 의 여부를 확인해서 파일 이름을 변경 해줍니다.

	/inc/css/reset.less 에 들어가서는 mobile, web 의 여부를 확인해서 파일 이름을 변경 해줍니다.

08. <body> 이하 layout 소스는 프로젝트 성격에 맞춰서 얼마든지 바꿀 수 있습니다.

09. 실제 코딩하는 파일은 index.jade 입니다. 복사해서 사용하면 됩니다.

10. print.less 는 프린트 할때만 적용됩니다.
	프린트 될때 컬러값이 #000000 으로 설정되어 있습니다.
	값을 바꾸고 싶으면 print.less 에서 수정 하시면 됩니다.

11. font.less 는 웹폰트를 사용할 경우 링크 시키면 됩니다. 폰트종류는 프로젝트별로 선택.

12. improveIR.js 는 고대비 IR기법 대응 스크립트 입니다.
	스크립트 오류나 특이사항 발생시 제거하세요.

13. medernizr.js 는 기본적으로 링크 해놓았습니다. 필요없으면 제거하세요.

14. common.js 에 header, footer 부분 jQuery Load 시켜져 있습니다.
	개발과 협업시 Load 되는 부분 개발언어로 인클루드 하고
	개발쪽 common.js 에서는 load 되는 부분 삭제나 주석처리 해야 합니다.

15. body 나 html 같은곳에 각각의 페이지에서 클래스나 아이디명을 주고 싶을때를 고려하여
	bodyClass, wrapClass 와 같은 변수를 만들어서 사용합니다.
	etribe_ux_layout 파일에 보시면 설명되어 있습니다.

16. 공백 Tab Size 는 2를 기준으로 합니다. (서브라임텍스트3 우측 하단 "Tab Size: 2" )
	http://code-guide.aliencube.org/#html-practicality (여기 참고함)

17. 프로젝트 포트번호 10001 부터 시작. 10002, 10003, 10004와 같이  1씩 증가.
18. livereload 포트 번호는 10100 부터 시작 10200, 10300, 10400와 같이 1씩 증가. 프로젝트와 livereload 번호 맞춤.
19. 가이드문서 포트번호 10000(고정)
20. Grunt 동시에 여러개 작동 해야 할 경우 liverload 포트번호가 같으면 오류남. 위와 같이 포트번호 다르게 지정해야함.


