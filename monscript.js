$(document).ready(function(){
   //variables
   var submitform = true;
   $('#formulaire').submit(function(){
      if($('#first-name').val() == ""){
         $('#first-name').parent().addClass('has-success');
         $('#first-name').siblings('.glyphicon').addClass('glyphicon-ok');
         $('#first-name').siblings('.help-block').css('display:none');
         submitform = false;
         alert('négatif');
      }
      
      
      return submitform;
      alert ('ok');
   });
});