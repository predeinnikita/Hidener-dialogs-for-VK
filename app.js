(function magicButton(){
    let btn = document.createElement("button")
    let isHidden = localStorage.getItem('hidden-mute-dialog') === 'true';
    
    css(btn, {
        'background-color': '#EDEEF0',
        'height' : '20px',
        'width' : '100px',
        'cursor' : 'pointer',
        'text-align' : 'center',
        "padding" : '0',
        "border" : "none",
        "border-radius" : "5px",
    });

    /*
    if (isHidden) {
        let list = document.querySelectorAll(".nim-dialog_muted");
        list.forEach(el => el.style.display = "none");
        btn.textContent = "Показать"
    } else {
        btn.textContent = "Скрыть"
    }
    */
    
    let dialogs = document.querySelector('.ui_scroll_content');
    dialogs.addEventListener('DOMNodeInserted ', () => {
        let list = document.querySelectorAll(".nim-dialog_muted");
        Array(list)[0].style.display = 'none';
    });

    function css(element, style) {
        for (const property in style)
            element.style[property] = style[property];
    }
    
    btn.addEventListener("click",()=>{
        let list = document.querySelectorAll(".nim-dialog_muted");
        if(isHidden) {
            btn.textContent = "Скрыть"
            list.forEach(el => el.style.display = "block");
        } else {
            btn.textContent = "Показать"
            list.forEach(el => el.style.display = "none");
        }
        isHidden = !isHidden;
        localStorage.setItem('hidden-mute-dialog', isHidden);        
    })
    document.querySelector(".HeaderNav__item--player").append(btn);
})()
