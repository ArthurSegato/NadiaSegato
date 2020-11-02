let links = document.getElementsByTagName("a");
Array.prototype.forEach.call(links, function(elem, index) {
    let elemAttr = elem.getAttribute("href");
    if (elemAttr && elemAttr.includes("#")) {
        elem.addEventListener("click", function(ev) {
            ev.preventDefault();
            document.getElementById(elemAttr.replace(/#/g, "")).scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest"
            });
        });
    }
});
async function mostrarContato(){
    document.getElementById("contato").style.opacity = "1";
    document.getElementById("contato").style.zIndex = "10";
      
}
function fecharContato(){
    document.getElementById("contato").style.opacity = "0";
    document.getElementById("contato").style.zIndex = "-10";
}