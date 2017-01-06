$(document).ready(function(){
	// Liste des variables de champs
	var $champs	= $('input', 'textarea', 'select');
			
	
	
	function haserror($champs){
			$(this).parent(".form-group").addClass("has-error");
			$(this).siblings(".control-label").addClass("has-error");
			$(this).next(".glyphicon").addClass("glyphicon-remove");
			$(this).siblings(".help-block").text("Veuillez");
	}
	
	
	$(function(){
		$champs.blur(function(e){
			e.preventDefault();
			if ($champs.is("required").val() == ""){
				haserror($champs);
			}else{
				$(this).css({borderColor:'green'});
			}
		});
	});
	
});