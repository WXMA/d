//li
$(function(){
				$("ul>li").hover(function(){
					$(this).find("ul").stop().slideDown()
				},function(){
					$(this).find("ul").stop().slideUp()
				})
})

/*图片上下滚动*/
$(function(){
     var len  = $(".num > li").length;  
	 var index = 0;
	 var adTimer;
	 $(".num li").mouseover(function(){
		index  =   $(".num li").index(this);
		showImg(index);
	 }).eq(0).mouseover();	
	 //滑入停止动画，滑出开始动画.
	 $('.banner').hover(function(){
			 clearInterval(adTimer);
		 },function(){
			 adTimer = setInterval(function(){
			    showImg(index)
				index++;
				if(index==len){index=0;}
			  } , 1500);
	 }).trigger("mouseleave");
})
//通过控制top ，来显示不同的幻灯片
function showImg(index){
        var adwidth = $(".banner").width()+20;
		$(".slider").stop(true,false).animate({left:-adwidth*index},1000);
		$(".num li").removeClass("on").eq(index).addClass("on");
}

//03 新闻滚动 
$(function(){
        var $this = $(".scrollNews");
		var scrollTimer;
		$this.hover(function(){
			  clearInterval(scrollTimer);
		 },function(){
		   scrollTimer = setInterval(function(){
						 scrollNews( $this );
					}, 3000 );
		}).trigger("mouseleave");
});

function scrollNews(obj){
   var $self = obj.find("ul:first"); 
   var lineHeight = $self.find("li:first").height(); //获取行高
   $self.animate({ "marginTop" : -lineHeight +"px" }, 600 , function(){
         $self.css({marginTop:0}).find("li:first").appendTo($self); //appendTo能直接移动元素
   })
}

//04 模块展开和折叠 
$(function(){
	 $(".module_up_down").toggle(function(){
			var $self = $(this);
			$self.prev().slideToggle(600,function(){
				  $("img",$self).attr("src","img/tu_07.jpg");
			});
		 },function(){
			var $self = $(this);
			$self.prev().slideToggle(600,function(){
				  $("img",$self).attr("src","img/tu_11.jpg");
			});
	 })
})
//展开与折叠
$(function(){
	 $(".module_up").toggle(function(){
			var $self = $(this);
			$self.prev().slideToggle(600,function(){
				  $("img",$self).attr("src","img/tu_07.jpg");
			});
		 },function(){
			var $self = $(this);
			$self.prev().slideToggle(600,function(){
				  $("img",$self).attr("src","img/tu_11.jpg");
			});
	 })
})
//展开与折叠
$(function(){
	 $(".module_down").toggle(function(){
			var $self = $(this);
			$self.prev().slideToggle(600,function(){
				  $("img",$self).attr("src","img/tu12_06.jpg");
			});
		 },function(){
			var $self = $(this);
			$self.prev().slideToggle(600,function(){
				  $("img",$self).attr("src","img/tu12_03.jpg");
			});
	 })
})

//焦点轮换
$(function(){
	    var page = 1;
	    var i = 1; 
	    //向后 按钮
	    $("span.next").click(function(){
		     var $parent = $(this).parents("div.chen");
			 var $v_show = $parent.find("div.chen-lit"); 
			 var $v_chen = $parent.find("div.v_chen"); 
			 var len = $v_show.find(".chen-lit li").length;
			 var page_count = Math.ceil(len / 1) ;  
			 if( !$v_show.is(":animated") ){ //判断元素是否处于动画状态  无动画状态执行
				$v_show.animate({left:'-='+400},"slow",function(){
					$v_show.css("left","0").find("li:first").appendTo(".chen-lit ul")
				})
			 }
	   });
	    $("span.prev").click(function(){
		     var $parent = $(this).parents("div.chen");
			 var $v_show = $parent.find("div.chen-lit"); 
			 var $v_chen = $parent.find("div.v_chen"); 
			 var len = $v_show.find(".chen-lit li").length;
			 if( !$v_show.is(":animated") ){  
				$v_show.find("li:last").prependTo(".chen-lit ul");
				$v_show.css("left","-400px").animate({left:"0"},"slow")
			}
	    });
	});

//焦点轮换
$(function(){
	    var page = 1;
	    var i = 1; 
	    //向后 按钮
	    $("span.next").click(function(){
		     var $parent = $(this).parents("div.content-2");
			 var $v_show = $parent.find("div.content-lit"); 
			 var $v_content = $parent.find("div.content-2"); 
			 var len = $v_show.find(".content-lit li").length;
			 var page_count = Math.ceil(len / 1) ;  
			 if( !$v_show.is(":animated") ){ //判断元素是否处于动画状态  无动画状态执行
				$v_show.animate({left:'-='+400},"slow",function(){
					$v_show.css("left","0").find("li:first").appendTo(".content-lit ul")
				})
			 }
	   });
	    $("span.prev").click(function(){
		    var $parent = $(this).parents("div.content-2");
			 var $v_show = $parent.find("div.content-lit"); 
			 var $v_content = $parent.find("div.content-2");
			 var len = $v_show.find(".content-lit li").length;
			 if( !$v_show.is(":animated") ){  
				$v_show.find("li:last").prependTo(".content-lit ul");
				$v_show.css("left","-400px").animate({left:"0"},"slow")
			}
	    });
	});
	
//tab切换
$(function(){
				$(".conten div:not('.show')").hide();
				$(".clearfix li").click(function(){
					$(this).addClass("on")
					.siblings().removeClass("on");		
					
					$(".conten div").hide()				
					.eq($(this).index()).show()
					.addClass("show");
				})
			})