
// Get the container and heading elements
let container = document.getElementById("my-container");
let heading = document.getElementById("my-heading");

// Define an array of colors to cycle through
let colors = ["crimson", "rgb(235, 33, 134)", "#ffc600", " lawngreen", "mediumorchid"];

// Set an initial color
let colorIndex = 0;
heading.style.color = colors[colorIndex];

// Use setInterval to change the color every 3 seconds
setInterval(function() {
  // Increment the color index
  colorIndex = (colorIndex + 1) % colors.length;
  
  // Update the heading color
  heading.style.color = colors[colorIndex];
}, 1500);

const aKey = document.querySelector('.aKey');
const sKey = document.querySelector('.sKey');
const dKey = document.querySelector('.dKey');
const fKey = document.querySelector('.fKey');
const gKey = document.querySelector('.gKey');
const hKey = document.querySelector('.hKey');
const jKey = document.querySelector('.jKey');
const kKey = document.querySelector('.kKey');
const lKey = document.querySelector('.lKey')
var audioOne = document.querySelector('#audio1');
var audio2 = document.querySelector('#audio2');
var audio3 = document.querySelector('#audio3');
var audio4 = document.querySelector('#audio4');
var audio5 = document.querySelector('#audio5');
var audio6 = document.querySelector('#audio6');
var audio7 = document.querySelector('#audio7');
var audio8 = document.querySelector('#audio8');
var audio9 = document.querySelector('#audio9');




document.addEventListener('keydown', function(event) {

if( event.code === "KeyA"){


aKey.classList.add("playing")
audioOne.play();
}
else if (event.code === "KeyS"){

sKey.classList.add("playing")
audio2.play();
}
else if ( event.code === "KeyD" ){


    dKey.classList.add("playing");
    audio3.play(); 
}
else if ( event.code === "KeyF" ){

fKey.classList.add("playing");
audio4.play();
}

else if ( event.code === "KeyG" ){

    gKey.classList.add("playing");
    audio5.play();
}
else if ( event.code === "KeyH" ){

    hKey.classList.add("playing");
    audio6.play();
}
else if ( event.code === "KeyJ" ){

    jKey.classList.add("playing");
    audio7.play();
}
else if ( event.code === "KeyK" ){

    kKey.classList.add("playing");
    audio8.play();
}
else if ( event.code === "KeyL" ){

    lKey.classList.add("playing");
    audio9.play();
}






})


document.addEventListener('keyup', function (event){

if(event.code === "KeyA"){

aKey.classList.remove("playing");

}
else if ( event.code === "KeyS"){

sKey.classList.remove("playing");

}
else if ( event.code === "KeyD" ){

dKey.classList.remove("playing");

}
else if ( event.code === "KeyF" ){

    fKey.classList.remove("playing")
    
    }
    else if ( event.code === "KeyG" ){

        gKey.classList.remove("playing");
    }
    else if ( event.code === "KeyH" ){

        hKey.classList.remove("playing");
      
    }
    else if ( event.code === "KeyJ" ){

        jKey.classList.remove("playing");
     
    }
    else if ( event.code === "KeyK" ){

        kKey.classList.remove("playing");
    
    }
    else if ( event.code === "KeyL" ){

        lKey.classList.remove("playing");
        
    }

    
    
    
        
        
        








})