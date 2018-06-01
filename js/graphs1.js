google.load('visualization', '1.0', {'packages':['corechart']});
google.setOnLoadCallback(dibujar);

function dibujar(){

  var dat = new google.visualization.DataTable();
        dat.addColumn('string', 'Ciudad');
        dat.addColumn('number', 'visita');
        dat.addRows([
          ['GDL', 5],
          ['MEX', 1],
          ['SAN', 3],
          ['PER', 2],
        ]);
        var options = {'title':'Laboratoria',
                       'width':500,
                       'height':300};
       var grafica = new google.visualization.PieChart(document.getElementById('chart'));
          grafica.draw(dat, options);
}
