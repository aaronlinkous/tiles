var tile;

function move_tiles(active_parent){
	$(".column").not(active_parent).find(":eq("+tile+")").toggleClass("moved")
}

$(document).ready(function(){
	$(".tile").click(function(){
		$(".tile").removeClass("moved active");
		$(".column").removeClass("active");

		$(this).addClass("active").parent().addClass("active");

		tile = $(this).index();
		move_tiles($(this).parent());
	});
	
});