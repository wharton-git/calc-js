btn = document.querySelector('#btn')
btn.addEventListener('click' , elec)

function elec(){

    U = document.forms['recup-data'].elements['U'].value;
    R1 = document.forms['recup-data'].elements['R1'].value; 
    R2 = document.forms['recup-data'].elements['R2'].value;
    R3 = document.forms['recup-data'].elements['R3'].value;
    R4 = document.forms['recup-data'].elements['R4'].value;

    console.log("U = "+ U + "V")
    console.log("R1 = "+ R1 + "Ω")
    console.log("R2 = "+ R2 + "Ω")
    console.log("R3 = "+ R3 + "Ω")
    console.log("R4 = "+ R4 + "Ω")

    var result = document.querySelector("#result");

    if (isNaN(U) || isNaN(R1) || isNaN(R2) || isNaN(R3) || isNaN(R4)) {
        alert('Veuillez saisir un nombre Entier');
        return 0;
    }
    else if ( U == '' || R1 == '' || R2 == '' || R3 == '' || R4 == '') {
        alert('Veuillez enter des Nombres !');
        return 0;
    }
    else if ( U == 0 && R1 == 0 && R2 == 0 && R3 == 0 && R4 == 0){
        result.children[2].innerHTML = 'Veuillez entrer au moins'
        result.children[3].innerHTML = 'une valeur positive !!!.'
        result.children[4].innerHTML = '🙂'
        result.children[5].innerHTML = '🙂'
    }
    else {
        U = parseInt(U)
        R1 = parseInt(R1)
        R2 = parseInt(R2)
        R3 = parseInt(R3)
        R4 = parseInt(R4)

        req = (R3*R2)/(R3+R2);
        Req = R1 + req + R4;


        var I1,I2,I3,I4,U1,U2,U3,U4;
        I1 = U/Req ; console.log(I1)
        I4 = I1

        U1 = R1*I1; U4 = R4*I1;
        U2 = U - ( U1 + U4 );
        U3 = U2

        I2 = U2/R2; I3 = U2/R3; 

        I1 = I1.toFixed(1);
        I2 = I2.toFixed(1);
        I3 = I3.toFixed(1);
        I4 = I4.toFixed(1);

        U1 = U1.toFixed(1);
        U2 = U2.toFixed(1);
        U3 = U3.toFixed(1);
        U4 = U4.toFixed(1);

        result.children[0].innerHTML = "I<sub>1</sub> = " + I1 + " A";
        result.children[1].innerHTML = "U<sub>1</sub> = " + U1 + " V";
        result.children[2].innerHTML = "I<sub>2</sub> = " + I2 + " A";
        result.children[3].innerHTML = "U<sub>2</sub> = " + U2 + " V";
        result.children[4].innerHTML = "I<sub>3</sub> = " + I3 + " A";
        result.children[5].innerHTML = "U<sub>3</sub> = " + U3 + " V";
        result.children[6].innerHTML = "I<sub>4</sub> = " + I4 + " A";
        result.children[7].innerHTML = "U<sub>4</sub> = " + U4 + " V";
    }
}

function img(){
    var image = document.getElementById('data-img');
    image.style.zIndex = 2;
}

function imgOut(){
    var image = document.getElementById('data-img');
    image.style.zIndex = -1;
}