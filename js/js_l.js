// JavaScript Document
"use strict";
/*导航栏透明化*/
//$(window).scroll(function() {
//	if($(".navbar").offset().top > 50) {
//		$(".navbar-fixed-top").addClass("top-nav");
//	} else {
//		$(".navbar-fixed-top").removeClass("top-nav");
//	}
//});
/*回到顶部*/
$(document).ready(function() {
	$().UItoTop({
		easingType: 'easeOutQuart'
	});
});
/*志愿者提交按钮功能*/
var a = 0;
$(document).ready(function(){
	$('.submit-j').click(function(){
		a = 0;
		if($('#FirstName').val().length == 0){
			alert("The FirstName cannot be empty/姓不能为空");
			a = 1;
		}
		else if($('#LastName').val().length == 0){
			alert("The LastName cannot be empty/名不能为空");
			a = 1;
		}
		else if($('#EmailAddress').val().length == 0){
			alert("The EmailAddress cannot be empty/邮箱地址不能为空");
			a = 1;
		}
		else if($('#Phone').val().length == 0){
			alert("The Phone cannot be empty/联系方式不能为空");
			a = 1;
		}
		else if($('#Address').val().length == 0){
			alert("The Address cannot be empty/地址不能为空");
			a = 1;
		}
		if(a == 0){
			$('#FirstName').val('');
			$('#LastName').val('');
			$('#EmailAddress').val('');
			$('#Phone').val('');
			$('#Address').val('');
			$('#joinus').toggle();
			$('.submission-of-success').fadeToggle();
			setTimeout(function(){
				$('.submission-of-success').toggle();
				$("#joinus-div").fadeToggle();
				$("#helpus-div").fadeToggle();
				$(".joinus").fadeToggle();
				$(".helpus").fadeToggle();
			},3000);
		}
	});
});
/*图书馆togglt效果*/
$(document).ready(function(){
	$("#pid-1").click(function(){
		$(".grid").slideToggle();
		$("#library-1").slideToggle();
	});
	$("#back-library-1").click(function(){
		$("#library-1").slideToggle();
		$(".grid").slideToggle();
	})
	$("#pid-2").click(function(){
		$(".grid").slideToggle();
		$("#library-2").slideToggle();
	});
	$("#back-library-2").click(function(){
		$("#library-2").slideToggle();
		$(".grid").slideToggle();
	})
	$("#pid-3").click(function(){
		$(".grid").slideToggle();
		$("#library-3").slideToggle();
	});
	$("#back-library-3").click(function(){
		$("#library-3").slideToggle();
		$(".grid").slideToggle();
	})
	$("#pid-4").click(function(){
		$(".grid").slideToggle();
		$("#library-4").slideToggle();
	});
	$("#back-library-4").click(function(){
		$("#library-4").slideToggle();
		$(".grid").slideToggle();
	})
	$("#pid-5").click(function(){
		$(".grid").slideToggle();
		$("#library-5").slideToggle();
	});
	$("#back-library-5").click(function(){
		$("#library-5").slideToggle();
		$(".grid").slideToggle();
	})
	$("#pid-6").click(function(){
		$(".grid").slideToggle();
		$("#library-6").slideToggle();
	});
	$("#back-library-6").click(function(){
		$("#library-6").slideToggle();
		$(".grid").slideToggle();
	})
})
/*图书馆页面/返回，提交 hover效果*/
/*$(document).ready(function(){
	$(".library .functional-keys #back-library-1").hover(function(){
		$(".library .functional-keys #back-library-1").css({"background":"#DCDCDC","box-shadow":"1px 1px 4px #ccc"});
		$(".library .functional-keys .text-back").fadeToggle();
	},function(){
		$(".library .functional-keys #back-library-1").css({"background":"","box-shadow":""});
		$(".library .functional-keys .text-back").fadeToggle();
	});
	$(".library .functional-keys #back-library-2").hover(function(){
		$(".library .functional-keys #back-library-2").css({"background":"#DCDCDC","box-shadow":"1px 1px 4px #ccc"});
		$(".library .functional-keys .text-back").fadeToggle();
	},function(){
		$(".library .functional-keys #back-library-2").css({"background":"","box-shadow":""});
		$(".library .functional-keys .text-back").fadeToggle();
	});
	$(".library .functional-keys #add-library-2").hover(function(){
		$(".library .functional-keys #add-library-2").css({"background":"#DCDCDC","box-shadow":"1px 1px 4px #ccc"});
		$(".library .functional-keys .text-more").fadeToggle();
	},function(){
		$(".library .functional-keys #add-library-2").css({"background":"","box-shadow":""});
		$(".library .functional-keys .text-more").fadeToggle();
	});
	$(".library .functional-keys #back-library-3").hover(function(){
		$(".library .functional-keys #back-library-3").css({"background":"#DCDCDC","box-shadow":"1px 1px 4px #ccc"});
		$(".library .functional-keys .text-back").fadeToggle();
	},function(){
		$(".library .functional-keys #back-library-3").css({"background":"","box-shadow":""});
		$(".library .functional-keys .text-back").fadeToggle();
	});
	$(".library .functional-keys #add-library-3").hover(function(){
		$(".library .functional-keys #add-library-3").css({"background":"#DCDCDC","box-shadow":"1px 1px 4px #ccc"});
		$(".library .functional-keys .text-more").fadeToggle();
	},function(){
		$(".library .functional-keys #add-library-3").css({"background":"","box-shadow":""});
		$(".library .functional-keys .text-more").fadeToggle();
	});
	$(".library .functional-keys #back-library-4").hover(function(){
		$(".library .functional-keys #back-library-4").css({"background":"#DCDCDC","box-shadow":"1px 1px 4px #ccc"});
		$(".library .functional-keys .text-back").fadeToggle();
	},function(){
		$(".library .functional-keys #back-library-4").css({"background":"","box-shadow":""});
		$(".library .functional-keys .text-back").fadeToggle();
	});
	$(".library .functional-keys #add-library-4").hover(function(){
		$(".library .functional-keys #add-library-4").css({"background":"#DCDCDC","box-shadow":"1px 1px 4px #ccc"});
		$(".library .functional-keys .text-more").fadeToggle();
	},function(){
		$(".library .functional-keys #add-library-4").css({"background":"","box-shadow":""});
		$(".library .functional-keys .text-more").fadeToggle();
	});
	$(".library .functional-keys #back-library-5").hover(function(){
		$(".library .functional-keys #back-library-5").css({"background":"#DCDCDC","box-shadow":"1px 1px 4px #ccc"});
		$(".library .functional-keys .text-back").fadeToggle();
	},function(){
		$(".library .functional-keys #back-library-5").css({"background":"","box-shadow":""});
		$(".library .functional-keys .text-back").fadeToggle();
	});
	$(".library .functional-keys #add-library-5").hover(function(){
		$(".library .functional-keys #add-library-5").css({"background":"#DCDCDC","box-shadow":"1px 1px 4px #ccc"});
		$(".library .functional-keys .text-more").fadeToggle();
	},function(){
		$(".library .functional-keys #add-library-5").css({"background":"","box-shadow":""});
		$(".library .functional-keys .text-more").fadeToggle();
	});
	$(".library .functional-keys #back-library-6").hover(function(){
		$(".library .functional-keys #back-library-6").css({"background":"#DCDCDC","box-shadow":"1px 1px 4px #ccc"});
		$(".library .functional-keys .text-back").fadeToggle();
	},function(){
		$(".library .functional-keys #back-library-6").css({"background":"","box-shadow":""});
		$(".library .functional-keys .text-back").fadeToggle();
	});
	$(".library .functional-keys #add-library-6").hover(function(){
		$(".library .functional-keys #add-library-6").css({"background":"#DCDCDC","box-shadow":"1px 1px 4px #ccc"});
		$(".library .functional-keys .text-more").fadeToggle();
	},function(){
		$(".library .functional-keys #add-library-6").css({"background":"","box-shadow":""});
		$(".library .functional-keys .text-more").fadeToggle();
	});
});*/
/*导航栏自适应*/
$(function(){
	var _flag = 1;
	var _flag_footer = 1;
	if($(window).width()<975){
		$("#nav1").toggle();
		$("#nav2").toggle();
		$("#nav3").toggle();
		$("#nav4").toggle();
		$("#nav5").toggle();
		$("#dropdown").toggle();
		_flag = 0;
		}
		if ($(window).width()<975){
        $("#footer-nav").toggle();
        _flag_footer = 0;
        }
	$(window).resize(function(){
		if($(window).width()<975 && _flag == 1){
		$("#nav1").toggle();
		$("#nav2").toggle();
		$("#nav3").toggle();
		$("#nav4").toggle();
		$("#nav5").toggle();
		$("#dropdown").toggle();
		_flag = 0;
		}
		if($(window).width()<975 && _flag_footer == 1)
        {
            $("#footer-nav").toggle();
            _flag_footer = 0;
        }
		if($(window).width()>=975 && _flag == 0){
		$("#nav1").toggle();
		$("#nav2").toggle();
		$("#nav3").toggle();
		$("#nav4").toggle();
		$("#nav5").toggle();
		$("#dropdown").toggle();
		_flag = 1;
		}
		if($(window).width()>=975 && _flag_footer == 0){
		    $("#footer-nav").toggle();
		    _flag_footer = 1;
        }
	})
})
/*导航栏高亮*/
$(function(){
	var urlstr = location.href;　　　　//获取浏览器的url
	var urlstatus=false;//标记
	//遍历导航div
	$(".my-navbar a").each(function () {
		//判断导航里面的rel和url地址是否相等
		if ((urlstr + '/').indexOf($(this).attr('href')) > -1&&$(this).attr('href')!='') {
			$(this).css('cssText','color:#ec4700!important'); urlstatus = true;
		}
		else {
			$(this).css('cssText','color:#666666');
		}
	});
//当前样式保持
	if (!urlstatus) {
		$(".my-navbar a").eq(0).css('cssText','color:#ec4700!important'); }
	});
/*药物研究了解更多按钮*/
$(function(){
        //simple dialog
        //stantard dialog
  $('#btn-stantard').click(function(){
       $('#stantard-dialogBox').dialogBox({
          title: ' ',
          hasClose: true,
          content: '\n' +
          '\n' +
          '\t\t<h4>国内罕见药研发仍处空白</h4>\t\t\t\t\t　　<p>罕用药，指用于预防、治疗、诊断罕见病的药品，由于人群少、市场需求小、研发成本高，很少有制药企业关注其治疗药物的研发，也有人将这些药也被形象地称为“孤儿药”。<br>\n' +
          '\t\t\t\t\t\t　　目前，我国对于罕用药的研发仍处于一片空白，罕见病患者的治疗药物基本依赖国外进口，结果造成很多罕见病患者只能选择昂贵的进口药或者无药可用。</p>\n'
       });
   });
   $('#btn-stantard-1').click(function(){
       $('#stantard-dialogBox-1').dialogBox({
           title: ' ',
           hasClose: true,
           content: '\t\t<h4>唯一药物退出中国 逾万罕见病患者无药可治</h4>\t\t\t\t\t　<p>德国医药巨头——拜耳公司旗下药物“倍泰龙”即将退出中国。倍泰龙是目前中国市场上唯一可降低多发性硬化症发作频率的药物。中国正在使用该药物的患者共有近千名，他们即将面临断药的困境。</p>'
       });
   });
   $('#btn-stantard-2').click(function(){
       $('#stantard-dialogBox-2').dialogBox({
           title: ' ',
           hasClose: true,
           content: '\t\t<h4>药物临床试验机构资格认定复核检查公告</h4>\t\t\t\t\t<p>根据《中华人民共和国药品管理法》《药物临床试验机构资格认定办法(试行)》和《药物临床试验机构资格认定复核检查工作方案》的有关规定，经现场检查、技术审核以及国家食品药品监督管理总局、国家卫生和计划生育委员会联合会审，认定28家医疗机构及所列专业通过药物临床试验机构资格认定复核检查。<br>\n' +
           '            特此公告。<br>\n' +
           '        附件：<a href="http://www.yiyaojie.com/uploads/soft/20180106/20180106011731.doc">通过药物临床试验机构资格认定复核检查的医疗机构及其专业</a></p>'
       });
   });
        //custom size dialogBox
})
/* 弹窗 */

;(function($,window,document){

    var pluginName = 'dialogBox',
        defaults = {

            width: null, //弹出层宽度
            height: null,  //弹出层高度
            autoSize: true,  //是否自适应尺寸,默认自适应
            autoHide: false,  //是否自自动消失，配合time参数共用
            time: 3000,  //自动消失时间，单位毫秒
            zIndex: 99999,  //弹出层定位层级
            hasMask: false,  //是否显示遮罩层
            hasClose: false,  //是否显示关闭按钮
            hasBtn: false,  //是否显示操作按钮，如取消，确定
            confirmValue: null,  //确定按钮文字内容
            confirm: function(){}, //点击确定后回调函数
            cancelValue: null,  //取消按钮文字内容
            cancel: function(){},  //点击取消后回调函数，默认关闭弹出框
            effect: '', //动画效果：fade(默认),newspaper,fall,scaled,flip-horizontal,flip-vertical,sign,
            type: 'normal', //对话框类型：normal,correct,error
            title: '',  //标题内容
            content: ''  //正文内容

        };

    function DialogBox(element,options){
        this.element = element;
        this.settings = $.extend({}, defaults, options);
        this.init();
    }

    DialogBox.prototype = {

        //初始化弹出框
        init: function(){
            var that = this,
                element = this.element;

            that.render(element);//进行渲染
            that.setStyle();//建立样式
            that.show();//展示对话框
            that.trigger(element);//触发input中的方法
        },

        //创建弹出框
        create: function(element){
            var that = this,
                $this = $(element),
                title =  that.settings.title,
                hasBtn = that.settings.hasBtn,
                hasMask = that.settings.hasMask,
                hasClose = that.settings.hasClose,
                confirmValue = that.settings.confirmValue,
                cancelValue = that.settings.cancelValue,
                dialogHTML = [];


            if(!title){
                dialogHTML[0] = '<section class="dialog-box"><div class="dialog-box-container"><div class="dialog-box-content"></div>';
            }else{
                if(!hasClose){
                    dialogHTML[0] = '<section class="dialog-box"><div class="dialog-box-container"><div class="dialog-box-title"><h3>'+ title + '</h3></div><div class="dialog-box-content"></div>';
                }else{
                    dialogHTML[0] = '<section class="dialog-box"><div class="dialog-box-container"><div class="dialog-box-title"><h3>'+ title + '</h3><span class="dialog-box-close">×</span></div><div class="dialog-box-content"></div>';
                }
            }

            if(!hasBtn){
                dialogHTML[1] = '</div></section>';
            }else{
                if(confirmValue && cancelValue){
                    dialogHTML[1] = '<div class="dialog-btn"><span class="dialog-btn-cancel">' + cancelValue + '</span><span class="dialog-btn-confirm">' + confirmValue + '</span></div></div></section>';
                }else if(cancelValue){
                    dialogHTML[1] = '<div class="dialog-btn"><span class="dialog-btn-cancel">' + cancelValue + '</span></div></div></section>';
                }else if(confirmValue){
                    dialogHTML[1] = '<div class="dialog-btn"><span class="dialog-btn-confirm">' + confirmValue + '</span></div></div></section>';
                }else{
                    dialogHTML[1] = '<div class="dialog-btn"><span class="dialog-btn-cancel">取消</span><span class="dialog-btn-confirm">确定</span></div></div></section>';
                }
            }

            if(!hasMask){
                dialogHTML[2] = '';
            }else{
                dialogHTML[2] = '<div id="dialog-box-mask"></div>';
            }

            return dialogHTML;
        },

        //渲染弹出框
        render: function(element){
            var that = this,
                $this = $(element),
                dialogHTML = that.create($this),
                $content = that.parseContent();

            $this.replaceWith(dialogHTML[0] + dialogHTML[1]);

            if(typeof($content) === 'object'){
                $content.appendTo('.dialog-box-content');
            }else{
                $('.dialog-box-content').append($content);
            }

            $('body').append(dialogHTML[2]);
        },

        //解析并处理弹出框内容
        parseContent: function(){
            var that = this,
                content = that.settings.content,
                width = that.settings.width,
                height = that.settings.height,
                type = that.settings.type,
                $iframe = $('<iframe>'),
                random = '?tmp=' + Math.random(),
                urlReg = /^(https?:\/\/|\/|\.\/|\.\.\/)/;

            if(urlReg.test(content)){

                $iframe.attr({
                    src: content + random,
                    frameborder: 'no',
                    scrolling: 'no',
                    name: 'dialog-box-iframe',
                    id: 'dialog-box-iframe'
                })
                    .on('load',function(){

                        //动态自适应iframe高度;
                        var $iframe = $(window.frames['dialog-box-iframe'].document),
                            $iframeBody = $(window.frames['dialog-box-iframe'].document.body),
                            iframeWidth = $iframe.outerWidth() - 8,
                            iframeHeight = $iframe.outerHeight() - 16,
                            $dialogBox = $('.dialog-box'),
                            $content = $('.dialog-box-content'),
                            $container = $('.dialog-box-container');

                        dialogBoxWidth = iframeWidth + 40;
                        dialogBoxHeight = iframeHeight + 126;

                        if(that.settings.autoSize){
                            $(this).width(iframeWidth);
                            $(this).height(iframeHeight);

                            $iframeBody.css({
                                margin: '0',
                                padding: '0'
                            });

                            $content.css({
                                width: iframeWidth + 'px',
                                height: iframeHeight + 'px'
                            });

                            $container.css({
                                width: dialogBoxWidth + 'px',
                                height: dialogBoxHeight + 'px'
                            });

                            $dialogBox.css({
                                width: dialogBoxWidth,
                                height: function(){
                                    if(type === '' || type === 'normal'){
                                        return dialogBoxHeight +'px';
                                    }else if(type === 'error' || type === 'correct'){
                                        dialogBoxHeight = dialogBoxHeight + 8;
                                        return dialogBoxHeight + 'px';
                                    }
                                },
                                'margin-top': function(){
                                    if(type === '' || type === 'normal'){
                                        dialogBoxHeight = dialogBoxHeight;
                                        return -Math.round(dialogBoxHeight/2) + 'px';
                                    }else if(type === 'error' || type === 'correct'){
                                        dialogBoxHeight = dialogBoxHeight + 4;
                                        return -Math.round(dialogBoxHeight/2) + 'px';
                                    }
                                },
                                'margin-left': -Math.round(dialogBoxWidth/2) + 'px'
                            });

                        }else{
                            $(this).width(that.settings.width - 40);
                            $(this).height(that.settings.height - 126);
                        }
                    });
                return $iframe;
            }else{
                return content;
            }
        },

        //显示弹出框
        show: function(){
            $('.dialog-box').css({display:'block'});

            setTimeout(function(){
                $('.dialog-box').addClass('show');
            },50)

            $('#dialog-box-mask').show();
        },

        //隐藏弹出框
        hide: function(element){
            var $this = $(element),
                $dialogBox = $('.dialog-box'),
                $iframe = $('#dialogBox-box-iframe');

            $dialogBox.removeClass('show');

            setTimeout(function(){
                if($iframe){
                    $iframe.attr('src','_blank');
                }

                $dialogBox.replaceWith('<div id="' + $this.attr('id') + '"></div/>');
                $('#dialog-box-mask').remove();
            },150)
        },

        //设置弹出框样式
        setStyle: function(){
            var that = this,
                $dialog = $('.dialog-box'),
                $container = $('.dialog-box-container'),
                $content = $('.dialog-box-content'),
                $mask  = $('#dialog-box-mask'),
                type = that.settings.type,
                EFFECT = 'effect';

            //弹出框外框样式
            $dialog.css({
                width: function(){
                    if(that.settings.width){
                        return that.settings.width + 'px';
                    }else{
                        return;
                    }
                },
                height: function(){
                    if(that.settings.height){
                        if(type === '' || type === 'normal'){
                            return that.settings.height + 'px';
                        }else if(type === 'error' || type === 'correct'){
                            return that.settings.height + 4 + 'px';
                        }
                    }else{
                        return;
                    }
                },
                'margin-top': function(){
                    var height;
                    if(type === '' || type === 'normal'){
                        height = that.settings.height;
                    }else if(type === 'error' || type === 'correct'){
                        height = that.settings.height + 4;
                    }
                    return -Math.round(height/2) + 'px';
                },
                'margin-left': function(){
                    var width = $(this).width();
                    return -Math.round(width/2) + 'px';
                },
                'z-index': that.settings.zIndex
            });

            //弹出框内层容器样式
            $container.css({
                width: function(){
                    if(that.settings.width){
                        return that.settings.width + 'px';
                    }else{
                        return;
                    }
                },
                height: function(){
                    if(that.settings.height){
                        return that.settings.height + 'px';
                    }else{
                        return;
                    }
                },
            });

            //弹出框内容样式
            $content.css({
                width: function(){
                    if(that.settings.width){
                        return that.settings.width - 40 + 'px';
                    }else{
                        return;
                    }
                },
                height: function(){
                    if(that.settings.height){
                        return that.settings.height - 126 + 'px';
                    }else{
                        return;
                    }
                }
            });

            //遮罩层样式
            $mask.css({
                height: $(document).height() + 'px'
            });


            //判断弹出框类型
            switch(that.settings.type){
                case 'correct':
                    $container.addClass('correct');
                    break;
                case 'error':
                    $container.addClass('error');
                    break;
                default:
                    $container.addClass('normal');;
                    break;
            }

            //弹出框多种动画效果
            switch(that.settings.effect){
                case 'newspaper':
                    $dialog.addClass(EFFECT + '-newspaper');
                    break;
                case 'fall':
                    $dialog.addClass(EFFECT + '-fall');
                    break;
                case 'scaled':
                    $dialog.addClass(EFFECT + '-scaled');
                    break;
                case 'flip-horizontal':
                    $dialog.addClass(EFFECT + '-flip-horizontal');
                    break;
                case 'flip-vertical':
                    $dialog.addClass(EFFECT + '-flip-vertical');
                    break;
                case 'sign':
                    $dialog.addClass(EFFECT + '-sign');
                    break;
                default:
                    $dialog.addClass(EFFECT + '-fade');
                    break;
            }

        },

        //弹出框触屏器(系列事件)
        trigger: function(element,event){
            var that = this,
                $this = $(element);

            $('.dialog-box-close,#dialog-box-mask,.dialog-btn-cancel,.dialog-btn-confirm').on('click',function(){
                that.hide($this);
            });

            $(document).keyup(function(event){
                if(event.keyCode === 27){
                    that.hide($this);
                }
            });

            if(that.settings.autoHide){
                setTimeout(function(){
                    that.hide($this);
                },that.settings.time)
            }

            if($.isFunction(that.settings.confirm)){
                $('.dialog-btn-confirm').on('click',function(){
                    that.settings.confirm();
                })
            }

            if($.isFunction(that.settings.cancel)){
                $('.dialog-btn-cancel').on('click',function(){
                    that.settings.cancel();
                })
            }

        }

    };

    $.fn[pluginName] = function(options) {
        this.each(function() {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new DialogBox(this, options));
            }
        });
        return this;
    };

})(jQuery,window,document)
/*弹窗 end */
/*病友故事会*/
$(function() {

				var ghostNode = $('#masonry_ghost').find('.thumbnail'),
					i, ghostIndexArray = [];
				var ghostCount = ghostNode.length;
				for(i = 0; i < ghostCount; i++) {
					ghostIndexArray[i] = i;
				}
				ghostIndexArray.sort(function(a, b) {
					if(Math.random() > 0.5) {
						return a - b;
					} else {
						return b - a;
					}
				});

				var currentIndex = 0;
				var masNode = $('#masonry');
				var imagesLoading = false;

				function getNewItems() {
					var newItemContainer = $('<div/>');
					for(var i = 0; i < 6; i++) {
						if(currentIndex < ghostCount) {
							newItemContainer.append(ghostNode.get(ghostIndexArray[currentIndex]));
							currentIndex++;
						}
					}
					return newItemContainer.find('.thumbnail');
				}

				function processNewItems(items) {
					items.each(function() {
						var $this = $(this);
						var imgsNode = $this.find('.imgs');
						var title = $this.find('.title').text();
						var author = $this.find('.author').text();
						title += '&nbsp;&nbsp;(' + author + ')';
						var lightboxName = 'lightbox_'; // + imgNames[0];

						var imgNames = imgsNode.find('input[type=hidden]').val().split(',');

					});
				}

				function initMasonry() {
					var items = getNewItems().css('opacity', 0);
					processNewItems(items);
					masNode.append(items);

					imagesLoading = true;
					items.imagesLoaded(function() {
						imagesLoading = false;
						items.css('opacity', 1);
						masNode.masonry({
							itemSelector: '.thumbnail',
							isFitWidth: true
						});
					});
				}

				function appendToMasonry() {
					var items = getNewItems().css('opacity', 0);
					processNewItems(items);
					masNode.append(items);

					imagesLoading = true;
					items.imagesLoaded(function() {
						imagesLoading = false;
						items.css('opacity', 1);
						masNode.masonry('appended', items);
					});
				}

				initMasonry();

				$(window).scroll(function() {

					if($(document).height() - $(window).height() - $(document).scrollTop() < 10) {

						if(!imagesLoading) {
							appendToMasonry();
						}

					}

				});

				function randomColor() {
					var rand = Math.floor(Math.random() * 0xFFFFFF).toString(16);
					for(; rand.length < 6;) {
						rand = '0' + rand;
					}
					return '#' + rand;
				}

			});
/*市县二级选择*/
// var list1 = new Array;
//     var list2 = new Array;
//     list1[list1.length] = "北京市";
//     list1[list1.length] = "天津市";
//     list1[list1.length] = "河北省";
//     list1[list1.length] = "山西省";
//     list1[list1.length] = "内蒙古";
//     list1[list1.length] = "辽宁省";
//     list1[list1.length] = "吉林省";
//     list1[list1.length] = "黑龙江省";
//     list1[list1.length] = "上海市";
//     list1[list1.length] = "江苏省";
//     list1[list1.length] = "浙江省";
//     list1[list1.length] = "安徽省";
//     list1[list1.length] = "福建省";
//     list1[list1.length] = "江西省";
//     list1[list1.length] = "山东省";
//     list1[list1.length] = "河南省";
//     list1[list1.length] = "湖北省";
//     list1[list1.length] = "湖南省";
//     list1[list1.length] = "广东省";
//     list1[list1.length] = "广西自治区";
//     list1[list1.length] = "海南省";
//     list1[list1.length] = "重庆市";
//     list1[list1.length] = "四川省";
//     list1[list1.length] = "贵州省";
//     list1[list1.length] = "云南省";
//     list1[list1.length] = "西藏自治区";
//     list1[list1.length] = "陕西省";
//     list1[list1.length] = "甘肃省";
//     list1[list1.length] = "青海省";
//     list1[list1.length] = "宁夏回族自治区";
//     list1[list1.length] = "新疆维吾尔自治区";
//     list1[list1.length] = "香港特别行政区";
//     list1[list1.length] = "澳门特别行政区";
//     list1[list1.length] = "台湾省";
//     list1[list1.length] = "其它";
//
//     list2[list2.length] = new Array("北京", "东城区", "西城区", "崇文区", "宣武区", "朝阳区", "丰台区", "石景山区", " 海淀区（中关村）", "门头沟区", "房山区", "通州区", "顺义区", "昌平区", "大兴区", "怀柔区", "平谷区", "密云县", "延庆县", " 其他");
//     list2[list2.length] = new Array("和平区", "河东区", "河西区", "南开区", "红桥区", "塘沽区", "汉沽区", "大港区",
//                 "西青区", "津南区", "武清区", "蓟县", "宁河县", "静海县", "其他");
//     list2[list2.length] = new Array("石家庄市", "张家口市", "承德市", "秦皇岛市", "唐山市", "廊坊市", "衡水市",
//                 "沧州市", "邢台市", "邯郸市", "保定市", "其他");
//     list2[list2.length] = new Array("太原市", "朔州市", "大同市", "长治市", "晋城市", "忻州市", "晋中市", "临汾市",
//                 "吕梁市", "运城市", "其他");
//     list2[list2.length] = new Array("呼和浩特市", "包头市", "赤峰市", "呼伦贝尔市", "鄂尔多斯市", "乌兰察布市",
//                 "巴彦淖尔市", "兴安盟", "阿拉善盟", "锡林郭勒盟", "其他");
//     list2[list2.length] = new Array("沈阳市", "朝阳市", "阜新市", "铁岭市", "抚顺市", "丹东市", "本溪市", "辽阳市",
//                 "鞍山市", "大连市", "营口市", "盘锦市", "锦州市", "葫芦岛市", "其他");
//     list2[list2.length] = new Array("长春市", "白城市", "吉林市", "四平市", "辽源市", "通化市", "白山市", "延边朝鲜族自治州", "其他");
//     list2[list2.length] = new Array("哈尔滨市", "七台河市", "黑河市", "大庆市", "齐齐哈尔市", "伊春市", "佳木斯市",
//                 "双鸭山市", "鸡西市", "大兴安岭地区(加格达奇)", "牡丹江", "鹤岗市", "绥化市　", "其他");
//     list2[list2.length] = new Array("黄浦区", "卢湾区", "徐汇区", "长宁区", "静安区", "普陀区", "闸北区", "虹口区",
//                 "杨浦区", "闵行区", "宝山区", "嘉定区", "浦东新区", "金山区", "松江区", "青浦区", "南汇区", "奉贤区", "崇明县", "其他");
//     list2[list2.length] = new Array("南京市", "徐州市", "连云港市", "宿迁市", "淮安市", "盐城市", "扬州市", "泰州市",
//                 "南通市", "镇江市", "常州市", "无锡市", "苏州市", "其他");
//     list2[list2.length] = new Array("杭州市", "湖州市", "嘉兴市", "舟山市", "宁波市", "绍兴市", "衢州市", "金华市",
//                 "台州市", "温州市", "丽水市", "其他");
//     list2[list2.length] = new Array("合肥市", "宿州市", "淮北市", "亳州市", "阜阳市", "蚌埠市", "淮南市", "滁州市",
//                 "马鞍山市", "芜湖市", "铜陵市", "安庆市", "黄山市", "六安市", "巢湖市", "池州市", "宣城市", "其他");
//     list2[list2.length] = new Array("福州市", "南平市", "莆田市", "三明市", "泉州市", "厦门市", "漳州市", "龙岩市", "宁德市", "其他");
//     list2[list2.length] = new Array("南昌市", "九江市", "景德镇市", "鹰潭市", "新余市", "萍乡市", "赣州市", "上饶市",
//                 "抚州市", "宜春市", "吉安市", "其他");
//     list2[list2.length] = new Array("济南市", "聊城市", "德州市", "东营市", "淄博市", "潍坊市", "烟台市", "威海市",
//                 "青岛市", "日照市", "临沂市", "枣庄市", "济宁市", "泰安市", "莱芜市", "滨州市", "菏泽市", "其他");
//     list2[list2.length] = new Array("郑州市", "三门峡市", "洛阳市", "焦作市", "新乡市", "鹤壁市", "安阳市", "濮阳市",
//                 "开封市", "商丘市", "许昌市", "漯河市", "平顶山市", "南阳市", "信阳市", "周口市", "驻马店市", "其他");
//     list2[list2.length] = new Array("武汉市", "十堰市", "襄樊市", "荆门市", "孝感市", "黄冈市", "鄂州市", "黄石市",
//                 "咸宁市", "荆州市", "宜昌市", "随州市", "恩施土家族苗族自治州", "仙桃市", "天门市", "潜江市", "神农架林区", "其他");
//     list2[list2.length] = new Array("长沙市", "张家界市", "常德市", "益阳市", "岳阳市", "株洲市", "湘潭市", "衡阳市",
//                 "郴州市", "永州市", "邵阳市", "怀化市", "娄底市", "湘西土家族苗族自治州", "其他");
//     list2[list2.length] = new Array("广州市", "清远市市", "韶关市", "河源市", "梅州市", "潮州市", "汕头市", "揭阳市",
//                 "汕尾市", " 惠州市", "东莞市", "深圳市", "珠海市", "中山市", "江门市", "佛山市", "肇庆市", "云浮市",
//                 "阳江市", "茂名市", "湛江市", " 其他");
//     list2[list2.length] = new Array("南宁市", "桂林市", "柳州市", "梧州市", "贵港市", "玉林市", "钦州市", "北海市",
//                 "防城港市", "崇左市", "百色市", "河池市", "来宾市", "贺州市", "其他");
//     list2[list2.length] = new Array("海口市", "三亚市", "其他");
//     list2[list2.length] = new Array("渝中区", "大渡口区", "江北区", "沙坪坝区", "九龙坡区", "南岸区", "北碚区",
//                 "万盛区", "双桥区", "渝北区", "巴南区", "万州区", "涪陵区", "黔江区", "长寿区", "合川市", "永川市",
//                 "江津市", "南川市", "綦江县", "潼南县", "铜梁县", "大足县", "璧山县", "垫江县", "武隆县", "丰都县",
//                 "城口县", "开县", "巫溪县", "巫山县", "奉节县", "云阳县", "忠县", "石柱土家族自治县", "彭水苗族土家族自治县",
//                 "酉阳土家族苗族自治县", "秀山土家族苗族自治县", "其他");
//     list2[list2.length] = new Array("成都市", "广元市", "绵阳市", "德阳市", "南充市", "广安市", "遂宁市",
//                 "内江市", "乐山市", "自贡市", "泸州市", "宜宾市", "攀枝花市", "巴中市", "资阳市", "眉山市", "雅安",
//                 "阿坝藏族羌族自治州", "甘孜藏族自治州", "凉山彝族自治州县", "其他");
//     list2[list2.length] = new Array("贵阳市", "六盘水市", "遵义市", "安顺市", "毕节地区", "铜仁地区",
//                 "黔东南苗族侗族自治州", "黔南布依族苗族自治州", "黔西南布依族苗族自治州", "其他");
//     list2[list2.length] = new Array("昆明市", "曲靖市", "玉溪市", "保山市", "昭通市", "丽江市", "普洱市",
//                 "临沧市", "宁德市", "德宏傣族景颇族自治州", "怒江傈僳族自治州", "楚雄彝族自治州", "红河哈尼族彝族自治州",
//                 "文山壮族苗族自治州", "大理白族自治州", "迪庆藏族自治州", "西双版纳傣族自治州", "其他");
//     list2[list2.length] = new Array("拉萨市", "那曲地区", "昌都地区", "林芝地区", "山南地区", "日喀则地区", "阿里地区", "其他");
//     list2[list2.length] = new Array("西安市", "延安市", "铜川市", "渭南市", "咸阳市", "宝鸡市", "汉中市", "安康市", "商洛市", "其他");
//     list2[list2.length] = new Array("兰州市 ", "嘉峪关市", "金昌市", "白银市", "天水市", "武威市", "酒泉市",
//                 "张掖市", "庆阳市", "平凉市", "定西市", "陇南市", "临夏回族自治州", "甘南藏族自治州", "其他");
//     list2[list2.length] = new Array("西宁市", "海东地区", "海北藏族自治州", "黄南藏族自治州", "玉树藏族自治州",
//                 "海南藏族自治州", "果洛藏族自治州", "海西蒙古族藏族自治州", "其他");
//     list2[list2.length] = new Array("银川市", "石嘴山市", "吴忠市", "固原市", "中卫市", "其他");
//     list2[list2.length] = new Array("乌鲁木齐市", "克拉玛依市", "喀什地区", "阿克苏地区", "和田地区", "吐鲁番地区",
//                 "哈密地区", "塔城地区", "阿勒泰地区", "克孜勒苏柯尔克孜自治州", "博尔塔拉蒙古自治州",
//                 "昌吉回族自治州伊犁哈萨克自治州", "巴音郭楞蒙古自治州", "河子市", "阿拉尔市", "五家渠市", "图木舒克市", "其他");
//     list2[list2.length] = new Array("香港", "其他");
//     list2[list2.length] = new Array("澳门", "其他");
//     list2[list2.length] = new Array("台湾", "其他");
//
//     var ddlProvince = document.getElementById("province");
//     var ddlCity = document.getElementById("city");
//     for(var i =0;i<list1.length; i++)
//     {
//         var option = document.createElement("option");
//         option.appendChild(document.createTextNode(list1[i]));
//         option.value = list1[i];
//         ddlProvince.appendChild(option);
//         //city initialize
//         var firstprovince = list2[0];
//         for (var j = 0; j < firstprovince.length; j++) {
//             var optioncity = document.createElement("option");
//             optioncity.appendChild(document.createTextNode(firstprovince[j]));
//             optioncity.value = firstprovince[j];
//             ddlCity.appendChild(optioncity);
//         }
//     }
//     function indexof(obj,value)
//     {
//         var k=0;
//         for(;k<obj.length;k++)
//         {
//             if(obj[k] == value)
//             return k;
//         }
//         return k;
//     }
//     function selectprovince(obj) {
//         ddlCity.options.length = 0;//clear
//         var index = indexof(list1,obj.value);
//         var list2element = list2[index];
//         for(var i =0;i<list2element.length; i++)
//         {
//             var option = document.createElement("option");
//             option.appendChild(document.createTextNode(list2element[i]));
//             option.value = list2element[i];
//             ddlCity.appendChild(option);
//         }
//     }

//	所有banner自适应-郑健磊
function ZiShiYing() {
    var height = $(".carousel-inner img").eq(0).height() ||
        $(".carousel-inner img").eq(1).height() ||
        $(".carousel-inner img").eq(2).height() ||
        $(".carousel-inner img").eq(3).height()
    $(".carousel-control").css('line-height', height * 0.9 + "px");
    $(".carousel .left,.carousel .right").css('font-size', height * 0.4 + "px");
};
ZiShiYing();
$(window).resize(function () {
    ZiShiYing();
});
$(".button0").click(function () {
    $("#FirstCarousel").carousel(0);
});
$(".button1").click(function () {
    $("#FirstCarousel").carousel(1);
});
$(".button2").click(function () {
    $("#FirstCarousel").carousel(2);
});
$(".button3").click(function () {
    $("#FirstCarousel").carousel(3);
});
$(function () {
    function ChangeImg() {
        $(function () {
            var winWidth = $(window).width();
            if (winWidth < 700) {
                $(".carousel-inner .item:eq(0) img[src='images/banner-4.jpg']").attr('src', 'images/banner-4.1.jpg');
                $(".carousel-inner .item:eq(1) img[src='images/banner-5.jpg']").attr('src', 'images/banner-5.1.jpg');
                $(".carousel-inner .item:eq(2) img[src='images/banner-6.jpg']").attr('src', 'images/banner-6.1.jpg');
                $(".carousel-inner .item:eq(3) img[src='images/banner-7.jpg']").attr('src', 'images/banner-7.1.jpg');
                ZiShiYing();
            } else {
                $(".carousel-inner .item:eq(0) img[src='images/banner-4.1.jpg']").attr('src', 'images/banner-4.jpg');
                $(".carousel-inner .item:eq(1) img[src='images/banner-5.1.jpg']").attr('src', 'images/banner-5.jpg');
                $(".carousel-inner .item:eq(2) img[src='images/banner-6.1.jpg']").attr('src', 'images/banner-6.jpg');
                $(".carousel-inner .item:eq(3) img[src='images/banner-7.1.jpg']").attr('src', 'images/banner-7.jpg');
                ZiShiYing();
            }
        });
    };
    ChangeImg();
    $(window).resize(function () {
        ChangeImg();
    });
});
