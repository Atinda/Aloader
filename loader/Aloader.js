/*
 *名称：Aloader
 *版本号: V1.1.0 
 *日期:2018.11.23
 *作者: Avinda
 *备注：基于jquery.1.10.2.js版本的一个轻量级的进度条展示插件
 */
;
(function($, window, document, undefined){
    "use strict";
    var $fn = $.fn;
  
    // 主体
    $fn.Aloader = function(options){
        var $A = this,o = options,n = $.extend({},$fn.initData, options);
        var initStyle = $fn.initData.AloaderStyle;
        var setStyle = n.AloaderStyle;
        var $AL = {
            type:n.AloaderType,
            c1:setStyle.AloaderColor?setStyle.AloaderColor:initStyle.AloaderColor,
            c2:setStyle.AloaderColor2?setStyle.AloaderColor2:initStyle.AloaderColor2,
            w1:setStyle.AloaderWidth?setStyle.AloaderWidth:initStyle.AloaderWidth,
            w2:setStyle.AloaderWidth2?setStyle.AloaderWidth2:initStyle.AloaderWidth2,
            h1:setStyle.AloaderHeight?setStyle.AloaderHeight:initStyle.AloaderHeight,
            h2:setStyle.AloaderHeight2?setStyle.AloaderHeight2:initStyle.AloaderHeight2,
            b:setStyle.AloaderBorder?setStyle.AloaderBorder:initStyle.AloaderBorder,
            r:setStyle.AloaderRight?setStyle.AloaderRight:initStyle.AloaderRight,
            l:setStyle.AloaderLeft?setStyle.AloaderLeft:initStyle.AloaderLeft,
        }
        $fn.renderView.init($A,$AL)
    };
     // 视图
     $fn.renderView = {
        init:function($A,$AL){
            var i = $AL.type;
            switch(i){
                case 'circular':
                $fn.renderView.circularView($A,$AL);
                break;
            };
        },
        circularView:function($A,$AL){
            $($A).append('<section class="aLoader-wrap"><div class="aLoader circular"></div></section>');
            var w1 = $(".aLoader-wrap").width();
            var h1 = $(".aLoader-wrap").height();
            $('.circular').css({
                'width':w1<30?30:w1+'px',
                'height':h1<30?30:h1+'px',
                'border':$AL.b+'px double '+$AL.c1
            });
            $('head').append("<style>.circular::before{"+
                "background:"+$AL.c2+
                ";width:"+$AL.w1+"px"+
                ";height:"+$AL.h1+"px"+
                ";right:"+$AL.r+"px"+

                "}</style>");
            $('head').append("<style>.circular::after{"+
                "background:"+$AL.c2+
                ";width:"+$AL.w2+"px"+
                ";height:"+$AL.h2+"px"+
                ";right:"+$AL.r+"px"+
                ";left:"+$AL.l+"px"+

            "}</style>");
        }
    };
       // 初始化数据
       $fn.initData = { 
        active:{circular:"双圆圈"},          // 类型
        AloaderType:"circular",             // 要展示类型
        AloaderStyle:{
            AloaderColor:"cyan",            // 颜色值1
            AloaderColor2:"cyan",            // 颜色值2
            AloaderWidth:10,
            AloaderWidth2:10,
            AloaderHeight:10,
            AloaderHeight2:10,
            AloaderBorder:10,
            AloaderRight:28,
            AloaderLeft:28,
        },


        AloaderCallback: {       // 回调函数
            refresh:false
        }
    };
     // 函数
     $fn.renderEvent = {
        refresh: function (options) {
            console.log('外部调用插件函数', options)
        }
    };
     // 设置函数(外部调用插件函数入口)
     $fn.pbevent = function (name, options) {
        if (name == 'refresh') {
            $fn.renderEvent.refresh(options);
        };
    };
  
})(jQuery,window,document)