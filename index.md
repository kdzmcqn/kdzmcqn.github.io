---
layout: default
---

# Coming soon

[Leandro Lapeña](https://github.com/kdzmcqn)

[Online Resume (General version)](https://registry.jsonresume.org/kdzmcqn)

## Art is free thinking

### Telecom Experience

|![Telecom_11](assets/img/telecom_11.jpg){:width="400px"}|![Telecom_12](assets/img/telecom_12.jpg){:width="400px"} |![Telecom_21](assets/img/telecom_21.jpg){:width="400px"} |![Telecom_22](assets/img/telecom_22.jpg){:width="400px"}|

### Biomedical Experience

|![service_11](assets/img/service_11.jpg){:width="400px"} |![Pampanga_12](assets/img/Pampanga_12.jpg){:width="400px"} |![Pampanga_21](assets/img/Pampanga_21.jpg){:width="400px"} |![service_22](assets/img/service_22.jpg){:width="400px"}|

# Where I train

|![gym1](assets/img/gym3.jpg){:width="400px"} |![gym1](assets/img/gym1.jpg){:width="400px"} |![gym1](assets/img/gym2.jpg){:width="400px"}|

### test links

[Link to another page](./another-page.html).

### posts

<ul>
  {% for post in site.posts %}
    <li>
      <p>{{ post.date | date_to_string }} &#8881; <a href="{{ post.url }}">{{ post.title }}</a></p>
    </li>
  {% endfor %}
</ul>
