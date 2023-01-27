// Ejecutar función en el evento click
document.getElementById("btn_open").addEventListener("click", open_close_menu);

//Declaramos las variables
var menu_slide = document.getElementById("menu_slide");
var btn_open = document.getElementById("btn_open");
var body = document.getElementById("body");

//Evento para mostrar y ocultar el menu
function open_close_menu(){
    body.classList.toggle("body_slide");
    menu_slide.classList.toggle("menu_slide_movil");
}

//Si el ancho de la página es menor a 760px, ocultará el menú al recargar la página

if(window.innerWidth < 760) {

    body.classList.add("body_slide");
    menu_slide.classList.add("menu_slide_movil");
}

//Haciendo el menú responsive(adaptable)
window.addEventListener("resize", function(){
    if(window.innerWidth > 760){
        body.classList.remove("body_slide");
        menu_slide.classList.remove("menu_slide_movil");
    }
    if(window.innerWidth < 760){
        body.classList.add("body_slide");
        menu_slide.classList.add("menu_slide_movil");
    }
});