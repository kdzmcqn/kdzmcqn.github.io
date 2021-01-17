function getNewRandomColor() {
  var pheadcolors = ["#41eded", "#ed9898", "#60a2d3", "#c8c8c8", "#fff491"];
  var sheadcolors = ["#ed4141", "#98eded", "#d39160", "#00ffa1", "#919cff"];

  var dark_pri = ["#2A3742", "#412A42", "#005D63", "#42352A", "#2B422A", "#438066", "#A6FFFD", "#FDA6FF", "#FFFDA6"];
  var dark_sec = ["#2A3742", "#412A42", "#002C63", "#42352A", "#2B422A", "#437C80", "#A6FFFD", "#FDA6FF", "#FFFDA6"];
  var dark_ter = ["#2A3742", "#412A42", "#006337", "#42352A", "#2B422A", "#438047", "#A6FFFD", "#FDA6FF", "#FFFDA6"]; 

  var degs = ["0deg", "45deg", "60deg", "90deg", "120deg"];
  var deg = degs[Math.floor(Math.random() * degs.length)];
  var primary = pheadcolors[Math.floor(Math.random() * pheadcolors.length)];
  var secondary = sheadcolors[Math.floor(Math.random() * sheadcolors.length)];

  var dark_1 = dark_pri[Math.floor(Math.random() * dark_pri.length)];
  var dark_2 = dark_sec[Math.floor(Math.random() * dark_sec.length)];
  var dark_3 = dark_ter[Math.floor(Math.random() * dark_ter.length)];

  $(".page-header").css("background-color", secondary);

  var head_type = Math.floor(Math.random() * Math.floor(2));
  if (head_type == 0) {
    $(".page-header").css(
      "background-image",
      "linear-gradient(" + deg + "," + secondary + "," + primary + ")"
    );
  $("meta").each(function () {
    if ($(this).attr("name") == "theme-color") {
      $(this).attr("content", primary);
    }
  });
  $(document).ready(function () {
    $(".my-svg-icon").hover(
      function () {
        $(this).css("fill", secondary);
      },
      function () {
        $(this).css("fill", primary);
      }
    );

    $(".my-svg-icon").css("fill", primary);
  });
  } else if (head_type == 1 && deg != "0deg") {
    $(".page-header").css(
      "background-image",
      "linear-gradient(" + deg + ", " + dark_3 + ", " + dark_2 + ", " + dark_1 + ")"
    );
    
    
  }$("meta").each(function () {
      if ($(this).attr("name") == "theme-color") {
      $(this).attr("content", dark_3);
    }
  });
  $(document).ready(function () {
    $(".my-svg-icon").hover(
      function () {
        $(this).css("fill", dark_1);
      },
      function () {
        $(this).css("fill", dark_3);
      }
      );
      
      $(".my-svg-icon").css("fill", dark_3);
    });
    // tags = document.getElementsByTagName('h3');
  // var i = 0;
  // while (tags[i]) {
  //   tags[i].style.color = rand;
  //   i++;
  // }
}
document.onload = getNewRandomColor();
