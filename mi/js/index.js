//轮播图
//获取节点
var box = document.getElementById("banner");
//var banner_img = document.getElementById("banner_img");
var Imgs = box.getElementsByTagName("img");
var circle = document.getElementById("banner_circle");
var Lis = circle.getElementsByTagName("li");
var Lbtn = document.getElementById("left_btn");
var Rbtn = document.getElementById("right_btn");

var index = 0;//放图片的索引号

//让轮播图动起来
function play(){
	index++;
	index = index==5?0:index;
	//把所有图片隐藏起来
	for(var i = 0;i<Imgs.length;i++){
		Imgs[i].style.opacity = "0";
	}
	
	//小圆点未被选中时 背景：深灰 边框灰色
	for(var i = 0;i<Lis.length;i++){
		Lis[i].style.border = "2px solid rgba(255,255,255,0.3)";
		Lis[i].style.backgroundColor = "rgba(0,0,0,0.4)"
	}
	//把要展示的图片显示出来
	   Imgs[index].style.opacity = "1";
	//小圆点被选中时 背景：白色 边框：深灰
	Lis[index].style.border = "2px solid rgba(0,0,0,0.4)";
	Lis[index].style.backgroundColor = "rgba(255,255,255,0.4)";
}
//添加定时器让图片动起来
setInterval(play,4000);

//点击左边的按钮显示前一张
 Lbtn.onclick = function(){
   	index--;
 	if(index<0){
 		index = 4;
 	}
   	chongfu();
 }
 //点击右边的按钮显示后一张
 Rbtn.onclick = function(){
   	index++;
 	if(index>4){
 		index = 0;
 	}
 	chongfu();
 }
 
 //点击小圆点显示相应的图片
 
 	for(var j = 0;j < Lis.length;j++){
 		Lis[j].suoYin = j;
 		Lis[j].onclick = function(){
	 		index = this.suoYin;
	 		chongfu();
 	}
 	
 }
//把重复出现的代码封装在函数里
function chongfu(){
	index = index==5?0:index;
	//把所有图片隐藏起来
	for(var i = 0;i<Imgs.length;i++){
		Imgs[i].style.opacity = "0";
	}
	
	//小圆点未被选中时 背景：深灰 边框灰色
	for(var i = 0;i<Lis.length;i++){
		Lis[i].style.border = "2px solid #B3B3B3";
		Lis[i].style.backgroundColor = "#929292"
	}
	//把要展示的图片显示出来
	   Imgs[index].style.opacity = "1";
	//小圆点被选中时 背景：白色 边框：深灰
	Lis[index].style.border = "2px solid rgba(0,0,0,0.4)";
	Lis[index].style.backgroundColor = "rgba(255,255,255,0.4)";
}

//滚动条事件
var oshow = document.getElementById("show");
window.onscroll = function(){
	var tall = document.body.scrollTop || document.documentElement.scrollTop;
	if(tall>1100){
		oshow.style.display = "block";
	}else{
		oshow.style.display = "none";
	}
}
oshow.onclick = function(){
	scrollTo(0,0);
}

