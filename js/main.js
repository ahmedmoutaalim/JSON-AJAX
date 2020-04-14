

var button = document.getElementById('zar');
var info =document.getElementById('info');

button.addEventListener("click",function(){

var xReq = new XMLHttpRequest();
xReq.open('GET','js/cars.json');
xReq.onload = function(){
    var xData = JSON.parse(xReq.responseText);
        // document.write(xData[0].name)
        // document.write(xData[0].model)
        // document.write(xData[1].name)
        // document.write(xData[1].model)
      
      addHtml(xData); 
    };
    xReq.send();

});


function addHtml(data){

    var htmlText = "" ;

    for(i=0; i< data.length; i++){

        htmlText += "<p class=red>" +data[i].name + 
                    " is a <span class=green>" + data[i].model +"</span><hr></P>" ;
    }
    info.insertAdjacentHTML('beforeend',htmlText);
}