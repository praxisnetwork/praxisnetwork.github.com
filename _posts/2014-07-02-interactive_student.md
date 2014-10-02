---
layout: institution
status: publish
permalink: posts/students/2014-07-02-interactive_student
title: interactive student
categories: [student, Interactive Arts and Science Program (Brock University), Visualizations, Spatial Humanities]
research: Visualizations, Spatial Humanities
other: 
program: Interactive Arts and Science Program (Brock University)
website: site
twitter:  twitter
image: brock-iasc.jpg
---
<header class='post-header student-info'>
     <h1>interactive student</h1>
     <h2>Program: Interactive Arts and Science Program (Brock University)</h2>
     <h3>Research Focus:{{page.research | remove:'Other'}} {%if page.other%} {{page.other}} {%endif%} </h3>
  </header>

  
  <div class='student-contact'>
    <img src="/images/{{page.image}}">
    <h3>{% if page.website%}URL: <a href=" {{page.website}}">{{page.website}}</a> {%endif%}</h3>
    <h3>{% if page.twitter%}Twitter: <a href="http://www.twitter.com/{{page.twitter}}"> @{{page.twitter}}</a> {%endif%}</h3>
  </div>


