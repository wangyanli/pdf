	var active = 0; 
	 //等待激活计数
	 //鼠标和键盘活动, 重新开始计数
	 document.onmousemove = document.onkeyup = function(){ 
	  active = 0;  //计数器清零
	  }
	  
	 window.setInterval(
  function(){ 
   if(active==3){  
     active = 0;    
	 window.location.href="web/viewer.html";
	}
	else 
			active++;
	},1000);
		
	window.onload=function(){
	var obj=document.getElementsByTagName("html")[0];
	obj.onclick=function(){
		window.location="web/viewer.html"
		}
	}
