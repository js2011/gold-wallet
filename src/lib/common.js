

var countdown = 60;

function settime(val) {
    if(countdown == 1) {
        val.removeAttribute("disabled");
        val.innerHTML = "获取";

    } else {
        val.setAttribute("disabled", true);
        val.innerHTML =  countdown +"s";
        countdown--;
    }
    setTimeout(function() {
        settime(val)
    }, 1000)
}


//假定字符串的每节数都在5位以下
function toNum(a){
    var a=a.toString();
    //也可以这样写 var c=a.split(/\./);
    var c=a.split('.');
    var num_place=["","0","00","000","0000"],r=num_place.reverse();
    for (var i=0;i<c.length;i++){
        var len=c[i].length;
        c[i]=r[len]+c[i];
    }
    var res= c.join('');
    return res;
}

function cpr_version(a,b){
    var _a=toNum(a),_b=toNum(b);
    if(_a==_b) {
    	return true;
	}else{
    	return false;
	}
}


//密码是否可见
function hideShowPsw(shPwdCls){
    var demoInput=document.querySelector(shPwdCls);
    if (demoInput.type == "text") {
        demoInput.type = "password";
    }else {
        demoInput.type = "text";
    }
};


/**
 *	获取url参数
 *
 */
function getQueryString(name){
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}


//输入手机号码切换获取按钮
var phoneToggle = function(settings) {
    var defaultSetting={
        thisCls:'.bl-poe-hdm', //input的class或id
        stateCls:'.bl-sms-code', //需要改变状态的按钮class或id
        attrKeynm:'class', //
        attrValnm1:'sms-code-btn1', //state的class1
        attrValnm2:'sms-code-btn2', //state的class2
        disabledCls:'.bl-dx-code,.bl-tge-pwd' //切换时需要禁用的input
    };
    $.extend(defaultSetting,settings);
    var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
    var myval=document.querySelector(defaultSetting.thisCls).value;
    var blSmsCode=$(defaultSetting.stateCls).children("button");
    if (!myreg.test(myval)) {
        blSmsCode.attr(defaultSetting.attrKeynm,defaultSetting.attrValnm1);
        $(defaultSetting.disabledCls).attr('disabled','disabled');

    } else {
        blSmsCode.attr(defaultSetting.attrKeynm,defaultSetting.attrValnm2);
        $(defaultSetting.disabledCls).removeAttr('disabled');
    }
}


//登录按钮变亮
var btnHankState = function(stgs) {
    var dlst={
        blPwdCls:'.bl-tge-pwd', //需要监听的input的class或id
        blIptLet:6,  //input输入长度
        blBtnCls:'.bl-tle-btnbx>a',//切换状态的元素 class或id
        blStateKey:'class', //切换属性
        blStateVal1:'bs-yms-btn',  //初始属性值
        blStateVal2:'bs-hs-btn'  //改变后的属性值
    };
    $.extend(dlst,stgs);
    var blTgePwd = $(dlst.blPwdCls).val();
    if(blTgePwd.length>=dlst.blIptLet){
        $(dlst.blBtnCls).attr(dlst.blStateKey,dlst.blStateVal1);
    }
    else{
        $(dlst.blBtnCls).attr(dlst.blStateKey,dlst.blStateVal2);
    }
}

//表单验证提示框
function vftnPrompt(content,vftmPtTime){
    var vptHtml="";
    vptHtml+="<div class='vpt-pf-wrap'>";
    vptHtml+="<div class='vpt-zw-bg'></div>";
    vptHtml+="<div class='vpt-cnt-tip'><p>"+content+"</p></div>";
    vptHtml+="</div>";

    $("body").append(vptHtml);

    tipTimeOut = setTimeout(function(){
        vftnClose();
    },vftmPtTime);
}

function vftnClose(){
    if(tipTimeOut){
        clearTimeout(null);
    }
    $(".vpt-pf-wrap").remove();
}

//红包处理
$(document).ready(function(){
	if (getCookie('IS_REDPACKET_PAGE') == 1 && getCookie('IS_REDPACKET_SHOW') !=1) {
		var url = appPath + "/Promotion/getAvailable";
		ajax_jquery({
			async:false,
			url : url,
			data :{},
			success : function (data){
                if (data.status == 1) {
                    redId = data.data.redPacketId;
                    // redId = 1;// 调试
                    html = '<article class="m-mask-c-1" style="z-index:10010"></article>'+'<article class="rdvelp-dlgwin-s"><div class="rdvelp-dl-smbtn"><i><img src="'+rootPath+'/Public/images/rdvelp_dlgico.png"/></i><a href="'+rootPath+'/index.php/Promotion/entrance/theme/red-envelope-2017/redPacketId/'+redId+'"><img src="'+rootPath+'/Public/images/rdvelp_btnof.png"/></a></div><div class="custom-dl-close"><i onclick="javascript:closeRed();"></i></div></article>';
                    $('.g-big').append(html);
                    setCookie('IS_REDPACKET_SHOW',1,3600);
                }
                delCookie('IS_REDPACKET_PAGE');
			}
		});
	}
});
function closeRed() {
    $('.m-mask-c-1').remove();
    $('.rdvelp-dlgwin-s').remove();
}
function getCookie(c_name)
{
if (document.cookie.length>0)
  {
  c_start=document.cookie.indexOf(c_name + "=")
  if (c_start!=-1)
    { 
    c_start=c_start + c_name.length+1 
    c_end=document.cookie.indexOf(";",c_start)
    if (c_end==-1) c_end=document.cookie.length
    return unescape(document.cookie.substring(c_start,c_end))
    } 
  }
return ""
}
function setCookie(c_name,value,seconds)
{
var exp=new Date();
exp.setTime(exp.getTime()+seconds*1000);
document.cookie=c_name+ "=" +escape(value)+
((seconds==null) ? "" : ";expires="+exp.toGMTString())+';path=/';
}
function delCookie(name){
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    // if(cval!=null)
    document.cookie= name + "="+cval+";expires="+exp.toGMTString()+";path=/";
}
function tipOpen(tipContent,tipTime){
	var tipHtml="<article class='m-tiphtml-box' style='z-index:99;text-align:center'>";
	tipHtml+="<div class='tip-box-op0'></div>";
	tipHtml+="<div class='tip-box-op1'>"+tipContent+"</div>";
	tipHtml+="</article>";
	$("body").append(tipHtml);
	tipTimeOut = setTimeout(function(){
	    tipClose();
	},tipTime);
}

function tipClose(){
if(tipTimeOut){
    clearTimeout(null);
}
	$(".m-tiphtml-box").remove();
}

//全局配置
var choose_zfb_pay_channel = "yibeijia";
var choose_wx_pay_channel = "yibeijia";

String.prototype.trim=function() {
    return this.replace(/(^\s*)|(\s*$)/g,'');
};

//转化时间为时间格式
function transferTime( nS ){
	return new Date(parseInt(nS)).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");
}

function params_to_obj(a){
	var b = a.split("&");

	var len = b.length;

	var temp;
	var c;

	var d = {};
	for(var i=0;i<len;i++){
		temp = b[i];
		c = temp.split("=");

		d[c[0]] = c[1];
	}
	
	return d;
}

function isWeiXin(){
    var ua = window.navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i) == 'micromessenger'){
        return true;
    }else{
        return false;
    }
}

//自适应宽度
function innerBoxHeight(){
	var boxHeight=$(window).height();
	var gBig1=$(".g-big1");
	gBig1.css({"height":boxHeight});
}


//生成指定范围随机数
function GetRandomNum(Min,Max){
	var Min = parseFloat(Min);
	var Max = parseFloat(Max);
	
	var Range = Max - Min;  
	var Rand = Math.random();   
	
	var h = Rand * Range;
	h = parseFloat(h.toFixed(2));
	
	var r = parseFloat(Min + h);
	r = r.toFixed(2);
	return(r);   
}   

//付费框
var zfdialog = function(){
	var _min = arguments[0]?arguments[0]:0;
	var _max = arguments[1]?arguments[1]:0;
	var callback = arguments[2];
	var amount = arguments[3]?arguments[3]:"";
    var dialogHtml="<article class='m-mask-c'></article>";
	    dialogHtml+="<article class='pop-mask-w'>";
	    dialogHtml+="<div class='pop-mask-ctr'>";
	    dialogHtml+="<h1>-检测费用-</h1><h2>" + _min + "-" + _max + "<span>元</span></h2>";
	    dialogHtml+="<p><img src='" + rootPath + "/Public/images/png/mask_txtimg.png'/></p>";
	    dialogHtml+="<div class='m-mask-ds'><input id='suijiamount' class='m-mask-btn' type='text' value='" + amount + "' placeholder='请输入打赏金额'/></div>";
	    dialogHtml+="<div class='m-rdm-pr'><a class='suijipay' href='javascript:'><i></i>随机金额</a></div>";
	    dialogHtml+="<div class='m-rdm-btn'><button class='gopay'></button></div>";
	    dialogHtml+="<div class='m-rdm-close'><a href='javascript:'></a></div>";
	    dialogHtml+="</div>";
	    dialogHtml+="</article>";
	    
	    
	    $("body").append(dialogHtml);
		var maskC=$(".m-mask-c");
		var maskW=$(".pop-mask-w");
		mRdmClose=$(".m-rdm-close");
		
		mRdmClose.children("a").click(function(){
			maskC.remove();
			maskW.remove();
		});
		
	$(".suijipay").click(function(){
		var suijiamount = GetRandomNum(_min, _max);
		$("#suijiamount").val(suijiamount);
	});
	
	$(".gopay").click(function(){
		callback();
	});
 }
 
//选择框
var fnDialog=function(setting1){
	   var cb = arguments[1];
	   var cb1 = arguments[2];
 	   var defaultsetting1={
 	   	  dialogTexts:'默认消息',
 	   	  btnLeft:'取消',
 	   	  btnRight:'确认'
 	   };
 	    $.extend(defaultsetting1,setting1);
        var dialogBoxHtml="<article class='m-mask-c'></article>";
	    dialogBoxHtml+="<div style='z-index:94;' class='telewos'>";
	    dialogBoxHtml+="<div class='u-cllmnunber'>"+defaultsetting1.dialogTexts+"</div>";
	    dialogBoxHtml+="<div><a class='u-cancel-btn' href='javascript:'>"+defaultsetting1.btnLeft+"</a><a class='u-call-btn' href='javascript:'>"+defaultsetting1.btnRight+"</a></div>";
	    dialogBoxHtml+="</div>";
	    $(".choice-mask").show();
	    $("body").append(dialogBoxHtml);
		
		$(".u-cancel-btn").click(function(){
			$(".m-mask-c").hide();
	    	$(".choice-mask").hide();
			$(".telewos").remove();
			
			if(cb1){
				cb1();
			}
		});
		$(".u-call-btn").click(function(){
	    	$(".choice-mask").hide();
			$(".m-mask-c").remove();
			$(".telewos").remove();
			if(cb){
				cb();
			}
		});
		
}
 
 
//确认框
var dalert = function(title){
	var cb = arguments[1];
	var setting2 = {firmText:title};
	var defaultsetting2={
 	   	  firmText:'默认消息1',
 	   	  btnCtr:'确认'
    };
    $.extend(defaultsetting2,setting2)
	var confirmHtml="<article class='m-mask-c-1'></article>";
	    confirmHtml+="<div class='confirm-box'>";
	    confirmHtml+="<div class='u-confirm-p'>"+defaultsetting2.firmText+"</div>";
	    confirmHtml+="<div><a class='u-confirm-btn' href='javascript:'>"+defaultsetting2.btnCtr+"</a></div>";
	    confirmHtml+="</div>";
	    $("body").append(confirmHtml);
		
		$(".u-confirm-btn").click(function(){
			$(".m-mask-c-1").hide();
			$(".confirm-box").remove();
			
			if(cb){
				cb();
			}
		});
}

//确认框
var dalert1 = function(title){
    var cb = arguments[1];
    var setting2 = {firmText:title};
    var defaultsetting2={
        firmText:'默认消息1',
        btnCtr:'确认'
    };
    $.extend(defaultsetting2,setting2)
    var confirmHtml="<article class='m-mask-c-1'></article>";
    confirmHtml+="<div class='confirm-box'>";
    confirmHtml+="<div class='u-confirm-p'>"+defaultsetting2.firmText+"</div>";
    confirmHtml+="<div><a class='u-confirm-btn clone_zfb_pay_url' href='javascript:'>"+defaultsetting2.btnCtr+"</a></div>";
    confirmHtml+="</div>";
    $("body").append(confirmHtml);

    $(".u-confirm-btn").click(function(){
        $(".m-mask-c-1").remove();
        $(".confirm-box").remove();

        if(cb){
            cb();
        }
    });
}

//加载
var loadingTimeOut = null; 
function loadingOpen(){
	var loadingHtml="<article class='m-mask-c'></article>";
    loadingHtml+="<div class='loading-gif'></div>";
	$("body").append(loadingHtml);
	
	loadingTimeOut = setTimeout(function(){
		loadingClose();
	},60000);
}

function loadingClose(){
	if(loadingTimeOut){
 		clearTimeout(loadingTimeOut);
 	}
	$(".m-mask-c").remove();
    $(".loading-gif").remove();
}

function uloadingOpen(){
	var loadingHtml = '<div class="choice-mask"></div>' + 
						  '<div class="inprs-vifition-dg" style="z-index: 10000;">' +
						  	'<h4>验证中</h4>' +
					   	    '<p>正在验证请稍后，大约需要1分钟，请勿刷新或关闭页面</p>' +
					   	    '<div class="inprs-vf-animate">' +
					   	   	   '<div class="inprs-animate-otrlyr"></div>' +
					   	   	   '<div class="inprs-animate-inrlyr"></div>' +
					   	    '</div>' +
					    '</div>';
	$("body").append(loadingHtml);
	
	loadingTimeOut = setTimeout(function(){
		uloadingClose();
	},58000);
}

function uloadingClose(){
	if(loadingTimeOut){
 		clearTimeout(loadingTimeOut);
 	}
	
	$(".choice-mask").remove();
	$(".inprs-vifition-dg").remove();
}

/**
 * jquery ajax 调用
 * @param options $.ajax()参数列表
 * @example {
 * 		url		:'indexs/ajax',
 * 		data	:{userid:1234, flag:true},
 * 		success	:function() {return true;}
 * 	}
 * @category mask 是否展示遮罩 默认为0展示,1不展示
 * @category url 发送请求的地址
 * @category type 请求方式('POST'或者'GET')
 * @category dataType 服务器返回的数据类型
 * @category data 发送到服务器的数据
 * @category success 请求成功后的回调函数
 * @category error 请求失败时调用此函数
 * @category timeout 设置请求超时时间（毫秒）
 * @category async 默认设置下(true)，所有请求均为异步请求。如果需要发送同步请求，请将此选项设置为 false。
 * 					注意，同步请求将锁住浏览器，用户其它操作必须等待请求完成才可以执行。
 */
function ajax_jquery(options) {
	if (options == undefined) {
		options = new Object();
	} else if (typeof options != 'object') {
		return;
	} else {
	}
	var options_default = {
			url			:'/demo/ajax_test',
			type		:'POST',
			dataType	:'json',
			data		:new Object(),
			success		:_ajax_success,
			error		:_ajax_error,
			complete:function(data){  
				if(options["mask"] != "1"){
					if(options["umask"] == "1"){
						//显示特殊遮罩
						udisLoad();
					}else{
						disLoad();
					}
				}
	        },  
			timeout		:90000,
			async		:true
	};
	
	if(options["mask"] != "1"){
		//mask为1,不显示遮罩
		if(options["umask"] == "1"){
			//显示特殊遮罩
			options_default["beforeSend"] = uload();
		}else{
			options_default["beforeSend"] = load();
		}
	}
	
	var options_merge = new Object();
	$.extend(options_merge, options_default, options);
	$.ajax(options_merge);
}
 
function load() {
	loadingOpen();
}  

function disLoad() { 
	loadingClose();
}

function uload() {
	uloadingOpen();
}  

function udisLoad() { 
	uloadingClose();
}

/**
 * ajax 请求失败时调用此函数
 * @param XMLHttpRequest XMLHttpRequest对象
 * @param textStatus 错误信息 可以是null 、"timeout" 、"error" 、"notmodified" 或 "parsererror"。
 * @param errorThrown 捕获的异常对象（可选）
 */
function _ajax_error(XMLHttpRequest, textStatus, errorThrown) {
    // 通常 textStatus 和 errorThrown 之中只有一个会包含信息
//  this; // 调用本次AJAX请求时传递的options参数
	var session_status=XMLHttpRequest.getResponseHeader("Session-Status"); //通过XMLHttpRequest取得响应头，Session-Status，  
    if(session_status=='TimeOut'){
    	dalert("登录超时，请重新登录");
    	window.location.href = "__APP__/Login/login"; //跳转到登陆页面
    }
	else{
	//	alert(textStatus);
	}
}

/**
 * 请求成功后的回调函数
 * @param data 由服务器返回，并根据dataType参数进行处理后的数据
 * @param textStatus 描述状态的字符串
 */
function _ajax_success(data, textStatus) {
    // data 可能是 xmlDoc, jsonObj, html, text, 等等...
    this; // 调用本次AJAX请求时传递的options参数
}

function formatMoney(s, n) {
	n = n > 0 && n <= 20 ? n : 2;
	s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
	var l = s.split(".")[0].split("").reverse(), r = s.split(".")[1];
	t = "";
	for (var i = 0; i < l.length; i++) {
		//t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
		t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "" : "");
	}
	return t.split("").reverse().join("") + "." + r;
}

/**
* 实时动态强制更改用户录入
* arg1 inputObject
**/
function amount(th){
  if(th.value.length == 1 && th.value == '-'){
	  th.value = th.value;
  }else{
	  var regStrs = [
         ['^0(\\d+)$', '$1'], //禁止录入整数部分两位以上，但首位为0
         ['[^\\d\\.]+$', ''], //禁止录入任何非数字和点
         ['\\.(\\d?)\\.+', '.$1'], //禁止录入两个以上的点
         ['^(\\d+\\.\\d{2}).+', '$1'] //禁止录入小数点后两位以上
     ];
     for(var i=0; i<regStrs.length; i++){
         var reg = new RegExp(regStrs[i][0]);
         th.value = th.value.replace(reg, regStrs[i][1]);
     }
  }
}

/**
* 录入完成后，输入模式失去焦点后对录入进行判断并强制更改，并对小数点进行0补全
* arg1 inputObject
* parseFloat('10');
**/
function overFormat(th){
    var v = th.value;
    if(v != '' && v != '-'){
    	th.value = formatMoney(v, 2);
    }
}

function checkPrice(price){
	  if(price.length == 1 && price == '-'){
		  return true;
	  }else if((/^\-?(([1-9]\d*)|\d)(\.\d{1,2})?$/).test(price.toString())){
		  return true;
	  }else{
		  return false;
	  }
}

function check_phone(phone){
	 var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
	 if (reg.test(phone)) {
	      return true;
	 }else{
	      return false;
	 };
}

function check_valicode(code){
	var reg = /^\d{4}$/;
	
	 if (reg.test(code)) {
	      return true;
	 }else{
	      return false;
	 };
}
function check_password(code){
    var reg = /^[0-9A-Za-z]{6,22}$/;

    if (reg.test(code)) {
        return true;
    }else{
        return false;
    };
}
// 检查金额输入支持 1 1.5 1.53
function check_money(code){
    var reg = /^[0-9\.]{1,}$/;
    if (reg.test(code)) {
        return true;
    }else{
        return false;
    };
}
// 检查金额输入支持 2017-12-27
function check_date(code,format){
	if (format == 'd') {
        var reg = /^[0-9]{1,2}$/;
        if (reg.test(code)) {
            return true;
        }else{
            return false;
        };
		if (parseInt(code) > 0 && parseInt(code) < 32) {
			return true;
		} else {
			return false;
		}
	}
    var reg = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;
    if (reg.test(code)) {
        return true;
    }else{
        return false;
    };
}
//验证身份证格式
function checkPid(pId){
	var arrVerifyCode = [1,0,"x",9,8,7,6,5,4,3,2];
    var Wi = [7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2];
    var Checker = [1,9,8,7,6,5,4,3,2,1,1];

    //if(pId.length != 15 && pId.length != 18)    return false;
	if(pId.length == 15 || pId.length != 18)    return false;

    var Ai=pId.length==18 ?  pId.substring(0,17)   :   pId.slice(0,6)+"19"+pId.slice(6,16);

    if (!/^\d+$/.test(Ai))  return false;

    var yyyy=Ai.slice(6,10) ,  mm=Ai.slice(10,12)-1  ,  dd=Ai.slice(12,14);

    var d=new Date(yyyy,mm,dd) ,  now=new Date();
     var year=d.getFullYear() ,  mon=d.getMonth() , day=d.getDate();

    if (year!=yyyy || mon!=mm || day!=dd || d>now || year<1940) return false;

    for(var i=0,ret=0;i<17;i++)  ret+=Ai.charAt(i)*Wi[i];    
    Ai+=arrVerifyCode[ret %=11];     

    return pId.length ==18 && pId != Ai?false:true;        
}

function isWeiXin(){
    var ua = window.navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i) == 'micromessenger'){
        return true;
    }else{
        return false;
    }
}

function getRealPath(){
	var curWwwPath=window.document.location.href;
	var pathName=window.document.location.pathname;
	var pos=curWwwPath.indexOf(pathName);
	var localhostPaht=curWwwPath.substring(0,pos);
	var projectName=pathName.substring(0,pathName.substr(1).indexOf('/')+1);
	var realPath=localhostPaht+projectName;

	return realPath;
}

(function (doc, win) {
	//隐藏header
	/*
	if(isWeiXin()){
		
	}*/
	if(typeof is_client != 'undefined' && is_client == "1" && unique_flag != "cash"){
		$(".lgb-ptcag-tle").css("display","none");
	}

	if(typeof unique_flag != 'undefined' && unique_flag != "login2" && unique_flag != "borrow_design" ){
		innerBoxHeight();
	}

	if(typeof is_client != 'undefined' && is_client == "1"){
		if(unique_flag == "flow_cert" || unique_flag == "flow_contact" || unique_flag == "flow_phone"){
			$(".f-rtn-title3").css("display", "none");
		}else if(unique_flag == "flow_need_pay" || unique_flag == "flow_grade_b" || unique_flag == "flow_loan_details" || unique_flag == "flow_main" || unique_flag == "flow_checking" || unique_flag == "flow_grade_a"){
			$(".f-rtn-title1").css("display", "none");
		}
	}

	//统计点击事件
	$(".statistics-hittype").click(function(){
		var path = getRealPath()+'/index.php';
		var _hittype = $(this).data("hittype");
		ajax_jquery({mask:"1",url:path+'/Third/hitStatistics',data:{"productId":0,"hittype": _hittype},success:function(_d){
		}});
	});
})(document, window);

//百度统计
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?342033b08c6522ded431ead41570e046";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();


//记录用户点击推荐、列表、详情的信息
function getHitInfo(obj,request_url,_t,detect_url,jump_url, common_type){
	var _continue_execute = true;
	if(typeof _t != 'undefined' && _t == 'login'){
		if(typeof detect_url == 'undefined' || detect_url == '' || typeof jump_url == 'undefined' || jump_url == ''){
			var origin_url = location.href;
			var split_url = origin_url.split('index.php');
			if(typeof detect_url == 'undefined' || detect_url == ''){
				split_url[1] = '/third/detectLogin';
				detect_url = split_url.join('index.php');
			}
			if(typeof jump_url == 'undefined' || jump_url == ''){
				split_url[1] = '/login/login';
				jump_url = split_url.join('index.php');
			}
		}
		
		ajax_jquery({mask:"1",url:detect_url,success:function(_d){
			if(_d.status == 0){
				console.log('please log in first ...')
				_continue_execute = false;
				//记录点击
				var productId =  $(obj).data('id');
				var hittype =  $(obj).data('hittype')?parseInt($(obj).data('hittype')):0
				ajax_jquery({mask:"1",url:request_url?request_url:'main/hitStatistics',data:{"productId":productId,"hittype":hittype,"common_type":common_type},success:function(_d){
					location.href = jump_url+'?redirect='+encodeURIComponent($(obj).data('href')?$(obj).data('href'):location.href)
				}});
			}
		},async:false});
	}

	//检测login是否成功,继续执行的标志位
	if(!_continue_execute){return;}

	var productId =  $(obj).data('id');
	var hittype =  $(obj).data('hittype')?parseInt($(obj).data('hittype')):0;

	var jump_url = $(obj).data('href');
//	if(typeof productId == 'undefined'||productId==='' || productId==null || isNaN(hittype)|| hittype<1 || hittype>20){return false;}
	if(typeof productId == 'undefined'||productId==='' || productId==null || isNaN(hittype)|| hittype<1 ){return false;}
	
	var request_data = {"productId":productId,"hittype":hittype};
	var extra_params = $(obj).data('params');
	if(typeof extra_params != 'undefined' && extra_params != '' ){
		request_data.extra = extra_params;
	}
	
	ajax_jquery({mask:"1",url:request_url?request_url:'main/hitStatistics',data:{"productId":productId,"hittype":hittype},success:function(_d){
		if(jump_url){
			location.href = jump_url;
		}
	}});
	
	return ;
}

//记录用户点击推荐、列表、详情的信息
function getHitInfo_simple(obj, request_url){
	var _continue_execute = true;
	
	//检测login是否成功,继续执行的标志位
	if(!_continue_execute){return;}
	
	var productId =  $(obj).data('id');
	var hittype =  $(obj).data('hittype')?parseInt($(obj).data('hittype')):0;
	
	var jump_url = $(obj).data('href');
	if(typeof productId == 'undefined'||productId==='' || productId==null || isNaN(hittype)|| hittype<1 || hittype>20){ console.log('参数不对');return false;}
	var request_data = {"productId":productId,"hittype":hittype};
	var extra_params = $(obj).data('params');
	if(typeof extra_params != 'undefined' && extra_params != '' ){
		request_data.extra = extra_params;
	}
	
	ajax_jquery({mask:"1",url:request_url?request_url:'main/hitStatistics',data:{"productId":productId,"hittype":hittype},success:function(_d){
		if(jump_url){
			//location.href = jump_url;
		}
	}});
	
	return ;
}


//记录2个入口的信息
function getHitInfo_entry(obj, request_url, common_type, jump_url){
	if(typeof jump_url == 'undefined' || jump_url == ''){
		jump_url = $(obj).data('href');
	}
	
	ajax_jquery({mask:"1",url:request_url?request_url:'main/hitStatistics',data:{common_type:common_type},success:function(_d){
		if(jump_url){
			location.href = jump_url;
		}
	}});
	
	return ;
}


//2.0记录
function call_hit(_hittype){
	var path = getRealPath();
	ajax_jquery({mask:"1",url:path+'/Third/hitStatistics',data:{"productId":0,"hittype": _hittype},success:function(_d){
	}});
}