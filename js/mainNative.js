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

		myScroll = new IScroll('#carousel .pane1', {
			click: true
		});
		myScroll2 = new IScroll('#carousel .pane2', {
			click: true
		});
		myScroll3 = new IScroll('#carousel .pane3', {
			click: true
		});
		myScroll4 = new IScroll('#carousel .pane4', {
			click: true
		});
		myScroll5 = new IScroll('#carousel .pane5', {
			click: true
		});
	}, 1000)
	
}

function caro(){


      carousel = new Carousel("#carousel");
    carousel.init();
}