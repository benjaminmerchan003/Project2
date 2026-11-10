$(function () { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.

  // Called function to update the name, happiness, and weight of our pet in our HTML
  checkAndUpdatePetInfoInHtml();

  // When each button is clicked, it will "call" function for that button (functions are below)
  $('.treat-button').click(clickedTreatButton);
  $('.play-button').click(clickedPlayButton);
  $('.exercise-button').click(clickedExerciseButton);
  $('.charge-button').click(clickedchargedButton);
  $('.fire-button').click(clickedfireButton);
})

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Gif implementation. I implemented a img/gif switch when a button is clicked. I researched this topic from https://stackoverflow.com/questions/1977557/jquery-fade-to-new-image
// I'm placing it here to then call in the function for treat button. 


//Method #1 Showcase: Fadeout and Delay


//https://api.jquery.com/fadeOut/#fadeOut-duration-complete
//https://api.jquery.com/delay/#delay-duration-queueName
//https://stackoverflow.com/questions/19831319/restart-a-gif-animation-without-reloading-the-file


//Added delay to prevent flickering after button spam 

var gifPlaying = false; //checks if the gif is playing

function gifPlay(gifPath){


  if(gifPlaying) return; //if the gif is playing, let it finish. There is no restart

  gifPlaying = true; //says to the complier that the gif is playing

  $('.pet-image').attr('src','images/godzillaeating.gif'+ '?' + Date.now()); //sets the gif again 
  $('.pet-image').delay(2880).fadeOut(200,function(){ //waits for the gif to finish, then fades it out

    $(this).attr('src', 'images/pet.webp'); //swaps back to the pet image

    $(this).show(); //sends back the image to the browser

    gifPlaying = false; // check that says the gif is playing. The next click can restart it. 


  });

}


//Gif for play 

gifPlaying = false; //checks if the gif is playing

function gifPlay_play (gifPath){


  if(gifPlaying) return; //if the gif is playing, let it finish. There is no restart

  gifPlaying = true; //says to the complier that the gif is playing

  $('.pet-image').attr('src','images/dance-godzilla.gif'+ '?' + Date.now()); //sets the gif again 
  $('.pet-image').delay(2880).fadeOut(200,function(){ //waits for the gif to finish, then fades it out

    $(this).attr('src', 'images/pet.webp'); //swaps back to the pet image

    $(this).show(); //sends back the image to the browser

    gifPlaying = false; // check that says the gif is playing. The next click can restart it. 


  });

}



//exercise gif


gifPlaying = false; //checks if the gif is playing

function gifPlay_exercise(gifPath){


  if(gifPlaying) return; //if the gif is playing, let it finish. There is no restart

  gifPlaying = true; //says to the complier that the gif is playing

  $('.pet-image').attr('src','images/exercise.gif'+ '?' + Date.now()); //sets the gif again 
  $('.pet-image').delay(4000).fadeOut(200,function(){ //waits for the gif to finish, then fades it out

    // extended the time delay for this gif..


    $(this).attr('src', 'images/pet.webp'); //swaps back to the pet image

    $(this).show(); //sends back the image to the browser

    gifPlaying = false; // check that says the gif is playing. The next click can restart it. 


  });

}


//forth button gif

 gifPlaying = false; //checks if the gif is playing

function gifPlay_atomic(gifPath){


  if(gifPlaying) return; //if the gif is playing, let it finish. There is no restart

  gifPlaying = true; //says to the complier that the gif is playing

  $('.pet-image').attr('src','images/atomicb.gif'+ '?' + Date.now()); //sets the gif again 
  $('.pet-image').delay(2000).fadeOut(200,function(){ //waits for the gif to finish, then fades it out

    // extended the time delay for this gif..


    $(this).attr('src', 'images/pet.webp'); //swaps back to the pet image

    $(this).show(); //sends back the image to the browser

    gifPlaying = false; // check that says the gif is playing. The next click can restart it. 


  });

}


//--------------------------------------------------------------------------------------------------------------------------------------

/*

GODZILLA COMMENTS ARRAY & RANDOMIZER SECTION

This section declares arrays with comments for each array. Attached will be a "randomizer" that will randomly pick a comment from each button set. 

Randomizer researched from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

*/ 


var tComments = ["Yummy! I love buildings!", "A piece of Ghidorah, YUM!", "Wait a minute... this had vegetables","This Tokyo roll was amazing!"]; 
var pComments = ["I wonder if Minilla wants to play with me", "How far can I throw this car?", "look at my silly dance!", "I should attack japan again..."];
var eComments = ["3 million and one push up..... 3 million and 2..", "I gotta get stronger than King Kong...", "a light 3 swims around the world for today", "I hope I can spar with Jet Jaguar today"];
var cComment = ["Charging Atomic Breath ROOOOAR"]; // no selection for this var
var fComments =  ["ROOOOOOOOOOOOOOOOOOOAAAAAAR *BLAST*", "BOOOOOOOOOOOOOOOOOOOOOOOOOM", "*VAPORIZES EVERYTHING*", "FOOOOOOOOOOOOOOOOOOOOSH"]; 



function petComment(comment)  {
var randomNumber = Math.floor(Math.random() * comment.length);

$('.pet-message').text('Godzilla: "' + comment[randomNumber] + '"'); 

}


//-------------------------------------------------------------------------------------------------------------------------------------------

// Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
var pet_info = { name: "Godzilla", weight: 164, happiness: 50, charge: 0 }; // changed from string to number

function clickedTreatButton() {
  // Increase pet happiness
  // Increase pet weight

  pet_info.happiness += 2;
  pet_info.weight += 3;


  gifPlay('images/godzillaeating.gif');
  petComment(tComments); 
  checkAndUpdatePetInfoInHtml();
}

function clickedPlayButton() {
  // Increase pet happiness
  // Decrease pet weight

   pet_info.happiness += 5; 
   pet_info.weight += -3;

  gifPlay_play('images/dance-godzilla.gif');
  petComment(pComments); 
  checkAndUpdatePetInfoInHtml();
}

function clickedExerciseButton() {
  // Decrease pet happiness
  // Decrease pet weight

 pet_info.happiness += -3;
 pet_info.weight += -6;

  gifPlay_exercise('images/exercise.gif');
  petComment(eComments); 
  checkAndUpdatePetInfoInHtml();
}



function clickedchargedButton(){

  pet_info.charge += 10;
   
  //make 100 cap and stay at 100... when it hits 100 make a new button appear and when clicked it fires the beam and resets to 0

  if(pet_info.charge >= 100){
    pet_info.charge = 100;
    $('.fire-button').show(); 

  }

  petComment(cComment); 
  checkAndUpdatePetInfoInHtml();

}


function clickedfireButton() {
 
 gifPlay_atomic('images/atomicb.gif'); 

 pet_info.charge = 0; 

 $('.fire-button').hide(); 

 updatePetInfoInHtml();

petComment(fComments); 

 
}



function checkAndUpdatePetInfoInHtml() {
  checkWeightAndHappinessBeforeUpdating();
  updatePetInfoInHtml();
}

function checkWeightAndHappinessBeforeUpdating() {
 
if(pet_info.weight <= 0){
    pet_info.weight = 0;

}

if(pet_info.happiness <= 0){
    pet_info.happiness = 0; 


}


}

// Updates your HTML with the current values in your pet_info object
function updatePetInfoInHtml() {
  $('.name').text(pet_info['name']);
  $('.weight').text(pet_info['weight']);
  $('.happiness').text(pet_info['happiness']);
  $('.charge').text(pet_info['charge']);
  

}

