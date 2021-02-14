
/*------TEXT VARIABLES------*/
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

/*        *****TEXT FORM EVENTS*****    */

/********TOP TEXT********/
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

/********BOTTOM TEXT********/
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


/********FONTS********/
fontType.addEventListener('change',()=>{
    articleTopText.style.fontFamily = `${option.value}`;
    articleBottomText.style.fontFamily = `${option.value}`;
});  

fontSize.addEventListener('change', () =>{
    articleTopText.style.fontSize = `${fontSize.value}px`;
    articleBottomText.style.fontSize = `${fontSize.value}px`;
});

fontColor.addEventListener('input', (e) => {
    articleTopText.style.color = e.target.value;
    articleBottomText.style.color = e.target.value;
    fontColor.innerText = `${e.target.value}`;
});

/* *******ALIGN TEXT******* */
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

/* *******BACKGROUND TEXT******* */

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

/* *******SPACING TEXT******* */

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

/***********************************************************/

/*------IMAGE VARIABLES------*/
const url = document.getElementById ('url');
const backImg = document.getElementById('imgBackground')
const panelBack = document.getElementById ('panelBackground')



/*  ********IMAGE FORM EVENTS*********   */

url.addEventListener('keyup', (e) => {
    e.preventDefault();
    articleImg.style.backgroundImage = `url(${e.target.value})`;
    articleImg.style.backgroundPosition = 'center';
    articleImg.style.backgroundRepeat = 'no-repeat';
});

backImg.addEventListener('input', (e) => {
    e.preventDefault();
    articleImg.style.backgroundColor = `${e.target.value}`;
}); 

panelBack.addEventListener('change',()=> {
    articleImg.style.backgroundBlendMode = panelBackground.value});

const imgFilters = document.getElementsByClassName ('filters');
const brightFilter = document.getElementById ('brightness');
const opacFilter = document.getElementById ('opacity');
const contrastFilter = document.getElementById ('contrast');
const blurFilter = document.getElementById ('blur');
const grayFilter = document.getElementById ('grayscale');
const sepiaFilter = document.getElementById ('sepia');
const hueFilter = document.getElementById ('hue');
const satFilter = document.getElementById ('saturation');
const invertFilter = document.getElementById ('invert');
const resetButton = document.getElementById ('resetButton');

const filtrosImagen = () =>{
    articleImg.style.filter = `brightness(${brightFilter.value}) opacity(${opacFilter.value}) contrast(${contrastFilter.value}%) blur(${blurFilter.value}px) grayscale(${grayFilter.value}%) sepia(${sepiaFilter.value}%) hue-rotate(${hueFilter.value}deg) saturate(${satFilter.value}%) invert(${invertFilter.value})`;
};

brightFilter.addEventListener('change', filtrosImagen);
opacFilter.addEventListener('change', filtrosImagen);
contrastFilter.addEventListener('change', filtrosImagen);
blurFilter.addEventListener('change', filtrosImagen);
grayFilter.addEventListener('change', filtrosImagen);
sepiaFilter.addEventListener('change', filtrosImagen);
hueFilter.addEventListener('change', filtrosImagen);
satFilter.addEventListener('change', filtrosImagen);
invertFilter.addEventListener('change', filtrosImagen);

/* resetButton.addEventListener('click', (e) => {
    articleImg.style.filter = e.preventDefault();
    brightFilter.value = 1;
    opacFilter.value = 1;
    contrastFilter.value = 100;
    blurFilter.value = 0;
    grayFilter.value = 0;
    sepiaFilter.value = 0;
    hueFilter.value = 0;
    satFilter.value = 100;
    invertFilter.value = 0;
    filter();
}); */
