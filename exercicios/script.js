let eximg = document.querySelector("#htmlimg")

function enterex(ex) {
    if(ex==0 || ex=="" || eximg.offsetWidth < 590){

    }else{
        let item = document.createElement('img')
        item.src = `imagem/${ex}.png`
        eximg.appendChild(item)
    }

}

function leaveex() {
    eximg.innerHTML = ""
}