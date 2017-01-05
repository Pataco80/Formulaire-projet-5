$(document).ready(function() {
	// Liste des variables de champs
	var firstname = $('#first-name'),
			lastname = $('#last-name'),
			email = $('#email'),
			service = $('#service'),
			sujet = $('#sujet'),
			message = $('#message');
	
	// Liste de variables d'attributs
	var champ_obligatoire = $("[required]");
	var champ_alpha = $("input[type:text]").data("validation","alpha");
	
console.log(champ_alpha);
});