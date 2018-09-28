//1,透明度轮播图
function banner_oi(dots,imgs,banner,lbtn,rbtn,hot,second){
	//1,获取元素
	// 参数1，轮播点元素集合
	// 参数2，图片元素集合
	// 参数3，banner盒子元素
	// 参数4，左箭头元素
	// 参数5，右箭头元素
    // 参数6，轮播点选中时类名（string）
    // 参数7，自动轮播的时间间隔（number)ms
	// let dots=document.querySelectorAll('.dot');
	// let imgs=document.querySelectorAll('.banner img');
 //  	let banner=document.querySelectorAll('.banner')[0];
 //  	let lbtn=document.querySelectorAll('.left-btn')[0];
 //  	let rbtn=document.querySelectorAll('.right-btn')[0];
	// console.log(banner);
	// console.log(dots,imgs);
	//2,定义变量
	let num=0;
	let t=setInterval(move,second);
	// 3,初始状态
	imgs[0].style.zIndex=2;
	// dots[0].style.background="#fff";
	dots[0].classList.add(hot);
	//4,鼠标移入每一个轮播点
	for(let i=0;i<dots.length;i++){
		dots[i].onmouseover=function(){
			//4,其余图片层级降低/其余得轮播点样式改变
			for(let j=0;j<dots.length;j++){
				imgs[j].style.zIndex="1";
				// dots[j].style.background="#333";
				dots[j].classList.remove(hot);
			}
			//当前图片层级提高
			imgs[i].style.zIndex="2";
			//对应轮播点样式改变
			// dots[i].style.background="#fff";
			dots[i].classList.add(hot);
			//当鼠标移走后，继续轮播
			num=i;
		}
	}
	//5,实现自动轮播
	function move(){
		num++;
		if(num==imgs.length){
			num=0;
		}
		//其余图片层级降低/其余得轮播点样式改变
	    for(let j=0;j<dots.length;j++){
		    imgs[j].style.zIndex="1";
			// dots[j].style.background="#333";
			dots[j].classList.remove(hot);
		}
		imgs[num].style.zIndex=2;
		// dots[num].style.background="#fff";
		dots[num].classList.add(hot);
	}
    //6,鼠标移入banner，暂停时间间隔函数
	banner.onmouseover=function(){
		clearInterval(t);
	}
	//7,鼠标移出banner，继续时间间隔函数
	banner.onmouseout=function(){
		t=setInterval(move , second);
	}

	//8,点击右键头，同move
	//当flag=true,！flag=false,继续执行
	//当flag=false,!flag=true,return  ,
	rbtn.onclick=function(){
		move();
	}
	//9,点击左箭头
	lbtn.onclick=function(){
		moveL();
	}
	function moveL(){
		num--;
		if(num<0){
			num=imgs.length-1;
		}
		//其余图片层级降低/其余得轮播点样式改变
	    for(let j=0;j<dots.length;j++){
		    imgs[j].style.zIndex="1";
			// dots[j].style.background="#333";
			dots[j].classList.remove(hot);
		}
		imgs[num].style.zIndex=2;
		// dots[num].style.background="#fff";
		dots[num].classList.add(hot);
	}

	//10,窗口失去焦点时，暂停时间间隔函数
	window.onblur=function(){
		clearInterval(t);
	}
	//11,窗口获得焦点时，继续时间间隔函数
	window.onfocus=function(){
		t=setInterval(move,second);
	}
}