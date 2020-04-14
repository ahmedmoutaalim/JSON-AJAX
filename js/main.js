

var zar = document.getElementById('zar');
var info =document.getElementById('info');
var pageName = 1
zar.addEventListener("click",function(){

var xReq = new XMLHttpRequest();
xReq.open('GET','js/cars-' + pageName + '.json');
xReq.onload = function(){
    var xData = JSON.parse(xReq.responseText);
        // document.write(xData[0].name)
        // document.write(xData[0].model)
        // document.write(xData[1].name)
        // document.write(xData[1].model)
      
      addHtml(xData); 
    };

    pageName++;
    xReq.send();

    if(pageName>3){

        zar.classList.add('hide');
        zar.style.backgroundColor = '#eee';
        zar.style.color='lightgray';

    }

});


function addHtml(data){

    var htmlText = "" ;

    for(i=0; i< data.length; i++){

        htmlText += "<p class=red>" +data[i].name + 
                    " is a <span class=green>" + data[i].model +"</span><hr></P>" ;
    }
    info.insertAdjacentHTML('beforeend',htmlText);
}