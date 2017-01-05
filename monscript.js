$(document).ready(function() {
	// Liste des variables de champs
	/*var firstname = $('#first-name'),
			lastname = $('#last-name'),
			email = $('#email'),
			service = $('#service'),
			sujet = $('#sujet'),
			message = $('#message');*/
	
	// Liste de variables d'attributs
	//var champ_obligatoire = $("*").data("data-validation","true");
	//var champ_alpha = $("input[type:text]").data("validation","alpha");
	

	$(function(){
		var requis = $(".form-control").data("validation") === true;
		$("requis").blur(function(){
			if ($(this).val() == "") {
					$(this).css("background-color", "red");
			}else {
				$(this).css("background-color", "yellow");
			}
		});
		console.log("#first-name");
	});
	
});