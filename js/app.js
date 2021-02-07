/*              *****VARIABLES  MAIN*****    */

/* TEXTO*/
const panelImg = document.getElementsByClassName('nav-img');
const panelTxt = document.getElementsByClassName('nav-txt');
const botSwitch = document.getElementsByClassName('switch');
const articleTopText = document.getElementById('articleTopText');
const articleImgMeme = document.getElementById('articleImg');
const articleBottomText = document.getElementById('articleBottomText');

const asideContainer = document.getElementsByClassName('aside-container');
const topText = document.getElementById('topText');
const topTextCheck = document.getElementById('topTextCheck');
const bottomText = document.getElementById('bottomText');
const bottomTextCheck = document.getElementById('bottomTextCheck');

const fontType = document.getElementById('option');

/*        *****EVENTOS DE FORMULARIO DE TEXTO*****    */

/*TEXTO SUPERIOR*/
topText.addEventListener('keyup', ()=> {
    articleTopText.innerHTML=topText.value;
});

topTextCheck.addEventListener('click', () =>{
    if (topTextCheck.checked){
        articleTopText.style.display='none'}
    else {
        articleTopText.style.display='block';
    }
});

/*TEXTO INFERIOR*/
bottomText.addEventListener('keyup', ()=> {
    articleBottomText.innerHTML=bottomText.value;
});

bottomTextCheck.addEventListener('click', () =>{
    if (bottomTextCheck.checked){
        articleBottomText.style.display='none'}
    else {
        articleBottomText.style.display='block';
    }
});


/* FUENTES */

fontType.addEventListener('change',()=>{
    articleTopText.style.fontFamily = `${option.value}`;
    articleBottomText.style.fontFamily = `${option.value}`;
});   /* el evento funciona pero no las fontfamily*/ 

const fontSize = document.getElementById ('fontSize');
fontSize.addEventListener('change', () =>{
    articleTopText.style.fontSize = `${fontSize.value}px`;
    articleBottomText.style.fontSize = `${fontSize.value}px`;
});

 const textAlignCenter = document.getElementById ('center');
textAlignCenter.addEventListener('click',()=>{
    articleTopText.style.textAlign = 'center';
    articleBottomText.style.textAlign = 'center';
});

const textAlignRight = document.getElementById ('right');
textAlignRight.addEventListener('click',()=>{
    articleTopText.style.textAlign = 'right';
    articleBottomText.style.textAlign = 'right';
}); 

const textAlignLeft = document.getElementById ('left');
textAlignLeft.addEventListener('click',()=>{
    articleTopText.style.textAlign = 'left';
    articleBottomText.style.textAlign = 'left';
});