var randomNumber1=Math.floor(6*Math.random()+1);document.querySelector("img.img1").setAttribute("src","images/dice"+randomNumber1+".png");var randomNumber2=Math.floor(6*Math.random()+1);document.querySelector("img.img2").setAttribute("src","images/dice"+randomNumber2+".png"),randomNumber1>randomNumber2?document.querySelector("h1").innerHTML="\uD83D\uDEA9Player 1 Wins!":randomNumber1<randomNumber2?document.querySelector("h1").innerHTML="Player 2 Wins!\uD83D\uDEA9":document.querySelector("h1").innerHTML="Draw!";
