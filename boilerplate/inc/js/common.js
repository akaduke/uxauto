if(location.search.indexOf('ll=true') != -1){
	document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':11111/livereload.js"></' + 'script>');
	// HTML 구축시만 필요 개발 진행시 이 부분은 삭제
}


//jQuery.noConflict();
(function($){
	var textPlaceHolderInit = function(){

		var havePlaceholder = false;
		var input = document.createElement("input");
		havePlaceholder = ("placeholder" in input);

		if(!havePlaceholder){
			$("input[type=text], textarea, input[type=password], textarea").each(function(idx, obj){
				var _this = $(this);
				var placeholderAttr = "placeholder";

				var placeholderText = _this.attr(placeholderAttr);

				/*
				if(_this.val() == ""){
					_this.val(placeholderText);
				}
				*/
				if(_this.prev(".placeholder_guidetext").length <= 0){
					_this.wrap("<span class='placeholder_wrap' style='display:block;position:relative'></span>");	// 20140423 최수빈
					_this.before("<span class=\"placeholder_guidetext\"></span>");
					var prevGuideText = _this.prev(".placeholder_guidetext");
					prevGuideText.css({"position":"absolute","top":"50%","left":"5px","margin-top":"-8px"}).text(placeholderText);
					prevGuideText.hide();
					if(_this.val() == ""){
						prevGuideText.show();
					}

					prevGuideText.addClass("placeholder_text");

					_this.bind("mousedown focus", function(e){
						prevGuideText.hide();
					}).bind("blur", function(e){
						if($(this).val() == ""){
							prevGuideText.show();
						}
					});

					prevGuideText.bind("mousedown", function(e){
						$(this).hide();
						setTimeout(function(){
							_this.focus();
						}, 100);
					});
				}
			});
		}
	};
	window.textPlaceHolderInit = textPlaceHolderInit;

	var header = (function(){
		var el;

		function init(){
			el = $('#header');

			if(el.children().length <= 0){
				window.header = $.get('/inc/layout/header.html');
				window.header.done(function(data){
					el.html(data);

					setTimeout(function(){
						complete();
					}, 0);
				});
			}else{
				complete();
			}
		}

		function complete(){
			/*
			ex)

			gnb등의 header에 속한 스크립트는 header안에서 서술
			*/
		}

		return {init: init};
	})();

	var footer = (function(){
		var el;

		function init(){
			el = $('#footer');

			if(el.children().length <= 0){
				window.footer = $.get('/inc/layout/footer.html');
				window.footer.done(function(data){
					el.html(data);

					setTimeout(function(){
						complete();
					}, 0);
				});
			}else{
				complete();
			}
		}

		function complete(){
			/*
			ex)

			familysite등의 footer에 속한 스크립트는 footer안에서 서술
			*/
		}

		return {init: init};
	})();





	$(function(){
		textPlaceHolderInit(); // ie7,8 가능한 placeholder

		// header.init(); // 개발언어로 변경시 이 부분 삭제 해야 합니다. (개발언어로 인클루드 필요.)
		// footer.init(); // 개발언어로 변경시 이 부분 삭제 해야 합니다. (개발언어로 인클루드 필요.)
	});



})(jQuery);