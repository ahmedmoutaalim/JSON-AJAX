var xReq = new XMLHttpRequest();

xReq.open('GET','js/cars.json');

xReq.onload = function(){
    var xData = JSON.parse(xReq.responseText);
  

        document.write(xData[0].name)
        document.write(xData[0].model)
        document.write(xData[1].name)
        document.write(xData[1].model)
    };
xReq.send();
