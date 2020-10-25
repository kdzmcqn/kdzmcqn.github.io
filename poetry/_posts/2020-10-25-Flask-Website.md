---
title: "Python Flask Framework Development"
description: "This is my first project in freelancing"
layout: post
category: coding
tags: [python3, flask, backend]
links:
    - source: "https://github.com/kdzmcqn/studies/tree/master/studies/python/Flask_Website_redoing"
---

{% highlight ruby %}
def show
  @widget = Widget(params[:id])
  respond_to do |format|
    format.html # show.html.erb
    format.json { render json: @widget }
  end
end
{% endhighlight %}