var myScroll;

var carousel;


$(document).ready(init1);

function init1(){

    //init hammer carousel
    caro();

    scrollEm();

    activeButs();

}

function activeButs(){

	$('.footItem').on('click', function(){
		ind = $(this).index();
		carousel.showPane(ind, 500);
		$('.footItem').removeClass('activeElem');
		$(this).addClass('activeElem');
	

	});
}

function scrollEm(){
	setTimeout(function(){

		myScroll = new IScroll('#carousel .pane2', {
/*useTransform: true,
zoom: false,
onBeforeScrollStart: function (e) {
var target = e.target;
while (target.nodeType != 1) target = target.parentNode;

if (target.tagName != 'SELECT' && target.tagName != 'INPUT' && target.tagName != 'TEXTAREA')
e.preventDefault();
}*/

click: true
});
	}, 1000)
	
}

function caro(){


      carousel = new Carousel("#carousel");
    carousel.init();
}