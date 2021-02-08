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
const fontSize = document.getElementById ('fontSize');
const textAlignCenter = document.getElementById ('center');
const textAlignRight = document.getElementById ('right');
const textAlignLeft = document.getElementById ('left');
const fontColor = document.getElementById ('color-text');
const colorBack = document.getElementById ('color-background');
const transparentBack = document.getElementById ('transparentBack')

const spacing = document.getElementById ('spacing');
const lineSpacing = document.getElementById ('lineSpacing');


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

fontSize.addEventListener('change', () =>{
    articleTopText.style.fontSize = `${fontSize.value}px`;
    articleBottomText.style.fontSize = `${fontSize.value}px`;
});

textAlignCenter.addEventListener('click',(e)=>{
    e.preventDefault();
    articleTopText.style.textAlign = 'center';
    articleBottomText.style.textAlign = 'center';
});

textAlignRight.addEventListener('click',(e)=>{
    e.preventDefault();
    articleTopText.style.textAlign = 'right';
    articleBottomText.style.textAlign = 'right';
}); 

textAlignLeft.addEventListener('click',(e)=>{
    e.preventDefault();
    articleTopText.style.textAlign = 'left';
    articleBottomText.style.textAlign = 'left';
});   

fontColor.addEventListener('input', (e) => {
    articleTopText.style.color = e.target.value;
    articleBottomText.style.color = e.target.value;
    fontColor.innerText = `${e.target.value}`;
});

colorBack.addEventListener('input', (e) => {
    articleTopText.style.backgroundColor = e.target.value;
    articleBottomText.style.backgroundColor = e.target.value;
    colorBack.innerText = `${e.target.value}`;
});

transparentBack.addEventListener('change', () => {

    if(transparentBack.checked){
        articleTopText.style.backgroundColor = 'transparent';
        articleTopText.style.position = 'absolute';
        articleTopText.style.top = '0';
        articleBottomText.style.backgroundColor = 'transparent';
        articleBottomText.style.position = 'absolute';
        articleBottomText.style.bottom = '0';

    }else{
        articleTopText.style.backgroundColor = `${colorBack.value}`;
        articleTopText.style.position = 'relative';
        articleBottomText.style.backgroundColor = `${colorBack.value}`;
        articleBottomText.style.position = 'relative';
    }
});    


/*VER POSICION DE BOTTOM TEXT*/

/*   ******CONTORNOS!!!  NO FUNCIONA******
const nonCont = document.getElementById ('non-cont');
    nonCont.addEventListener ('click', (e) =>{
        e.preventDefault();
        articleTopText.classList.remove('claire-cont');
        articleTopText.classList.remove('dark-cont');
        articleBottomText.classList.remove('claire-cont');
        articleBottomText.classList.remove('dark-cont');
    });

const claireCont = document.getElementById ('claire-cont');
    claireCont.addEventListener ('click', (e) =>{
        e.preventDefault();
        articleTopText.classList.add('claire-cont');
        articleBottomText.classList.add('claire-cont');
    });

const darkCont = document.getElementById ('dark-cont');
    darkCont.addEventListener ('click', (e) =>{
        e.preventDefault();
        articleTopText.classList.add('dark-cont');
        articleBottomText.classList.add('dark-cont');
    });
*/


spacing.addEventListener ('change', (e) =>{
    articleTopText.style.padding = `${e.target.value}px 20px`;
    articleBottomText.style.padding = `${e.target.value}px 20px`;
    articleBottomText.style.marginTop = '0';
    })


lineSpacing.addEventListener('change', (e) =>{
    articleTopText.style.lineHeight = `${e.target.value}`;
    articleBottomText.style.lineHeight = `${e.target.value}`;
    articleBottomText.style.marginTop = '0';
});



