var lesbutton = document.getElementById('lesbutton').addEventListener("click", showlesspots);
var les = document.getElementById('jsles');
var midtownbutton = document.getElementById('midtownbutton').addEventListener("click", showmidtownspots);
var midtown = document.getElementById('jsmidtown');
var uptownbutton = document.getElementById('uptownbutton').addEventListener("click", showuptownspots);
var uptown = document.getElementById('jsuptown');
var skatedata = [{
        obs: "Four stair double set",
        gro: "Low-Med",
        hyd: "Dunkin donuts on Walker St",
        ped: "Med-High",
        img: "chinatowndouble.png"
    },
    {
        obs: "Banks",
        gro: "Med",
        hyd: "Starbucks on Pearl St ",
        ped: "Low-Med",
        img: "Screen Shot 2021-05-02 at 12.41.57 PM.png"
    },
    {
        obs: "Huge bank to drop",
        gro: "High",
        hyd: "Starbucks on Worth St",
        ped: "High",
        img: "courthouse.png"
    },
    {
        obs: "Ledges and stair sets",
        gro: "Very high",
        hyd: "Ganesvort on Liberty St",
        ped: "High",
        img: "freedomtower.png"
    },
    {
        obs: "Ledges going over stairs",
        gro: "Med",
        hyd: "Dueane reade on Water St",
        ped: "Low-Med",
        img: "pyrimad ledges.png"
    },
    {
        obs: "C shaped ledges",
        gro: "Med",
        hyd: "Gregorys on Front St",
        ped: "Low",
        img: "cledge.png"
    },
    {
        obs: "Hubba going over stairs",
        gro: "Med",
        hyd: "Starbucks on Worth St",
        ped: "Med",
        img: "Screen Shot 2021-04-29 at 7.44.52 PM.png"
    },
    {
        obs: "Ledges and stair sets ",
        gro: "High",
        hyd: "Starbucks on Cedar St",
        ped: "Med-High",
        img: "zuccoti.png"
    },
    //midtown
    {
        obs: "Ledges",
        gro: "Very high",
        hyd: "Lunas coffee on 29th St ",
        ped: "Med-Low",
        img: "bigscreen.png"
    },
    {
        obs: "Banks and one high rail.",
        gro: "Med",
        hyd: "99 cent pizza on 46th St ",
        ped: "Med",
        img: "forbidden banks.png"
    },
    {
        obs: "Ledges",
        gro: "Med",
        hyd: "Starbucks on Broadway",
        ped: "Very High",
        img: "timesquare.png"
    },
    {
        obs: "Benches",
        gro: "Med",
        hyd: "Nothing close bring water",
        ped: "Med",
        img: "painewebber.png"
    },
    {
        obs: "Small ledges and stairs",
        gro: "High",
        hyd: "Starbucks on 50th St ",
        ped: "Med-High",
        img: "seaport.png"
    },
    {
        obs: "Ledge",
        gro: "Med",
        hyd: "Chick Fil A on Lexington ",
        ped: "Med",
        img: "ibm.png"
    },
    {
        obs: "Nine stair",
        gro: "Med",
        hyd: "Pret a manger on 3rd Ave",
        ped: "Low",
        img: "9stait.png"
    },
    {
        obs: "Curbs and ledges",
        gro: "High",
        hyd: "A lot of food carts around",
        ped: "Med-High",
        img: "columbuscircle.png"
    },
    //uptown
    {
        obs: "Ledges",
        gro: "Low-Med",
        hyd: "Dunkin donuts on 110th St ",
        ped: "Med",
        img: "lenox ledges.png"
    },
    {
        obs: "Ledges over bank",
        gro: "Low-Med",
        hyd: "Sweet green on Broadway ",
        ped: "Med-High",
        img: "columbia.png"
    },
    {
        obs: "Small rails",
        gro: "Med",
        hyd: "Subway on Madison Ave",
        ped: "Med",
        img: "marcusgravey.png"
    },
    {
        obs: "3 drop down ledges ",
        gro: "Low-Med",
        hyd: "Max cafe on Amsterdam Ave",
        ped: "Med-High",
        img: "seminary.png"
    },
    {
        obs: "Ten stairs and a bank",
        gro: "High",
        hyd: "Nothings close bring water",
        ped: "Low-Med",
        img: "grantstomb.png"
    },
    {
        obs: "Banks",
        gro: "Med",
        hyd: "Dunkin donuts on MLK blvd",
        ped: "High",
        img: "125thst .png"
    },
    {
        obs: "Three block and ledges",
        gro: "Low-Med",
        hyd: "Mcdonolads on Lenox Ave ",
        ped: "Low",
        img: "greenthree.png"
    },
    {
        obs: "Banks",
        gro: "Med",
        hyd: "Food carts sometimes",
        ped: "Med-Low",
        img: "river.png"
    },
]

function showlesspots() {
    les.style.display = "block";
    midtown.style.display = "none";
    uptown.style.display = "none";

}

function showmidtownspots() {
    midtown.style.display = "block";
    les.style.display = "none";
    uptown.style.display = "none";
}

function showuptownspots() {
    uptown.style.display = "block";
    les.style.display = "none";
    midtown.style.display = "none";
}

var spotitem = document.querySelectorAll(".spotsitems").forEach((item, i) => {
    item.addEventListener("click", showspots);
})

var popup = document.querySelector("#popup");

function showspots() {
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

function closepopup() {
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



