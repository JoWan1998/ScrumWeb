(function basic_radar (container) {

  // Fill series s1 and s2.
  var
    s1 = { label : 'Actual', data : [[0, 3], [1, 8], [2, 5], [3, 5], [4, 3], [5, 9]] },
    s2 = { label : 'Target', data : [[0, 8], [1, 7], [2, 8], [3, 2], [4, 4], [5, 7]] },
    graph, ticks;

  // Radar Labels
  ticks = [
    [0, "Analitics"],
    [1, "Construction"],
    [2, "Design"],
    [3, "Development"],
    [4, "Tester"],
    [5, "Managament"]
  ];

  // Draw the graph.
  graph = Flotr.draw(container, [ s1, s2 ], {
    radar : { show : true},
    grid  : { circular : true, minorHorizontalLines : true},
    yaxis : { min : 0, max : 10, minorTickFreq : 2},
    xaxis : { ticks : ticks},
    mouse : { track : true},
    HtmlText : true
  });
})(document.getElementById("editor-render-1"));
