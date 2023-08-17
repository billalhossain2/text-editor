//get the selected text
const textArea = getElementById("text-area");
const colorContainer = getElementById("text-color-selector");
let selectedTxt = "";
document.addEventListener('mouseup', event => {  
       if(window.getSelection().toString().length){
         selectedTxt = window.getSelection().toString();
       } 
})
const textColors = ['#06D6A0', '#1B9AAA', '#ef476f', '#FFC43D', '#FFC94F', '#264653', '#344e41', '#fb8500', '#fb5607', '#e29578', '#00b4d8', '#e56b6f', '#354f52', '#004b23', '#04395e', '#1b2021', '#326771', '#1e352f', '#3f4f35', '#9bb1ff', '#e53d00', '#df2935', '#fdca40', '#540d6e', '#3bceac', '#7dcfb6', '#080708', '#0ead69']


// font related features 
const font = document.getElementById("font");
let currentSize = 16;

let formatedText = "";
font.addEventListener('click', (ev)=>{
    const wholeText = textArea.innerHTML;

    if(ev.target.classList[1] === "fa-bold"){
        if(selectedTxt){
        formatedText = wholeText.replace(selectedTxt, `<span style="font-weight:bold">${selectedTxt}</span>`)
        textArea.innerHTML = formatedText;
        selectedTxt = "";
        }else{
            if(textArea.style.fontWeight){
                textArea.style.fontWeight = "";
                ev.target.classList.remove('active');
            }else{
                ev.target.classList.add('active');
                textArea.style.fontWeight = "bold";
            }
        }
    }else if(ev.target.classList[1] === "fa-italic"){
        if(selectedTxt){
        formatedText = wholeText.replace(selectedTxt, `<span style="font-style:italic">${selectedTxt}</span>`)
        textArea.innerHTML = formatedText;
        selectedTxt = "";
        }else{
            if(textArea.style.fontStyle){
                textArea.style.fontStyle = "";
                ev.target.classList.remove('active');
            }else{
                ev.target.classList.add('active');
                textArea.style.fontStyle = "italic";
            }
        }
    }else if(ev.target.classList[1] === "fa-underline"){
        if(selectedTxt){
            formatedText = wholeText.replace(selectedTxt, `<span style="text-decoration:underline">${selectedTxt}</span>`)
            textArea.innerHTML = formatedText;
            selectedTxt = "";
            }else{
                if(textArea.style.textDecoration){
                    textArea.style.textDecoration = "";
                    ev.target.classList.remove('active');
                }else{
                    ev.target.classList.add('active');
                    textArea.style.textDecoration = "underline";
                }
            }
    }else if(ev.target.classList[1] === "fa-strikethrough"){
        if(selectedTxt){
            formatedText = wholeText.replace(selectedTxt, `<strike>${selectedTxt}</strike>`)
            textArea.innerHTML = formatedText;
            selectedTxt = "";
            }else{
                if(textArea.style.textDecoration){
                    textArea.style.textDecoration = "";
                    ev.target.classList.remove('active');
                }else{
                    ev.target.classList.add('active');
                    textArea.style.textDecoration = "line-through"
                }
            }
    }else if(ev.target.classList.contains("fa-sort-up") || ev.target.classList.contains("increment-font") || ev.target.classList.contains("fa-up")){
        currentSize++;
        textArea.style.fontSize = `${currentSize}px`
    }else if(ev.target.classList.contains("fa-sort-down") || ev.target.classList.contains("decrease-font") || ev.target.classList.contains("fa-down")){
        currentSize--;
        textArea.style.fontSize = `${currentSize}px`
    }else if(ev.target.classList.contains('hightlighter')){
        if(ev.target.classList.contains('active')){
            ev.target.classList.remove('active')
        }else{
            ev.target.classList.add('active')
        }
        if(textArea.innerHTML.search('</mark>') >= 0){
            textArea.innerText = textArea.innerText
            return;
        }
        if(selectedTxt){
 
            const highlighted = textArea.innerText.replace(selectedTxt, `<mark>${selectedTxt}</mark>`);
            textArea.innerHTML = highlighted;
            
            selectedTxt = "";
        }else{
            const markedTxt = `<mark>${textArea.innerText}</mark>`;
            textArea.innerHTML = markedTxt;
        }
    }else if(ev.target.classList.contains('text-color')){
        /*=========================TExt Color=======================*/
        colorContainer.innerHTML = "";
        textColors.forEach(color => {
            colorContainer.innerHTML += `<div onclick='changeTextColor("${color}")' class="color-box" style="background:${color}"><div>`;
        })
    }
})

function changeTextColor(color){
    textArea.style.color = color;
}

getElementById("font-family").addEventListener('change', ev=>{
    const wholeText = textArea.innerHTML;
    if(selectedTxt){
        formatedText = wholeText.replace(selectedTxt, `<span style="font-family:${ev.target.value}">${selectedTxt}</span>`)
        textArea.innerHTML = formatedText;
        selectedTxt = "";
        }else{
            if(textArea.style.fontFamily){
                textArea.style.fontFamily = "";
            }else{
                textArea.style.fontFamily = `${ev.target.value}`;
            }
        }
})

getElementById("font-size").addEventListener('change', ev=>{
    const wholeText = textArea.innerHTML;
    if(selectedTxt){
        formatedText = wholeText.replace(selectedTxt, `<span style="font-size:${ev.target.value}px">${selectedTxt}</span>`)
        textArea.innerHTML = formatedText;
        selectedTxt = "";
        }else{
        textArea.style.fontSize = `${ev.target.value}px`;
        }
})


// ===================================================================================color 
const textColorWrapper = getElementById("text-color-wrapper")
textColorWrapper.addEventListener('click', ev=>{
    if(ev.target.classList.contains('text-color')){
        colorContainer.classList.toggle('toggleTextColor')
    }
})



