
                                    // Method1-->
// var random1 = Math.random();
// random1 = Math.floor(random1*6)+1;


// if(random1===1){
//     document.querySelector(".img1").setAttribute("src","images/dice1.png");
// }

// else if(random1===2){
//     document.querySelector(".img1").setAttribute("src","images/dice2.png");
// }

// else if(random1===3){
//     document.querySelector(".img1").setAttribute("src","images/dice3.png");
// }

// else if(random1===4){
//     document.querySelector(".img1").setAttribute("src","images/dice4.png");
// }

// else if(random1===5){
//     document.querySelector(".img1").setAttribute("src","images/dice5.png");
// }

// else if(random1===6){
//     document.querySelector(".img1").setAttribute("src","images/dice6.png");
// }

// var random2 = Math.random();
// random2 = Math.floor(random2*6)+1;

// if(random2===1){
//     document.querySelector(".img2").setAttribute("src","images/dice1.png");
// }

// else if(random2===2){
//     document.querySelector(".img2").setAttribute("src","images/dice2.png");
// }

// else if(random2===3){
//     document.querySelector(".img2").setAttribute("src","images/dice3.png");
// }

// else if(random2===4){
//     document.querySelector(".img2").setAttribute("src","images/dice4.png");
// }

// else if(random2===5){
//     document.querySelector(".img2").setAttribute("src","images/dice5.png");
// }

// else if(random2===6){
//     document.querySelector(".img2").setAttribute("src","images/dice6.png");
// }

                                     // Method2-->

var random1 = Math.random();
random1 = Math.floor(random1*6)+1;

var randomImage = "dice" + random1 + ".png";
var randomImageSource = "images/" + randomImage ;
document.querySelector(".img1").setAttribute("src", randomImageSource)


var random2 = Math.random();
random2 = Math.floor(random2*6)+1;

var randomImage2 = "dice" + random2 + ".png";
var randomImageSource2 = "images/" + randomImage2 ;
document.querySelector(".img2").setAttribute("src", randomImageSource2)


if(random1===random2){
    document.querySelector("h1").innerHTML="Draw"
}

else if(random1>random2){
    document.querySelector("h1").innerHTML="Player 1 wins";
}

else{
    document.querySelector("h1").innerHTML="Player 2 wins";
}