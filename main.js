// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const modalTag = document.querySelector("#modal")
const modalMessage = document.querySelector("#modal-message")
const likeButtons = document.getElementsByClassName("like-glyph");

// console.log(modalTag);

// Your JavaScript code goes here!
function handleLike(e) {
  mimicServerCall()
  .then(like => {
    console.log(e.target);
    if (e.target.textContent === EMPTY_HEART) {
      e.target.textContent = FULL_HEART
      e.target.className = "like-glyph activated-heart"
    } else {
      e.target.textContent = EMPTY_HEART;
      e.target.className = "like-glyph";
    }
  }).catch(error => {
    console.log(error);
    modalTag.className = "unhidden";
    modalMessage.textContent = `${error}`;
    setTimeout(() => { modalTag.className = "hidden" }, 3000);
  })
}

// likeButton.addEventListener("click", handleLike);
// likeButtons.forEach(el => el.addEventListener("click", handleLike));

// I had it working for the first one and realized that querySelector
// only returns the first instance. I thought "Oh, easy fix. Just 
// get all the elements by classname and add an event listener"
// NOPE! Finally got it.

for (let j = 0; j < likeButtons.length; j++) {
  likeButtons[j].addEventListener("click", handleLike);
}






//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
