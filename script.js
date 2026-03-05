function analyzeRepo() {

document.getElementById("score").innerText = "Analyzing...";
document.getElementById("verifyBtn").style.display = "none";

setTimeout(function(){

let codeQuality = Math.floor(Math.random() * 30) + 70;
let architecture = Math.floor(Math.random() * 30) + 65;
let documentation = Math.floor(Math.random() * 30) + 60;

let skillScore = Math.floor((codeQuality + architecture + documentation)/3);

document.getElementById("codeQuality").innerText = codeQuality;
document.getElementById("architecture").innerText = architecture;
document.getElementById("documentation").innerText = documentation;
document.getElementById("score").innerText = skillScore;

document.getElementById("verifyBtn").style.display = "block";

},2000);

}

function verify(){
alert("Skill Credential Verified on Base (Demo)");
}