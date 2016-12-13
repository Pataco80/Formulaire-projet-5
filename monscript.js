$(document).ready(function() {
    // Liste des variables
    var $inputtext = $('.input-text');
    var $inputemail = $('input[type=email]');
    
    
    /* Si un champ de texte obligatoire est vide, la fonction suivante sera executée.
    - la div parente contenant " class="form-group has-feedback" " auront la class "has-error" qui viendra s'ajouter donnant une bordure rouge au champ selectioné.
    - La balise <span> suivante contentant " class="glyphicon" " aura la class "glyphicon-remove" afin d'afficher la croix rouge
    - La div " class="help-block" " affichera le texte "Ce champ est obligatoire !"
    */
    function input_vide(){
        $(this).parent().addClass('has-error'), $(this).siblings('.glyphicon').addClass('glyphicon-remove'), $(this).siblings('.help-block').text("Ce champ est obligatoire !");
    }
    input_vide();
    
 
    /* Si un champ de texte n'a pas les charactères alphabétiques autorisés, la fonction suivante sera executée.
    - la div parente contenant " class="form-group has-feedback" " auront la class "has-warning" qui viendra s'ajouter donnant une bordure orange au champ selectioné.
    - La balise <span> suivante contentant " class="glyphicon" " aura la class "glyphicon-warning-sign" afin d'afficher un triangle orange
    - La div " class="help-block" " affichera le texte "Seuls les charactères alphabétiques sont acceptés."
    */
    function erreur_alpha(){
        $(this).parent().addClass('has-warning'), $(this).siblings('.glyphicon').addClass('glyphicon-warning-sign'), $(this).siblings('.help-block').text("Seuls les charactères alphabétiques sont acceptés.");
    }
    erreur_alpha();
    
    
    /* Si un champ de texte est correctement remplis, la fonction suivante sera executée.
    - la div parente contenant " class="form-group has-feedback" " aura la class "has-success" qui viendra s'ajouter donnant une bordure verte au champ selectioné.
    - La balise <span> suivante contentant " class="glyphicon" " aura la class "glyphicon-ok" afin d'afficher un vu de couleur vert.
    - La div " class="help-block" n'affichera aucun texte.
    */
    function input_success(){
        $(this).parent().addClass('has-success'), $(this).siblings('.glyphicon').addClass('glyphicon-ok'), $(this).siblings('.help-block').css('display:none');
    }
    input_success();
    
    
    // Si dessous le champ selectioné aura l'apparence de base
    function input_default(){
        $(this).parent().removeClass('has-error', 'has-warning', 'has-success'), $(this).siblings('.glyphicon').removeClass('glyphicon-remove', 'glyphicon-warning-sign', 'glyphicon-ok'), $(this).siblings('.help-block').css('display:none');
    }
    input_default();
    
    
    
    
    
    $inputtext.on('focus', 'blur', 'keyup', function(){
        if($inputtext).val() != "";
            $inputtext function(input_success);
        else if($inputtext).val() = "";
            $inputtext function(input_vide);
        else if(!$inputtext).val().match(/^[a-z\’\-\ ]$/i);
            $inputtext function(erreur_alpha);
        else $inputtext function().hide.parent();
    });
});