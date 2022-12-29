var num=0;
var sum=0;
var monica=0;
var pheobe=0;
var ross=0;
var chandler=0;
var joey=0;
var rachel=0;

let questions = ["Arkadaşların seni nasıl tanımlar?",
"Seni üzen olaylar karşısında nasıl tepki verirsin?", 
"Eline yüklü bir miktar para geçti diyelim… Nereye harcarsın?",
"Bu yaz tatili için nereyi tercih edersin?",
"Favori yiyeceğin nedir?",
"Senin için arkadaşlık nedir?",
"Peki ya AŞK…?",
"Nasıl bir çocuktun?"];

let answers=[ ["Ciddi ve titiz", "Ne yapacağı belli olmayan ", "Çalışkan ve sorumluluk sahibi", "Ortamın neşe kaynağı","Dikkat çekici ve atılgan","Şımarık ve duygusal"],
 ["Uzun süre etkisinden çıkamasam da en sonunda toparlarım.", "Kendimi motive edecek şeylere odaklarım", "Mantıklı düşünmeye çalışır, hatalarım varsa telafi etmeye çalışırım",
 "Toparlanana kadar günlerce yataktan çıkamam","Kafaya takmam keyfime bakarım","Alışverişe çıkarım stres atarım"],
["Yatırım yaparım", "Yardıma muhtaç çocuklar için bağışta bulunurum", "Eğitimime/Kariyerime harcarım", "Bir kısmıyla yatırım yaparım kalanıyla tatile çıkarım","Fena halde ezerim","Dünyayı gezer, yeni insanlar tanımaya çalışırım"],
["Yemek/Uzak Doğu","Afrika ülkeleri","Kültür gezisi","Beach","Club","Paris"],
["Çikolata","Lasagna","Pizza","Cheesecake","Sandviç","Bonfile"],
["Beraber her şeyi yapabilmek","Ne olursa olsun birbirinden hiç kopmamak","Birbirini herkesten iyi tanımak","Mizahın uyuşması, eğlenebilmek","Aile olmaktan farksız","Her durumda birbirine destek olmak"],
["Vazgeçilmez","Heyecanlı","Az rastlanan","Bağlayıcı","O da ne?","Tutkulu"],
["İçine kapanık sessiz","Garip sorular soran fırlama bir tip","Meraklı ve çalışkan","Herkesi eğlendiren","Sosyal ve yerinde duramayan","Şımarık ve ilgi odağında olan"]];




let gifs =["https://raw.githubusercontent.com/demetdemir0/BLM305/main/Term_Project/gifs/soru1.gif",
"https://raw.githubusercontent.com/demetdemir0/BLM305/main/Term_Project/gifs/soru2.gif",
"https://raw.githubusercontent.com/demetdemir0/BLM305/main/Term_Project/gifs/soru3.gif",
"https://raw.githubusercontent.com/demetdemir0/BLM305/main/Term_Project/gifs/soru4.gif",
"https://raw.githubusercontent.com/demetdemir0/BLM305/main/Term_Project/gifs/soru5.gif",
"https://raw.githubusercontent.com/demetdemir0/BLM305/main/Term_Project/gifs/soru6.gif",
"https://raw.githubusercontent.com/demetdemir0/BLM305/main/Term_Project/gifs/soru7.gif",
"https://raw.githubusercontent.com/demetdemir0/BLM305/main/Term_Project/gifs/soru8.gif"
]

let sonucgifs=[
    "https://raw.githubusercontent.com/demetdemir0/BLM305/main/Term_Project/gifs/monica.gif",
    "https://raw.githubusercontent.com/demetdemir0/BLM305/main/Term_Project/gifs/pheobe.gif",
    "https://raw.githubusercontent.com/demetdemir0/BLM305/main/Term_Project/gifs/ross.gif",
    "https://raw.githubusercontent.com/demetdemir0/BLM305/main/Term_Project/gifs/chandler.gif",
    "https://raw.githubusercontent.com/demetdemir0/BLM305/main/Term_Project/gifs/joey.gif",
    "https://raw.githubusercontent.com/demetdemir0/BLM305/main/Term_Project/gifs/rachel.gif"
]
var options;
var testsonuc;



function puanlama(){

    options = document.getElementsByName("option");
    for(var i=0; i<options.length; i++){
        if(options[i].checked){

            if(i==0){
                monica++;
            }else if(i==1){
                pheobe++;
            }else if (i==2){
                ross++;
            }else if (i==3){
                chandler++;
            }else if(i==4){
                joey++;
            }else if(i==5){
                rachel++;
            
            }
        }
    }

    if(num==8){
        document.getElementById("quizekran").style.visibility = "hidden" ;
        document.getElementById("ekran3").style.visibility = "visible" ;

        console.log(sum);
        if(monica==5 || (monica>=pheobe && monica >=ross && monica>=chandler && monica>=joey && monica>=rachel)){
            testsonuc="Monica Geller"
            console.log("monica");
            document.getElementById("resultImg").src = sonucgifs[0];
            document.getElementById("resultText1").innerText = "Monica Geller\nI KNOW!";
            

        }else if(pheobe==5 || (pheobe>=monica && pheobe>=ross && pheobe>=chandler && pheobe>=joey && pheobe>=rachel)){
            testsonuc="Pheobe Puffay"
            console.log("pheobe");
            document.getElementById("resultImg").src = sonucgifs[1];
            document.getElementById("resultText1").innerText = "Pheobe Puffay\nI wish I could, but I don't want to.";

        }else if(ross==5 || (ross>=pheobe && ross >=monica && ross>=chandler && ross>=joey && ross>=rachel)){
            testsonuc="Ross Geller"
            console.log("ross");
            document.getElementById("resultImg").src = sonucgifs[2];
            document.getElementById("resultText1").innerText = "Ross Geller\nWe were on a break!!!";

        }else if(chandler==5 || (chandler>=pheobe && chandler >=ross && chandler>=monica && chandler>=joey && chandler>=rachel)){
            testsonuc="Chandler Bing"
            console.log("chandler");
            document.getElementById("resultImg").src = sonucgifs[3];
            document.getElementById("resultText1").innerText = "Chandler Bing\nHey I'm Chandler. I make jokes when I'm uncomfortable.";
            
        }else if(joey==5 || (joey>=pheobe && joey >=ross && joey>=chandler && joey>=monica && joey>=rachel)){
            testsonuc="Joey Tribbiani"
            console.log("joey");
            document.getElementById("resultImg").src = sonucgifs[4];
            document.getElementById("resultText1").innerText = "Joey Tribbiani\nJoey doesn't share food!";

        }else if(rachel==5 || (rachel>=pheobe && rachel >=ross && rachel>=chandler && rachel>=joey && rachel>=monica)){
            testsonuc="Rachel Green"
            console.log("rachel");
            document.getElementById("resultImg").src = sonucgifs[5];
            document.getElementById("resultText1").innerText = "Rachel Green\nWell, maybe I don't need your money. Wait, wait, I said maybe!";
        }
    }
}

var options;    
function degistir(){
   
    if(num!=100){
       
    document.getElementById("qnum").innerHTML = questions[num];
    document.getElementById("testImg").src = gifs[num];
    var choices =answers[num];
    for(var i = 0; i < choices.length; i++) {
        document.getElementById("choice" + i).innerHTML = choices[i];
        }
    }
    num++;
    puanlama();
    op0.checked = false;
    op1.checked = false;
    op2.checked = false;
    op3.checked = false;
    op4.checked = false;
    op5.checked = false;    
    } 

function play() {

    let audio1 = new Audio('https://raw.githubusercontent.com/demetdemir0/BLM305/main/Term_Project/FriendsThemeSong.mp3');
    audio1.play();
}

function gecisYap(){
    document.getElementById("ekran1").style.visibility = "hidden" ;
    document.getElementById("quizekran").style.visibility = "visible" ;
   
    if (confirm("Websitesi müziğini çal?")) {
         play();
    }
}

degistir();
const CACHE ='Term_Project'
const FILES = ['/Term_Project/', '/Term_Project/FriendsQuiz.js/', '/Term_Project/images','/Term_Project/gifs/','/Term_Project/index.html']
function installCB(e) {
  e.waitUntil(
    caches.open(CACHE)
    .then(cache => cache.addAll(FILES))
    .catch(console.log)
  )
}
self.addEventListener('install', installCB)
function cacheCB(e) { //cache first
    let req = e.request
    e.respondWith(
      caches.match(req)
      .then(r1 => r1 || fetch(req))
      .catch(console.log)
    )
  }
self.addEventListener('fetch', cacheCB)
function save(req, resp) {
    return caches.open(CACHE)
    .then(cache => {
      cache.put(req, resp.clone());
      return resp;
    }) 
    .catch(console.log)
  }
  function fetchCB(e) { //fetch first
    let req = e.request
    e.respondWith(
      fetch(req).then(r2 => save(req, r2))
      .catch(() => { return caches.match(req).then(r1 => r1) })
    )
  }
  self.addEventListener('fetch', fetchCB)

  navigator.serviceWorker.register('sw.js')

  // <![CDATA[  <-- For SVG support
	if ('WebSocket' in window) {
		(function () {
			function refreshCSS() {
				var sheets = [].slice.call(document.getElementsByTagName("link"));
				var head = document.getElementsByTagName("head")[0];
				for (var i = 0; i < sheets.length; ++i) {
					var elem = sheets[i];
					var parent = elem.parentElement || head;
					parent.removeChild(elem);
					var rel = elem.rel;
					if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
						var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
						elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
					}
					parent.appendChild(elem);
				}
			}
			var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
			var address = protocol + window.location.host + window.location.pathname + '/ws';
			var socket = new WebSocket(address);
			socket.onmessage = function (msg) {
				if (msg.data == 'reload') window.location.reload();
				else if (msg.data == 'refreshcss') refreshCSS();
			};
			if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
				console.log('Live reload enabled.');
				sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
			}
		})();
	}
	else {
		console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
	}

