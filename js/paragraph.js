//paragraph logics
document.getElementById("paragraph").addEventListener('click', ev=>{
    const aligns = document.querySelectorAll('.fa-align');
    aligns.forEach(align => align.classList.remove('active'));
    if(ev.target.classList.contains('fa-align-left')){
        textArea.style.textAlign = "left";
        ev.target.classList.add('active');
    }else if(ev.target.classList.contains('fa-align-center')){
        textArea.style.textAlign = "center";
        ev.target.classList.add('active');
    }else if(ev.target.classList.contains('fa-align-right')){
        textArea.style.textAlign = "right";
        ev.target.classList.add('active');
    }else if(ev.target.classList.contains('fa-align-justify')){
        textArea.style.textAlign = "justify";
        ev.target.classList.add('active');
    }
})