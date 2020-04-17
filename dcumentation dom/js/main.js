// getElementById()

// var myDiv=document.getElementById("test");
// myDiv.innerHTML= "hello from javaScript";


// getElementsByTagName()


// var myElement = document.getElementsByTagName('h1');
// myElement[0].innerHTML='javaScript';


// getElementsByclassName()

// var myElement = document.getElementsByClassName("est");
// myElement[3].innerHTML = 'change me';


// querySelectorAll

// var myElement = document.querySelectorAll("p.est");
// myElement[0].innerHTML = " hey dear";


// fond Element by Object title

// var  myDiv = document.getElementById('show');
// myDiv.innerHTML = document.title;


// fond Element by Object image


// var  myDiv = document.getElementById('show'),

// for (let i=0 ; i<document.images.length ;i++){

//     document.write( document.images[i].src + "<br>");

// }


// ...form


// var myDiv = document.getElementById('show');

// myDiv.innerText = document.forms[0].b1.type;




// document.body

// var myDiv = document.getElementById('show');

// myDiv = document.body.innerText;

// if(myDiv.indexOf('yu') > -1){

//     console.log("it is ixist")
// }else{

//     console.log("not ixist")
    
// }


// GET AND SET ATRIBUTE

// var myDiv = document.querySelector('div');

// myDiv.className = " content";

// var myElement = document.querySelector('img');

// myElement.src = "http://placehold.it/200/000";
// myElement.title="title";



// var myElement = document.querySelector("img");



// myElement.setAttribute("src","http://placehold.it/200/000");

// myElement.setAttribute("title","reda");



// var myImg = document.querySelector('img');

// if (myImg.hasAttribute === src){

//     myImg.removeAttribute('alt');
// }else{

//    myImg.setAttribute("src" , "http://placehold.it/200/000")}



// var Element = document.getElementById("show");
//    myDiv = document.getElementById("test");

// Element.onclick = function (){

//     if(myDiv.classList.contains('zero')){

//       myDiv.innerText = "hello from javaScript" ;

//     }else {

//         myDiv.innerText = "is not"
//     }
// }


// var myButt = document.getElementById("show")
//     myP = document.querySelector("p.zero")

// myButt.ondblclick = function(){


//     if(myP.classList.contains("zero")){

//         myP.innerText = "chaimae give me your photo plz";
//     }
// }




// classList [add remove]


// var myDiv = document.querySelector('div');

// myDiv.classList.remove('omar','reda');

// myDiv.classList.add('contains','text');


// classList [toggle]

// var myDiv = document.querySelector('div');
//     myButt = document.querySelector('button');


//     myButt.onclick = function (){

//        myDiv.classList.toggle('zero');}

    



// children

// var myDiv = document.querySelector('div');

// console.log(myDiv.childElementCount);


// var myDiv = document.querySelector("div"),
//     myElementDiv =document.createElement("div"),
//     myH =document.createElement("h1");
//     myText=document.createTextNode("helo its me hhhh")


//     myDiv.appendChild(myElementDiv);
//     myElementDiv.appendChild(myH);
//     myH.appendChild(myText);



// insertBefor

// var myDiv = document.querySelector('div');
//     myELement = document.createElement('h3');
//     myP = document.createElement('p');
//     myH =document.createElement('h1');
//     myText = document.createTextNode('hello it s me from the ather side')

//     myDiv.appendChild(myELement);
//     myDiv.insertBefore(myH,myDiv.firstChild);
//     myDiv.insertBefore(myP,myDiv.childNodes[2]);
//     myP.appendChild(myText);


// next,previous sibling

// var myDiv = document.querySelector('div');

// myDiv.childNodes[3].nextElementSibling.textContent='changed';

// myDiv.childNodes[3].previousElementSibling.textContent='new title';



  
// remove child

// var myDiv =document.querySelector('div'), 
//     myP = document.querySelector('p');


//     myDiv.removeChild(myP);
//     myDiv.removeChild(myDiv.childNodes[6]);
    

// clone


// var myDiv = document.querySelector('div'),
//     myNewDiv = document.createElement('div'), 
    
//     myClone = myDiv.firstElementChild.cloneNode(true);

//   document.body.appendChild(myNewDiv);

//   myDiv.appendChild(myClone);




// focus,blur

var myForm = document.getElementById('show'),
myButt= document.createElement('button'),
myContent = document.createTextNode('click');


document.body.appendChild(myButt);

myButt.appendChild(myContent);

mybutt.id=select;

.onclick=function(){

    document.querySelector('input').focus();
}

