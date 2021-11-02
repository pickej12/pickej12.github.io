$(function(){
    //-----------------------------------------------------

    $('#bgndVideo').YTPlayer({
        videoURL:'https://www.youtube.com/embed/9rkCx9W-rXc',
        containment:'#visual', //동영상 재생 될 위치 지정
        autoPlay:true,
        mute:true,
        startAt:0,
        opacity:1,
        showControls:false, //동영상 플레이표시(?) 지우기
    });

    $('#visual i.xi-pause').on('click',function(){
        $('#bgndVideo').YTPPause();
    });
    $('#visual i.xi-play').on('click', function(){
        $('#bgndVideo').YTPPlay();
    });
    $('#visual i.xi-tv').on('click', function(){
        $('#bgndVideo').YTPFullscreen();
    });


    $('#mv01').YTPlayer({
        videoURL:'https://www.youtube.com/embed/HdvMkofJLA0',
        containment:'self', //동영상 재생 될 위치 지정
        autoPlay:true,
        mute:true,
        startAt:0,
        opacity:1,
        showControls:false, //동영상 플레이표시(?) 지우기
        playOnlyIfVisible:true, //보일 때(위치에 왔을 때) 재생시키기
        optimizeDisplay:false,
    });
    
    $('#movie02 i.xi-pause').on('click', function(){
        $('#mv01').YTPPause();
    });
    $('#movie02 i.xi-play').on('click', function(){
        $('#mv01').YTPPlay();
    });
    $('#movie02 i.xi-tv').on('click', function(){
        $('#mv01').YTPFullscreen();
    });
    //-----------------------------------------------------
});