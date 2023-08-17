/*===============Find=====================*/
const findOption = document.getElementById('find-option')
const findToast = document.getElementById('find-toast')
const crossBtn = document.getElementById('cross-btn')
const findBtnForm = document.getElementById('find-btn')
const findInputField = document.getElementById('find-input-field')
const notFound = document.getElementById('notfound')

//show toast
findOption.addEventListener('click', ()=>{
    findToast.style.top = "70px";
})

//hide toast
crossBtn.addEventListener('click', ()=>{
    findToast.style.top = "-1000000px";
})

//disable find button for empty field
findInputField.addEventListener('keyup', ev=>{
    if(ev.target.value){
        findBtnForm.removeAttribute('disabled', false)
    }else{
        findBtnForm.setAttribute('disabled', true)
    }
})

//find text from paragraph
findBtnForm.addEventListener('click', (ev)=>{
    ev.preventDefault()
    const paragraph = textArea.innerText;

    if(!paragraph){
        return alert('Your writting board is empty!')
    }
    const texToFind = findInputField.value;
    
    const pattern = new RegExp(`${texToFind}`, 'gi');

    if(paragraph.match(pattern)){
        const matches = paragraph.match(pattern);
        const newPara = paragraph.replaceAll(matches[0], `<mark>${matches[0]}</mark>`)
        textArea.innerHTML = newPara;
    }else{
        textArea.innerText = paragraph;
        const audio = new Audio("../audio/not-found.mp3");
        audio.play()
        notFound.style.top = "0";
        setTimeout(()=>{
            notFound.style.top = "-100000px";
        }, 1000)
    }
})







/*==============Replace====================*/
const replaceOption = getElementById("replace-option")

const replaceToast = getElementById("replace-toast")
const replaceToastCrossBtn = getElementById("replace-cross-btn")

const replaceFindBtn = getElementById("replace-find-btn")
const replaceFindInputField = getElementById("replace-find-input-field")

const replaceBtn = getElementById("replace-btn")
const replaceInputField = getElementById("replace-input-field")

//show the replace toast
replaceOption.addEventListener('click', ()=>replaceToast.style.top="90px")

//hide the replace toast
replaceToastCrossBtn.addEventListener('click', ()=>replaceToast.style.top="-100000px")

//activate find button after input data
replaceFindInputField.addEventListener('keyup',(ev)=>{
    if(ev.target.value){
        replaceFindBtn.removeAttribute('disabled')
    }else{
        replaceFindBtn.setAttribute('disabled', true)
    }
})

//activate replace button after input data
replaceInputField.addEventListener('keyup',(ev)=>{
    if(ev.target.value){
        replaceBtn.removeAttribute('disabled')
    }else{
        replaceBtn.setAttribute('disabled', true)
    }
})


//find and make higlight the text
let foundText = "";
replaceFindBtn.addEventListener('click', (ev)=>{
    ev.preventDefault()
    const paragraph = textArea.innerText;
    const texToFind = replaceFindInputField.value;

    const pattern = new RegExp(`${texToFind}`, 'gi');

    if(paragraph.match(pattern)){
        foundText = texToFind;
        const matches = paragraph.match(pattern);
        const newPara = paragraph.replaceAll(matches[0], `<mark>${matches[0]}</mark>`)
        textArea.innerHTML = newPara;
    }else{
        textArea.innerText = paragraph;
        const audio = new Audio("../audio/not-found.mp3");
        foundText = "";
        audio.play()
        notFound.style.top = "0";
        setTimeout(()=>{
            notFound.style.top = "-100000px";
        }, 1000)
    }
})


//replace the input text with the matches
replaceBtn.addEventListener('click', (ev)=>{
    ev.preventDefault();
    if(foundText){
        const paragraph = textArea.innerText;
        const newText = replaceInputField.value;
       const replacedParagraph = paragraph.replaceAll(foundText, newText);
       textArea.innerText = replacedParagraph;
    }else{
        alert('No matches found!')
    }
})
/*==============Select All====================*/
const selectAll = getElementById("select-all-option");

selectAll.addEventListener('click', (ev)=>{
    window.getSelection()
    .selectAllChildren(textArea);
})