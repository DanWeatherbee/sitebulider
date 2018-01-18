/*
Dan Weatherbees Custom Player
                Jan 11 2018
Create div in your page and giv it the id |  #player-dw-root  | then add a button
with the attribute onClick="loadPlayerDw(videos/mp4.mp4)".

e.g. template;

<div id="player-dw-root"></div>
<a class="btn btn-success" onClick="loadPlayerDw()">Add Video Player</a>
 */


var loadPlayerDw = function() {
    $('#player-dw-root').prepend(
        '<h1 class="loading text-center animated pulse infinite big-txt">Player is loading <i class="fa fa-spinner" aria-hidden="true"></i></h1>'
    );
    $('.dw-player').addClass('animated hinge');

    setTimeout(function() {
        $('.dw-player').remove();

        renderPlayer();

    }, 2000);

};

var renderPlayer = function() {

    $('#player-dw-root').append(
        '<video class="dw-player ipad" height="40%" width="40%" autoplay="true">' +
        '<source class="vid-src" src="videos/worldplay.mp4" type="video/mp4" />' +
        '</video>'
    );
    $('.loading').remove();
    $('#showcase-container').fadeOut();
    setTimeout(function() {
        $('#showcase-container').fadeIn();
        $('.dw-player').remove();
    }, 39000);

};