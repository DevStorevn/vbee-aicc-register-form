var scripts = document.getElementsByTagName( "script" );
const lastScript = scripts[scripts.length - 1];
var src = lastScript.src;
var postion = src.search("key=");
var key = src.slice(postion);
var url_ifr;
if( postion < 0){
	url_ifr =  "https://dangky.aicallcenter.vn/index.html";
} else {
	url_ifr = "https://dangky.aicallcenter.vn/index.html" + "?" + key;
}
// console.log(url_ifr);

 var ifrm = document.createElement("iframe");
    ifrm.setAttribute("src", url_ifr);
    ifrm.style.width = "100%";
    ifrm.style.height = "86.4vh";
    ifrm.style.border= "none";
    ifrm.style.marginTop = '46px';
    ifrm.id= 'vbeeIframe';
    document.body.appendChild(ifrm);