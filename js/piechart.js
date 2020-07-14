(function basic_pie (container) {

  var
    d1 = [[0, 4]],
    d2 = [[0, 3]],
    d3 = [[0, 1.03]],
    d4 = [[0, 3.5]],
    graph;

  graph = Flotr.draw(container, [
    { data : d1, label : 'Design' },
    { data : d2, label : 'Construction' },
    { data : d3, label : 'Implementation',
      pie : {
        explode : 50
      }
    },
    { data : d4, label : 'Test' }
  ], {
    HtmlText : true,
    grid : {
      verticalLines : false,
      horizontalLines : false
    },
    xaxis : { showLabels : false },
    yaxis : { showLabels : false },
    pie : {
      show : true,
      explode : 6
    },
    mouse : { track : true },
    legend : {
      position : 'se',
      backgroundColor : '#ffffff'
    }
  });
})(document.getElementById("editor-render-0"));
