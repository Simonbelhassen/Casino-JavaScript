$(
    function () {
        //On déclare les variables qui nous seront utile pour la suite
        $('#btnRecommencer').css('display', 'none');
        var cagnotte = 100;
        $('#cagnotte').val(cagnotte + " €");
        var tbl1NbrJoueur = [];
        var tbl2NbrJoueur = [];
        var mise;
        //Lorsque l'on clique sur une td du tableau elle devient bleu tant qu'il n'y en a pas 8. Si l'on clique sur un case bleu elle reprend sa couleur initiale.
        $('#tbl1 td').click(function () {
            if ($(".blue").length < 8) {
                $(this).toggleClass('blue');
            }
            else if ($(".blue").length = 8) {
                $(this).removeClass('blue');
            }
        });
        //De même qu'au dessus mais pour le tableau bonus qui lui se limite à 1 case sélectionnée
        $('#tbl3 td').click(function () {
            if ($(".blue2").length < 1) {
                $(this).toggleClass('blue2');
            }
            else if ($(".blue2").length = 1) {
                $(this).removeClass('blue2');
            }
        });
        //Lors du clique sur le btn Lancer
        $('#btnLancer').click(function () {
            $('#btnRecommencer').css('margin-left', '-2%');
            //Si le bon nombre de case on été cochées on peut commencer le jeu
            if ($('.blue').length == 8 && $('.blue2').length == 1) {
                $('#resultat').empty();
                //Si la mise <0 ou null 
                if ($('#mise').val() <= 0) {
                    $('#resultat').css('margin-left', '30%');
                    $('#resultat').append("Vous devez miser de l'argent !");
                    $('#resultat').css('color', 'red');
                }
                //Si la mise est > que la cagnotte
                else if ($('#mise').val() > cagnotte) {
                    $('#resultat').css('margin-left', '20%');
                    $('#resultat').append("Tu n'as pas assez d'argent dans ta cagnotte !");
                    $('#resultat').css('color', 'red');
                }
                //Si tout est bon on continue d'excuter la fonction
                else {
                    $('#btnRecommencer').css('display', '');
                    $('#btnLancer').css('display', 'none');
                    mise = $('#mise').val();
                    //On tir les 8 nombre aléatoire de l'ordinateur et le nombre bonus
                    for (i = 0; i < 8; i++) {
                        EntierAleatoire();
                    }
                    EntierAleatoire2();
                    //Pour tout les éléments ayant la class blue on prend leur valeur et on la place dans un tableau
                    $('.blue').each(function () {
                        var nbrJoueur = parseInt($(this).text());
                        tbl1NbrJoueur.push(nbrJoueur);
                    });
                    //De même pour le tableau bonus
                    $('.blue2').each(function () {
                        var nbrJoueur2 = parseInt($(this).text());
                        tbl2NbrJoueur.push(nbrJoueur2);
                    });
                    //Fonction qui permet de comparer deux tableaux et de voir si ils ont des éléments en commun.
                    $.arrayIntersect = function (a, b) {
                        return $.grep(a, function (i) {
                            return $.inArray(i, b) > -1;
                        });
                    };
                    //Pour toute les td du tableau on regarde si sa valeur est dans les nombres généré par l'ordinateur, si c'est le cas on ajoute la classe red
                    $('#tbl2 td').each(function () {
                        if (nbrOrdinateur.indexOf(parseInt($(this).text())) != -1) {
                            $(this).addClass('red');
                        }
                    });
                    //De même pour le tableau bonus
                    $('#tbl4 td').each(function () {
                        if (nbrOrdinateur2.indexOf(parseInt($(this).text())) != -1) {
                            $(this).addClass('red');
                        }
                    });
                    $('#resultat').css('margin-left', '35%');
                    $('#resultat').css('color', 'lawngreen');
                    //On compare la taille des tableau qui correspond au nombre d'élément en commun pour chaque tableau
                    if ($.arrayIntersect(tbl1NbrJoueur, nbrOrdinateur).length < 4 && $.arrayIntersect(tbl2NbrJoueur, nbrOrdinateur2).length < 2) {
                        $('#resultat').append("Vous avez perdu " + mise + " €");
                        $('#resultat').css('color', 'red');
                        cagnotte = cagnotte - mise;
                    }
                    if ($.arrayIntersect(tbl1NbrJoueur, nbrOrdinateur).length == 4 && $.arrayIntersect(tbl2NbrJoueur, nbrOrdinateur2).length == 0) {
                        $('#resultat').append("Vous avez gagné " + mise * 3 + " €");
                        cagnotte = cagnotte + (mise * 3) - mise;
                    }
                    if ($.arrayIntersect(tbl1NbrJoueur, nbrOrdinateur).length == 4 && $.arrayIntersect(tbl2NbrJoueur, nbrOrdinateur2).length == 1) {
                        $('#resultat').append("Vous avez gagné " + mise * 4 + " €");
                        cagnotte = cagnotte + (mise * 4) - mise;
                    }
                    if ($.arrayIntersect(tbl1NbrJoueur, nbrOrdinateur).length == 5 && $.arrayIntersect(tbl2NbrJoueur, nbrOrdinateur2).length == 0) {
                        $('#resultat').append("Vous avez gagné " + mise * 5 + " €");
                        cagnotte = cagnotte + (mise * 5) - mise;
                    }
                    if ($.arrayIntersect(tbl1NbrJoueur, nbrOrdinateur).length == 5 && $.arrayIntersect(tbl2NbrJoueur, nbrOrdinateur2).length == 1) {
                        $('#resultat').append("Vous avez gagné " + mise * 6 + " €");
                        cagnotte = cagnotte + (mise * 6) - mise;
                    }
                    if ($.arrayIntersect(tbl1NbrJoueur, nbrOrdinateur).length == 6 && $.arrayIntersect(tbl2NbrJoueur, nbrOrdinateur2).length == 0) {
                        $('#resultat').append("Vous avez gagné " + mise * 7 + " €");
                        cagnotte = cagnotte + (mise * 7) - mise;
                    }
                    if ($.arrayIntersect(tbl1NbrJoueur, nbrOrdinateur).length == 6 && $.arrayIntersect(tbl2NbrJoueur, nbrOrdinateur2).length == 1) {
                        $('#resultat').append("Vous avez gagné " + mise * 8 + " €");
                        cagnotte = cagnotte + (mise * 8) - mise;
                    }
                    if ($.arrayIntersect(tbl1NbrJoueur, nbrOrdinateur).length == 7 && $.arrayIntersect(tbl2NbrJoueur, nbrOrdinateur2).length == 0) {
                        $('#resultat').append("Vous avez gagné " + mise * 9 + " €");
                        cagnotte = cagnotte + (mise * 9) - mise;
                    }
                    if ($.arrayIntersect(tbl1NbrJoueur, nbrOrdinateur).length == 7 && $.arrayIntersect(tbl2NbrJoueur, nbrOrdinateur2).length == 1) {
                        $('#resultat').append("Vous avez gagné " + mise * 10 + " €");
                        cagnotte = cagnotte + (mise * 10) - mise;
                    }
                    if ($.arrayIntersect(tbl1NbrJoueur, nbrOrdinateur).length == 8 && $.arrayIntersect(tbl2NbrJoueur, nbrOrdinateur2).length == 0) {
                        $('#resultat').append("Vous avez gagné " + mise * 11 + " €");
                        cagnotte = cagnotte + (mise * 11) - mise;
                    }
                    if ($.arrayIntersect(tbl1NbrJoueur, nbrOrdinateur).length == 8 && $.arrayIntersect(tbl2NbrJoueur, nbrOrdinateur2).length == 1) {
                        $('#resultat').append("Vous avez gagné " + mise * 50 + " €");
                        cagnotte = cagnotte + (mise * 50) - mise;
                    }
                    $('#cagnotte').val(cagnotte + " €");
                }
            }
            //Si le nombre de case sélectionnées n'est pas celui demandé on le signal au joueur et le jeu ne peut pas se lancer
            else {
                $('#resultat').empty();
                $('#resultat').append("Vous n'avez pas sélectionné assez de case");
                $('#resultat').css('margin-left', '23%');
                $('#resultat').css('color', 'red');
            }
        });
        //Lorsque l'on clique sur le btn recommencer on vide toutes les variables pour pouvoir rejouer
        $('#btnRecommencer').click(function () {
            $('#resultat').empty();
            $('#btnRecommencer').css('display', 'none');
            $('#btnLancer').css('display', '');
            $('#tbl2 td').removeClass('red');
            $('#tbl4 td').removeClass('red');
            $('#tbl1 td').removeClass('blue');
            $('#tbl3 td').removeClass('blue2');
            tbl1NbrJoueur = [];
            tbl2NbrJoueur = [];
            nbrOrdinateur = [];
            nbrOrdinateur2 = [];
            //Si la cagnotte est de 0 le joueur ne peut plus jouer
            if (cagnotte == 0) {
                $('#resultat').empty();
                $('#resultat').append("Vous n'avez plus d'argent !");
                $('#resultat').css('margin-left', '32%');
                $('#btnLancer').attr('disabled', true);
            }
        });
        //Les fonctions :
        //Génération d'un entier aléatoire entre 1 et 20, qui ne peut pas être déja sorti.
        var nbrOrdinateur = [];
        var nbrOrdinateur2 = [];
        function EntierAleatoire() {
            var nbrAleatoire = Math.floor((Math.random() * 20) + 1);
            if ($.inArray(nbrAleatoire, nbrOrdinateur) > -1) {
                EntierAleatoire();
            }
            else {
                nbrOrdinateur.push(nbrAleatoire);
            }
        }
        //Génération d'un entier entre 1 et 4.
        function EntierAleatoire2() {
            var nbrAleatoire2 = Math.floor((Math.random() * 4) + 1);
            nbrOrdinateur2.push(nbrAleatoire2);
        }
    });