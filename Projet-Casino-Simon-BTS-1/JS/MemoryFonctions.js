$(
	function () {
		//On cache tous les tableaux lors du début du jeu	      
		$('#tableau').css('display', 'none');
		$('#tableau3').css('display', 'none');
		$('#tableau2').css('display', 'none');
		$('#tableau4').css('display', 'none');
		//On cache aussi les labels qui ne seront utilisé que pour le niveau 1vs1
		$('#joueurA').css('display', 'none');
		$('#nbrEssaiA').css('display', 'none');
		$('#joueurB').css('display', 'none');
		$('#nbrEssaiB').css('display', 'none');
		var compteur = 0;
		$('#essai').val(compteur);
		//Lorsque l'on choisir un niveau peut importe lequel la fonction se déclenchera
		$('.switch_1').click(function () {
			$('#options').animate({ left: '350px' }, 3000)
			//On initialise la variable qui va nous permettre de compter les essais et on la met dans le #essai
			var compteur = 0;
			$('#essai').val(compteur);
			//Si le niveau Débutant est choisi on cache les autres tableaux et labels inutilent et on affiche ceux qui nous intéressent
			if ($('input:radio:checked').val() == 'Débutant') {
				$('#tableau').css('display', '');
				$('#tableau3').css('display', 'none');
				$('#tableau2').css('display', 'none');
				$('#tableau4').css('display', 'none');
				$('#joueurA').css('display', 'none');
				$('#nbrEssaiA').css('display', 'none');
				$('#joueurB').css('display', 'none');
				$('#nbrEssaiB').css('display', 'none');
				$('#lblEssai').css('display', '');
				$('#essai').css('display', '');
				$('#compteur').empty();
				$('#compteur').append("Compteur d'essais");
				//Déclaration des variables
				//On déclare les "valeurs" que nous souhaitons que nos cartes possèdent pour ce niveau
				var nombreCarte = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];
				//Toutes les cartes sont côté verso
				var sensCarte = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
				var imgCartes = document.getElementById("tableau").getElementsByTagName("img");
				//Variable dans laquelle nous metterons les cartes versos en temps voulu
				var carteRecto = [];
				//Variable qui nous permettra de savoir ou nous en somme dans le nombre de paires trouvées
				var paire = 0;
				for (var i = 0; i < imgCartes.length; i++) {
					imgCartes[i].numeroCarteTbl = i; //Ajout de la propriété numeroCarteTbl à l'objet img
					imgCartes[i].onclick = function ()//Lorsque l'on clique sur une image on effectue la fonction
					{
						verification(this.numeroCarteTbl);
					}
				}
				//On appelle la fonction
				melangerCarte();
			}
			//Nous effectuons les mêmes étapes que vu précédemment mais pour un autre tableau
			if ($('input:radio:checked').val() == 'Confirmé') {
				$('#tableau').css('display', 'none');
				$('#tableau3').css('display', 'none');
				$('#tableau2').css('display', '');
				$('#tableau4').css('display', 'none');
				$('#joueurA').css('display', 'none');
				$('#nbrEssaiA').css('display', 'none');
				$('#joueurB').css('display', 'none');
				$('#nbrEssaiB').css('display', 'none');
				$('#lblEssai').css('display', '');
				$('#essai').css('display', '');
				$('#compteur').empty();
				$('#compteur').append("Compteur d'essais");
				var nombreCarte = [6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
				var sensCarte = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
				var imgCartes = document.getElementById("tableau2").getElementsByTagName("img");
				var carteRecto = [];
				var paire = 0;
				for (var i = 0; i < imgCartes.length; i++) {
					imgCartes[i].numeroCarteTbl = i;
					imgCartes[i].onclick = function () {
						verification(this.numeroCarteTbl);
					}
				}
				melangerCarte();
			}
			//Pareil ici 
			if ($('input:radio:checked').val() == 'Expert') {
				$('#tableau3').css('display', '');
				$('#tableau').css('display', 'none');
				$('#tableau2').css('display', 'none');
				$('#tableau4').css('display', 'none');
				$('#joueurA').css('display', 'none');
				$('#nbrEssaiA').css('display', 'none');
				$('#joueurB').css('display', 'none');
				$('#nbrEssaiB').css('display', 'none');
				$('#lblEssai').css('display', '');
				$('#essai').css('display', '');
				$('#compteur').empty();
				$('#compteur').append("Compteur d'essais");
				var nombreCarte = [5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14];
				var sensCarte = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
				var carteRecto = [];
				var paire = 0;
				var imgCartes = document.getElementById("tableau3").getElementsByTagName("img");
				for (var i = 0; i < imgCartes.length; i++) {
					imgCartes[i].numeroCarteTbl = i;
					imgCartes[i].onclick = function () {
						verification(this.numeroCarteTbl);
					}
				}
				melangerCarte();
			}
			//Les mêmes étapes qu'avant
			if ($('input:radio:checked').val() == 'duel') {
				$('#tableau').css('display', 'none');
				$('#tableau3').css('display', 'none');
				$('#tableau2').css('display', 'none');
				$('#tableau4').css('display', '');
				$('#lblEssai').css('display', 'none');
				$('#essai').css('display', 'none');
				$('#joueurA').css('display', '');
				$('#nbrEssaiA').css('display', '');
				$('#joueurB').css('display', '');
				$('#nbrEssaiB').css('display', '');
				$('#compteur').empty();
				$('#compteur').append("Compteur de paire");
				var nombreCarte = [6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
				var sensCarte = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
				var imgCartes = document.getElementById("tableau4").getElementsByTagName("img");
				var carteRecto = [];
				var paire = 0;
				for (var i = 0; i < imgCartes.length; i++) {
					imgCartes[i].numeroCarteTbl = i;
					imgCartes[i].onclick = function () {
						verification(this.numeroCarteTbl);
					}
				}
				melangerCarte();
			}
			//Les différentes fonctions dont nous faisons appelle plus tôt dans le programme ou bien plustard
			//Fonction recommencer envoie une alerte puis rechargera la page pour recommencer le jeu
			function recommencer() {
				alert(" Bravo vous avez gagné en " + compteur + " essais !");
				location.reload();
			}
			//Pareil que la fonction recommencer mais celle-ci est destinée au mode 1vs1 il y a alors 3 options de fin différentes
			function recommencer2() {
				if (joueurA >= 5) {
					alert("Le joueur A a gagné la partie !");
					location.reload();
				}
				else if (joueurB >= 5) {
					alert("Le joueur B a gagné la partie !");
					location.reload();
				}
				else if (joueurA == 4 && joueurB == 4) {
					alert("Match nul !");
					location.reload();
				}
			}
			//La fonction melangerCarte permet de disposer les cartes aléatoirement dans le tableau
			function melangerCarte() {
				nombreCarte.sort(() => Math.random() - 0.5);
			}
			//Cette fonction permet de remettre les cartes verso s'il le faut ou bien recto mais aussi de les laisser en recto si la fonction ... les a détectés comme étant identique
			function changerSens(numeroCarteTbl) {
				switch (sensCarte[numeroCarteTbl]) {
					//côté verso
					case 0:
						imgCartes[numeroCarteTbl].src = "../IMAGES/Memory/Carte-Verso/dos-carte2.jpg";
						imgCartes[numeroCarteTbl].src = "../IMAGES/Memory/Carte-Verso/dos-carte2.jpg";
						break;
					//côté recto non définitif
					case 1:
						imgCartes[numeroCarteTbl].src = "../IMAGES/Memory/Carte-Recto/Carreau/c" + nombreCarte[numeroCarteTbl] + ".png";
						break;
					//côté recto définitif
					case -1:
						imgCartes[numeroCarteTbl].style.visibility = "visible";
						break;
				}
			}
			//On déclare les variables qui nous seront utiles pour le mode 1vs1
			var joueurA = 0;
			var joueurB = 0;
			var tour = 2;
			$('#nbrEssaiA').val("0");
			$('#nbrEssaiB').val("0");
			$('#joueurA').css('text-decoration', 'underline');
			//La fonction permet de voir combien de cartes sont sélectionnées et de voir si elles sont identiques
			function verification(numeroCarteTbl) {
				//Pour le mode 1vs1
				if ($('input:radio:checked').val() == 'duel') {
					$('#nbrEssaiA').val(joueurA);
					$('#nbrEssaiB').val(joueurB);
					//Si il y a moins de 2 cartes sélectionnées
					if (carteRecto.length < 2) {
						//Si la carte selectionnée est verso 
						if (sensCarte[numeroCarteTbl] == 0) {
							//La carte deviens recto
							sensCarte[numeroCarteTbl] = 1;
							//Le numero de la carte s'inscrit dans le tableau des cartes rectos
							carteRecto.push(numeroCarteTbl);
							//On appel la fonction changerSens
							changerSens(numeroCarteTbl);
						}
						//Si il y 2 cartes retournées
						if (carteRecto.length == 2) {
							var nouvelEtat = 0;
							//si le chiffre du premier et du deuxieme élément du tableau sont les mêmes
							if (nombreCarte[carteRecto[0]] == nombreCarte[carteRecto[1]]) {
								//Elles prennent l'état -1, elles restent donc visibles
								nouvelEtat = -1;
								//On incrémente le nombre de paire trouvées
								paire++;
								tour -= 1;
								//Si le reste est != 0 on ajoute 1 à joueurA et #nbrEssaiA prend sa valeur
								if (tour % 2 != 0) {
									joueurA += 1;
									$('#nbrEssaiA').val(joueurA);
								}
								//Si le reste est == 0 on ajoute 1 à joueurB et #nbrEssaiB prend sa valeur
								if (tour % 2 == 0) {
									joueurB += 1;
									$('#nbrEssaiB').val(joueurB);
								}
							}
							tour += 1;
							//On change le style de joueurA et B
							if (tour % 2 != 0) {
								$('#joueurB').css('text-decoration', 'underline');
								$('#joueurA').css('text-decoration', 'none');
							}
							if (tour % 2 == 0) {
								$('#joueurA').css('text-decoration', 'underline');
								$('#joueurB').css('text-decoration', 'none');
							}
							//si le premier if n'est pas effectué alors les deux cartes redeviennent en etat 0 donc verso
							sensCarte[carteRecto[0]] = nouvelEtat;
							sensCarte[carteRecto[1]] = nouvelEtat;
							//on effectue la fonction avec un delai qui est défini par la suite
							setTimeout(function () {
								//On appel la fonction changerSens pour les deux cartes recto
								changerSens(carteRecto[0]);
								changerSens(carteRecto[1]);
								//on remet le tableau carteRecto à 0 vu qu'il n'y en a plus
								carteRecto = [];
								//si on trouve les 8 paires
								if (paire == 8) {
									//on appel la fonction recommencer2 pour relancer une partie
									recommencer2();
								}
							}, 800);
						}
					}
				}
				//On effectue les mêmes actions que pour le tableau précédent
				if (carteRecto.length < 2) {
					if (sensCarte[numeroCarteTbl] == 0) {
						sensCarte[numeroCarteTbl] = 1;
						carteRecto.push(numeroCarteTbl);
						changerSens(numeroCarteTbl);
					}
					if (carteRecto.length == 2) {
						compteur += 1;
						$('#essai').val(compteur);
						var nouvelEtat = 0;
						if (nombreCarte[carteRecto[0]] == nombreCarte[carteRecto[1]]) {
							nouvelEtat = -1;
							paire++;
						}
						sensCarte[carteRecto[0]] = nouvelEtat;
						sensCarte[carteRecto[1]] = nouvelEtat;
						setTimeout(function () {
							changerSens(carteRecto[0]);
							changerSens(carteRecto[1]);
							carteRecto = [];
							//On fait 3 if car les niveaux ont un nombre de paires différent
							if ($('input:radio:checked').val() == 'Débutant') {
								if (paire == 6) {
									recommencer();
								}
							}
							else if ($('input:radio:checked').val() == 'Confirmé') {
								if (paire == 8) {
									recommencer();
								}
							}
							else if ($('input:radio:checked').val() == 'Expert') {
								if (paire == 10) {
									recommencer();
								}
							}
						}, 800);
					}
				}
			}
		});
	});
