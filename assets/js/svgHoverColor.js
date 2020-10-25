function getNewRandomColor() {
  var pheadcolors = ["#41eded", "#ed9898", "#60a2d3", "#c8c8c8", "#fff491"];
//   var sheadcolors = ["#ed4141", "#98eded", "#d39160", "#00ffa1", "#919cff"];
  var primary = pheadcolors[Math.floor(Math.random() * pheadcolors.length)];


//   function random_bg_color() {
//     var x = Math.floor(Math.random() * 256);
//     var y = Math.floor(Math.random() * 256);
//     var z = Math.floor(Math.random() * 256);
//     var bgColor = "rgb(" + x + "," + y + "," + z + ")";
//     document.body.style.background = bgColor;
//   }
//   random_bg_color();

  $(".my-svg-icon").hover(
    function () {
      $(this).css("color", primary);
    },
  );
}
