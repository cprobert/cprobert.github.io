---
layout: page
title: Courtenay Probert
tagline: from brain to blog
image: courtenay.jpg
---
{% include JB/setup %}

Hi I'm Courtenay Probert, and these are my blog posts.

<ul class="list-group">
  {% for post in site.posts %}
    <li class="list-group-item">
    	<span class="badge pull-right">{{ post.date | date_to_string }}</span> <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>



