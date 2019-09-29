var clock = $('.clock').FlipClock({
	autoStart: false,	
});
clock.setCountdown(true);
clock.setTime(30);
clock.start();

$(".bids-left-availables-link-hidden-link").on('click', function(){
	var name=$(this).attr('data-user');
	var sum=$(this).prev(".bids-left-availables-link-hidden-input").val();
	var el = "<div class='bids-right-info-list-item'>"+name + " - $" + "<span class='bids-right-info-list-item-sum'>" + sum + "</span>" + "</div>";
	$(".bids-right-info-list").prepend(el);
	var max=0;
	$(".bids-right-info-list-item-sum").each(function(){
		var num=Number($(this).text());		
		if(num > max) max=num;
	});
	$(".bids-right-info-max-sum").text(max);
	return false;
});
