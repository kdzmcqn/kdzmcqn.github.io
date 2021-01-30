---
layout: post
title: Simple JS Code of this site's Header
description: some random coding content
category: coding
tags: ["Javacript", "Header", "Front-end"]
---

# Changing Header Colors and Mobile Browser Tab Colors for Every Refresh of the Page
If you refresh or click any links, the following code will change the header color and the tab color, if possible.
They change randomly between a two-gradient scheme and a three-gradient scheme. The two-gradient comprises of much lighter colors,
while the three-gradient comprises darker ones.

## Array of Colors
I pick sick random colors

{% highlight javascript %}
function getNewRandomColor() {
  var pheadcolors = ["#41eded", "#ed9898", "#60a2d3", "#c8c8c8", "#fff491"];
  var sheadcolors = ["#ed4141", "#98eded", "#d39160", "#00ffa1", "#919cff"];

  var dark_pri = [
    "#2A3742",
    "#412A42",
    "#005D63",
    "#42352A",
    "#2B422A",
    "#438066",
    "#A6FFFD",
    "#FDA6FF",
    "#FFFDA6",
  ];
  var dark_sec = [
    "#2A3742",
    "#412A42",
    "#002C63",
    "#42352A",
    "#2B422A",
    "#437C80",
    "#A6FFFD",
    "#FDA6FF",
    "#FFFDA6",
  ];
  var dark_ter = [
    "#2A3742",
    "#412A42",
    "#006337",
    "#42352A",
    "#2B422A",
    "#438047",
    "#A6FFFD",
    "#FDA6FF",
    "#FFFDA6",
  ];
{% endhighlight %}

## Array of Angles
I pick basic angles then randomly choose colors and angles.

{% highlight javascript %}
  var degs = ["0deg", "45deg", "60deg", "90deg", "120deg"];
  var deg = degs[Math.floor(Math.random() * degs.length)];
  var primary = pheadcolors[Math.floor(Math.random() * pheadcolors.length)];
  var secondary = sheadcolors[Math.floor(Math.random() * sheadcolors.length)];

  var dark_1 = dark_pri[Math.floor(Math.random() * dark_pri.length)];
  var dark_2 = dark_sec[Math.floor(Math.random() * dark_sec.length)];
  var dark_3 = dark_ter[Math.floor(Math.random() * dark_ter.length)];
{% endhighlight %}

## If things go wrong
I just make sure that there's a header background if things fail. At least the colors will be matching even if its solid.

{% highlight javascript %}
  $(".page-header").css("background-color", secondary);
{% endhighlight %}

## Execution
Putting them together. Randomizing between the use of 2-gradient and 3-gradient colors. The 3-gradient colors are mostly dark.

{% highlight javascript %}
  var head_type = Math.floor(Math.random() * Math.floor(2));
  if (head_type == 0) {
    $(".page-header").css(
      "background-image",
      "linear-gradient(" + deg + "," + secondary + "," + primary + ")"
    );
  } else if (head_type == 1 && deg != "0deg") {
    $(".page-header").css(
      "background-image",
      "linear-gradient(" +
        deg +
        ", " +
        dark_3 +
        ", " +
        dark_2 +
        ", " +
        dark_1 +
        ")"
    );
    var primary = dark_3;
    var secondary = dark_1;
  }
{% endhighlight %}

## Tab Color
Changes the tab colors in a mobile browser to match with the header. This is sick.

{% highlight javascript %}
  $("meta").each(function () {
    if ($(this).attr("name") == "theme-color") {
      $(this).attr("content", primary);
    }
  });
{% endhighlight %}

## Icons

{% highlight javascript %}
  $(document).ready(function () {
    $(".my-svg-icon").hover(
      function () {
        $(this).css("fill", secondary);
      },
      function () {
        $(this).css("fill", primary);
      }
    );

    $(".my-svg-icon").css("fill", secondary);
  });

}
{% endhighlight %}

## Refresh
Everytime you refresh the page, this will change all the colors.

{% highlight javascript %}
document.onload = getNewRandomColor();
{% endhighlight %}