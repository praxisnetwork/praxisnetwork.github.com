---
layout: institution
status: publish
permalink: posts/students/2014-06-18-test_purdom
title: test_purdom
categories: [student, Praxis Program (UVA), ]
research: 
other: 
program: Praxis Program (UVA)
website: test_test_test
twitter:  testing_for_reals
image: uva-praxis-program.jpg
---
<header class='post-header student-info'>
     <h1>test_purdom</h1>
     <h2>Program: Praxis Program (UVA)</h2>
     <h3>Research Focus:{{page.research | remove:'Other'}} {%if page.other%} {{page.other}} {%endif%} </h3>
  </header>

  
  <div class='student-contact'>
    <img src="/images/{{page.image}}">
    <h3>{% if page.website%}URL: <a href=" {{page.website}}">{{page.website}}</a> {%endif%}</h3>
    <h3>{% if page.twitter%}Twitter: <a href="http://www.twitter.com/{{page.twitter}}"> @{{page.twitter}}</a> {%endif%}</h3>
  </div>


