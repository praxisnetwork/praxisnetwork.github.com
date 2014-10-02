---
layout: institution
status: publish
permalink: posts/students/2014-07-02-phd_student
title: phd student
categories: [student, PhD Lab in Digital Knowledge (Duke), Visualizations, Spatial Humanities]
research: Visualizations, Spatial Humanities
other: 
program: PhD Lab in Digital Knowledge (Duke)
website: site
twitter:  twitter
image: duke-phd-lab.jpg
---
<header class='post-header student-info'>
     <h1>phd student</h1>
     <h2>Program: PhD Lab in Digital Knowledge (Duke)</h2>
     <h3>Research Focus:{{page.research | remove:'Other'}} {%if page.other%} {{page.other}} {%endif%} </h3>
  </header>

  
  <div class='student-contact'>
    <img src="/images/{{page.image}}">
    <h3>{% if page.website%}URL: <a href=" {{page.website}}">{{page.website}}</a> {%endif%}</h3>
    <h3>{% if page.twitter%}Twitter: <a href="http://www.twitter.com/{{page.twitter}}"> @{{page.twitter}}</a> {%endif%}</h3>
  </div>


