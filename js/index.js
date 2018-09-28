window.onload=function(){
    // 参数1，轮播点元素集合
    // 参数2，图片元素集合
    // 参数3，banner盒子元素
    // 参数4，左箭头元素
    // 参数5，右箭头元素
    // 参数6，轮播点选中时类名（string）
    // 参数7，自动轮播的时间间隔（number)ms
    let dots=document.querySelectorAll('.btns li');
    let imgs=document.querySelectorAll('.bannerImg li');
     let banner=document.querySelectorAll('.banner')[0];
     let lbtn=document.querySelectorAll('.btnLeft')[0];
     let rbtn=document.querySelectorAll('.btnRight')[0];
    // console.log(banner);
    // console.log(dots);
    // console.log(imgs);
    // console.log(lbtn);
    // console.log(rbtn);
    banner_oi(dots,imgs,banner,lbtn,rbtn,"hot",1800);
    let mor=document.querySelectorAll(".mor");



    //导航栏变色
    let nav=document.querySelector(".header");
    let lis=document.querySelectorAll(".nav li a");
    // let bannerjl=document.querySelectorAll(".banner")[0];
    console.log(nav);
    console.log(lis);
    // console.log(bannerjl);
    window.onscroll=function () {
        let bodytop=document.body.scrollTop||document.documentElement.scrollTop;
        if(bodytop>20){
            nav.style.backgroundColor="#fff";
            lis.forEach((value,index)=>{
                value.style.color="#000";
            })
            lis[0].style.color=" #16b0dc";
        }
        if(bodytop<=20){
            nav.style.backgroundColor="rgba(0,0,0,0.2)";
            lis.forEach((value,index)=>{
                value.style.color="#fff";
            })
            lis[0].style.color=" #16b0dc";
        }
    }



}