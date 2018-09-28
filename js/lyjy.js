window.onload=function(){
    let text=document.querySelector("textarea");
    let input=document.querySelectorAll("input")[0];
    let num=document.querySelector(".text span");
    let btn=document.querySelector(".buttn");
    let ul=document.querySelector(".drrxj");
    let  li=document.querySelectorAll(".drrxj li");
    // console.log(text);
    // console.log(input);
    // console.log(btn);
    // console.log(ul);
    // console.log(li);
    // console.log(num);

    text.oninput=function(){
        let textnum=this.value.length;
        num.innerHTML=textnum;
    }
    btn.onclick=function(){
        let name=input.value;
        let con=text.value;
        // if(name.type=undefined || con.type=undefined){
        //     return;
        // }
        console.log(name,con);
        //模版字符串
        let str=`<li>
				<span class="yi">
					<i class="iconfont icon-gerenzhongxin"></i>
				    <div>
				    	<p>${name}</p>
				    	<p>${con}</p>
				    </div>
				</span>
				<span class="er">
					<p>2018-06-30 23:03:49</p>
				</span>
			</li>
        `;
        //innerHTML----可以识别标签
        ul.innerHTML+=str;
        input.value="";
        text.value="";
        num.innerHTML=0;
    }
}