button = document.getElementById('button')
button.addEventListener('click', reso)



function reso() {
    Na = document.forms['Tri'].elements['a'].value; console.log('a = '+ Na);
    Nb = document.forms['Tri'].elements['b'].value; console.log('b = '+ Nb);
    Nc = document.forms['Tri'].elements['c'].value; console.log('c = '+ Nc);

    var solution = document.querySelector('#reponse');
    var legend = document.getElementById('legend');
    style = legend.style;


    if (isNaN(Na) || isNaN(Nb) || isNaN(Nc)) {
        console.log('Veuillez saisir un nombre Entier');
        alert('Veuillez saisir un nombre Entier');
        return 0;
    }
    else if ( Na == '' || Nb == '' || Nc == '') {
        console.log('Veuillez enter des Nombres !');
        alert('Veuillez enter des Nombres !');
        return 0;
    }
    else {
        Na = parseInt(Na);
        Nb = parseInt(Nb);
        Nc = parseInt(Nc);

        if (Na == 0 ){
            if (Nb == 0 && Nc == 0){
                solution.children[1].innerHTML = "A, B et C = <t style='color:palevioletred;'>0</t>";
                solution.children[2].innerHTML = "<span style='color:palevioletred;'>On a pas d'équation.</span>";
                console.log('Pas d\'equation');
                style.color = 'white'
                style.border = '2px solid white'
                style.background = 'red'
                return 0;
            }
            else if ( Nb == 0 && Nc != 0) {
                solution.children[1].innerHTML =  Nc +" <span> = 0 </span>"
                solution.children[2].innerHTML = "Impossible";
                console.log("Impossible")
                style.border = '2px solid red'
                style.background = '#032139'
                style.color = 'red'
                return 0;
            }
            else{
                s0 = (-Nc)/Nb;
                solution.children[1].innerHTML = " On a 'bx + c = 0'.";
                solution.children[2].innerHTML = " x = " +   parseInt(s0) + "<br>Valeur réelle ( " + s0+ " ).";
                style.color = 'white'
                style.border = '2px solid white'
                style.background = 'orange'
                return 0;
            }
        }
    delta = (Nb*Nb) - (4*Na*Nc);
    console.log('Δ = '+ delta);

    if (delta == 0) {
        x1 = (-Nb/(2*Na))
        solution.children[1].innerHTML = "<span>∆ = 0</span>"
        solution.children[2].innerHTML = "x1 = x2 = " + parseInt(x1) + "<br>Valeur réelle ( " + x1 + " ).";
        style.background = 'blue'
        style.color = 'white'
        style.border = '2px solid white'
        return 0;
    }
    else if ( delta < 0) {
        solution.children[1].innerHTML = "<span style='color:red;'>∆ < 0</span>"
        solution.children[2].innerHTML = "L'équation pas de solution."
        style.background = 'red'
        style.color = 'white'
        style.border = '2px solid white'
        return 0;
    }
    else {
        Rdelta = Math.sqrt(delta);
        console.log('Racine de Δ =' +Rdelta)

        x1 = ((-Nb) - Rdelta)/(2*Na)
        x2 = ((-Nb) + Rdelta)/(2*Na)

        console.log("x1 = "+ x1)
        console.log("x2 = "+ x2)


        solution.children[1].innerHTML = "<span style='color:lawngreen;'>∆ > 0</span>"
        solution.children[2].innerHTML = "x1 = " + parseInt(x1) + " et x2 = " + parseInt(x2) + "<br>Valeurs réelles ( x1 = " + x1 + " et x2 =" + x2 + " ).";
        style.background = 'green'
        style.color = 'white'
        style.border = '2px solid white'
        return 0;
    }
}
}


