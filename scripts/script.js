//     --Navbar--
const navLinks = [
    {href: 'index.html', text: '<img id="logo" src="images/logo.gif" alt=""> Webtek FC'},
    {href: 'about.html', text: 'Om oss'},
    {href: 'membership.html', text: 'Bli medlem'},
    {href: 'news.html', text: 'Nyheter'},
    {href: 'calendar.html', text: 'Kalender'},
    {href: 'results.html', text: 'Resultater'},
];

let nav = document.createElement("nav"),
navA;

for (let i = 0; i < navLinks.length; i++) {
    navA = document.createElement("a");
    navA.href = navLinks[i].href;
    navA.innerHTML = navLinks[i].text;
    nav.appendChild(navA);
}

//     --Footer--
const footerItems = [
    {text: '<img class="sponsor" src="images/adidas.png" alt="">'},
    {text: '<img class="sponsor" src="images/powerade.png" alt="">'},
    {text: '<img class="sponsor" src="images/xxl.png" alt="">'},
    {text: '<h4>Besøk oss</h4> <p>A-blokka <br> Høgskoleringen 5 <br> NTNU Gløshaugen</p>'},
    {text: '<h4>Kontakt info</h4> <p>example@webtek.no <br> Tlf: 123 45 678</p>'},
    {text: '<h4>Sosiale medier</h4> <div id="mediaGrid"><a href="https://www.youtube.com/user/ntnuinfo"><img src="images/youtube.png" alt=""></a><a href="https://twitter.com/ntnu"><img src="images/twitter.png" alt=""></a><a href="https://www.facebook.com/NTNUirl"><img src="images/facebook.png" alt=""></a><a href="https://www.instagram.com/ntnu/?hl=nb"><img src="images/instagram.png" alt=""></a></div>'},
];

let footer = document.createElement("footer"),
footerL;

for (let i = 0; i < footerItems.length; i++){
    footerL = document.createElement("a");
    footerL.innerHTML = footerItems[i].text;
    footer.appendChild(footerL)
}

//    --Rulette--

//_Prize button_
let prizeBtn = document.createElement('button');
prizeBtn.setAttribute('id', 'prizeBtn');
prizeBtn.innerHTML = '<img src="images/wheelicon.png" alt="">'

//_Prize window_
let prizeWindow = document.createElement('div');
prizeWindow.setAttribute('class', 'window');

//_Prize header_
let prizeHeader = document.createElement('h1');
prizeHeader.innerHTML = "Lykkehjulet"
prizeWindow.appendChild(prizeHeader);

//_Prize content_
let prizeWindowContent = document.createElement('div');
prizeWindowContent.setAttribute('class', 'prizeWindowContent');
prizeWindow.appendChild(prizeWindowContent)

//_Closing button_
let closeBtn = document.createElement('button');
closeBtn.setAttribute('id', 'closeBtn');
prizeWindowContent.appendChild(closeBtn)

//_Loading div_
let loading = document.createElement('div');
loading.setAttribute('id', 'loading');
prizeWindowContent.appendChild(loading)

//_Result div_
let prizeResult = document.createElement('div');
prizeResult.setAttribute('id', 'prizeResult');
prizeWindowContent.appendChild(prizeResult)
closeBtn.innerHTML = '<img src="images/xIcon.png" alt="">'

closeBtn.onclick = function closeWindow() {
  prizeWindow.style.display = 'none';
  prizeResult.innerHTML = ''
}

let timer;

function fetchPrize(){
    timer = 0;
    function timeInc(){
        timer++;
    }
    setInterval(timeInc, 1000);

    prizeWindow.style.display = 'block';
    loading.innerHTML = '<img src="images/wheel.gif" alt=""> <h2>Henter premie</h2>'
    prizeResult.innerHTML = ''
    setTimeout(function(){
        loading.innerHTML = ''
        let ticet = (Math.random() * 10)
        let prize;
        if (ticet <= 8.3){
        prize = '<img src="images/loss.png" alt=""> <h2>Beklager ingen gevinst</h2>';
        }
        else if (ticet <= 9.3){
            prize = '<img src="images/winner.png" alt=""> <h2>Du vandt en vannflaske!</h2>';
        }  
        else if (ticet <= 9.8){
            prize = '<img src="images/winner.png" alt=""> <h2>Du vandt en fotball!</h2>';
        } 
        else{
            prize = '<img src="images/winner.png" alt=""> <h2>Du vandt en t-sjorte!</h2>';
        } 
        prizeResult.innerHTML = prize
    }, 5000);   
}

prizeBtn.onclick = function getPrize(){
    if(timer < 300){
        alert('Du må vente minst 5 minutter mellom hver gang du kan spinne')
    }
    else{
        fetchPrize()
    }
}

window.onload = function (){
    document.body.appendChild(nav);
    document.body.appendChild(footer);
    document.body.appendChild(prizeWindow);
    document.body.appendChild(prizeBtn);
}

//morkmodus sript
//lager knapp
//source/credit https://www.youtube.com/watch?v=wodWDIdV9BY
let knapp = document.createElement("button");
knapp.innerHTML = '<img src="images/darkMode.png" alt="" srcset="">';
knapp.className = "morkmodus"
knapp.id = "morkmodus"

var main = document.getElementsByTagName("main")[0];
main.insertAdjacentElement("afterbegin", knapp);

let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.getElementById("morkmodus");
console.log(darkMode)

if (darkMode == "paa") {
    enableDarkMode();
}


function enableDarkMode(){
    document.body.classList.add('darkmode');
    localStorage.setItem('darkMode', 'paa');
  }

function disableDarkMode() {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkMode', "av");
}

darkModeToggle.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode")
    if(darkMode !== "paa"){
        enableDarkMode();
    }
    else {
        disableDarkMode();
    }
});
//morkmodus script ferdig
