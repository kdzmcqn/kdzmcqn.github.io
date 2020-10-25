function getNewRandomColor() {
  var pheadcolors = ["#41eded", "#ed9898", "#60a2d3", "#c8c8c8", "#fff491"];
  var sheadcolors = ["#ed4141", "#98eded", "#d39160", "#00ffa1", "#919cff"];
  var primary = pheadcolors[Math.floor(Math.random() * pheadcolors.length)];
  var secondary = sheadcolors[Math.floor(Math.random() * sheadcolors.length)];
  $(".page-header").css("background-color", secondary);
  $(".page-header").css("background-color", secondary);
  $(".page-header").css(
    "background-image",
    "linear-gradient(120deg," + secondary + "," + primary + ")"
  );

  $("meta").each(function () {
    if ($(this).attr("name") == "theme-color") {
      $(this).attr("content", primary);
    }
  });
$(document).ready(function () {
 $(".my-svg-icon").hover(
    function () {$(this).css("fill", primary);},
    function () {$(this).css("fill", secondary);}
  );
 });
  // tags = document.getElementsByTagName('h3');
  // var i = 0;
  // while (tags[i]) {
  //   tags[i].style.color = rand;
  //   i++;
  // }
}
document.onload = getNewRandomColor();
