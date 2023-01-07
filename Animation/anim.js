
btn = document.querySelector('.btn')
btn.addEventListener('click' , interv)
content = document.querySelector('#contenaire')


var i=0

function interv(){
    setInterval('lance()', 1000)
}

function lance(){
    if (content.children[i].classList.value == "raw"){
        content.children[i].style.zIndex= 10;
        content.children[i].style.opacity= 2;
        content.children[i].classList.replace('raw' ,'html')
    }
    else{
        content.children[i].classList.replace('body' ,'html')
    }
    if (i>0){
        content.children[i-1].style.zIndex= 1;
        content.children[i-1].style.opacity= 0;
        content.children[i-1].classList.replace('html', 'body')
    }
    i++;
    if (content.children.length == i){
        i = 0;
        content.children.classList.replace()
    }
    // setInterval('lance()', 700)
}
// setInterval('lance()', 700)
