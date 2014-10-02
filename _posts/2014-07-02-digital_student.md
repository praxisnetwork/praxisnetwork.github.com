---
layout: institution
status: publish
permalink: posts/students/2014-07-02-digital_student
title: digital student
categories: [student, Digital Fellows Program (CUNY), Textual Analysis]
research: Textual Analysis
other: 
program: Digital Fellows Program (CUNY)
website: site
twitter:  twitter
image: cuny-gcdi.jpg
---
<header class='post-header student-info'>
     <h1>digital student</h1>
     <h2>Program: Digital Fellows Program (CUNY)</h2>
     <h3>Research Focus:{{page.research | remove:'Other'}} {%if page.other%} {{page.other}} {%endif%} </h3>
  </header>

  
  <div class='student-contact'>
    <img src="/images/{{page.image}}">
    <h3>{% if page.website%}URL: <a href=" {{page.website}}">{{page.website}}</a> {%endif%}</h3>
    <h3>{% if page.twitter%}Twitter: <a href="http://www.twitter.com/{{page.twitter}}"> @{{page.twitter}}</a> {%endif%}</h3>
  </div>


