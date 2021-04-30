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

var spot1 = document.getElementById('spot1').addEventListener("click", showspot1)
var spot1pop = document.getElementById('spot1pop')

function showspot1 (){
    spot1pop.style.display = "block";
    spot2pop.style.display = "none";
    spot3pop.style.display = "none";
    spot4pop.style.display = "none";
    spot5pop.style.display = "none";
    spot6pop.style.display = "none";
    spot7pop.style.display = "none";
    spot8pop.style.display = "none";
}

var spot2 = document.getElementById('spot2').addEventListener("click", showspot2)
var spot2pop = document.getElementById('spot2pop')

function showspot2 (){
    spot2pop.style.display = "block";
    spot1pop.style.display = "none";
    spot3pop.style.display = "none";
    spot4pop.style.display = "none";
    spot5pop.style.display = "none";
    spot6pop.style.display = "none";
    spot7pop.style.display = "none";
    spot8pop.style.display = "none";
}

var spot3 = document.getElementById('spot3').addEventListener("click", showspot3)
var spot3pop = document.getElementById('spot3pop')

function showspot3 (){
    spot3pop.style.display = "block";
    spot1pop.style.display = "none";
    spot2pop.style.display = "none";
    spot4pop.style.display = "none";
    spot5pop.style.display = "none";
    spot6pop.style.display = "none";
    spot7pop.style.display = "none";
    spot8pop.style.display = "none";
}

var spot4 = document.getElementById('spot4').addEventListener("click", showspot4)
var spot4pop = document.getElementById('spot4pop')

function showspot4 (){
    spot4pop.style.display = "block";
    spot1pop.style.display = "none";
    spot2pop.style.display = "none";
    spot3pop.style.display = "none";
    spot5pop.style.display = "none";
    spot6pop.style.display = "none";
    spot7pop.style.display = "none";
    spot8pop.style.display = "none";
}

var spot5 = document.getElementById('spot5').addEventListener("click", showspot5)
var spot5pop = document.getElementById('spot5pop')

function showspot5 (){
    spot5pop.style.display = "block";
    spot1pop.style.display = "none";
    spot2pop.style.display = "none";
    spot3pop.style.display = "none";
    spot4pop.style.display = "none";
    spot6pop.style.display = "none";
    spot7pop.style.display = "none";
    spot8pop.style.display = "none";
}

var spot6 = document.getElementById('spot6').addEventListener("click", showspot6)
var spot6pop = document.getElementById('spot6pop')

function showspot6 (){
    spot6pop.style.display = "block";
    spot1pop.style.display = "none";
    spot2pop.style.display = "none";
    spot3pop.style.display = "none";
    spot4pop.style.display = "none";
    spot5pop.style.display = "none";
    spot7pop.style.display = "none";
    spot8pop.style.display = "none";
}

var spot7 = document.getElementById('spot7').addEventListener("click", showspot7)
var spot7pop = document.getElementById('spot7pop')

function showspot7 (){
    spot7pop.style.display = "block";
    spot1pop.style.display = "none";
    spot2pop.style.display = "none";
    spot3pop.style.display = "none";
    spot4pop.style.display = "none";
    spot5pop.style.display = "none";
    spot6pop.style.display = "none";
    spot8pop.style.display = "none";
}

var spot8 = document.getElementById('spot8').addEventListener("click", showspot8)
var spot8pop = document.getElementById('spot8pop')

function showspot8 (){
    spot8pop.style.display = "block";
    spot1pop.style.display = "none";
    spot2pop.style.display = "none";
    spot3pop.style.display = "none";
    spot4pop.style.display = "none";
    spot5pop.style.display = "none";
    spot6pop.style.display = "none";
    spot7pop.style.display = "none";
}
//function remove (){
    //spot1pop.style.display = "none"; 
//}