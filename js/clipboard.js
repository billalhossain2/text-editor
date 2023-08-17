// clipboard
document.getElementById("clipboard").addEventListener('click', (ev)=>{
    if(ev.target.classList.contains('copy') || ev.target.classList.contains('fa-copy') || ev.target.classList.contains('copy-text')){
    //   copy text 
    const text = textArea.innerText;
    navigator.clipboard.writeText(text)
    .then(()=>alert("Copied text"))
    .catch(error => console.log('Failed to copy==> ', error.message))
    }else if(ev.target.classList.contains('cut') || ev.target.classList.contains('fa-scissors') || ev.target.classList.contains('cut-text')){
        //   cut text 
        const text = textArea.innerText;
        navigator.clipboard.writeText(text)
        .then(()=>alert("Cut text"))
        .catch(error => console.log("Failed to cut======>", error.message))
        textArea.innerHTML = "";
    }else if(ev.target.classList.contains('paste') || ev.target.classList.contains('fa-clipboard') || ev.target.classList.contains('paste-text')){
        //   paste text 
        navigator.clipboard.readText()
        .then(text =>{
            textArea.innerText += text;
        })
    }
})