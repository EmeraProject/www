jQuery(document).ready(function($){

	$(document).on('click','.headline',function(){
		setCookie('instructioni', 'true', 1);
	});

	var saleProgress = 100 - Number( $('#rtokens').text() ) / Number( $('#Hardcap').text() ) * 100;

	if( Math.round(saleProgress) === 100 && Number( $('#rtokens').text() ) !== 0 ){
		$('.progress-bar').css('width','99%');
		$('.progress-bar').text('99%');
	} else if( Math.round(saleProgress) === 0 && saleProgress !== 0 ){
		$('.progress-bar').css('width','1%');
		$('.progress-bar').text('1%');
	} else {
		$('.progress-bar').css('width', '' + Math.round(saleProgress) + '%');
		$('.progress-bar').text('' + Math.round(saleProgress) + '%');
	}
});

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}