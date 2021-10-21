$(function(){
//---------------------------------------------
    
$('#forU').fullpage({
    //navigation:true,
    anchors:['se01','se02','se03','se04','se05'],
    afterLoad: function(origin,destination,direction){
        var idx=destination.index;
        console.log(idx); //0,1,2...
        $('.section').eq(idx).addClass('on').siblings().removeClass('on');
    },
});

//----------------------------------------------
});