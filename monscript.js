$(document).ready(function() {
    // Liste des variables
    var $champ_requis = $('input', 'select', 'textarea').attr('required');
    var $champ_alpha = $('input').attr('patern', 'alpha');
    var $champ_email = $('input[type=email]');
    
    // Liste des pattern
    
    $pattern_alpha = "/^[a-z\’\-\ ]$/i";
    $pattern_email = "/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i";
    
    /* Si un champ de texte obligatoire est vide, la fonction suivante sera executée.
    - la div parente contenant " class="form-group has-feedback" " auront la class "has-error" qui viendra s'ajouter donnant une bordure rouge au champ selectioné.
    - La balise <span> suivante contentant " class="glyphicon" " aura la class "glyphicon-remove" afin d'afficher la croix rouge
    - La div " class="help-block" " affichera le texte "Ce champ est obligatoire !"
    */
    function input_vide(){
        $(this).parent().addClass('has-error'), $(this).siblings('.glyphicon').addClass('glyphicon-remove'), $(this).siblings('.help-block').text("Ce champ est obligatoire !");
    }
    input_vide();
    
    // Si ue addresse e-mail est mal renseignée, l'erreur sera identique à un champ vide mais avec un texte de la div " class="help-block" " affichera "Addresse mail invalide !"
    function mail_invalid(){
        $(this).parent().addClass('has-error'), $(this).siblings('.glyphicon').addClass('glyphicon-remove'), $(this).siblings('.help-block').text("Addresse mail invalide !");
    }
    mail_invalid();
    
 
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
    
    
    // Si dessous le champ selectioné aura l'apparence de base.
    function input_default(){
        $(this).parent().removeClass('has-error', 'has-warning', 'has-success'), $(this).siblings('.glyphicon').removeClass('glyphicon-remove', 'glyphicon-warning-sign', 'glyphicon-ok'), $(this).siblings('.help-block').css('display:none');
    }
    input_default();
    
    
    // Traitement du formulaire
    ('#submit').submit function(){
        envoyer = true;
        
        // Traitement des champs requis
        $champ_requis.on('blur', 'keyup', function(){
            if ($champ_requis.val() !== ""){
                $(this).input_success;
            }  
            else if ($champ_requis.val() == ""){
                $(this).input_vide;
                envoyer = false;
            }
            else {
                $(this).input_default;
            }
        });
    
        // Traitement des champs alphabetiques
        $champ_alpha.on('blur', 'keyup', function(){
            if ($champ_alpha.val().match($pattern_alpha)){
                $(this).input_success;
            }  
            else if (!$champ_alpha.val().match($pattern_alpha)){
                $(this).erreur_alpha;
                envoyer = false;
            }
            else {
                $(this).input_default;
            }
        });

        // Traitement des champs Emails
        $champ_email.on('blur', 'keyup', function(){
            if ($champ_email.val().match($pattern_email)){
                $(this).input_success;
            }  
            else if (!$champ_email.val().match($pattern_email)){
                $(this).mail_invalid;
                envoyer = false;
            }
            else {
                $(this).input_default;
            }
        });  

    }
    
});
