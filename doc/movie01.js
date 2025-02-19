$(function(){
    //-----------------------------------------------------



    $('#bgndVideo').YTPlayer({
        videoURL:'http://youtu.be/BsekcY04xvQ',
        containment:'#visual', //동영상 재생 될 위치 지정
        autoPlay:true,
        mute:true,
        startAt:0,
        opacity:1,
        showControls:true, //동영상 플레이표시(?) 지우기
    });

    $('#visual i.xi-pause').on('click', function(){
        $('#bgndVideo').YTPPause();
    });
    $('#visual i.xi-play').on('click', function(){
        $('#bgndVideo').YTPPlay();
    });
    $('#visual i.xi-tv').on('click', function(){
        $('#bgndVideo').YTPFullscreen();
    });


    //-----------------------------------------------------

});
