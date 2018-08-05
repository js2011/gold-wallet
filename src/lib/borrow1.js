/**
 * 
 */
function jishu(uri){
	var url = appPath + "/Request/count_click_ajax";
	ajax_jquery({
		url : url,
		data : {openId:openId, event:pId},
		success : function (data){
			window.location.href = uri;
		}					
	});			
}

function close_main_notice_dl(){
	$("#notice_dl").css("display", "none");
	$("#notice_bg_dl").css("display", "none");
}

//根据条件获取快速借款列表
function filter_outflow_product(amountRangeId, periodRangeId, labels){
	var url = appPath + "/Borrow/get_outflow_productlist_new_ajax";
	ajax_jquery({
		url : url,
		data : {amountRangeId:amountRangeId, periodRangeId:periodRangeId, labels:labels},
		success : function (data){
			if(data.status == "1"){
				var html = data.data.msg;
				$("#p_list").empty();
				$("#p_list").append(html);
			}else{
				var msg = data.msg?data.msg:"系统错误";
				dalert(msg);
			}
		}						
	});
	
}

//重置选择状态
function reset_outflow_product_style_condition(){
	$(".qy-cieia-vcnt1 a").removeClass("qy-cieia-atv1");
}

//确认选择
function confirm_outflow_product_style_condition(){
	$(".choice-mask").hide();
	$(".qy-cieia-vl1").hide();
	$(".cieia-cie-atv1").removeClass();
	
	//获取选中的值
	var amountRangeId = $("#u1").find(".qy-cieia-atv1 a").attr("data-id");
	var periodRangeId = $("#u2").find(".qy-cieia-atv1 a").attr("data-id");
	var labels = "";
	$("#u3 .qy-cieia-atv1").each(function(){
		labels += $(this).attr("data-id") + ",";
	});
	if(labels != ""){
		labels = labels.substr(0, labels.length-1);
	}
	filter_outflow_product(amountRangeId, periodRangeId, labels);
}

//判断是否购买,点击ICon
function judge_is_borrow(obj, request_url, common_type){
	//记录productId
	var url = appPath + "/Common/setproductid";
	var productUrl = $("#quick_insure_btn").attr("data-href");
	ajax_jquery({
		async:false,
		url : url,
		data : {productId:productId, productUrl:productUrl},
		success : function (data){
			
		}						
	});
    ajax_jquery({
        async:false,
        url : appPath + "/Request/get_insure_num_ajax",
        data : {productId:productId},
        success : function (res){
        	if (res.status == 1) {
        		if (res.data.num == 0) {
                    $("#bg_dl").css("display", "block");
                    $("#lgb-rfse-indiy5").css("display", "block");
                    return false;
				}
			}
        }
    });
	
	
	getHitInfo_entry(obj, request_url, common_type);
	
	if(can_join == "1"){
		$("#bg_dl").css("display", "block");
		$("#lgb-rfse-indiy2").css("display", "block");
	}else if(error_code == "E050100066"){
		$("#bg_dl").css("display", "block");
		$("#lgb-rfse-indiy3").css("display", "block");
	}else if(error_code == "E050100080"){
		$("#bg_dl").css("display", "block");
		$("#lgb-rfse-indiy4").css("display", "block");
	}else if(error_code == "E050100067") {
		$("#bg_dl").css("display", "block");
		$("#lgb-rfse-indiy5").css("display", "block");
	}
}

//立即参与
function quick_join(obj, request_url, common_type){
	getHitInfo_entry(obj, request_url, common_type);
}

//关闭icon弹出框
function close_yes_borrow_dl(){
	$("#bg_dl").css("display", "none");
	$("#lgb-rfse-indiy3").css("display", "none");
}

//关闭icon弹出框1
function close_yes_borrow_1_dl(){
	$("#bg_dl").css("display", "none");
	$("#lgb-rfse-indiy4").css("display", "none");
}

//关闭icon弹出框
function close_judge_is_borrow_dl(){
	$("#bg_dl").css("display", "none");
	$("#lgb-rfse-indiy2").css("display", "none");
	$("#lgb-rfse-indiy5").css("display", "none");
	$(".custom-dialog").hide();
}

//跳过去借款
function skip_to_getHitInfo(request_url){
	var obj = document.getElementById("quick_insure_btn");
//	getHitInfo(obj, request_url);
	getHitInfo_entry(obj, request_url, "E");
}

//点击借款按钮
function pre_judge_is_borrow(obj,request_url){
	//记录productId
	var productUrl = $("#quick_insure_btn").attr("data-href");
	var url = appPath + "/Common/setproductid";
	ajax_jquery({
		async:false,
		url : url,
		data : {productId:productId, productUrl:productUrl},
		success : function (data){
			
		}						
	});
	
	//判断是否购买
	//1,如果有条件，而且未购买，去购买
	//2,如果有条件，已购买，跳转借款
	//3,如果有条件，未支付完成，去完成支付
	
	//此处都是能买的
	if(can_join == "1"){
		$("#bg_dl").css("display", "block");
		$("#lgb-rfse-indiy1").css("display", "block");
	}else{
	//	getHitInfo(obj, request_url);
		ajax_jquery({mask:"1",url:appPath + "/Third/detectLogin",success:function(_d){
			if(_d.status == 0){
				if(is_client == "1"){
					var loadingHtml="<article class='m-mask-c'></article>";
				    loadingHtml+="<div class='loading-gif'></div>";
					$("body").append(loadingHtml);
					var ttm = setTimeout(function(){
						if(ttm){
					 		clearTimeout(ttm);
					 	}
						window.location.href = "lgb://login#{}";
						$(".m-mask-c").remove();
					    $(".loading-gif").remove();
					}, 1000);
				}else{
		//			getHitInfo(obj, request_url, "login", appPath + '/Third/detectLogin', appPath + '/Login/login3', "E");
					getHitInfo_entry(obj, request_url, "E");
					//开始登录
					window.location.href = appPath+'/Login/login?redirect='+thisPageUrl;
					/*$("#bg_dl").css("display", "block");
					$("#login-step-1").css("display", "block");*/
				}
			}else{
				getHitInfo_entry(obj, request_url, "E");
			}
		},async:false});
	}
}

//购买保险服务,进入实名页面（废弃）
function buy_insure(obj,request_url, common_type){
	getHitInfo_entry(obj, request_url, common_type);
	
	//确认可买
	var url = appPath + "/Request/can_buy_ajax";
	ajax_jquery({
		url : url,
		data : {},
		success : function (data){
			if(data.status == "1"){
				//进入实名页面
				if(is_client == "1"){
					window.location.href = noticeURL;
				}else{
					window.location.href = appPath + "/Borrow/realname";
				}
			}else{
				var error_code = data.error;
				if(error_code == "E050100080"){
					//已购买未支付,提醒去支付
					fnDialog({
						dialogTexts:'拒就赔已经申请,待支付',
				 	   	btnLeft:'继续借款',
				 	   	btnRight:'去支付'
					}, function(){
						if(is_client == "1"){
							window.location.href = "lgb://applyclaim#{}";
						}else{
							window.location.href = appPath + "/Insure/index";
						}
					}, function(){
						window.location.href = productUrl;
					});
				}else{
					var msg = data.msg?data.msg:"系统错误";
					dalert(msg);
				}
			}
		}						
	});
}

//确认支付（废弃）
var newTab;
function do_buy_insure(obj,request_url, common_type){
	/*
	if(!isWeiXin() && choose_zfb_pay_channel == "yibeijia"){
		newTab = window.open('about:blank');
	}
	*/
	
	getHitInfo_entry(obj, request_url, common_type);
	
	if(is_realname == "0"){
		//先认证实名
		var realname = $("#realname").val();
		var cardId = $("#cardId").val();
		
		if(realname == "" || realname == undefined || realname == null){
			dalert("请填写完整信息");
			return false;
		}
		
		if(cardId == "" || cardId == undefined || cardId == null){
			dalert("请填写完整信息");
			return false;
		}
		
		var url = appPath + "/Request/save_realname_ajax";
		ajax_jquery({
			url : url,
			data : {realname:realname, cardId:cardId},
			success : function (data){
				if(data.status == "1"){
					//如果实名成功，改为成功
					is_realname = "1";
					//调起支付
					doPay();
				}else{
					var msg = data.msg?data.msg:"系统错误";
					dalert(msg);
				}
			}						
		});
	}else{
		//直接支付
		doPay();
	}
}

//确认申请支付
function confirm_apply(obj,request_url, common_type){
	if (!(count > 0)) {
		dalert("购买数量不可为0");
		return false;
	}
	getHitInfo_entry(obj, request_url, common_type);
	
	if(is_realname == "0"){
		//先认证实名
		var realname = $("#realname").val();
		var cardId = $("#cardId").val();
		
		if(realname == "" || realname == undefined || realname == null){
			dalert("请填写完整信息");
			return false;
		}
		
		if(cardId == "" || cardId == undefined || cardId == null){
			dalert("请填写完整信息");
			return false;
		}
		
		var url = appPath + "/Request/save_realname_ajax";
		ajax_jquery({
			url : url,
			data : {realname:realname, cardId:cardId},
			success : function (data){
				if(data.status == "1"){
					//如果实名成功，改为成功
					is_realname = "1";
					//调起支付
					doPay();
				}else{
					var msg = data.msg?data.msg:"系统错误";
					dalert(msg);
				}
			}						
		});
	}else{
		//直接支付
		doPay();
	}
}


/**
 * 
 */

//看跳转那个资料
function fast_finish_info(step){
	var url = "";
	
	if(step == 1){
		url = appPath + "/Borrow/cert";
	}else if(step == 2 || step == 4){
		url = appPath + "/Borrow/contact";
	}else if(step == 3 || step == 5){
		url = appPath + "/Borrow/phone";
	}else if(step == 6){
        url = appPath + "/Borrow/adddebitcard";
    }else{
		url = appPath + "/Borrow/main";
	}
	
	return url;
}


//判断资料是否完成
function quick_auth_is_over(){
	var url = appPath + "/Request/get_design_profile_status_ajax";
	ajax_jquery({
		url : url,
		data : {},
		success : function (data){
			if(data.status == '1'){
				var step = data.data.step;
				var url2 = fast_finish_info(step);
				
				//如果资料完成就申请
				if(url2.indexOf("main") > 0){
					var url3 = appPath + "/Request/saas_commend_ajax";
					ajax_jquery({
						url : url3,
						data : {},
						success : function (data){
							if(data.status == '1'){
								window.location.href = appPath + "/Borrow/preDesign";
							}else{
								var msg = data.msg?data.msg:"服务出错";
								dalert(msg, function(){
									window.location.href = appPath + "/Borrow/preDesign";
								});
							}
						}					
					});
				}else{
					window.location.href = url2;
				}
			}else{
				var msg = data.msg?data.msg:"服务出错";
				dalert(msg);
			}
		}					
	});
}
//这里只是将design的身份验证挪到这里
function pre_do_dingzhi() {
	// 先判断能不能定制
    var url = appPath + "/Request/judge_can_commend_ajax";
    ajax_jquery({
        	url : url,
        	data : {},
        	success : function (res){
        		if (res.status == 1) {
                    window.location.href = appPath + "/Borrow/design";
				} else {
					var msg = res.msg?res.msg:"服务出错";
					dalert(msg);
				}
        	}
    });

}

function do_dingzhi(){
	var amount_dic = $("#amount_dic").val();
	var period_dic = $("#period_dic").val();
	/*if (loanVersion == 'v1') {
        var bankId = $("#bankcard").attr("data-id");
        if (bankId == '' || bankId == null || bankId == undefined) {
            dalert("请先添加银行卡");
            return false;
        }
	}*/
    // 先判断能不能定制
    var url = appPath + "/Request/judge_can_commend_ajax";
    ajax_jquery({
        url : url,
        data : {},
        success : function (res){
            if (res.status == 1) {
                //先判断质料是否填写完成
                var url = appPath + "/Request/get_design_profile_status_ajax";
                ajax_jquery({
                    url : url,
                    data : {},
                    success : function (data){
                        if(data.status == '1'){
                            var step = data.data.step;
                            if(step == 0){
                                //资料填写完,开始定制
                                if (loanVersion == 'v2') {
                                    window.location.href = appPath + "/Borrow/design";
                                } else {
                                    var url2 = appPath + "/Request/saas_commend_ajax";
                                    ajax_jquery({
                                        url : url2,
                                        data : {amountId:amount_dic, periodId:period_dic},
                                        success : function (data){
                                            if(data.status == '1'){ // 定制成功
                                                // window.location.href = appPath + "/Borrow/main";
                                                window.location.href = appPath + "/Borrow/preDesign";
                                            }else{
                                                var msg = data.msg?data.msg:"服务出错";
                                                dalert(msg);
                                            }
                                        }
                                    });
                                }
                            }else{ // 资料不完善
                                if (loanVersion == 'v2') { //直接完善资料
                                    $("#bg_dl").css("display", "block");
                                    $("#dialg_dl").css("display", "block");
                                } else { // 如果v1 需要保存数据
                                    //保存数据
                                    var url3 = appPath + "/Common/set_design_borrow";
                                    var data3 = {amount_dic:amount_dic, period_dic:period_dic};
                        
                                    ajax_jquery({
                                        url : url3,
                                        data : data3,
                                        success : function (data){
                                            $("#bg_dl").css("display", "block");
                                            $("#dialg_dl").css("display", "block");
                                        }
                                    });
                                }
                            }
                        }else{
                            var msg = data.msg?data.msg:"服务出错";
                            dalert(msg);
                        }
                    }
                });
            } else {
                var msg = res.msg?res.msg:"服务出错";
                dalert(msg);
            }
        }
    });
}

function close_design_dl(){
	$("#bg_dl").css("display", "none");
	$("#dialg_dl").css("display", "none");
}

//更新资料
function update_user_info(){
	quick_auth_is_over();
}

//完善实名资料
function complete_cert(){
    var f1 = $("#f1").html().trim();
    var f2 = $("#f2").html().trim();
    var f3 = $("#f3").html().trim();
    if(f1 == "" || f1 == undefined || f1 == null || f1 == 1){
        dalert("请上传照片");
        return false;
    }

    if(f2 == "" || f2 == undefined || f2 == null || f2 == 1){
        dalert("请上传照片");
        return false;
    }

    if(f3 == "" || f3 == undefined || f3 == null || f3 == 1){
        dalert("请上传照片");
        return false;
    }

	if(is_realname == "0"){
		call_hit(28);
		
		//先认证实名
		var realname = $("#realname").val();
		var cardId = $("#cardId").val();
		
		if(realname == "" || realname == undefined || realname == null){
			dalert("请填写完整信息");
			return false;
		}
		
		if(cardId == "" || cardId == undefined || cardId == null){
			dalert("请填写完整信息");
			return false;
		}
		
		var url = appPath + "/Request/save_realname_ajax";
		ajax_jquery({
			url : url,
			data : {realname:realname, cardId:cardId},
			success : function (data){
				if(data.status == "1"){
					//如果实名成功，改为成功
					is_realname = "1";
					
					if(is_zhima != "1"){
						//授权芝麻
						show_zhima_dl();
					}else{
						quick_auth_is_over();
					}
				}else{
					var msg = data.msg?data.msg:"系统错误";
					dalert(msg);
				}
			}						
		});
	}else{
		if(is_zhima != "1"){
			//授权芝麻
			show_zhima_dl();
		}else{
			quick_auth_is_over();
		}
	}
}

//完善芝麻信用
function show_zhima_dl(){
	call_hit(27);
	
	var url2 = appPath + "/Request/get_zhima_auth_url_ajax";
	ajax_jquery({
		url : url2,
		data : {},
		success : function (data){
			if(data.status == '1'){
				var url = data.data.authUrl;
				document.getElementById("zhima_iframe").src = url;
				$("#zhima_bg_dl").css("display", "block");
				$("#zhima_dl").css("display", "block");
			}else{
				var msg = data.msg?data.msg:"系统出错";
				dalert(msg)
			}
		}			
	});
}

//关闭弹窗
function close_zhima_dl(){
	$("#zhima_bg_dl").css("display", "none");
	$("#zhima_dl").css("display", "none");
	
	//判断是否要支付
	var url2 = appPath + "/Request/get_zhima_status_ajax";
	ajax_jquery({
		url : url2,
		data : {},
		success : function (data){
			if(data.status == '1'){
				try{
					var data = data.data;
					if(data["zhimaInfo"]["status"] == "1"){
						is_zhima = "1";
						quick_auth_is_over();
					}
				}catch(e){
					dalert("系统出错");
				}
			}else{
				var msg = data.msg?data.msg:"系统出错";
				dalert(msg)
			}
		}			
	});
}

//刷新芝麻
function refresh_zhima(){
	$("#zhima_bg_dl").css("display", "none");
	$("#zhima_dl").css("display", "none");
	
	//判断是否要支付
	var url2 = appPath + "/Request/get_zhima_status_ajax";
	ajax_jquery({
		url : url2,
		data : {},
		success : function (data){
			if(data.status == '1'){
				try{
					var data = data.data;
					if(data["zhimaInfo"]["status"] == "1"){
						is_zhima = "1";
						quick_auth_is_over();
					}
				}catch(e){
					dalert("系统出错")
				}
			}else{
				var msg = data.msg?data.msg:"系统出错";
				dalert(msg)
			}
		}			
	});
}

//联系人检测
function doContactCheck(){
	var name1 = $("#name1").val();
	var phone1 = $("#phone1").val();
	var relationship1 = $("#relationship1").val();
	if(relationship1 == -1){
		relationship1 = "";
	}
	
	var is_contact1 = false;
	if(name1 != "" && phone1 != "" && relationship1 != ""){
		is_contact1 = true;
	}
	
	var name2 = $("#name2").val();
	var phone2 = $("#phone2").val();
	var relationship2 = $("#relationship2").val();
	if(relationship2 == -1){
		relationship2 = "";
	}
	
	var is_contact2 = false;
	if(name2 != "" && phone2 != "" && relationship2 != ""){
		is_contact2 = true;
	}
	
	if(!check_phone(phone1) || !check_phone(phone2)){
		dalert("请输入正确的手机号码");
		return false;
	}
	
	if(!is_contact1 || !is_contact2){
		dalert("请填写完整信息");
		return false;
	}
	
	if(relationship1 != 1 && relationship1 != 2 && relationship2 != 1 && relationship2 != 2){
		dalert("请至少填写一个父母或者配偶");
		return false;
	}
	
	var name = "";
	var phone = "";
	var relationship = "";
	if(is_contact1){
		name = name1.replace(",","") + ",";
		phone = phone1.replace(",","") + ",";
		relationship = relationship1.replace(",","") + ",";
	}
	if(is_contact2){
		name += name2.replace(",","") + ",";
		phone += phone2.replace(",","") + ",";
		relationship += relationship2.replace(",","") + ",";
	}
	
	name = name.substr(0, name.length-1);
	phone = phone.substr(0, phone.length-1);
	relationship = relationship.substr(0, relationship.length-1);
	
	
	var url = appPath + "/Request/save_main_contact_ajax";
	ajax_jquery({
		url : url,
		data : {name:name, phone:phone, relationship:relationship},
		success : function (data){
			if(data.status == '1'){
				quick_auth_is_over();
			}else{
				var msg = data.msg?data.msg:"保存失败";
				dalert(msg)
			}
		}					
	});
}

//定时器
var timeinterval;
var times;

function clock(){
	$("#n-ayinfo #get_new_code_djs").html(times + "s");
	times--;
	if(times == -1){
		clearInterval(timeinterval);
		timeinterval = "";
		$("#n-ayinfo #get_new_code").css("display", "block");
		$("#n-ayinfo #get_new_code_djs").css("display", "none");
	}
}

//重发动态密码或者图片验证码
function reset_phone_captcha(ctype){
	var url = appPath + "/Request/resend_captcha_ajax";
	ajax_jquery({
		url : url,
		data : {gatherToken:gatherToken, siteCode:siteCode},
		success : function (data){
			if(data.status == '1'){
				if(ctype == 1){
					//动态验证码
					$("#n-ayinfo #get_new_code_djs").html("60s");
					times = 59;
					timeinterval = setInterval("clock()",1000);
					$("#n-ayinfo #get_new_code").css("display", "none");
					$("#n-ayinfo #get_new_code_djs").css("display", "block");
				}else{
					//图片验证码
					captchaImage = data.data.img_content;
					img_type = data.data.img_type;
					
					var base64 = "data:image/" + img_type + ";base64," + captchaImage;
					$("#pic_code img").attr("src", base64);
				}
			}else{
				var msg = data.msg?data.msg:"请求失败";
				dalert(msg)
			}
		}					
	});
}


//保存运营商信息
var gatherToken = "";
var siteCode = "";
var dynamicPasswordType = "";
var dynamicPasswordMsg = "";
var captchaImage = "";
var img_type = "";
function save_ppd(){
	var password = $("#ppd").val();
	if(password == ""){
		dalert("请填写完整信息");
		return false;
	}
	
	var url = appPath + "/Request/save_thirdinfo_mobilecarrier";
	ajax_jquery({
		url : url,
		umask:"1",
		data : {password:password},
		success : function (data){
			if(data.status == "1"){
				//进入下一步
				quick_auth_is_over();
			}else if(data.status == '0' && data.error == "E00080000"){
				if(timeinterval){
					clearInterval(timeinterval);
					timeinterval = "";
				}
				//输入密码后再次请求
				gatherToken = data.data.gatherToken;
				siteCode = data.data.siteCode;
				dynamicPasswordType = data.data.dynamicPasswordType;
				dynamicPasswordMsg = data.data.dynamicPasswordMsg;
				
				$("#n-ayinfo").slideDown();
				$("#n-ayinfo #authsmscode").attr("placeholder", dynamicPasswordMsg);
				//出现倒计时
				$("#n-ayinfo #get_new_code_djs").html("60s");
				times = 59;
				timeinterval = setInterval("clock()",1000);
				$("#n-ayinfo #get_new_code").css("display", "none");
				$("#n-ayinfo #get_new_code_djs").css("display", "block");
				//渲染按钮
				$("#change-btn").empty();
				$("#change-btn").append('<a href="javascript:" onclick="authenticationverificationCode()" class="s-gnel-ylbtn">下一步</a>');
			}else if(data.status == '0' && data.error == "E00080003"){
				if(timeinterval){
					clearInterval(timeinterval);
					timeinterval = "";
				}
				//选择图片验证码，密码后再次请求
				gatherToken = data.data.gatherToken;
				siteCode = data.data.siteCode;
				dynamicPasswordType = data.data.dynamicPasswordType;
				dynamicPasswordMsg = data.data.dynamicPasswordMsg;
				
				captchaImage = data.data.captchaImage;
				img_type = data.data.img_type;
				
				$("#n-ayinfo-img").slideDown();
				$("#n-ayinfo-img #authsmscode-img").attr("placeholder", dynamicPasswordMsg);
				var base64 = "data:image/" + img_type + ";base64," + captchaImage;
				$("#pic_code img").attr("src", base64);
				$("#change-btn").empty();
				$("#change-btn").append('<a href="javascript:" onclick="authenticationverificationImgCode()" class="s-gnel-ylbtn">下一步</a>');
			}else{
				var msg = data.msg?data.msg:"保存失败";
				dalert(msg);
			}
		}					
	});
}

//再次短信验证
function authenticationverificationCode(){
	var password = $("#ppd").val();
	var authsmscode = $("#authsmscode").val();
	if(authsmscode == ""){
		dalert("请输入短信验证码");
		return false;
	}
	
	//再次提交
	var url = appPath + "/Request/save_thirdinfo_mobilecarrier";
	ajax_jquery({
		url : url,
		umask:"1",
		data : {password:password, gatherToken:gatherToken, dynamicPassword: authsmscode, dynamicPasswordType:dynamicPasswordType, siteCode:siteCode},
		success : function (data){
			if(data.status == "1"){
				//进入下一步
				quick_auth_is_over();
			}else if(data.status == '0' && data.error == "E00080000"){
				if(timeinterval){
					clearInterval(timeinterval);
					timeinterval = "";
				}
				//输入密码后再次请求
				gatherToken = data.data.gatherToken;
				siteCode = data.data.siteCode;
				dynamicPasswordType = data.data.dynamicPasswordType;
				dynamicPasswordMsg = data.data.dynamicPasswordMsg;
				
				$("#n-ayinfo-img").hide();
				$("#authsmscode-img").attr("value", "");
				
				$("#n-ayinfo").slideDown();
				$("#authsmscode").attr("value", "");
				$("#n-ayinfo #authsmscode").attr("placeholder", dynamicPasswordMsg);
				//出现倒计时
				$("#n-ayinfo #get_new_code_djs").html("60s");
				times = 59;
				timeinterval = setInterval("clock()",1000);
				$("#n-ayinfo #get_new_code").css("display", "none");
				$("#n-ayinfo #get_new_code_djs").css("display", "block");
				//渲染按钮
				$("#change-btn").empty();
				$("#change-btn").append('<a href="javascript:" onclick="authenticationverificationCode()" class="s-gnel-ylbtn">下一步</a>');
			}else if(data.status == '0' && data.error == "E00080003"){
				if(timeinterval){
					clearInterval(timeinterval);
					timeinterval = "";
				}
				//选择图片验证码，密码后再次请求
				gatherToken = data.data.gatherToken;
				siteCode = data.data.siteCode;
				dynamicPasswordType = data.data.dynamicPasswordType;
				dynamicPasswordMsg = data.data.dynamicPasswordMsg;
				
				captchaImage = data.data.captchaImage;
				img_type = data.data.img_type;
				
				$("#n-ayinfo").hide();
				$("#authsmscode").attr("value", "");
				
				$("#n-ayinfo-img").slideDown();
				$('#authsmscode-img').attr("value", "");
				$("#n-ayinfo-img #authsmscode-img").attr("placeholder", dynamicPasswordMsg);
				var base64 = "data:image/" + img_type + ";base64," + captchaImage;
				$("#pic_code img").attr("src", base64);
				$("#change-btn").empty();
				$("#change-btn").append('<a href="javascript:" onclick="authenticationverificationImgCode()" class="s-gnel-ylbtn">下一步</a>');
			}else{
				var msg = data.msg?data.msg:"验证失败";
				dalert(msg);
			}
		}					
	});
}

//再次图片验码
function authenticationverificationImgCode(){
	var password = $("#ppd").val();
	var authsmscode = $("#authsmscode-img").val();
	if(authsmscode == ""){
		dalert("请输入图片验证码");
		return false;
	}
	
	//再次提交
	var url = appPath + "/Request/save_thirdinfo_mobilecarrier";
	ajax_jquery({
		url : url,
		umask:"1",
		data : {password:password, gatherToken:gatherToken, dynamicPassword: authsmscode, dynamicPasswordType:dynamicPasswordType, siteCode:siteCode},
		success : function (data){
			if(data.status == "1"){
				//进入下一步
				quick_auth_is_over();
			}else if(data.status == '0' && data.error == "E00080000"){
				if(timeinterval){
					clearInterval(timeinterval);
					timeinterval = "";
				}
				//输入密码后再次请求
				gatherToken = data.data.gatherToken;
				siteCode = data.data.siteCode;
				dynamicPasswordType = data.data.dynamicPasswordType;
				dynamicPasswordMsg = data.data.dynamicPasswordMsg;
				
				$("#n-ayinfo-img").hide();
				$("#authsmscode-img").attr("value", "");
				
				$("#n-ayinfo").slideDown();
				$("#authsmscode").attr("value", "");
				$("#n-ayinfo #authsmscode").attr("placeholder", dynamicPasswordMsg);
				//出现倒计时
				$("#n-ayinfo #get_new_code_djs").html("60s");
				times = 59;
				timeinterval = setInterval("clock()",1000);
				$("#n-ayinfo #get_new_code").css("display", "none");
				$("#n-ayinfo #get_new_code_djs").css("display", "block");
				//渲染按钮
				$("#change-btn").empty();
				$("#change-btn").append('<a href="javascript:" onclick="authenticationverificationCode()" class="s-gnel-ylbtn">下一步</a>');
			}else if(data.status == '0' && data.error == "E00080003"){
				if(timeinterval){
					clearInterval(timeinterval);
					timeinterval = "";
				}
				//选择图片验证码，密码后再次请求
				gatherToken = data.data.gatherToken;
				siteCode = data.data.siteCode;
				dynamicPasswordType = data.data.dynamicPasswordType;
				dynamicPasswordMsg = data.data.dynamicPasswordMsg;
				
				captchaImage = data.data.captchaImage;
				img_type = data.data.img_type;
				
				$("#n-ayinfo").hide();
				$("#authsmscode").attr("value", "");
				
				$("#n-ayinfo-img").slideDown();
				$('#authsmscode-img').attr("value", "");
				$("#n-ayinfo-img #authsmscode-img").attr("placeholder", dynamicPasswordMsg);
				var base64 = "data:image/" + img_type + ";base64," + captchaImage;
				$("#pic_code img").attr("src", base64);
				$("#change-btn").empty();
				$("#change-btn").append('<a href="javascript:" onclick="authenticationverificationImgCode()" class="s-gnel-ylbtn">下一步</a>');
			}else{
				var msg = data.msg?data.msg:"验证失败";
				dalert(msg);
			}
		}					
	});
}



//添加卡片
/*
function save_debitcard(){
	var cardNo = $("#cardNo").val();
	var bankId = $("#bankId").val();
	var mobile = $("#mobile").val();
	
	if(cardNo == "" || bankId == "" || mobile == ""){
		dalert("请填写完整信息");
		return false;
	}
	
	if(!check_phone(mobile)){
		dalert("请填写正确的手机号码");
		return false;
	}
	
	var url = appPath + "/Request/bind_bank_card_ajax";
	ajax_jquery({
		url : url,
		data : {cardType:1, cardNo:cardNo, bankId:bankId, mobile:mobile},
		success : function (data){
			if(data.status == '1'){
				window.history.go(-1);
			}else{
				var msg = data.msg?data.msg:"保存失败";
				dalert(msg)
			}
		}					
	});
}
*/

function save_design_debitcard(){
    var cardNo = $("#cardNo").val();
    var bankId = $("#bankId").val();
    var mobile = $("#mobile").val();

    if(cardNo == "" || bankId == "" || mobile == ""){
        dalert("请填写完整信息");
        return false;
    }

    if(!check_phone(mobile)){
        dalert("请填写正确的手机号码");
        return false;
    }

    var url = appPath + "/Request/bind_bank_card_ajax";
    ajax_jquery({
        url : url,
        data : {cardType:1, cardNo:cardNo, bankId:bankId, mobile:mobile},
        success : function (data){
            if(data.status == '1'){
                quick_auth_is_over();
            }else{
                var msg = data.msg?data.msg:"新增失败";
                dalert(msg)
            }
        }
    });
}

//用户确认放款
function do_apply(){
	var userCardId = $("#bankcard").data("id");

	var url = appPath + "/Request/confirm_commend_ajax";
	ajax_jquery({
		url : url,
		data : {userCardId:userCardId, nid:nid},
		success : function (data){
			if(data.status == '1'){
				//弹窗
				$("#bg_dl").css("display", "block");
				$("#dialog_dl").css("display", "block");
			}else{
				var msg = data.msg?data.msg:"提交失败";
				dalert(msg);
			}
		}					
	});
}

//还款
function do_repay(){
	if (isBankCard == 2) {
		window.location.href = appPath+'/Borrow/alirepay/nid'+nid;
	} else {
		var cardId = $("#bankcard").data("id");
		
		var url = appPath + "/Request/onekey_repay_ajax";
		ajax_jquery({
			url : url,
			data : {cardId:cardId, nid:nid},
			success : function (data){
				if(data.status == '1'){
					//弹窗
					tipOpen("还款处理中，请稍后查看",3000);
					setTimeout(function () {
                        window.location.href = appPath + "/Borrow/main";
                    },2000);
					// $("#bg_dl").css("display", "block");
					// $("#dialog_dl").css("display", "block");
				}else{
					var msg = data.msg?data.msg:"提交失败";
					dalert(msg);
				}
			}					
		});
	}
}

//关闭首页提示窗口
function close_borrow_main_dl(){	
	$(".m-mask-c").css("display", "none");
	$(".custom-dialog").css("display", "none");
}

//借款还款时候修改卡片
function choose_apply_card(){
	var url = appPath + "/Borrow/choos_apply_card_dl";
	ajax_jquery({
		url : url,
		data : {},
		success : function (data){
			if(data.status == '1'){
				$("#apply_main").css("display", "none");
				$("#apply_body").append(data.data.msg);
			}else{
				var msg = data.msg?data.msg:"获取失败";
				dalert(msg);
			}
		}					
	});
	
}

//借款还款时选择卡片
function choose_repay_card(){
	var url = appPath + "/Borrow/choos_repay_card_dl";
	ajax_jquery({
		url : url,
		data : {},
		success : function (data){
			if(data.status == '1'){
				$("#repay_main").css("display", "none");
				$("#repay_body").append(data.data.msg);
			}else{
				var msg = data.msg?data.msg:"获取失败";
				dalert(msg);
			}
		}					
	});
	
}
function do_assisted_loan_apply() {
	var url = appPath + "/Request/post_assisted_detail";
	var data = $("#form1").serialize();
	console.log(data);
    ajax_jquery({
		url:url,
		data: data,
		success: function(res) {
            console.log(res);
            if (res.status == 1) {
				window.location.href = appPath+"/Borrow/assistedLoanApplySuccess";
			} else {
				var msg = res.msg?res.msg:"提交失败";
                dalert(msg);
			}
		}
	});
}