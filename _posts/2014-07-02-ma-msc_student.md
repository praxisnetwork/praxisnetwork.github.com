---
layout: institution
status: publish
permalink: posts/students/2014-07-02-ma-msc_student
title: ma-msc student
categories: [student, MA-MSc program (UCL), Visualizations]
research: Visualizations
other: 
program: MA-MSc program (UCL)
website: site
twitter:  twitter
image: ucldh.jpg
---
<header class='post-header student-info'>
     <h1>ma-msc student</h1>
     <h2>Program: MA-MSc program (UCL)</h2>
     <h3>Research Focus:{{page.research | remove:'Other'}} {%if page.other%} {{page.other}} {%endif%} </h3>
  </header>

  
  <div class='student-contact'>
    <img src="/images/{{page.image}}">
    <h3>{% if page.website%}URL: <a href=" {{page.website}}">{{page.website}}</a> {%endif%}</h3>
    <h3>{% if page.twitter%}Twitter: <a href="http://www.twitter.com/{{page.twitter}}"> @{{page.twitter}}</a> {%endif%}</h3>
  </div>


