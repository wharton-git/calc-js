calculer = document.querySelector('#calc')
calculer.addEventListener('click', cramer)

function cramer(){
    x1 = document.forms['get'].elements['x1'].value;
    y1 = document.forms['get'].elements['y1'].value;
    z1 = document.forms['get'].elements['z1'].value;
    rep1 = document.forms['get'].elements['rep1'].value;
    x2 = document.forms['get'].elements['x2'].value;
    y2 = document.forms['get'].elements['y2'].value;
    z2 = document.forms['get'].elements['z2'].value;
    rep2 = document.forms['get'].elements['rep2'].value;
    x3 = document.forms['get'].elements['x3'].value;
    y3 = document.forms['get'].elements['y3'].value;
    z3 = document.forms['get'].elements['z3'].value;
    rep3 = document.forms['get'].elements['rep3'].value;

    reponse = document.querySelector('#reponse');

    if (isNaN(x1) || isNaN(y1) || isNaN(z1) || isNaN(rep1) || isNaN(x2) || isNaN(y2) || isNaN(z2) || isNaN(rep2) || isNaN(x3) || isNaN(y3) || isNaN(z3) || isNaN(rep3)){
        alert('Veuiller entre des nombres entiers !');
    }
    else if (x1=="" || y1=="" || z1=="" || rep1=="" ||x2=="" || y2=="" || z2=="" || rep2=="" ||x3=="" || y3=="" || z3=="" || rep3=="" ){
        alert('Veuillez entrer des valeurs !')
    }
    else {
        x1 = parseInt(x1)
        y1 = parseInt(y1)
        z1 = parseInt(z1)
        rep1 = parseInt(rep1)

        x2 = parseInt(x2)
        y2 = parseInt(y2)
        z2 = parseInt(z2)
        rep2 = parseInt(rep2)

        x3 = parseInt(x3)
        y3 = parseInt(y3)
        z3 = parseInt(z3)
        rep3 = parseInt(rep3)

        var det,detX,detY,detZ,X,Z,Y;

        det = ((x1*((y2*z3)-(y3*z2))) + (x2*((y1*z3)-(y3*z1))) + (x3*((y1*z2)-(y2*z1))));
        detX = ((rep1*((y2*z3)-(y3*z2))) + (rep2*((y1*z3)-(y3*z1))) + (rep3*((y1*z2)-(y2*z1))));
        detY = ((x1*((rep2*z3)-(rep3*z2))) + (x2*((rep1*z3)-(rep3*z1))) + (x3*((rep1*z2)-(rep2*z1))));
        detZ = ((x1*((y2*rep3)-(y3*rep2))) + (x2*((y1*rep3)-(y3*rep1))) + (x3*((y1*rep2)-(y2*rep1))));
        if(det == 0){
            reponse.children[0].innerHTML = "😥"
            reponse.children[1].innerHTML = "Pas de solution !"
            reponse.children[2].innerHTML = "😥"
        }
        else if (detX == 0 || detY == 0 || detZ == 0){
            reponse.children[0].innerHTML = "😩"
            reponse.children[1].innerHTML = "Solution vide !"
            reponse.children[2].innerHTML = "😩"
        }
        else if (detX == 0 && detY == 0 && detZ == 0){
            reponse.children[0].innerHTML = "😲"
            reponse.children[1].innerHTML = "Infinité de solution !"
            reponse.children[2].innerHTML = "😲"
        }
        else{
        X = (detX/det); X = X.toFixed(2);
        Y = (detY/det); Y = Y.toFixed(2);
        Z = (detZ/det); Z = Z.toFixed(2);

        reponse.children[0].innerHTML = "X = " + X
        reponse.children[1].innerHTML = "Y = " + Y
        reponse.children[2].innerHTML = "Z = " + Z
        }
    }   
}
