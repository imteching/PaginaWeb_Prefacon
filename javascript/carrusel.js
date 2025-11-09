/* galeria */
var proyectos = $("#jardineras");
var siguiente = $("#btn-next");
var anterior = $("#btn-prev");

$("#jardineras section:last").insertBefore("#jardineras section:first");

proyectos.css("margin-left", "-" + 400 + "px");

function moverD() {
  proyectos.animate(
    {
      marginLeft: "-" + "800" + "px",
    },
    700,
    function () {
      $("#jardineras section:first").insertAfter("#jardineras section:last");
      proyectos.css("margin-left", "-" + 400 + "px");
    }
  );
}

function moverI() {
  proyectos.animate(
    {
      marginLeft: 0,
    },
    700,
    function () {
      $("#jardineras section:last").insertBefore("#jardineras section:first");
      proyectos.css("margin-left", "-" + 400 + "px");
    }
  );
}

siguiente.on("click", function () {
  moverD();
});

anterior.on("click", function () {
  moverI();
});
