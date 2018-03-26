$(function (){

function marketcountdown() {

var now_ = new Date();
var eventDateMarket = new Date('Feb 12, 2018 12:00:30');
var currentTimeMarket = now_.getTime();
var evenTimeMarket = eventDateMarket.getTime();

if(eventDateMarket<=currentTimeMarket){
    clearInterval(setTimeout);
    $('#marketplace-soon').modal('hide');
    $( "a.market-closed" ).replaceWith( "<a class='new-ref' href='https://market.gemera.io/' id='counter-over'>Marketplace</a>" );
}

var remtime_ = evenTimeMarket - currentTimeMarket;

var sec = Math.floor(remtime_ / 1000);
var min = Math.floor(sec / 60);
var hur = Math.floor(min / 60);
var day = Math.floor(hur / 24);

 hur %= 24;
 min %= 60;
 sec %= 60;

hur = (hur < 10) ? "0" + hur : hur;
min = (min < 10) ? "0" + min : min;
sec = (sec < 10) ? "0" + sec : sec;

$('.s').text(sec);
$('.m').text(min);
$('.h').text(hur);
$('.d').text(day);

setTimeout(marketcountdown, 1000);

}

marketcountdown();

});