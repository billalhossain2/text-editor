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




/*==============Select All====================*/