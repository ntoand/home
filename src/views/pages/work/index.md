---
type: page
subdir: work
title: Toan Nguyen - Work
description: Toan Dinh Nguyen work portfolio
keywords: Toan Dinh Nguyen, homepage, portfolio, research
scripts:
  - __BASEURL__/public/js/lib/mixitup.min.js
  - __BASEURL__/public/js/work.min.js
---

  <div class="col-xs-12" style="height:120px;"></div>

  <div class="container">

    <h1 class="section-header-dark">Work</h1>
    <p>Some selected projects</p>

    <div class="col-xs-12" style="height:30px;"></div>

    <ul id="filters" class="clearfix">
      <li><span class="filter" data-filter="all">All</span></li>
      <li><span class="filter" data-filter=".visualisation">Visualisation</span></li>
      <li><span class="filter" data-filter=".data-processing">Data processing</span></li>
      <li><span class="filter" data-filter=".system">System</span></li>
      <li><span class="filter" data-filter=".research">Research</span></li>
    </ul>

    <div class="col-xs-12" style="height:30px;"></div>

    <ul id="rig">

      <% if(works) %>
      <% for(var i=0; i<works.length; i++) {%>
      <li class="mix <%= works[i].categories %>">
          <a class="rig-cell" href="<%= works[i].link %>">
              <img class="rig-img" src="<%= works[i].image %>" />
              <span class="rig-overlay"></span>
              <span class="rig-text">
                <h2><%= works[i].title %></h2>
                <p><%= works[i].description %></p>
              </span>
          </a>
      </li>
      <% } %>

    </ul>
  </div>

  <div class="col-xs-12" style="height:50px;"></div>
