var estado = true;
setTimeout("cambio()", 9000);
function cambio() {
    estado = !estado;
    if (estado == true)
        img.src = "img/Hand Taking Strawberrys And Cream Cake.jpg"
    else
        img.src = "img/AZ3NPVPEZ6.jpg"
    setTimeout("cambio()", 5000);
}
$(document).ready(function(){
    $('.carousel').carousel({
        dist:0,
        shift:0,
        padding:20,

    });

});

$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
});
