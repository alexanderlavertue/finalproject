var lesbutton = document.getElementById('lesbutton').addEventListener("click", showlesspots);
var les = document.getElementById('jsles');
var midtownbutton = document.getElementById('midtownbutton').addEventListener("click", showmidtownspots);
var midtown = document.getElementById('jsmidtown');
var uptownbutton = document.getElementById('uptownbutton').addEventListener("click", showuptownspots);
var uptown = document.getElementById('jsuptown');
var skatedata = [{obs:"Four stair double set", gro:"Low - Med", hyd:"Dunkin donuts on Walker st", ped:" Med- High", img:"chinatowndouble.png"}, 
                 {obs:"ledges", gro:"High", hyd:"Burger king on worth st", ped:"low", img:"worthplaza.png"},
                 {obs:"Huge bank to drop", gro:"High", hyd:"Starbucks on worth st", ped:"High", img:"courthouse.png"},
                 {obs:"Ledges and stair sets", gro:"Very high", hyd:"Ganesvort on liberty st", ped:"Very high", img:"freedomtower.png"},
                 {obs:"Ledges going over stairs", gro:"Med", hyd:"Dueane reade on water st", ped:"Low - Med", img:"pyrimad ledges.png"},
                 {obs:"C shaped ledges", gro:"Med", hyd:"Gregorys coffee on Front st", ped:"Low", img:"cledge.png"},
                 {obs:"Hubba going over stairs", gro:"Med", hyd:"Starbucks on worth st", ped:"Med", img:"Screen Shot 2021-04-29 at 7.44.52 PM.png"},
                 {obs:" Ledges and stair sets ", gro:"High", hyd:"Starbucks on cedar st", ped:"Med-High", img:"zuccoti.png"},
                 //midtown
                 {obs:"Ledges", gro:"Very high", hyd:"Lunas coffee shop on 29th st ", ped:"Med-Low", img:"bigscreen.png"},
                 {obs:"One ledge, Kinda sketchy.", gro:"High", hyd:"Mcdonalods on 42nd st. ", ped:"Very High", img:"bryant.png"},
                 {obs:"Ledges", gro:"Med", hyd:"Starbucks on broadway", ped:"Very High", img:"timesquare.png"},
                 {obs:"Benches", gro:"Med", hyd:"Nothing close bring water", ped:"Med", img:"painewebber.png"},
                 {obs:"Small ledges and three stairs", gro:"High", hyd:"Starbucks on e 50th st ", ped:"Med-High", img:"seaport.png"},
                 {obs:"Ledge", gro:"Med", hyd:"Chick Fil A on lexington ", ped:"Med", img:"ibm.png"},
                 {obs:"Handrail", gro:"High", hyd:"Chick Fil A on lexington ", ped:"Med-Low", img:"suraezrail.png"},
                 {obs:"Curbs and ledges", gro:"High", hyd:"A lot of food carts around", ped:"Med-High", img:"columbuscircle.png"},
                 //uptown
                 {obs:"Ledges", gro:"Low-Med", hyd:"Dunkin donuts on 110th st ", ped:"Med", img:"lenox ledges.png"},
                 {obs:"Ledges over bank", gro:"Low-Med", hyd:"Sweet green on broadway ", ped:"Med-High", img:"columbia.png"},
                 {obs:"Small rails", gro:"Med", hyd:"Subway on madison ave", ped:"Med", img:"marcusgravey.png"},
                 {obs:"3 drop down ledges ", gro:"Low-Med", hyd:"Max cafe on amsterdam ave", ped:"Med-High", img:"seminary.png"},
                 {obs:"Two ten stairs and a ledge to bank", gro:"high", hyd:"Nothings close bring water", ped:"Low-Med", img:"grantstomb.png"},
                 {obs:"Banks", gro:"Med", hyd:"Dunkin donuts on MLK blvd", ped:"High", img:"125thst .png"},
                 {obs:"Three block and ledges", gro:"Low-Med", hyd:"Mcdonolads on lenox ave ", ped:"Low", img:"greenthree.png"},
                 {obs:"Banks", gro:"Med", hyd:"f=Food carts sometimes", ped:"Med-Low", img:"river.png"},
                ]

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

var spotitem = document.querySelectorAll(".spotsitems").forEach((item,i)=>{
    item.addEventListener ("click", showspots);
})

var popup = document.querySelector("#popup");

function showspots(){
   popup.style.display = "block";
   let clickedon = event.currentTarget
   let num = clickedon.dataset.spot;
   document.querySelector(".imgs").src = skatedata[num].img;
   document.querySelector(".obs").innerText = skatedata[num].obs;
   document.querySelector(".gro").innerText = skatedata[num].gro;
   document.querySelector(".hyd").innerText = skatedata[num].hyd;
   document.querySelector(".ped").innerText = skatedata[num].ped;
}

var exit = document.getElementById("exit").addEventListener("click", closepopup);

function closepopup (){
    popup.style.display = "none";
    }



document.querySelector('.boxandname').addEventListener('change', () => {
    document.querySelectorAll('.spotsitems').forEach((el) => el.style.display = 'none');
    Array.from(document.querySelectorAll('.check:checked'))
      .map((el) => el.value)
      .forEach((value) => {
        document.querySelectorAll(`.spotsitems.${value}`).forEach((el) => el.style.display = '');
      });
  });




