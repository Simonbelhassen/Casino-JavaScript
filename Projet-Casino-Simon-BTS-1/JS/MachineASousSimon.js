var mise = parseInt($('#mise').val());
var cagnotte = parseInt($('#cagnotte').val());

function LancerMachine()
{
    var mise = parseInt($('#mise').val());
    var cagnotte = parseInt($('#cagnotte').val());

    if( $('#cagnotte').val() === " 0 " )
    {
        alert("Vous n'avez plus d'argent pour miser");
    }

    else if( $('#mise').val() === "" || mise > cagnotte || mise < 1)
    {
        alert("Veuillez bien miser s'il vous plaît ");
    }
    else
    {
        $('#roulette ul').playSpin({
            onFinish : function(){
                Gains();
            }
        });
    }
}

function Gains()
{

    if(($('#droite').css('top')) == ($('#milieu').css('top')) && ($('#milieu').css('top')) == ($('#gauche').css('top')))
    {
        alert("Bravooo , Vous venez de gagner le JACKPOT !!  🤑🤑")

        $('#cagnotte').val(parseInt($('#cagnotte').val()) + parseInt(($('#mise').val()))*5);
    }
    else if(($('#droite').css('top')) == ($('#milieu').css('top')) || ($('#milieu').css('top')) == ($('#gauche').css('top')) || ($('#droite').css('top')) == ($('#gauche').css('top')))
    {
        alert('Bravo, Vous avez gagné '+ (parseInt($('#mise').val())*2) + "€ 🤑🤑" );
        $('#cagnotte').val(parseInt($('#cagnotte').val()) + parseInt(($('#mise').val()))*2);
    }

    else
    {
        alert('Dommage, Vous venez de perdre '+  parseInt($('#mise').val())  +" € 😢😢 " );
        $('#cagnotte').val(parseInt($('#cagnotte').val()) - parseInt(($('#mise').val())));
    }
    
    if( $('#cagnotte').val() === "0" )
    {
        alert("Malheuressement vous n'avez plus d'argent pour miser 😢😢");
    }
}