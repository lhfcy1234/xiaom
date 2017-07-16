	$(function(){
			var $_shop = $(".h_m_r_shop");
			var $_hide = $(".h_m_r_hide");
			var $_input = $(".search_input input");
			var $_srarch = $(".searchbox");
			var $_n_hide = $(".searchbox .s_hide");
			var $_tip = $(".search_input .s_i_tip ");
			var $_one = $(".n_main .one");
			var $_ul = $(".product .p_main ul");
			var $_product = $(".product");
			//购物车
			$_shop.hover(function(){
				$_hide.stop(true).slideDown();
			},function(){
				$_hide.stop(true).slideUp();
			});
			//搜索框
			 $_input.focus(function(){
				 $_srarch.addClass("hover");
				 $_n_hide.show();
				 $_tip.fadeOut(200);
			 }).blur(function(){
				 $_srarch.removeClass("hover");
				 $_n_hide.hide();
				 $_tip.fadeIn(200);
			 });
			 //下拉选项卡
			 $_one.hover(function(){
				$_product.stop(true).slideDown(300);
			 },function(){
				$_product.stop(true).slideUp(300);
			 });
			 $_product.hover(function(){
				$(this).stop(true).show();
			 },function(){
				$(this).stop(true).slideUp(300);
			 });
			 $_one.hover(function(){
				var $_index = $(this).index();
				$_ul.eq($_index).show().siblings().hide();
			 });
	});
	//banner
	$(function(){
		var $_tabli = $(".tab ul li");
		var $_btn = $(".b_main .btn div");
		var $_picli = $(".b_pic ul li");
		var $_b_main = $(".b_main");
		var $_b_index = 0;
		var timer= null;
		var nowTime = new Date();
		var length = $_tabli.length;
		$_tabli.hover(function(){
			$(this).addClass("hover");
		},function(){
			$(this).removeClass("hover");
		}).click(function(){
			$_b_index = $(this).index();
			fn();
		});
		$_btn.hover(function(){
			$(this).addClass("hover");
		},function(){
			$(this).removeClass("hover");
		}).click(function(){
			if(new Date()-nowTime>800){
				nowTime = new Date();
				var n = $(this).index();
				if(n){
					$_b_index++;
					$_b_index%=length;
				}else{
					$_b_index--;
					if($_b_index<0)$_b_index=length-1;
				}
				fn();
			};
			});
			
		auto();
		$_b_main.hover(function(){
			clearInterval(timer);
		},function(){
			auto();
		});
		function fn(){
			$_tabli.eq($_b_index).addClass("active").siblings().removeClass("active");
			$_picli.eq($_b_index).stop(true).fadeIn("slow").siblings().stop(true).fadeOut("slow");
		};
		function auto(){
			timer = setInterval(function(){
				$_b_index++;
				$_b_index%=length;
				fn();
			},5000);
		};

		//banner_nav
		var $_b_nav = $(".b_nav ul .b_n_l");
		(function(){
			 $_b_nav.hover(function(){
				$(this).find(".b_n_hide").show();
			 },function(){
				$(this).find(".b_n_hide").hide();
			 });
		})();
		//start Goods
		(function(){
			var $Ul = $(".s_g_content");
			var $_btn = $(".s_title .btn div");
			var $_left = $(".s_title .btn .s_b_left");
			var $_right = $(".s_title .btn .s_b_right");
			var $Lilength = miData.starGoods.imgSrc.length;
			var $_index = true;
			var time = null;
			for(var i=0;i<$Lilength;i++){
				$Ul.append( "<li class='s_g_list' style='border-top:1px solid "+miData.starGoods.borderColor[i]+"'>"+
					"<a href='' class='s_g_img'><img src='"+miData.starGoods.imgSrc[i]+"' alt='' width='160' height='160'/></a>"+
					"<a href='' class='s_g_title'>"+miData.starGoods.title[i]+"</a>"+
					"<p class='s_g_detail'>"+miData.starGoods.detail[i]+""+
					"<p class='s_g_price'>"+miData.starGoods.price[i]+"</p>"+
				"</li>");
			}
			var $Li = $(".s_g_content li");
			var $margin =  $Li.eq(5).position().left;
			auto();
			$_btn.click(function(){
				var index = $(this).index();
				if(index){
					if($_index){
						$_index = !$_index;
						toggle();
						$Ul.stop().animate({marginLeft:-$margin+'px'},500);
						clearInterval(timer);
						auto();
					}
				}else{
					if(!$_index){
						$_index = !$_index;
						toggle();
						$Ul.stop().animate({marginLeft:"0px"},500);
						clearInterval(timer);
						auto();
					}
				}
			});
			function toggle(){
				$_left.toggleClass("active");
				$_right.toggleClass("active");
			};
			function auto(){
				timer = setInterval(function(){
					if($_index){
						$_index = !$_index;
						toggle();
						$Ul.stop().animate({marginLeft:-$margin+'px'},500);
					}else{
						$_index = !$_index;
						toggle();
						$Ul.stop().animate({marginLeft:"0px"},500);
				     }
			},6000);
			};
			
		})();
		
		(function(){
			var $new = $(".tag");
			var $div = $("<div id='new'>新品</div>");
			$new.append($div);
		})();
		//match
		(function(){
			var $right = $(".ma_content .ma_c_right");
			var data = miData.match;
			var $title = $('.ma_title ul li');
			$title.eq(0).addClass('hover');
			//循环ul加入right中
			for(var i=0;i<data.length;i++){
				var $r_ul = $("<ul></ul>");
				 $right.append($r_ul);
			}
			$r_ul = $(".ma_content .ma_c_right ul");
			$r_ul.eq(0).show();
			
			//将li放入ul中
			$r_ul.each(function(index){
				for(var j=0;j<9;j++){
					if(j<7){
						$li = $("<li class='bottom'><a href='' class='mc_img'><img src='image/match/"+data.attr[index]+"/"+(j+1)+".jpg' alt='' width='150' height='150'></a><a href='' class='mc_title'>"+data[data.attr[index]].title[j]+"</a><p class='mc_price'>"+data[data.attr[index]].price[j]+"</p><p class='comment'><span>"+data[data.attr[index]].comment[j]+"</span>人评价</p><div class='mc_hide'><span class='m_c_h_review'>做工沒的說，摸起來手感非常細膩，而且比起傳統的插線板...</span><span class='m_c_h_author'> 来自于 林岐城 的评价 </span></div></li>");
					}else if(j==7){
						$li = $("<li class='bottom eight'><a href='' class='mc_image'><img src='image/match/"+data.attr[index]+"/"+(j+1)+".jpg' alt=''width='80' height='80'/></a><a href='' class='mc_tit'>"+data[data.attr[index]].title[j]+"/a><p class='mc_pic'>"+data[data.attr[index]].price[j]+"</p></li>");
					}else{
						$li = $("<li class='nine'><a href='' class='iconfont'>&#xe60c;</a><a href='' class='mc_more'>浏览更多</a><p class='mc_hot'>热门</p></li>");
					}
					$(this).append($li);
				}
			});
			var $li = $('.ma_content .ma_c_right ul li');
			$li.hover(function(){
			$(this).find('.mc_hide').stop().fadeIn(300).animate({
				bottom : 0
			},300);
			},function(){
			$(this).find('.mc_hide').stop().animate({
				bottom : '-75px'
			},300).fadeOut(300);
			});
			$title.hover(function(){
			var index = $(this).index();
			$(this).addClass('hover').siblings().removeClass('hover');
			$r_ul.eq(index).show().siblings().hide();
		});
		})();
		//content
		(function(){
			var $_c_li = $("#content .c_box .c_b_list");
			var color = "";
			var $_b_div = $("#content .c_box .c_b_list .c_btn div");
			var $box_wrap = $("#content .c_box .c_b_list .box-wrap");
			var c_len = $box_wrap.length;
			var $c_tab = $("#content .c_box .c_b_list .c_tab ");
			var $c_tabli = $("#content .c_box .c_b_list .c_tab li"); 
			$_c_li.each(function(i){
				switch(i){
					case 1:
						color = '#3f9';
					break;
					case 2:
						color="#ec0000";
					break;
					case 3:
						color = '#00f';
					break;
				}
				$(this).css('borderColor',color).find("h3").css('color',color);
			});
			$_c_li.hover(function(){
				$(this).find(".c_btn").show();
			},function(){
				$(this).find(".c_btn").hide();
			});
			$box_wrap.each(function(){
				this.a = 0;
			});
			//左右按钮点击时
			$_b_div.click(function(){
				var i = $(this).index();
				var pindex = $(this).parent().parent().index();
				if(i){
					if($box_wrap.eq(pindex)[0].a<c_len-1){
						$box_wrap.eq(pindex)[0].a++;
					}else{
						return;
					}
					
					}else{
					if($box_wrap.eq(pindex)[0].a>0){
						$box_wrap.eq(pindex)[0].a--;
					}else{
						return;
					}
				}
				 $c_tab.eq(pindex).find("li").eq($box_wrap.eq(pindex)[0].a).addClass("on").siblings().removeClass();
				$box_wrap.eq(pindex).animate({'margin-left':-$box_wrap.eq(pindex)[0].a*296+'px'},500);
			});
			$c_tabli.click(function(){
				var index = $(this).index();
				pindex = $(this).parent().parent().parent().index();
				//确定点击的是哪个li
				$box_wrap.eq(pindex)[0].a = index;
				$(this).addClass("on").siblings().removeClass();
				$box_wrap.eq(pindex).animate({
					'margin-left':-$box_wrap.eq(pindex)[0].a*296+'px'
				},500);
			});


		})();
		//video
		(function(){
			var $_img = $("#video .v_content li .v_img");
			var $_i = $("#video .v_content li i.iconfont");
			var $v_hide = $("#video .v_hide");
			var $v_h_li = $("#video .v_content li");
			var $_hide = $("#video .v_hide");
			var $_close = $("#video .v_h_c_header span.iconfont");
			$_img.hover(function(){
				var index = $(this).parent().index();
				$_i.eq(index).addClass("one");
			},function(){
				var a = $(this).parent().index();
				$_i.eq(a).removeClass("one");
			});
			 $_i.hover(function(){
				$(this).addClass("one");
			 },function(){
					$(this).removeClass("one");
				});
			//弹出框
			hsize();
			$(window).resize(hsize);
			function hsize(){
				$v_hide.css({
				'width':$(window).width()+'px',
				'height':$(window).height()+'px'
			});
			};
			$v_h_li.click(function(){
				var t = $(this).find(".p1 a").html();
				$_hide.find('.span1').html(t);
				$_hide.fadeIn(500,function(){
					$(this).find(".v_h_content").animate({
						'opacity':1
					},300,function(){
							$(this).animate({
								'top':'50%'
							},300);
						});
				});
			});
			 $_close.click(function(){
				$(this).parent().parent().animate({
					'top':'-30%',
					opacity:0
				},300,function(){
						$_hide.fadeOut('300');
					});
			 });
			
		})();
	});