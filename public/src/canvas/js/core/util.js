/* 曲线 二次贝塞尔曲线
	@param{
		startx: 起点x,
		starty: 起点y,
		endx: 终点x,
		endy: 终点y.
	}
	return [x,y] 贝塞尔曲线的控制点
*/
function curve2(startx, starty, endx, endy){
	var middle = [(startx + endx)/2, (starty + endy)/2],
	a = middle[0] - start[0],
	b = middle[1] - start[1],
	deta = (b*b + a*a)/(5*((b*b)/(a*a)+1)),
	x = middle[0] - (b/a)*Math.sqrt(deta),
	y = Math.sqrt(deta) + middle[1];

	return [x, y];
}