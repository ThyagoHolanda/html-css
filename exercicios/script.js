let eximg = document.querySelector("#htmlimg")
let arlist = document.querySelector(".html-list")
let arimg = document.querySelector(".html-img")

function enterex(ex) {
    if(ex==0 || ex=="" /*|| eximg.offsetWidth < 590*/){

    }else{
        eximg.innerHTML = ""
        let item = document.createElement('img')
        item.src = `imagem/${ex}.png`
        eximg.appendChild(item)
    }

}

function leaveex() {
    eximg.innerHTML = ""
    let item = document.createElement('img')
    item.src = `imagem/exemplo.png`
    eximg.appendChild(item)
}