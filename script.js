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
//Gif implementation. I implemented a img/gif switch when a button is clicked. 
// I researched this topic from https://stackoverflow.com/questions/1977557/jquery-fade-to-new-image


//Method #1 & 2 Showcase: Fadeout and Delay


/* .delay() :

pauses the animation queue for a set amount of time before the next animation in the chain runs. 
In gifPlay, .delay(2880) waits 2880 milliseconds (the length of gif that I want to play on the browser) 
so the amount of gif I want plays before the fade starts. Each gif function uses a delay that I feel shows the amount of gif
that I want to show(The exercise gif is extremely long without the delay)

*/


/*.fadeOut():

lowers an element's opacity until it is invisible then hides it (display: none)

-duration (200) is how long the fade takes in milliseconds
-callback (function(){...}) is code that runs only after the fade finishes

In gifPlay, .fadeOut(200, ...) fades the gif away once the delay is over.  The callback then swaps the image back to pet.webp,
then uses .show() to make it visible again and sets gifPlaying to false so the next click can play a gif.


*/

/* In practice,  $('.pet-image').delay(2880).fadeOut(200, function(){...})
waits for the gif to finish, fades it out, then swaps back to the normal Godzilla image */


//https://api.jquery.com/fadeOut/#fadeOut-duration-complete
//https://api.jquery.com/delay/#delay-duration-queueName
//https://stackoverflow.com/questions/19831319/restart-a-gif-animation-without-reloading-the-file




var gifPlaying = false; //checks if the gif is playing

function gifPlay() {


  if (gifPlaying) return; //if the gif is playing, let it finish. There is no restart

  gifPlaying = true; //says to the compiler that the gif is playing

  $('.pet-image').attr('src', 'images/godzillaeating.gif' + '?' + Date.now()); //sets the gif again 
  $('.pet-image').delay(2880).fadeOut(200, function () { //waits for the gif to finish, then fades it out

    $(this).attr('src', 'images/pet.webp'); //swaps back to the pet image

    $(this).show(); //sends back the image to the browser

    gifPlaying = false; //gif finished, so the next click can play it


  });

}



//Gif for play 

gifPlaying = false; //checks if the gif is playing

function gifPlay_play() {


  if (gifPlaying) return; //if the gif is playing, let it finish. There is no restart

  gifPlaying = true; //says to the compiler that the gif is playing

  $('.pet-image').attr('src', 'images/dance-godzilla.gif' + '?' + Date.now()); //sets the gif again 
  $('.pet-image').delay(2880).fadeOut(200, function () { //waits for the gif to finish, then fades it out

    $(this).attr('src', 'images/pet.webp'); //swaps back to the pet image

    $(this).show(); //sends back the image to the browser

    gifPlaying = false; //gif finished, so the next click can play it


  });

}



//exercise gif


gifPlaying = false; //checks if the gif is playing

function gifPlay_exercise() {


  if (gifPlaying) return; //if the gif is playing, let it finish. There is no restart

  gifPlaying = true; //says to the compiler that the gif is playing

  $('.pet-image').attr('src', 'images/exercise.gif' + '?' + Date.now()); //sets the gif again 
  $('.pet-image').delay(4000).fadeOut(200, function () { //waits for the gif to finish, then fades it out




    $(this).attr('src', 'images/pet.webp'); //swaps back to the pet image

    $(this).show(); //sends back the image to the browser

    gifPlaying = false; //gif finished, so the next click can play it

  });

}


//forth button gif

gifPlaying = false; //checks if the gif is playing

function gifPlay_atomic() {


  if (gifPlaying) return; //if the gif is playing, let it finish. There is no restart

  gifPlaying = true; //says to the compiler that the gif is playing

  $('.pet-image').attr('src', 'images/atomicb.gif' + '?' + Date.now()); //sets the gif again 
  $('.pet-image').delay(2000).fadeOut(200, function () { //waits for the gif to finish, then fades it out




    $(this).attr('src', 'images/pet.webp'); //swaps back to the pet image

    $(this).show(); //sends back the image to the browser

    gifPlaying = false; //gif finished, so the next click can play it


  });

}


//--------------------------------------------------------------------------------------------------------------------------------------

/*

GODZILLA COMMENTS ARRAY & RANDOMIZER SECTION

This section declares arrays with comments for each array. Attached will be a "randomizer" that will randomly pick a comment from each button set. 

Array selector researched from https://www.programiz.com/javascript/examples/get-random-item
Randomizer researched from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
Math floor https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor 
*/


var tComments = ["Yummy! I love buildings!", "A piece of Ghidorah, YUM!", "Wait a minute... this had vegetables", "This Tokyo roll was amazing!"];
var pComments = ["I wonder if Minilla wants to play with me", "How far can I throw this car?", "look at my silly dance!", "I should attack japan again..."];
var eComments = ["3 million and one push up..... 3 million and 2..", "I gotta get stronger than King Kong...", "a light 3 swims around the world for today", "I hope I can spar with Jet Jaguar today"];
var cComment = ["Charging Atomic Breath ROOOOAR"]; // no selection for this var
var fComments = ["ROOOOOOOOOOOOOOOOOOOAAAAAAR *BLAST*", "BOOOOOOOOOOOOOOOOOOOOOOOOOM", "*VAPORIZES EVERYTHING*", "FOOOOOOOOOOOOOOOOOOOOSH"];


//Math
function petComment(comment) { /*function occurs when ran in section function. comment is a parameter for the specific message array that will be played.
 
like petComment(tcomment) */

  var randomNumber = Math.floor(Math.random() * comment.length);

  /* declares randomNumber to be equal to mathfloor
  , which rounds down the math inside the parentheses. By rounding down, the math can equal 
  a comment location in the comment arrays, running the comment on the html side. 
  
  indepth: Math.random gives a random decimal from 0 up to 1(not including 1), it is then multiplied by the amount of comments in the array (.length),
  Math.floor rounds that number (lets say 2.3) down so it is 2. randomNumber = 2. The compiler then looks at the array and grabs array comment[2]
  and outputs it */

  $('.pet-message').text('Godzilla: "' + comment[randomNumber] + '"');

}

//comment[randomNumber] is really array position 2, which then outputs comment [2] from the array it is running (like tcomment)

//-------------------------------------------------------------------------------------------------------------------------------------------

// Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
var pet_info = { name: "Godzilla", weight: 164, happiness: 50, charge: 0 }; // changed from string to number

function clickedTreatButton() {
  // Increase pet happiness
  // Increase pet weight

  pet_info.happiness += 2;
  pet_info.weight += 3;


  gifPlay(); //calls the gif function 
  petComment(tComments); //runs the petcomment function with tComments, so the compiler uses tComments array when it calculates using my selector formula
  // outputs a random godzilla comment from the specific array. 
  checkAndUpdatePetInfoInHtml(); //updates godzillas stats on the html side. 
}

function clickedPlayButton() {
  // Increase pet happiness
  // Decrease pet weight

  pet_info.happiness += 5;
  pet_info.weight += -3;

  gifPlay_play();
  petComment(pComments);
  checkAndUpdatePetInfoInHtml();
}

function clickedExerciseButton() {
  // Decrease pet happiness
  // Decrease pet weight

  pet_info.happiness += -3;
  pet_info.weight += -6;

  gifPlay_exercise();
  petComment(eComments);
  checkAndUpdatePetInfoInHtml();
}



function clickedchargedButton() {

  pet_info.charge += 10; //increments charge by 10 


  if (pet_info.charge >= 100) {
    pet_info.charge = 100;
    $('.fire-button').show();

    //if statement: If godzilla's charge is above or equal to 100, cap the charge at 100, then show a hidden button

  }

  petComment(cComment);
  checkAndUpdatePetInfoInHtml();

}


function clickedfireButton() { //function for the hidden charge/fire button

  gifPlay_atomic(); //plays gif when clicked

  pet_info.charge = 0; //resets godzillas charge to 0 internally and on the html side

  $('.fire-button').hide();  //hides the fire button(so it cannot be clicked until 100% charge)

  updatePetInfoInHtml(); //updates html 

  petComment(fComments); //plays a random comment. 


}



function checkAndUpdatePetInfoInHtml() {
  checkWeightAndHappinessBeforeUpdating();
  updatePetInfoInHtml();
}

function checkWeightAndHappinessBeforeUpdating() {

  if (pet_info.weight <= 0) { // if weight is below or equal to 0, cap the counter at 0. 
    pet_info.weight = 0;

  }

  if (pet_info.happiness <= 0) { // if happiness is below or equal to 0, cap the counter at 0. 
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

