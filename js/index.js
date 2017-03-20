jQuery('#section-skills').one('inview', function (event, visible) {
  console.log(event);
  console.log('Here');
  if (visible == true) {
    console.log("inview");

  }
});

jQuery(document).ready(function(){
  "use strict";

  // particles
  particlesJS.load('particles-js', 'js/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

  // skill chart
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {

    var data = google.visualization.arrayToDataTable([
      ['Skill', 'Percentage'],
      ['C/C++',     10],
      ['Matlab',    8],
      ['OpenGL',    6],
      ['Python',    6],
      ['CUDA',      5],
      ['Html/Css',  5],
      ['Javascript', 5],
      ['Bash',      3]
    ]);

    var options = {
      is3D: true,
      chartArea:{left:0,top:'20%',width:'100%',height:'80%'},
      legend: {position: 'top'}
    };

    var chart = new google.visualization.PieChart(document.getElementById('skill-chart'));

    chart.draw(data, options);
  }

});
