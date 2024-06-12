let score = 0;
let health = 3.0;
let stropheNumber = 0;
let strophe = "";
let Liedtext = "";
let pressedSpicker= false;
let pressedPlay=false;


const startButton = document.querySelector("#StartButton")
const startContainer = document.querySelector("#anmeldungContainer")

const leftButton = document.querySelector("#leftButton");
const leftButtonText = document.querySelector("#leftButtonText")
const rightButton = document.querySelector("#rightButton");
const SpickerDiv = document.querySelector("#SpickerDiv")
const spickerText = document.querySelector("#SpickerText")
const x2Button = document.querySelector("#x2Button")
const helpButton = document.querySelector("#helpButton");
const helptext = document.querySelector("#help")
const xButton = document.querySelector("#xButton")
const textScreen = document.querySelector("#textScreen")
const health1 = document.querySelector("#health1")
const health2 = document.querySelector("#health2")
const health3 = document.querySelector("#health3")
const scoreNumber = document.querySelector("#score")


const loseDiv = document.querySelector("#loseDiv")
const loseScore = document.querySelector("#loseScore")
const loseText1 = document.querySelector("#loseText1")
const loseText2 = document.querySelector("#loseText2")
const tryAgainButton = document.querySelector("#tryAgain")

const animationBox = document.querySelector("#animationBox")





startButton.onclick= Start;
leftButton.onclick = 0;
rightButton.onclick = 0; 
helpButton.onclick = 0;
xButton.onclick = x;
x2Button.onclick = x2;
tryAgainButton.onclick = tryAgain;

function Play() {
    stropheNumber = Math.floor(Math.random() * 269) + 1;
    fetch ("Strophen.json") .then (function (response) {
        return response.json();
    }).then (function(obj) {
        strophe= obj.strophen[stropheNumber];
        console.log(stropheNumber)
    }).catch(function (error) {
        console.log("something went wrong")
    }).then (function (){
        if (strophe.length>35 && strophe.length<55) {
            textScreen.style.fontSize = "2.1vh";
            textScreen.innerText = strophe

        }else if (strophe.length>=55){
            textScreen.style.fontSize = "2vh";
            textScreen.innerText = strophe}
        else{
            textScreen.innerText = strophe
            textScreen.style.fontSize = "2.4vh"}
        
    })

    fetch ("Liedtext.json") .then (function (response) {
        return response.json();
    }).then (function(obj) {
        Liedtext= obj.Liedtext[stropheNumber];
    }).catch(function (error) {
        console.log("something went wrong")
    }).then (function (){
        spickerText.innerText = Liedtext
    })
    
    pressedSpicker = false;
    pressedPlay = true; 
    leftButtonText.innerText = "Next"
    leftButton.onclick = delay;
    rightButton.onclick = Spicker;
    helpButton.onclick = help;
};

function delay() {
    animationBox.play()
    scoreNumber.innerText = score;
    score ++;
    leftButton.onclick = 0;
    rightButton.onclick = 0;
    helpButton.onclick = 0;
    setTimeout(Play, 3200)
}

function openSpicker(){
    SpickerDiv.style.visibility = "visible";
    SpickerDiv.style.top = "55%";
    SpickerDiv.style.left = "50%";
    SpickerDiv.style.transform = "translate(-50%, -50%) scale(1)";
    leftButton.onclick = 0;
    rightButton.onclick = 0;
}




function Spicker() {
    if (pressedPlay ===true) {
        openSpicker();
        if (pressedSpicker ===false) {
            pressedSpicker = true;
            health -= 0.5;
            score --;
            scoreNumber.innerText = score;
            console.log(health)
            if (health === 2.5) {health1.style.backgroundImage = "url(halfHeart.PNG)"}
                else if (health === 2) {health1.style.backgroundImage = "url(emptyHeart.PNG)";}
                else if (health === 1.5) {health2.style.backgroundImage = "url(halfHeart.PNG)";}
                else if (health === 1) {health2.style.backgroundImage = "url(emptyHeart.PNG)";}
                else if (health === 0.5) {health3.style.backgroundImage = "url(halfHeart.PNG)";}
                else {health3.style.backgroundImage = "url(emptyHeart.PNG)"}
        }
    }
    // end function
};

function help() {
    helptext.style.visibility = "visible";
    helptext.style.top = "55%";
    helptext.style.left = "50%";
    helptext.style.transform = "translate(-50%, -50%) scale(1)";
    leftButton.onclick = 0;
    rightButton.onclick = 0; 
};

function endUnder10(){
    loseText1.innerText = "Oh Gott, ist das schlecht!";
    loseText2.innerText = "Besorg dir schnell beim Fahnenträger Zillich den Termin für die nächste Singestunde.";
    loseScore.style.color = "rgb(254, 0, 0)";
}

function endUnder20(){
    loseText1.innerText = "Das ist doch schon mal was.";
    loseText2.innerText = "Trainiere weiter und melde dich beim Fahnenträger Zillich für die nächste Singestunde an.";
    loseScore.style.color = "rgb(250, 40, 1)";
}

function endUnder30(){
    loseText1.innerText = "Sehr gut!";
    loseText2.innerText = " Du bist auf dem richtigen Weg, fit für Fasching zu werden. Melde dich beim Fahnenträger Zillich für die nächste Singestunde an und zeig uns deine Skills.";
    loseScore.style.color = "rgb(247, 80, 3)";
}

function endUnder40(){
    loseText1.innerText = "Großartig, du rockst!!!";
    loseText2.innerText = "Trainiere weiter, du brauchst nicht mehr viel, um gegen den Endboss antreten zu dürfen. Melde dich beim Fahnenträger Zillich für die nächste Singestunde an und begeistere uns.";
    loseScore.style.color = "rgb(244, 120, 5)";
}

function endUnder50(){
    loseText1.innerText = "Atemberaubend!";
    loseText2.innerText = "Jetzt hast du es gleich geschafft. Ab Score 50 darfst du gegen den Endgegner antreten. Melde dich beim Fahnenträger Zillich für die nächste Singstunde an und bring uns zum Staunen.";
    loseScore.style.color = "rgb(241, 160, 7)";
}

function endover50(){
    loseText1.innerText = "Glückwunsch, so weit schaffen es nur die Wenigsten.";
    loseText2.innerText = "Du bist bereit, gegen den Endboss antreten zu dürfen. Melde dich beim Fahnenträger Zillich und vereinbare mit ihm ein Liederduell gegen den Kassierer Vincenz. Solltest du das Duell gegen ihn gewinnen, blühen dir Ruhm, Ehre und ein Strafenerlass. Solltest du aber verlieren, dann gnade dir Gott, was dann geschieht...  P.S.: Natürlich darfst du dich auch beim Fahnenträger Zillich für die nächste Singestunde anmelden.";
    loseScore.style.color = "rgb(238, 201, 9)"
}

function end(){
    loseDiv.style.visibility = "visible";
    loseDiv.style.transform = "translate(-50%, -50%) scale(1)";
    loseScore.innerText = score;
    if (score<10)
        {endUnder10();}
    else if (score>=10 && score<20)
        {endUnder20()}
    else if (score>=20 && score<30)
        {endUnder30()}
    else if (score>=30 && score<40)
        {endUnder40()}
    else if (score>=40 && score<50)
        {endUnder50()}
    else {endover50()}
    leftButton.onclick = 0;
    rightButton.onclick = 0;
    helpButton.onclick = 0;
}

//function der im String nach Fahnenträger Zillich und Kassierer Vincenz sucht und diesen dann gelb markiert

function x() {
    helptext.style.visibility = "hidden";
    helptext.style.transform = "translate(-50%, -50%) scale(0.1)";
    helptext.style.left= "15%"
    helptext.style.top= "15%"
    leftButton.onclick = delay;
    rightButton.onclick = Spicker; 
}

function x2() {
    SpickerDiv.style.visibility = "hidden";
    SpickerDiv.style.top = "85%";
    SpickerDiv.style.left = "72.5%";
    SpickerDiv.style.transform = "translate(-50%, -50%) scale(0.1)"
    leftButton.onclick = delay;
    rightButton.onclick = Spicker;
    if (health<=0){
        end();
    }
}

function tryAgain(){
    score = 0;
    scoreNumber.innerText = score;
    health = 3.0;
    health1.style.backgroundImage = "url(heart.PNG)"
    health2.style.backgroundImage = "url(heart.PNG)"
    health3.style.backgroundImage = "url(heart.PNG)"
    song = "";
    songNumber = 0;
    pressedSpicker= false;
    pressedPlay=false;
    leftButton.onclick = delay;
    rightButton.onclick = Spicker;
    helpButton.onclick = help;
    loseDiv.style.visibility = "hidden";
    loseDiv.style.transform = "translate(-50%, -50%) scale(0.1)";
    helptext.style.visibility = "hidden";
    SpickerDiv.style.visibility = "hidden";
    textScreen.innerText = "Lange Garde wollt ihr was singen?";
    leftButtonText.innerText = "Play"

}


function Start(){
    leftButton.onclick = delay;
    rightButton.onclick = Spicker;
    helpButton.onclick = help;
    startContainer.style.visibility = "hidden"
}




function nein() {}





