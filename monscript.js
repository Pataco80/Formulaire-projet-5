$(document).ready(function() {
    // Liste des variables
    var $inputtext = $('.input-text');
    var $inputemail = $('input[type=email]');
    
    
    /* Si un champ de texte obligatoire est vide, la fonction suivante sera executée.
    - la div parente contenant " class="form-group has-feedback" " auront la class "has-error" qui viendra s'ajouter donnant une bordure rouge au champ selectioné.
    - La balise <span> suivante contentant " class="glyphicon" "
    */
    function input_vide(){
        $(this).parent().addClass('has-error'), $(this).siblings('.glyphicon').addClass('glyphicon-remove'), $(this).siblings('.help-block').text("Ce champ est obligatoire");
    }
    input_vide();
    
    function erreur_alpha(){
        $(this).parent().addClass('has-warning'), $(this).siblings('.glyphicon').addClass('glyphicon-remove'), $(this).siblings('.help-block').text("Ce champ est obligatoire");
    }
    erreur_alpha();
    
    function input_success(){
        $(this).parent().addClass('has-success'), $(this).siblings('.glyphicon').addClass('glyphicon-ok'), $(this).siblings('.help-block').addClass("sr_only");
    }
    input_success();
    
    $inputtext.on('focus', 'blur', 'keyup', function(){
        if($inputtext).val() != "";
            $inputtext function(input_success);
        else if($inputtext).val() = "";
            $inputtext function(input_vide);
        else if(!$inputtext).val().match(/^[a-z\’\-\ ]$/i);
            $inputtext function(erreur_alpha);
        else $inputtext function().remove;
    });
});