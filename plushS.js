let showMenu = document.getElementById('show-menu')

menu().style.maxHeight = '0px';

function menu(){
    if (showMenu.style.maxHeight === '0px'){
        showMenu.style.maxHeight = '160px'
    }
    else{
        showMenu.style.maxHeight = '0px'
    }
}