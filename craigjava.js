function dropclick() {
    document.getElementById('craigdrop').classList.toggle('show');
}

window.onclick = function(e) {
    if
    (!e.target.matches('.dropbtn')) {
        var craigdrop = 
    document.getElementById('craigdrop');
        if
    (craigdrop.classList.contains('show')) {
        craigdrop.classList.remove('show');
        }
    }
}

/*boone
#241571
campbell
#051094
kenton
#2832C2*/

const navstyle = document.querySelector(".craignav")
const headerstyle = document.querySelector(".tableheader1")
const newcounty = document.getElementById("currentcounty")

/*links for the posts KEEP IN ORDER*/

const link1 = document.getElementById("link1")
const link2 = document.getElementById("link2")
const link3 = document.getElementById("link3")
const link4 = document.getElementById("link4")
const link5 = document.getElementById("link5")
const link6 = document.getElementById("link6")
const link7 = document.getElementById("link7")
const link8 = document.getElementById("link8")
const link9 = document.getElementById("link9")

function boonecommunity() {
    navstyle.style.backgroundColor = "#241571";
    navstyle.style.color = "white";
    newcounty.innerHTML = "Boone";
    headerstyle.style.backgroundColor = "#241571";
}

function boonetable() {
    link1.innerHTML = "loking 4 lady in rd dres";
    link2.innerHTML = "Costo dog food isle green shirt guy";
    link3.innerHTML = "Walmart employee with cute ponytail!";
    link4.innerHTML = "Gregory from Tractor Supply Co.";
    link5.innerHTML = "Woman in the blu sweatpans";
    link6.innerHTML = "looking for dogwalker from neighborhood";
    link7.innerHTML = "Golden Retriever owner looking for German Shepard friend";
    link8.innerHTML = "Freind went mising, ghosted me, now im asd :{";
    link9.innerHTML = "looking for ghost hunting buddy!!!";
}


function campbellcommunity() {
    navstyle.style.backgroundColor = "#051094";
    navstyle.style.color = "white";
    newcounty.innerHTML = "Campbell";
    headerstyle.style.backgroundColor = "#051094";
}

function campbelltable() {
    link1.innerHTML = "Missing girlfriend, hasn't texted back in a while...";
    link2.innerHTML = "Wanna hang out? Come over to my house!";
    link3.innerHTML = "Where is the brunette from the local starbucks?";
    link4.innerHTML = "Looking for Ralph from iHOP";
    link5.innerHTML = "Greta where r u?";
    link6.innerHTML = "Met a wonderful lady out on walk in park";
    link7.innerHTML = "Danielle i lost ur number!";
    link8.innerHTML = "Hey, marcus, we need to talk...";
    link9.innerHTML = "Wanting new friends!!! Please play DnD with me!";
}


function kentoncommunity() {
    navstyle.style.backgroundColor = "#2832c2";
    navstyle.style.color = "white";
    newcounty.innerHTML = "Kenton";
    headerstyle.style.backgroundColor = "#2832c2";
}

function kentontable() {
    link1.innerHTML = "Looking for a stephen smith on 5th street";
    link2.innerHTML = "Just saw a breakup, want to make sure ur okay Sarah";
    link3.innerHTML = "Texas car driver working at BWs, want to get to know you";
    link4.innerHTML = "i wnt ur phon numer stevvie";
    link5.innerHTML = "the dog walker that went by my hoiuse toaday";
    link6.innerHTML = "Micah I know where you live!";
    link7.innerHTML = "Dear mail man, Im sorry my dog bit you.";
    link8.innerHTML = "Need a new friend to play Destiny with!";
    link9.innerHTML = "Cute vampire I saw on Halloween, where are u?";
}