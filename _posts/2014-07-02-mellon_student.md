---
layout: institution
status: publish
permalink: posts/students/2014-07-02-mellon_student
title: mellon student
categories: [student, Mellon Scholars program (Hope College), Visualizations, Spatial Humanities, Other]
research: Visualizations, Spatial Humanities, Other
other: other
program: Mellon Scholars program (Hope College)
website: site
twitter:  twitter
image: hope-mellon-scholars.jpg
---
<header class='post-header student-info'>
     <h1>mellon student</h1>
     <h2>Program: Mellon Scholars program (Hope College)</h2>
     <h3>Research Focus:{{page.research | remove:'Other'}} {%if page.other%} {{page.other}} {%endif%} </h3>
  </header>

  
  <div class='student-contact'>
    <img src="/images/{{page.image}}">
    <h3>{% if page.website%}URL: <a href=" {{page.website}}">{{page.website}}</a> {%endif%}</h3>
    <h3>{% if page.twitter%}Twitter: <a href="http://www.twitter.com/{{page.twitter}}"> @{{page.twitter}}</a> {%endif%}</h3>
  </div>


