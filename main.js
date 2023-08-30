// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likeGlyphs = document.getElementsByClassName('like-glyph');

Array.from(likeGlyphs).map((likeGlyph) => (likeGlyph.addEventListener('click', () => {
  if (likeGlyph.classList.contains('activated-heart')) {
    likeGlyph.textContent = EMPTY_HEART;
    likeGlyph.classList.remove('activated-heart');
  } else {
    mimicServerCall()
      .then((res) => {
        likeGlyph.textContent = FULL_HEART;
        likeGlyph.classList.add('activated-heart');
      })
      .catch(error => {
        const element = document.getElementById('modal');
        element.classList.remove('hidden');
        document.getElementById("modal-message").textContent = error;
        setTimeout(() => { element.classList.add('hidden') }, 3000)
      })

  }


})))



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
