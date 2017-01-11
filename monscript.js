@@ -1,78 +1,84 @@
$(document).ready(function() {
    // Liste des variables    
    var champ_requis = $(':input[required]');
    var champs = $(':input',':select',':checkbox','radio',':textarea');


    
    // Liste des pattern
    /* Liste des pattern
    var pattern_alpha = "/^[a-z\’\-\ ]$/i";
    var pattern_email = "/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i";
    */
       function input_reset(){
        champs.parent().removeClass('has-error','has-warning','has-success');
        champs.siblings('.glyphicon').removeClass('glyphicon-remove','glyphicon-warning','glyphicon-success');
        champs.siblings('.help-block').text("");

    }
    
    /* Si un champ de texte obligatoire est vide, la fonction suivante sera executée.
    - la div parente contenant " class="form-group has-feedback" " auront la class "has-error" qui viendra s'ajouter donnant une bordure rouge au champ selectioné.
    - La balise <span> suivante contentant " class="glyphicon" " aura la class "glyphicon-remove" afin d'afficher la croix rouge
    - La div " class="help-block" " affichera le texte "Ce champ est obligatoire !"
    */
    
    function input_vide(){
        input_reset();
        champs.parent().addClass('has-error');
        champs.siblings('.glyphicon').addClass('glyphicon-remove');
        champs.siblings('.help-block').text("Ce champ est obligatoire !");
    }

    
    // Si ue addresse e-mail est mal renseignée, l'erreur sera identique à un champ vide mais avec un texte de la div " class="help-block" " affichera "Addresse mail invalide !"

    
    
    /* Si un champ de texte n'a pas les charactères alphabétiques autorisés, la fonction suivante sera executée.
    - la div parente contenant " class="form-group has-feedback" " auront la class "has-warning" qui viendra s'ajouter donnant une bordure orange au champ selectioné.
    - La balise <span> suivante contentant " class="glyphicon" " aura la class "glyphicon-warning-sign" afin d'afficher un triangle orange
    - La div " class="help-block" " affichera le texte "Seuls les charactères alphabétiques sont acceptés."
    */
    
    

    
    /* Si un champ de texte est correctement remplis, la fonction suivante sera executée.
    - la div parente contenant " class="form-group has-feedback" " aura la class "has-success" qui viendra s'ajouter donnant une bordure verte au champ selectioné.
    - La balise <span> suivante contentant " class="glyphicon" " aura la class "glyphicon-ok" afin d'afficher un vu de couleur vert.
    - La div " class="help-block" n'affichera aucun texte.
    */
    
    
    function input_success(){
        input_reset();
        champs.parent().addClass('has-success');
        champs.siblings('.glyphicon').addClass('glyphicon-ok');
        champs.siblings('.help-block').css('display:none');
    }

    
    
    // Traitement du formulaire
    $(function(){
            
            // Traitement des champs requis
            champ_requis.on('keyup', function(){
                if ($champ_requis.val() !== ""){
                    $(this).input_success();
                }  
                else if ($champ_requis.val() == ""){
                    $(this).input_vide();
                }  

            });
        });

        
       
    });

