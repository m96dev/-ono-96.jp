// JavaScript Document

$(function(){
  var now = new Date();
  var h = now.getHours();
  var mi = now.getMinutes();
	if (h == 9 || h == 10 || h == 11 || h == 12 || h == 13 || h == 14 || h == 15 || h == 16 || h == 17 || h == 18 ) {
	$("#chage_background").attr("href", "./css/white.css")
	} else if (h = 19) {
	$("#chage_background").attr("href", "./css/black.css")
	}
	
});	