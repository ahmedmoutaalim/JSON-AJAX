const myCatImg = document.getElementById('cat_result');
const myDogImg = document.getElementById('dog_result');

const catButt = document.getElementById('cat_btn');
const dogButt = document.getElementById('dog_btn');

catButt.addEventListener('click',getCat);
dogButt.addEventListener('click',getDog);

function getCat(){

    fetch("https://aws.random.cat/meow")
    .then(res => res.json())
    .then(data=>{
        myCatImg.innerHTML= `<img src="${data.file}"/>`;
    })
}
 

function getDog(){

    fetch("https://random.dog/woof.json")
    .then(res=>res.json())
    .then(data=> {

         if(data.url.includes('.mp4')){

            getDog();
         }else{
            myDogImg.innerHTML= `<img src="${data.url}"/>`;
         }
       
       
    })
}