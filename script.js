var lesbutton = document.getElementById('lesbutton').addEventListener("click", showlesspots);
var les = document.getElementById('jsles');
var midtownbutton = document.getElementById('midtownbutton').addEventListener("click", showmidtownspots);
var midtown = document.getElementById('jsmidtown');
var uptownbutton = document.getElementById('uptownbutton').addEventListener("click", showuptownspots);
var uptown = document.getElementById('jsuptown');

function showlesspots (){
    les.style.display = "block";
    midtown.style.display = "none";
    uptown.style.display = "none";

}

function showmidtownspots (){
    midtown.style.display = "block";
    les.style.display = "none";
    uptown.style.display = "none";
}

function showuptownspots (){
    uptown.style.display = "block";
    les.style.display = "none";
    midtown.style.display = "none";
}




