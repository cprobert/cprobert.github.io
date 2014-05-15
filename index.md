---
layout: page
title: Courtenay Probert
tagline: idea archive
---
{% include JB/setup %}

Hi I'm Courtenay Probert

![Picture of me]({{ site.url }}/assets/images/courtenay-probert-v2.jpg "Courtenay Probert")

    
## My Blog Posts

This is an archive of pages I've published ofer the years.

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>



