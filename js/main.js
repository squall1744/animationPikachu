let code =`/*
* 我们来画一只可爱的皮卡丘吧！
* 先来个黄黄的颜色
*/

#preview {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #fee433;
}

.wrapper {
  position: relative;
  width: 100%;
  height: 165px;
}

/*开始画鼻子啦*/
.nose {
  position: absolute;
  left: 50%;
  top: 28px;
  transform: translateX(-50%);
  border-style: solid;
  border-width: 11px 13px; 
  border-color: black transparent transparent;
  border-radius: 50%;
}

/*下来是圆圆的眼睛*/
.eye {
  position: absolute;
  width: 49px;
  height: 49px;
  background: #2e2e2e;
  border-radius: 50%;
  border: 2px solid;
}

/*白白的眼珠*/
.eye::before {
  content: '';
  display: block;
  width: 24px;
  height: 24px;
  background: #fff;
  position: absolute;
  border: 2px solid;
  border-radius: 50%;
  left: 6px;
  top: -1px;
}

/*把左眼的位置摆好*/
.eye.left {
  right: 50%;
  margin-right: 90px;
}

/*把右眼的位置摆好*/
.eye.right {
  left: 50%;
  margin-left: 90px;
}

/*再来个红脸蛋吧*/
.face {
  width: 68px;
  height: 68px;
  background: #fc0d1c;
  position: absolute;
  border-radius: 50%;
  border: 2px solid #000;
}

/*左脸蛋*/
.face.left {
  top: 85px;
  right: 50%;
  margin-right: 116px;
  
}

/*右脸蛋*/
.face.right {
  top: 85px;
  left: 50%;
  margin-left: 116px;
}

/*开始画上嘴唇啦*/
.upperlip {
  position: absolute;
  top: 52px;
  height: 20px;
  width: 60px;
  border: 2px solid black;
  border-top: none;
  background: #fee433;
}

/*左一撇*/
.upperlip.left {
  right: 50%;
  transform: rotate(-20deg);
  border-right: none;
  border-bottom-left-radius: 80px 40px;
}

/*右一撇*/
.upperlip.right {
  left: 50%;
  transform: rotate(20deg);
  border-left: none;
  border-bottom-right-radius: 80px 40px;
}

/*再来一个下嘴唇*/
.lowerlipWrapper {
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 140px;
  height: 124px;
  overflow: hidden;
}

.lowerlip {
  position: absolute;
  bottom: 0;
  width: 140px;
  height: 1000px;
  background: #990513;
  border-radius: 100px/600px;
  border: 2px solid black;
  overflow: hidden;
}

.lowerlip::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 110px;
  height: 100px;
  background: #fc4a62;
  border-radius: 50%;
}

/*我们的皮卡丘画完啦, 可爱吧*/
`
let duration = 50
writeCode('', code)
changeSpeed()





function writeCode(prevCode, code, callback) {
  let n = 0
  let id = setTimeout(function fn() {
    n += 1
    codeArea.innerHTML = Prism.highlight(prevCode + code.substring(0, n), Prism.languages.css, 'css')
    styleTag.innerHTML = prevCode + code.substring(0, n)
    codeArea.scrollTop = codeArea.scrollHeight
    if(n < code.length){
      id = setTimeout(fn, duration)
    }else {

    }
  }, duration)
}

function changeSpeed() {
  $('.actions').on('click','button', e => {
    let $button =$(e.currentTarget)
    let speed = $button.attr('data-speed')
    $button.addClass('active').siblings('.active').removeClass('active')

    switch(speed) {
      case 'slow':
        duration = 100
        break
      case 'medium':
        duration = 50
        break
      case 'fast':
        duration = 10
        break
    }
  })
}