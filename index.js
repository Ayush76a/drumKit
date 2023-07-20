// addEventListener( eventType , Listener fn ) sets up a function to be called
// whenever the specified event is delivered to the target
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// for detecting mouse clicks
for (var i = 0; i < numberOfDrumButtons; i++) {
  //the all buttons are acting as the elements of arrays
  document.querySelectorAll("button")[i].addEventListener("click", function() {

    // this.innerHTML.style.color="black";
    //

    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(this.innerHTML);
  });
}

// not assigning listner to any class or element
//but to the entire webpage

//for detecting key pressses
document.addEventListener("keypress",function(event)
{
  makeSound(event.key);
  buttonAnimation(event.key);
});


function makeSound(key)
{
  switch (key) {
    case 'w':
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
        break;
    case 'a':
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
        break;
    case 's':
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
        break;
    case 'd':
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
        break;
    case 'j':
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
        break;
    case 'k':
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
        break;
    case 'l':
      var audio=new Audio("sounds/tom-3.mp3");
      audio.play();
      break;

    default:console.log(buttonInnerHTML);
  }
}

function buttonAnimation(currentKey)
{
 var activeButton=document.querySelector("." +currentKey);
 activeButton.classList.add("pressed");
 setTimeout(function ()
{
  activeButton.classList.remove("pressed");
},100);
}
// trigger this function if a button is clicked

// can also make an anonymous function as   fucntion with no name

//adding audip

// document.querySelectorAll("button")[0].addEventListener("click", play);
