// 获取元素的位置
function getCoords(el){
  var box = el.getBoundingClientRect(),
  doc = el.ownerDocument,
  body = doc.body,
  html = doc.documentElement,
  clientTop = html.clientTop || body.clientTop || 0,
  clientLeft = html.clientLeft || body.clientLeft || 0,
  top  = box.top  + (self.pageYOffset || html.scrollTop  ||  body.scrollTop ) - clientTop,
  left = box.left + (self.pageXOffset || html.scrollLeft ||  body.scrollLeft) - clientLeft;
  return { 'top': top, 'left': left };
};

// 获取元素的样式
function getStyle(el, style){
  if(!+"\v1"){
    style = style.replace(/\-(\w)/g, function(all, letter){
      return letter.toUpperCase();
    });
    var value = el.currentStyle[style];
    (value == "auto")&&(value = "0px" );
    return value;
  }else{
    return document.defaultView.getComputedStyle(el, null).getPropertyValue(style);
  }
}
/*
  param:polyX 多边形的横坐标数组
             polyY 多边形的纵坐标数组
            x 要判断的点的横坐标
           y 要判断的点的纵坐标
  return :true 或 false
  author :tangb 2016-3-9
*/
function pointInPolygon(polyX,polyY,x,y){
  var   i,j=polyX.length-1 ; 
  var  oddNodes=0 ;
   
  for (i=0;i<polyX.length; i++) {
    if((polyY[i]< y && polyY[j]>=y
    ||   polyY[j]<y && polyY[i]>=y)
    && (polyX[i]<=x || polyX[j]<=x)) {
      oddNodes^=(polyX[i]+(y-polyY[i])/(polyY[j]-polyY[i])*(polyX[j]-polyX[i])<x);}
      j=i;
  }
  return oddNodes; 
}

// 将坐标转换为元素坐标
function windowToCanvas(canvas, x, y){
  var box = canvas.getBoundingClientRect();
  return {
    x: (x - box.left) * (canvas.width / box.width),
    y: (y - box.top) * (canvas.height / box.height)
  }
}
// 获取鼠标位置对应的元素坐标
function handlerMouse(canvas, e){
  var x = e.clientX,
      y = e.clientY;
  return windowToCanvas(canvas, x, y);
}

// 获取元素的大小
function getDomAttr(el){
  var style = window.getComputedStyle(el, null),
  height = style['height'].slice(0, -2),
  width = style['width'].slice(0, -2),
  padding_left = style['padding-left'].slice(0, -2),
  padding_right = style['padding-right'].slice(0, -2),
  padding_top = style['padding-top'].slice(0, -2),
  padding_bottom = style['padding-bottom'].slice(0, -2);
  return {
    height: +height - (+padding_top) - (+padding_bottom),
    width: +width - (+padding_left) - (+padding_right)
  }
}

// 生成canvas元素
function createMainElement(el){
  var size = getDomAttr(el);
  var canvas = document.createElement("canvas");
  canvas.height = size.height;
  canvas.width = size.width;
  el.innerHTML = "";
  el.appendChild(canvas);
  return canvas;
}
// 获取canvas上下文对象。
function getCtx(el){
  var canvas = createMainElement(el);
  return canvas.getContext("2d");
}





