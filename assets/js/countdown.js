$(function (){
    var x = 0;
    function countdown() {
        
        var now = new Date();
        var currentTime = now.getTime();

        var eventDate = [
            //Round sale "starts in" set time
            new Date('Dec 19, 2017 14:25:00'),
            //Round sale "finish in" set time
            new Date('Feb 26, 2018 16:30:00')
        ];

        if(eventDate[x].getTime() <= currentTime){
            if ( x < eventDate.length - 1  ) {
                x++;
                countdown();

                if( !$('#countdown').hasClass('expired') ){
                    document.getElementById("counthead").innerHTML = "Current Sale Finish in";
                    $('#countdown').removeClass('will-start');
                    $('#countdown').addClass('will-finish');
                }
            } else{
                document.getElementById("countdown").innerHTML = "<div class='item-left col-xs-12 col-sm-12'><div class='item-inner-left'><span class='sold'>Token Distribution Has Expired</span></div></div>";
                $('#countdown').removeClass('will-finish');
                $('#countdown').removeClass('will-start');
                $('#countdown').addClass('expired');
            }

            if( Number( $('#rtokens').text() ) === 0 ) {
                document.getElementById("countdown").innerHTML = "<div class='item-left col-xs-12 col-sm-12'><div class='item-inner-left'><span class='sold'>SOLD OUT</span></div></div>";
                $('#countdown').removeClass('will-finish');
                $('#countdown').removeClass('will-start');
                $('#countdown').addClass('sold');
            }


            if( $('#countdown').hasClass('expired') || $('#countdown').hasClass('sold') ){
                $('.roundsale-modal-button').attr('data-target','#resetpass-modal');
                $('#roundsale-modal-button').hide();
            }

        } else{
            var remTime = eventDate[x].getTime() - currentTime;

            var sec = Math.floor(remTime / 1000);
            var min = Math.floor(sec / 60);
            var hur = Math.floor(min / 60);
            var day = Math.floor(hur / 24);

            hur %= 24;
            min %= 60;
            sec %= 60;

            hur = (hur < 10) ? "0" + hur : hur;
            min = (min < 10) ? "0" + min : min;
            sec = (sec < 10) ? "0" + sec : sec;

            $('.seconds').text(sec);
            $('.minutes').text(min);
            $('.hours').text(hur);
            $('.days').text(day);

            if( $('#countdown').hasClass('will-start') ){
                $('.roundsale-modal-button').attr('data-target','#login-modal');
                $('#roundsale-modal-button').show();
            } else if( $('#countdown').hasClass('will-finish') ){
                $('.roundsale-modal-button').attr('data-target','#signup-modal');
                $('#roundsale-modal-button').show();
            }

            setTimeout(countdown, 1000);
        }
    }

    countdown();
});