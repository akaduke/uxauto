<!-- 마크다운 사용법
1. http://blog.kalkin7.com/2014/02/05/wordpress-markdown-quick-reference-for-koreans/
2. http://blog.naver.com/evahpirazzi/220311725099 -->
<!--
css:
-   ^/inc/css/common.css

"@flow":
    js:
        -   "https://cdnjs.cloudflare.com/ajax/libs/raphael/2.1.2/raphael-min.js"
        -   flowchart-min.js
        -   default/uml-converter.js
        -   default/flow-loader.js

"@sequence":
    js:
        -   "https://cdnjs.cloudflare.com/ajax/libs/raphael/2.1.2/raphael-min.js"
        -   "https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.7.0/underscore-min.js"
        -   "https://cdnjs.cloudflare.com/ajax/libs/js-sequence-diagrams/1.0.4/sequence-diagram-min.js"
        -   default/uml-converter.js
        -   default/sequence-loader.js

"@mathjax":
   js:
        -   default/mathjax-config.js
        -   'https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML'

[Dark][github 2] and [yellow][github 3] theme available. -->

```sequence
Title: Here is a title
A->B: Normal line
B-->C: Dashed line
C->>D: Open arrow
D-->>A: Dashed open arrow
```

<center>
#Code Guide123123
E.TRIBE
</center>

![MarkdownEditing][github]

##목차
<row>
<colum>
###HTML
* 문법
* HTML5
* XHTML
</colum>
</row>

<row>

### Ordered list

1. Item 1
2. Item 2
3. Item 3
4. Item 4

<column>

### Unordered list

* Something
* Something else
* Another thing
* Whatever

</row>


```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page title</title>
  </head>
  <body>
    <img src="images/company-logo.png" alt="Company">
    <h1 class="hello-world">Hello, world!</h1>
  </body>
</html>
```


```html
<a href="#"><img src=""></a>
<h4></h4>
```

```css
.guide_content{
    width:100%;
}
.guide_desc{
    float:left;
    width:44%;
    padding:3% 3% 3% 3%;
}
.guide_source{
    float:left;
    width:44%;
    padding:3% 3% 3% 3%;
}
```

```js
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
```
