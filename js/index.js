$( document ).ready(function() {
    onGetCaptcha();
    toggleTimer();
    // var url = (window.location != window.parent.location) ? document.referrer : document.location;
     var url = (window.location.origin != window.location.ancestorOrigins[0]) ? window.location.ancestorOrigins[0] : document.location;
     // console.log(url);
     $('#name').focus();
   
});
let sessions = "";
var error = true;
let interval = null;
var isRunning = false;
let timer = 60;
let currentStep = 0;
let countButton = 0;

function checkPhone(){
	const phoneReg = /((0)+([0-9]{9})\b)/;
	var phone = $("#phone").val();
	if(phone === '' || phone === null){
		$("#error-phone").html("Số điện thoại không được để trống !");
		$("#error-phone").css({
			"display":"block"
		});
		$("#phone").css("border","1px solid red");
		error = true;
	} else if(!phoneReg.test(phone)){
		$("#error-phone").html("Số điện thoại không đúng định dạng !");
		$("#error-phone").css({
			"display":"block"
		});
		$("#phone").css("border","1px solid red");
		error = true;
	} else {
		$("#error-phone").html("");
		$("#error-phone").css("display","none");
		$("#phone").css("border","1px solid #dcdfe6");
		error = false;
	}
}
function checkEmail(){
	const emailReg = /(^[A-Za-z][a-z0-9._]{2,40}@[a-z0-9]{2,}(\.[a-z0-9]{2,3}){1,2}$)/;
	var email = $("#email").val();
	// if(email=== '' || email === null){
	// 	$("#error-email").html("Email không được để trống !");
	// 	$("#error-email").css({
	// 		"display":"block"
	// 	});
	// 	$("#email").css("border","1px solid red");
	// } else 
	if(!emailReg.test(email)){
		$("#error-email").html("Email không đúng định dạng !");
		$("#error-email").css({
			"display":"block"
		});
		$("#email").css("border","1px solid #dcdfe6");
		error = true;
	} else {
		$("#error-email").html("");
		$("#error-email").css("display","none");
		$("#email").css("border","1px solid #dcdfe6");
		error = false;
	}
}
function checkName(){
	var name = $("#name").val();
	if(name === '' || name === null){
		$("#error-name").html("Họ tên không được để trống !");
		$("#error-name").css({
			"display":"block"
		});
		$("#name").css("border","1px solid red");
		error = true;
	} else {
		$("#error-name").html("");
		$("#error-name").css("display","none");
		$("#name").css("border","1px solid #dcdfe6");
		error = false;
	}
}
function checkPass(){
	var pass = $("#pass").val();
	if(pass === '' || pass === null){
		$("#error-pass").html("Mật khẩu không được để trống !");
		$("#error-pass").css({
			"display":"block"
		});
		$("#pass").css("border","1px solid red");
		error = true;
	} else if(pass.length < 8){
		$("#error-pass").html("Mật khẩu phải có ít nhất 8 ký tự !");
		$("#error-pass").css({
			"display":"block"
		});
		$("#pass").css("border","1px solid red");
		error = true;
	}
	else {
		$("#error-pass").html("");
		$("#error-pass").css("display","none");
		$("#pass").css("border","1px solid #dcdfe6");
		error = false;
	}
}
function checkRePass(){
	const repass = $("#repass").val();
	const pass = $("#pass").val();
	if(repass === '' || repass === null){
		$("#error-repass").html("Mật khẩu không được để trống !");
		$("#error-repass").css({
			"display":"block"
		});
		$("#repass").css("border","1px solid red");
		error = true;
	} else if(repass !== pass){
		$("#error-repass").html("Mật khẩu không trùng khớp ! ");
		$("#error-repass").css({
			"display":"block"
		});
		$("#repass").css("border","1px solid red");
		error = true;
	} else {
		$("#error-repass").html("");
		$("#error-repass").css("display","none");
		$("#repass").css("border","1px solid #dcdfe6");
		error = false;
	}
	// console.log('1:' + repass);
	// console.log('2:' + pass);
}
function checkCaptcha(){
	var captcha = $("#captcha").val();
	if(captcha === '' || captcha === null){
		$("#error-captcha").html("Captcha không được để trống !");
		$("#error-captcha").css({
			"display":"block"
		});
		$("#captcha").css("border","1px solid red");
		error = true;
	} else {
		$("#error-captcha").html("");
		$("#error-captcha").css({
			"display":"none"
		});
		$("#captcha").css("border","1px solid #dcdfe6");
		error = false;
	}
}
function checkAgree(){
	var checkbox = $("#agree").val();
	if( $('#agree').is(":checked")){
		$("#error-check").html("");
		$("#error-check").css({
			"display":"none"
		});
		$("#agree").css("border","1px solid #dcdfe6");
		error = false;
	} else {
		$("#error-check").html("Bạn cần đồng ý với điều khoản sử dụng và chính sách bảo mật của chúng tôi trước khi đăng ký");
		$("#error-check").css({
			"display":"block"
		});
		$("#agree").css("border","1px solid red");
		error = true;
	}
}

function onGetCaptcha(){
    $.get('https://cp-dev.aicallcenter.vn/default/get-captcha', {session:sessions}, function (response) {
	     $('img.captcha').attr("src",response.data.image );
	       	 sessions = response.data.session;
	});
	// $.ajax({
 //        url: 'http://frontend.dev.test:8080/default/get-captcha' + session,
 //        type: "GET",
 //    	method: 'GET',
 //        success: function(response) {
	//         // Change src attribute of image
	//        	 $('img.captcha').attr("src",response.data.image );
	//        	 session = response.data.session;
 //          // alert(response.message);
 //        },
 //     });
}

var src = window.location.href;
var postion = src.indexOf("key=");
var key = src.slice(postion + 4);
var business;
if( postion < 0 ){
	business ='';
} else {
	business = key;
}

function onSave(){
	checkPhone();
	checkName();
	checkPass();
	checkRePass();
	checkCaptcha();
	checkAgree();

	if(error === true){
		return;
	}
	var phone = document.getElementById('phone').value;
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var captcha = document.getElementById('captcha').value;
	var business_code = business;
	var session = sessions;
	let data = {
       	username:  phone,
        name,
        email,
        phone,
        business_code,
        captcha,
        session
    };
    $.ajax({
        url: 'https://cp-dev.aicallcenter.vn/default/register-captcha',
        type: "POST",
    	method: 'POST',
        data: data,
        success: function(response) {
          let code = response.code;
          switch (code) {
            case 0:
            	$('.btn-continue svg').css('display','block');
	            $('.btn-continue').attr('disabled',true);
	            $('.per-otp').css('display','block');
	            $('.form-login').css('display','none');
	             $('#codeOtpStep2').focus();
	             $("#error-general").css({
					"display":"none"
				});
	            currentStep = 1;
              	break;
    //         case 1:
    //          	$("#error-phone").html(response.message);
				// $("#error-phone").css({
				// 	"display":"block"
				// });
				// $("#phone").css("border","1px solid red");
				// $("#phone").focus();
				// onGetCaptcha();
    //           	break;
            case 1:
             $("#error-general").html(response.message);
				$("#error-general").css({
					"display":"block"
				});
            	
				onGetCaptcha();
              	break;
            default:
             	$("#error-captcha").css({
					"display":"block"
				});
             	$("#error-captcha").html(response.message);
				$("#captcha").css("border","1px solid red");
				$("#captcha").focus();
				$("#error-general").css({
					"display":"none"
				});
				onGetCaptcha();
              break;
          }
        },
        error: function(e) {
        	console.log(e);
        }
     });
}

function onSubmitSignIn() 
{
 
	var otp = document.getElementById('codeOtpStep2').value;
	var phone = document.getElementById('phone').value;
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var captcha = document.getElementById('captcha').value;
	var business_code = document.getElementById('code-business').value;
	var password = document.getElementById('pass').value;
	var session = sessions;
	var firstName = name.split(" ").slice(0, -1).join(" ");
	var lastName = name .split(" ").slice(-1).join(" ");
	let data = {
	    name,
	    captcha,
	    session: sessions,
	    code: otp,
	    username: phone,
	    password,
	    first_name: firstName,
	    last_name: lastName,
	    email: email,
	    business_code: business_code,
	    is_personal:1
	};

	 var url = (window.location.origin != window.location.ancestorOrigins[0]) ? window.location.ancestorOrigins[0] : document.location;
    // console.log(window.parent.location);
	 $.ajax({
        url: "https://cp-dev.aicallcenter.vn/default/register-vbee",
        type: "POST",
        dataType: "json",
        data: data,
        success: function(response) {
          let code = response.code;
          switch (code) {
            case 0:
              // me.currentStep = 3;
	           $('.btn-sign-in svg').css('display','block');
	           $('.btn-sign-in').attr('disabled',true);
              // console.log(domain);
               window.parent.location = url;
              break;
            case 1:
              // me.currentStep = 2;
             	$("#error_otp").html(response.message);
				$("#error_otp").css({
					"display":"block"
				});
				$("#codeOtpStep2").css("border","1px solid red");
              // me.timer = 60;
              break;
            default:
              $("#error_otp").html(response.message);
				$("#error_otp").css({
					"display":"block"
				});
              break;
          }
        }
      });
}
function toggleTimer() {
	var x = setInterval(function(){
		if (currentStep === 1) {
	   	 	timer = Number(timer) - 1;
		    if (timer < 0) {
		      timer = 0;
		      $('.send-otp').attr('disabled',false);
		      clearInterval(x);
		    } else {
		    	 $('.send-otp').attr('disabled',true);
		    }
		    $('.timer').html(timer);
		 // console.log(countButton);
 		}
 		if(countButton >= 3 && timer <= 0){
 			 $('.send-otp').attr('disabled',true);
 			 clearInterval(x);
 		}
	}, 1000);
}
function reSendOtp() {
    $('#codeOtpStep2').focus();
    document.getElementById('codeOtpStep2').value = " ";
    $("#error_otp").html("");
	$("#error_otp").css({
		"display":"block"
	});
	$("#codeOtpStep2").css("border","1px solid #dcdfe6");
  	countButton = Number(countButton) + 1;
  	if (countButton <= 3) {
    // this.countButton += 1;
   		timer = 60;
   		$('.timer').html(timer);
   		toggleTimer();
     	onSave();
    // }
  	} else {
    	return false;
  	}
}