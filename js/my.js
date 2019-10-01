/*var clock = $('.clock').FlipClock({
	autoStart: false,	
});
clock.setCountdown(true);
clock.setTime(30);
clock.start();*/

$(".bids-left-availables-link-hidden-input.first").ionRangeSlider({
	prefix: "$ ",
    min: 0,
    max: 100,
    from: 0.01,
    step: 0.01,
    hide_from_to: true,
    hide_min_max: true,
    onChange: function (data) { 
    	console.log(data.from);   	
    	$('.bids-left-availables-link-hidden-input-active.first').attr('value', data.from);
    }
});
$(".bids-left-availables-link-hidden-input.second").ionRangeSlider({
	prefix: "$ ",
    min: 0,
    max: 100,
    from: 0.01,
    step: 0.01,
    hide_from_to: true,
    hide_min_max: true,
    onChange: function (data) { 
    	console.log(data.from);   	
    	$('.bids-left-availables-link-hidden-input-active.second').attr('value', data.from);
    }
});

var timer=11;
$(".bids-right-info-timer-time").text(timer);
var idInterval=setInterval(function(){
	var currentTime=Number($(".bids-right-info-timer-time").text())-1;	
	if(currentTime < 1) {
		clearInterval(idInterval);		
	};
	if(currentTime < 10 && currentTime > 0){
		$(".bids-right-info-timer-time").text("0"+currentTime);
	}
	else{
		$(".bids-right-info-timer-time").text(currentTime);
	}
	
}, 1000);

var bank=0.0;
$(".bids-left-availables-link-hidden-link").on('click', function(){
	var name=$(this).attr('data-user');
	var sum=Number($(".bids-left-availables-link-hidden-input-active", $(this).next(".bids-left-availables-link-hidden")).val());
	if(sum <= 0) return false;	
	bank=bank+sum;
	var el = "<div class='bids-right-info-list-item'><span class='bids-right-info-list-item-sum'>$ " + sum + "</span>"+name+ "</div>";
	$(".bids-right-info-list").prepend(el);
	$(".bids-right-info-bank-span").text(bank.toFixed(2));
	$(".bids-right-info").getNiceScroll().resize();
	$(".bids-left-list-process").getNiceScroll().resize();	
	var elItem="<div class='bids-left-list-process-item'><span class='bids-left-list-process-item-bold'>"+name+"</span> <span class='bids-left-list-process-item-normal'>только что поставил $ "+sum+" в этой игре</span></div>";
	$(".bids-left-list-process").prepend(elItem);
	return false;
});
$(".bids-right-info").niceScroll({
	cursorcolor:"#c0780a",
	cursoropacitymin: 1,
	scrollspeed: 30,
});	
$(".bids-left-list-process").niceScroll({
	cursorcolor:"#fff",
	cursoropacitymin: 0,
	scrollspeed: 30,
});	