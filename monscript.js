$(document).ready(function(){
   // Variables globales
   var $champs = $(".form-control");
   var $submit = $('button[type="submit"]');
   var $reset = $('button[type="reset"]');
   
   // Variables personnelles
   var $firstname = $('#first-name'),
       $lastname = $('#last-name'),
       $email = $('#email'),
       $service = $('#service'),
       $sujet = $('#sujet'),
       $message = $('#message');

   
   //Arrays
   
   
   
   // Fonctions
   function removing_inputs($champs){  $champs.parent().siblings().removeClass('has-error glyphicon-remove');
   }
   function input_vide($champs){
      $champs.parent('.form-group').addClass('has-error');
      $champs.siblings('.glyphicon').addClass('glyphicon-remove').css('display','inline-bloc');
      $champs.siblings('.help-block').css('display','block').text("Erreur");
   }
   
   function input_sccess($champs) {
      $champs.parent('.form-group').addClass('has-success');
      $champs.siblings('.glyphicon').addClass('glyphicon-ok');
      $champs.siblings('.help-block').css('display','none').text("");
   }
   
   //Controles directs
   $champs.on('keyup blur', function(){
      if($(this).val() == ""){
         input_vide($champs);
      }else{
         input_sccess($champs);
      }
   });
   
   //Soumission
   $submit.on('click', function(){
      validform = true;
      if($champs.val() == ""){
         input_vide($champs);
         validform = false;
      }else{
         input_sccess($champs);
      }
      return validform;
   });

});