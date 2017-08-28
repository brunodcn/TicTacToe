var round = 1;
var game_matrix = Array(3);

game_matrix['a'] = Array(3);
game_matrix['b'] = Array(3);
game_matrix['c'] = Array(3);

game_matrix['a'][1] = 0;
game_matrix['a'][2] = 0;
game_matrix['a'][3] = 0;

game_matrix['b'][1] = 0;
game_matrix['b'][2] = 0;
game_matrix['b'][3] = 0;

game_matrix['c'][1] = 0;
game_matrix['c'][2] = 0;
game_matrix['c'][3] = 0;

$(document).ready(function (){

	$('#btn_begin').click(function(){

		if ($('#chosen_name1').val() == '') {
			alert ('Name not assigned');
			return false;
		}

		if ($('#chosen_name2').val() == '') {
			alert ('Name not assigned');
			return false;
		}

		$('#player_name1').html($('#chosen_name1').val());
		$('#player_name2').html($('#chosen_name2').val());

		$('#home_page').hide();
		$('#stage').show();

		
	});

	$('.play').click(function(){

		var id_clicked_field = this.id;
		$('#'+id_clicked_field).off();
		play (id_clicked_field);

	});

	function play(id){

		var icon = '';
		var point = 0;

		if ((round % 2) == 1) {
			icon = 'url("imagens/marcacao_1.png")';
			point = -1;
		} else{
			icon = 'url("imagens/marcacao_2.png")';
			point = 1;
		}
		
		round++;

		$('#'+id).css('background-image', icon);

		var line_column = id.split('-');

		game_matrix[line_column[0]][line_column[1]] = point; //0 -> line information | 1 -> column information
		
		verify();

		
	}

	function verify (){

		var points = 0;
		for (var i = 1; i <=3 ; i++) {
			points = points + game_matrix['a'][i];
		}

		winner(points);

		points = 0;
		for (var i = 1; i <=3 ; i++) {
			points = points + game_matrix['b'][i];
		}

		winner(points);

		points = 0;
		for (var i = 1; i <=3 ; i++) {
			points = points + game_matrix['c'][i];
		}

		winner(points);

		
		for (var l = 0; l <= 3; l++) {
			points = 0;
			points += game_matrix['a'][l];
			points += game_matrix['b'][l]; 
			points += game_matrix['c'][l]; 

			winner(points);
		}

		points = 0;

		points = game_matrix['a'][1] + game_matrix['b'][2] + game_matrix['c'][3];
		winner(points);

		points = 0;

		points = game_matrix['a'][3] + game_matrix['b'][2] + game_matrix['c'][1];
		winner(points);

	}

	function winner(points){

		if (points == -3) {
		var play_1 = $('#chosen_name1').val();
		alert(play_1 + ' win');
		$('.play').off();

		} else if (points == 3) {
		var play_2 = $('#chosen_name2').val();	
		alert (play_2 + ' win');
		$('.play').off();

		}
	}

});