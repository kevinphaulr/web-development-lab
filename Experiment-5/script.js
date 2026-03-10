let time=10;

let timer=setInterval(function(){

document.getElementById("timer").innerHTML=time;

if(time==5){
alert("Only 5 seconds remaining!");
}

if(time==0){
clearInterval(timer);
submitQuiz();
}

time--;

},1000);


function submitQuiz(){

let score=0;

let answer=document.querySelector('input[name="q1"]:checked');

if(answer && answer.value=="correct"){
score++;
}

document.getElementById("score").innerHTML="Score: "+score;

}