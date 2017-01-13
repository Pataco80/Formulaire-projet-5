$(document).ready(function(){
   // Premières variables
   var champs = $('.form-control[data-valid]');
   //variables
   var submitform = true;
   // Fonctions
   function removing_inputs(champs){
      $(this).parent().siblings().removeClass('has-error glyphicon-remove');
   }
   function input_vide(champs) {
      $(this).parent('.form-group').addClass('has-error');
      $(this).siblings('.glyphicon').addClass('glyphicon-remove').css('display','inline-bloc');
      $(this).siblings('.help-block').css('display','block').text("Erreur");
   }
   
   //Soumission
   $('#formulaire').submit(function(){
      if(champs.val() == ""){
         input_vide(champs);
         submitform = false;
      }else{
         champs.parent('.form-group').addClass('has-success');
         champs.siblings('.glyphicon').addClass('glyphicon-ok');
         champs.siblings('.help-block').css('display','none').text("");
      }
      return submitform;
      
   });
   console.log(submitform);
});