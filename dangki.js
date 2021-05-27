var scripts = document.getElementsByTagName( "script" );
console.log(scripts);
let lastScript = '';
for (key of scripts) {
   if (key.id === 'vbee') {
      lastScript = key;
   }
}
console.log(lastScript);
var src = lastScript.src;
var postion = src.search("key=");
var key = src.slice(postion);
var url_ifr;
if( postion < 0){
	url_ifr =  "https://dangky.aicallcenter.vn/index.html";
} else {
	url_ifr = "https://dangky.aicallcenter.vn/index.html" + "?" + key;
}


 var ifrm = document.createElement("iframe");
    ifrm.setAttribute("src", url_ifr);
    ifrm.style.width = "100%";
    ifrm.style.height = "86.4vh";
    ifrm.style.border= "none";
    ifrm.style.marginTop = '46px';
    ifrm.id= 'vbeeIframe';
    document.body.appendChild(ifrm);
