// var timmer_stringeedx = setTimeout(function() {
// 	var bodyDx = document.querySelector("body");
// 	if(bodyDx) {
// 		load();
// 		clearTimeout(timmer_stringeedx);
// 	}
// }, 10);


// function load () {

// 	var x = document.getElementsByTagName('head')[0];
// 	var style = document.createElement('style');
// 		style.type = 'text/css';
// 		style.innerHTML = '#vbeeIframe{width: 100%; height:99.5vh; border:none; padding:0;}';
// 		// style.innerHTML = '.stringeeX_chatbox_iframe_wrapper.full-open{border-radius: 10px;width: 380px;	height: 580px;margin-bottom: 15px;	margin-right: 15px;box-shadow: rgba(0, 0, 0, 0.16) 0px 5px 40px;}.stringeeX_chatbox_iframe_wrapper{bottom: 0;right: 0;margin-top:0;margin-right:0;margin-bottom:0;padding:0;display:block;background:transparent;position:fixed !important;z-index:16000015;width:85px;height:85px;box-sizing: content-box}.stringeeX_chatbox_iframe_wrapper .iframe{background-color:transparent;vertical-align:text-bottom;position:relative;width:100%;height:100%;min-width:100%;min-height:100%;max-width:100%;max-height:100%;margin:0;overflow:hidden;display:block;border-width:0}.drop-down-rectangle1{position:absolute;width:15px;height:15px;background:#FFF;transform:rotate(45deg);top:-5px;right:35px;border:1px solid #E9EBED} .stringeeX_chatbox_iframe_wrapper.full-open .header{height:40px;width:calc(100% - 70px);position:absolute;z-index:1000;cursor:move;}@media only screen and (min-device-width: 320px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait){.stringeeX_chatbox_iframe_wrapper.full-open{width:100%;height:100%;margin-bottom:0;margin-right:0}.stringeeX_chatbox_iframe_wrapper{width: 150px;height: 150px;}}@media only screen and (min-device-width: 375px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: landscape){.stringeeX_chatbox_iframe_wrapper.full-open{width:100%;height:100%;margin-bottom:0;margin-right:0}.stringeeX_chatbox_iframe_wrapper{width: 150px;height: 150px;}}@media only screen and (min-device-width: 375px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape){.stringeeX_chatbox_iframe_wrapper.full-open{width:100%;height:100%;margin-bottom:0;margin-right:0}.stringeeX_chatbox_iframe_wrapper{width: 150px;height: 150px;}}';
// 		x.appendChild(style);

// 	getContentIframe = function (iframe_html) {
// 		var div = document.createElement("div");
// 			div.setAttribute('class', 'vbee');
// 			div.setAttribute('id', 'vbee');
// 			div.style.display = 'block';
// 		var header = document.createElement('div');
// 		header.setAttribute('class', 'header');
// 			div.appendChild(header);
// 		var iframe = document.createElement('iframe');
// 			iframe.setAttribute('class', 'iframe');
// 			iframe.setAttribute('id', 'vbeeIframe');
// 			div.appendChild(iframe);
// 			document.body.appendChild(div);
// 			iframe.contentWindow.document.open();
// 			iframe.contentWindow.document.write(iframe_html);
// 			iframe.contentWindow.document.close();
// 	};

// 	var iframe_html = '<!DOCTYPE html>'+
// 						'<html>'+
// 							'<head>'+
// 								'<title>Test đăng kí</title>'+
// 								'<meta charset="utf-8">'+
// 								'<meta name="viewport" content="width=device-width, initial-scale=1">'+
// 								'<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">'+
// 								'<link href="css/style2.css" rel="stylesheet" type="text/css"/>'+
// 								'<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>'+
// 								'<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>'+
// 								'<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>'+
// 								'<script src="https://unpkg.com/axios/dist/axios.min.js"></script>'+
// 								'<script src="index.js"></script>'+
// 							'</head>'+
// 							'<body>'+
// 								'<div class="register">'+
// 								'<!-- <div class="container"> -->'+
										
// 										'<div class="row">'+
// 											'<div class="col-md-6">'+
// 												'<div class="form-login">'+
// 													'<div class="head">'+
// 														'<h3>Đăng ký AI CALL CENTER</h3>'+
// 														'<p>Trải nghiệm tổng đài tự động</p>'+
// 													'</div>'+
// 													'<form action="">'+
// 														'<div class="input-text">'+
// 															'<input type="text" class="form-control" placeholder="Họ tên" id="name" name="name" onkeyup="checkName()">'+
// 															'<p id="error-name" style="display: none;"></p>'+
// 														'</div>'+
													
// 														'<div class="input-text">'+
// 															'<input type="text" class="form-control" placeholder="Số điện thoại" id="phone" name="phone" onkeyup="checkPhone()">'+
// 															'<p id="error-phone" style="display: none;"></p>'+
// 														'</div>'+
// 														'<div class="input-text">'+
// 															'<input type="text" class="form-control" placeholder="Email" id="email" name="email" onkeyup="checkEmail()">'+
// 															'<p id="error-email" style="display: none;"></p>'+
// 														'</div>'+
// 														'<div class="input-text">'+
// 															'<input type="password" class="form-control" placeholder="Mã kinh doanh" id="code-business" name="codebusiness">'+
// 															'<p id="error-code" style="display: none;"></p>'+
// 														'</div>'+
// 														'<div class="input-text">'+
// 															'<input type="password" class="form-control" placeholder="Mật khẩu" id="pass" name="pass" onkeyup="checkPass()">'+
// 															'<p id="error-pass" style="display: none;"></p>'+
// 														'</div>'+
// 														'<div class="input-text">'+
// 															'<input type="password" class="form-control" placeholder="Nhập lại mật khẩu" id="repass" name="repass" onkeyup="checkRePass()">'+
// 															'<p id="error-repass" style="display: none;"></p>'+
// 														'</div>'+
// 														'<div class="box-captcha">'+
// 															'<label class="lable-capcha">Mã captcha</label>'+
// 															'<div class="image-capcha">'+
// 																'<img src="" alt="" class="img-fluid captcha">'+
// 																'<a href="javascript:void(0)" class="change-capcha" onclick="onGetCaptcha()">'+
// 																	'<img src="images/reCaptcha.png" alt="">'+
// 							                                               ' Đổi mã khác'+
// 							                                    '</a>'+
// 															'</div>'+
// 														'</div>'+
// 														'<div class="input-text box-captcha">'+
// 															'<label class="lable-capcha">Nhập mã captcha</label>'+
// 															'<div class="input-capcha">'+
// 																'<input type="text" class="form-control" placeholder="Mã captcha" id="captcha" name="captcha">'+
// 																'<p id="error-captcha" style="display: none;"></p>'+
// 															'</div>'+
// 														'</div>'+
// 														'<div class="input-text">'+
// 															'<p id="error-general" style="display: none;"></p>'+
// 														'</div>'+
// 														'<div class="input-text">'+
// 															'<button type="button" onclick="onSave()">Đăng kí</button>'+
// 														'</div>'+
														
// 													'</form>'+
// 												'</div>'+
// 												'<div class="per-otp" style="display: none;">'+
// 													'<div class="head">'+
// 														'<h3>Chỉ còn một bước nữa!</h3>'+
// 														'<p>Bảo mật của bạn là ưu tiên của chúng tôi</p>'+
// 													'</div>'+
// 											        '<div>'+
// 											            '<p style="font-size: 14px;">Chúng tôi vừa thực hiện một cuộc gọi tới số thuê bao của bạn để cung cấp mã xác nhận (OTP) , vui lòng nhập dưới đây.</p>'+
// 											        '</div>'+
// 											        '<form action="" class="code-otp" >'+
// 											            '<div class="input-otp">'+
// 											                '<input id="codeOtpStep2" type="text" ref="code_otp" class="focus_next1" maxlength="4" autofocus >'+
// 											            '</div>'+
// 											            '<p class="text-center" id="error_otp"></p>'+
// 											            '<div class="column is-12">'+
// 											                '<p class="control">'+
// 											                '<button type="button" class="btn-sign-in" name="login-button" onclick="onSubmitSignIn()">'+
// 											                ' Đăng ký'+
// 											                '</button>'+
// 											                '</p>'+
// 											            '</div>'+
// 											        '</form>'+
	
// 											        '<div class="otp-foter">'+
// 											            '<p>Yêu cầu  <button class="send-otp" onclick="reSendOtp()">gửi lại mã</button> sau <span class="timer"></span> giây</p>'+
// 											            '<!--                                <a href="#" class="account-other">Đăng nhập bằng tài khoản khác</a>-->'+
// 											        '</div>'+
// 											    '</div>'+
// 											'</div>'+
// 											'<div class="col-md-6 left-form">'+
// 												'<img src="images/robo.png" alt="" class="img-fluid images-right">'+
// 											'</div>'+
// 										'</div>'+
										
// 									'<!-- </div> -->'+
// 								'</div>'+
// 							'</body>'+
// 						'</html>';
// 	getContentIframe(iframe_html);

// }
 var ifrm = document.createElement("iframe");
        ifrm.setAttribute("src", "dangki.html");
        ifrm.style.width = "100%";
        ifrm.style.height = "86.4vh";
        ifrm.style.border= "none";
        ifrm.style.marginTop = '46px';
        ifrm.id= 'vbeeIframe';
        document.body.appendChild(ifrm);