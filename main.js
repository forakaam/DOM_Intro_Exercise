//1.
document.getElementById('greeting').innerText = "Hello, World!";
//2.
var li = document.getElementsByTagName('li');
for (var i = 0; i < li.length; i++) {
  li[i].style.backgroundColor = "yellow";
}
//3.
var img = document.createElement("img");
img.src ="http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif";
greeting.appendChild(img);

//1.
function selector (event) {
  for (var i =0; i < li.length; i++) {
    li[i].classList.remove("selected");
  }
  event.target.className="selected";
}

for (var i =0; i < li.length; i++) {
 li[i].addEventListener("click", selector);
}


//2.
var img2 = document.getElementsByTagName("img")[1];
function imgsrc (event) {
      if (event.target === li[0]) {
        img2.src = "./images/milk.jpeg";
      }
      else if (event.target === li[1]) {
        img2.src = "./images/honey.jpeg";   
      }
      else if (event.target === li[2]) {
        img2.src = "./images/water.jpeg";
      }
      else if (event.target === li[3]) {
        img2.src = "./images/wine.jpeg";
      }
      else {
        img2.src = "./images/beer.jpeg";
      }
}

for (var i =0; i < li.length; i++) {
 li[i].addEventListener("click", imgsrc);
}
//3.
var ghost = document.getElementById("ghosting");
ghost.addEventListener("mouseover", function() {
  ghost.style.display = "none";
});

//4.
var swellDiv = document.getElementById("resize");
swellDiv.addEventListener("mouseover", function() {
  swellDiv.style.width = "400px";
});

swellDiv.addEventListener("mouseleave", function() {
  swellDiv.style.width = "200px";
});

//5.
var button = document.getElementById("reset");
button.addEventListener("click", function(){
    for (var i =0; i < li.length; i++) {
    li[i].classList.remove("selected");
  }
  img.src="./images/panic.jpeg";
});


//6.
function checkNumbers(event) {
  if (event.keyCode > 47 && event.keyCode < 58) {
    alert("I HATE NUMBERZZZ!");
  }
}
addEventListener("keydown", checkNumbers, false);


//BONUS: There must be a better way 
var keys =[];
function konamiCode (event) {
  keys.push(event.keyCode);
  for (var i =0; i <keys.length; i++) {
    if (keys[i] === 65) {
      if (keys[i-1] === 66) {
        if (keys[i-2] ===39) {
          if (keys[i-3] === 37) {
            if (keys[i-4] ===39) {
              if (keys[i-5] ===37) {
                if (keys[i-6] ===40) {
                  if( keys[i-7] === 40) {
                    if (keys[i-8] ===38) {
                      if (keys[i-9] ===38) {
                        alert("YOU ARE AN EVENT HANDLER GURUUUUUUUUU!");
                        keys =[];
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
addEventListener("keydown", konamiCode, false);