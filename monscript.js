$(document).ready(function(){
   // Premières variables
   var champs = $('.form-control');
   //var champs = $('.form-control').data('data-valid','oui');
   //variables
   var submitform = true;
   // Fonctions
   function removing_inputs(champs){
      $(this).parent().siblings().removeClass('has-error glyphicon-remove');
   }
   function input_vide(champs) {
      champs.parent('.form-group').addClass('has-error');
      champs.siblings('.glyphicon').addClass('glyphicon-remove').css('display','inline-bloc');
      champs.siblings('.help-block').css('display','block').text("Erreur");
   }
   
   function input_sccess(champs) {
      champs.parent('.form-group').addClass('has-success');
      champs.siblings('.glyphicon').addClass('glyphicon-ok');
      champs.siblings('.help-block').css('display','none').text("");
   }
   
   /* Controles directs
   $('.form-control').keyup(function(){
      if(champs.val() == ""){
         input_vide(champs);
      }
   });*/
   
   //Soumission
   $('#formulaire').submit(function(){
      if(champs.val() == ""){
         input_vide(champs);
         submitform = false;
      }else{
         input_sccess(champs);
      }
      return submitform;
      
   });
   console.log(submitform);
});