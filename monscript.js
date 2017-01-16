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
   var $inputs_control = [
      $firstname,
      $lastname,
      $email,
      $service,
      $sujet,
      $message
   ]
   
   
   // Fonctions
   function removing_inputs($inputs_control){  $(this).parent().siblings().removeClass('has-error glyphicon-remove');
   }
   function input_vide($inputs_control){
      $(this).parent('.form-group').addClass('has-error');
      $(this).siblings('.glyphicon').addClass('glyphicon-remove').css('display','inline-bloc');
       $(this).siblings('.help-block').css('display','block').text("Erreur");
   }
   
   function input_sccess($inputs_control) {
      $(this).parent('.form-group').addClass('has-success');
      $(this).siblings('.glyphicon').addClass('glyphicon-ok');
      $(this).siblings('.help-block').css('display','none').text("");
   }
   
   //Controles directs à la frappe
   $inputs_control.on('keyup blur', function(){
      if($(this).val() == ""){
         input_vide($(this));
      }else{
         input_sccess($(this));
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