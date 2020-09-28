$(document).ready(function(){
	addDelo();
});

function addDelo() {
	$(".add-task").click(function () {
		var valueNameDelo = $(".name-delo").val();
		var valueDescription = $(".description-delo").val();
		if (!valueNameDelo.trim()) {
			alert('Поля пустые, введите значения полей');
			return false;
		 } else if (!valueDescription.trim()) {
			var containerTodoNoDescription = "<div class='dela-container' style='height: 51px'> <div class='dela-head'> <p>" + valueNameDelo + "</p><button type='button' class='img-del'></div></div>";
			// var containerTodo = "<div class='dela-container'> <div class='dela-head'> <p>" + valueNameDelo + "</p><button type='button' class='img-del'></button><button type='button' class='img-svr'></button>	<button type='button' class='img-svr2'></button></div><div class='dela-footer'><p>" + valueDescription + "</p></div><div>";
			$("#listempty").css({'display': 'none'});
			$("#List").append(containerTodoNoDescription);
			$(".dela-container").show(1000);
			$(".name-delo").val("");
			// $(this).parents(".block").prev(".dela-container").css({'display': 'none'});
			// $(this).parents(".block").prev(".dela-container").children(".dela-footer").css({'display': 'none'});
			removeDelo();
			hideDescription();
			return;
		}
		var containerTodo = "<div class='dela-container'> <div class='dela-head'> <p>" + valueNameDelo + "</p><button type='button' class='img-del'></button><button type='button' class='img-svr'></button>	<button type='button' class='img-svr2'></button></div><div class='dela-footer'><p>" + valueDescription + "</p></div><div>";
		$("#listempty").css({'display': 'none'});
		$("#List").append(containerTodo);
		$(".dela-container").show(1000);
		$(".name-delo").val("");
		$(".description-delo").val("");
		removeDelo();
		hideDescription();
	});
}

function removeDelo() {
	$(".img-del").click(function () {
		$(this).parents(".dela-container").hide(1000, function() {
			$(this).remove();
			if (!($("#List").children(".dela-container").length)) {
				$("#listempty").css({'display': 'block'});
			} else {
				$("#listempty").css({'display': 'none'});
			}	
		});
	});
}

function hideDescription() {
	$(".img-svr").off();
	$(".img-svr").on('click', function () {
		$(this).parents(".dela-head").next().slideToggle(1000, function() {
			$(this).parents(".dela-container").css({'height': '51px'});
		});
		$(this).css({'visibility': 'hidden'});
		$(this).next().css({'visibility': 'visible'});
	});
	$(".img-svr2").off();
	$(".img-svr2").click(function () {
		$(this).parent(".dela-head").next().slideToggle(1000);
		$(this).parents(".dela-container").css({'height': '140px'});
		$(this).css({'visibility': 'hidden'});
		$(this).prev(".img-svr").css({'visibility': 'visible'});	

	});
}

