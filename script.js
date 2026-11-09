$(function () { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.

  // Called function to update the name, happiness, and weight of our pet in our HTML
  checkAndUpdatePetInfoInHtml();

  // When each button is clicked, it will "call" function for that button (functions are below)
  $('.treat-button').click(clickedTreatButton);
  $('.play-button').click(clickedPlayButton);
  $('.exercise-button').click(clickedExerciseButton);
  $('.charge-button').click(clickedChargedButton);

})


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

var gifPlaying = false; //checks if the gif is playing

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


var gifPlaying = false; //checks if the gif is playing

function gifPlay_exercise(gifPath){


  if(gifPlaying) return; //if the gif is playing, let it finish. There is no restart

  gifPlaying = true; //says to the complier that the gif is playing

  $('.pet-image').attr('src','images/exercise.gif'+ '?' + Date.now()); //sets the gif again 
  $('.pet-image').delay(5000).fadeOut(200,function(){ //waits for the gif to finish, then fades it out

    // extended the time delay for this gif..


    $(this).attr('src', 'images/pet.webp'); //swaps back to the pet image

    $(this).show(); //sends back the image to the browser

    gifPlaying = false; // check that says the gif is playing. The next click can restart it. 


  });

}


//forth button gif

var gifPlaying = false; //checks if the gif is playing

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





// Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
var pet_info = { name: "Godzilla", weight: 164, happiness: 50, charge: 0 }; // changed from string to number

function clickedTreatButton() {
  // Increase pet happiness
  // Increase pet weight

  pet_info.happiness += 2;
  pet_info.weight += 3;


  gifPlay('images/godzillaeating.gif');
  checkAndUpdatePetInfoInHtml();
}

function clickedPlayButton() {
  // Increase pet happiness
  // Decrease pet weight

   pet_info.happiness += 5; 
   pet_info.weight += -3 

  gifPlay_play('images/dance-godzilla.gif');
  checkAndUpdatePetInfoInHtml();
}

function clickedExerciseButton() {
  // Decrease pet happiness
  // Decrease pet weight

 pet_info.happiness += -3
 pet_info.weight += -6

  gifPlay_exercise('images/exercise.gif');
  checkAndUpdatePetInfoInHtml();
}



function clickedChargedButton(){

  pet_info.charge += 10

  //make 100 cap and stay at 100... when it hits 100 make a new button appear and when clicked it fires the beam and resets to 0
  

  if(pet_info.charge == 100){

  gifPlay_atomic('image/atomicb.gif');

  pet_info.charge = 0;

  }

  checkAndUpdatePetInfoInHtml();

}


function checkAndUpdatePetInfoInHtml() {
  checkWeightAndHappinessBeforeUpdating();
  updatePetInfoInHtml();
}

function checkWeightAndHappinessBeforeUpdating() {
  // Add conditional so if weight is lower than zero. //make not 0 
}

// Updates your HTML with the current values in your pet_info object
function updatePetInfoInHtml() {
  $('.name').text(pet_info['name']);
  $('.weight').text(pet_info['weight']);
  $('.happiness').text(pet_info['happiness']);
  $('.charge').text(pet_info['charge']);


}

